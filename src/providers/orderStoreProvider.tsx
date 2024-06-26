import { useStore } from 'zustand'
import { createOrderStore } from '@/store/orderStore'
import { createContext, useContext, useRef } from 'react'
import { type OrderQualificationType } from '@/types/qualificationOrder'

export type OrderStoreApi = ReturnType<typeof createOrderStore>

export const OrderStoreContext = createContext<OrderStoreApi | undefined>(undefined)

export const OrderProvider = ({ 
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  const storeRef = useRef<OrderStoreApi>()

  if (!storeRef.current) {
    storeRef.current = createOrderStore()
  }

  return (
    <OrderStoreContext.Provider
      value={storeRef.current}
    >
      {children}
    </OrderStoreContext.Provider>
  )
}

export const useOrderStore = <T,>(
  selector: (store: OrderQualificationType) => T,
): T => {
  const orderStoreContext = useContext(OrderStoreContext)

  if (!orderStoreContext) {
    throw new Error(`useOrderStore must be used within OrderStoreProvider`)
  }

  return useStore(orderStoreContext, selector)
}