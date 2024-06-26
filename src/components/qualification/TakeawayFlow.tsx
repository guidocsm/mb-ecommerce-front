
'use client'

import { useNavigation } from "@/hooks/useNavigation"
import { StoreCard } from "./StoreCard"
import { useOrderStore } from '@/providers/orderStoreProvider'
import { Store } from '@/types/qualificationOrder'
import { useEffect } from "react"
import { PARAMS } from "@/utils/constants"

interface Props {
  stores: Store[]
}

export const TakeawayFlow = ({ stores }: Props) => {
  const { store, setStore } = useOrderStore(state => state)
  const { setParam, synchronizeParamToUrl} = useNavigation()

  const handleSelectedStore = (selectedStore: Store) => {
    setStore(selectedStore)
    setParam(PARAMS.STORE, selectedStore?.id.toString())
    synchronizeParamToUrl()
  }

  useEffect(() => {
    setParam(PARAMS.STORE, stores[0]?.id.toString())
    synchronizeParamToUrl()
    setStore(stores[0])
  }, [])

  return (
    <>
      <div className="store-found">
        <span className="store-found__title">¿Dónde quieres recibirlo?</span>
        <p className="closest-store-label">Tu Manolo Bakes seleccionado:</p>
        {store && 
          <StoreCard
            name={store.name}
            address={store.address}
            phone={store.phone}
            schedule={store.schedule}
            activeCard
          />
        }
        <p className="closest-store-label">Selecciona otra tienda de recogida:</p>
        <div className="stores-list">
          {stores?.map((mappedStore, i) => (
            <div 
              key={mappedStore.id}
              className={`
                stores-list--item 
                ${mappedStore.id === store?.id ? 'stores-list--active' : 0}
              `} 
              onClick={() => handleSelectedStore(mappedStore)}
            >
              <span>{mappedStore.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}