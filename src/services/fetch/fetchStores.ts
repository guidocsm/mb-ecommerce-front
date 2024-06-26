import stores from '@/mocks/takeaway-store.json'
import { Store } from '@/types/qualificationOrder'

export const fetchStores = (): Promise<Store[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(stores)
    }, 3000)
  })
}