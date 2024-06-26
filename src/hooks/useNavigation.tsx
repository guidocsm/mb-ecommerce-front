import { PARAMS } from "@/utils/constants"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export const useNavigation = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const params = new URLSearchParams(searchParams)
  const router = useRouter()
  const hasParamsUrl = params.size > 0

  const navigateTo = (route: string): void => {
    router.push(`${route}?${params.toString()}`)
  }

  const synchronizeParamToUrl = (scroll: boolean = false): void => {
    router.replace(`${pathname}?${params.toString()}`, { scroll })
  }

  const getParam = (param: string): string | undefined => {
    return params.get(param)?.toString()
  }

  const setParam = (param: string, value: string): void => {
    params.set(param, value)
  }

  const deleteParam = (param: string): void => {
    params.delete(param)
  }

  const resetParams = (): void => {
    deleteParam(PARAMS.ADDRESS)
    deleteParam(PARAMS.STORE)
    deleteParam(PARAMS.ORDER_TIME)
    deleteParam(PARAMS.ORDER_DAY)

    router.replace(`${pathname}?${params.toString()}`)
  }

  return {
    params,
    hasParamsUrl,
    navigateTo,
    synchronizeParamToUrl,
    resetParams,
    getParam,
    setParam,
    deleteParam,
  }
}