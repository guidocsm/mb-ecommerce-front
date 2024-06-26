export interface QualificationOrder {
  address: string
  shippingMethod: string
  receiveOrderTime: ReceiveOrderTime | null
  receiveOrderType: string
  store: Store
}
export type OrderAddress = string
export type OrderShippingMethod = string
export type OrderTime = string
export type OrderType = string

export interface QualificationOrderActions {
  setShippingMethod: (method: OrderType) => void
  setReceiveOrderType: (type: string) => void
  setReceiveOrderTime: (item: ReceiveOrderTime | null) => void
  setAddress: (address: string) => void
  setStore: (store: Store) => void
}

export type OrderQualificationType = QualificationOrder & QualificationOrderActions

export interface Address {
  street: string
  postalCode: string
  city: string
}

export interface ReceiveOrderTime {
  day: string
  hour: string
}

export interface Store {
  id: number
  name: string
  address: string
  phone: number
  schedule: string
}
export type StoreId = number
export type StoreName = string
export type StoreAddress = string
export type StorePhone = number
export type StoreSchedule = string