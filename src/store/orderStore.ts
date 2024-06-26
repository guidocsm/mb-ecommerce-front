import { QualificationOrder, ReceiveOrderTime, type OrderQualificationType, Store, type OrderType } from '@/types/qualificationOrder'
import { ORDER_TIME } from '@/utils/constants'
import { createStore } from 'zustand'

const lsItems = {
  address: localStorage.getItem('address'),
  shippingMethod: localStorage.getItem('shippingMethod'),
  receiveOrderTime: localStorage.getItem('receiveOrderTime'),
  store: localStorage.getItem('store'),
}

const receiveOrderTime: ReceiveOrderTime = {
  day: '',
  hour: ''
}

export const defaultOrderState: QualificationOrder = {
  address: lsItems.address ? JSON.parse(lsItems.address) : '',
  shippingMethod: lsItems.shippingMethod ? JSON.parse(lsItems.shippingMethod) : '',
  receiveOrderTime: lsItems.receiveOrderTime ? JSON.parse(lsItems.receiveOrderTime) : receiveOrderTime,
  receiveOrderType: ORDER_TIME.ASAP,
  store: lsItems.store ? JSON.parse(lsItems.store) : null,
}

export const createOrderStore = (initialState: QualificationOrder = defaultOrderState) => {
  return createStore<OrderQualificationType>()((set) => ({
    ...initialState,
    setShippingMethod: (method: OrderType) => set(() => ({ shippingMethod: method })),
    setReceiveOrderType: (type: string) => set(() => ({ receiveOrderType: type })),
    setReceiveOrderTime: (item: ReceiveOrderTime | null) => set(() => ({ receiveOrderTime: item })),
    setAddress: (address: string) => set(() => ({ address })),
    setStore: (store: Store) => set(() => ({ store }))
  }))
}