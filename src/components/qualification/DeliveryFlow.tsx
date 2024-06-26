import { useNavigation } from "@/hooks/useNavigation"
import { StoreCard } from "./StoreCard"
import { useOrderStore } from '@/providers/orderStoreProvider'
import { Store } from '@/types/qualificationOrder'
import { useEffect } from "react"
import { PARAMS } from "@/utils/constants"

interface Props {
  store: Store
}

export const DeliveryFlow = ({ store }: Props) => {    
  const { name, address, phone, schedule } = store
  const { setStore } = useOrderStore(state => state)
  const { setParam, synchronizeParamToUrl } = useNavigation()

  useEffect(() => {
    if (store.id !== undefined) {
      setParam(PARAMS.STORE, store?.id.toString())
    }
    synchronizeParamToUrl()
    setStore(store)
  }, [])
  
  return (
    <>
      <div className="store-found">
        <p>Esta es la tienda que va a recibir tu pedido:</p>
        <StoreCard
          name={name}
          address={address}
          phone={phone}
          schedule={schedule}
        />
      </div>
    </>
  )
}