'use client';

import { Button } from '@/components/common/Button';
import { QualificationHeader } from '@/components/qualification/QualificationHeader';
import { ShippingMethodForm } from '@/components/qualification/ShippingMethodForm';
import { useOrderStore } from '@/providers/orderStoreProvider';
import { LocationIcon, SearchIcon } from '../../../public/icons/Icons';
import { SHIPPING_METHOD, PARAMS } from '@/utils/constants';
import { useEffect, useState } from 'react';
import { DeliveryFlow } from '@/components/qualification/DeliveryFlow';
import { TakeawayFlow } from '@/components/qualification/TakeawayFlow';
import { ScheduleOrderChoose } from '@/components/qualification/ScheduleOrderChoose';
import { fetchStores } from '@/services/fetch/fetchStores';
import { Loader } from '@/components/common/Loader';
import { Store } from '@/types/qualificationOrder';
import { ROUTES } from '@/routes/routes';
import { useNavigation } from '@/hooks/useNavigation';

export default function QualificationOrderPage() {
  const [stores, setStores] = useState<Store[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const { 
    hasParamsUrl, 
    getParam, 
    navigateTo, 
    synchronizeParamToUrl, 
    setParam,
    deleteParam
  } = useNavigation()

  const {  shippingMethod } = useOrderStore(state => state)  

  useEffect(() => {
    if (getParam(PARAMS.ADDRESS)) {
      doSearch()
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  const doSearch = async () => {
    if (getParam(PARAMS.ADDRESS)) {
      setIsLoading(true)
      const data: Store[] = await fetchStores()
      setStores(data)
      setIsLoading(false)
    }
  }

  const canContinueOrder = () => {
    if (!hasParamsUrl && shippingMethod.length === 0) {
      return false
    }

    if (hasParamsUrl && (!getParam(PARAMS.ADDRESS) || !getParam(PARAMS.STORE))) {
      return false
    }

    if (hasParamsUrl && (!getParam(PARAMS.ORDER_TIME) && getParam(PARAMS.ORDER_TIME)?.length === 0) || !getParam(PARAMS.ORDER_DAY) && getParam(PARAMS.ORDER_DAY)?.length === 0) {
      return false
    }

    return true
  }

  const handleAddress = (value: string) => {
    value.length > 0 
      ? setParam(PARAMS.ADDRESS, value)
      : deleteParam(PARAMS.ADDRESS)

    synchronizeParamToUrl()
  }

  const handleContinueOrder = () => {
    if (hasParamsUrl) {
      
    } else {
      setParam(PARAMS.SHIPPING_METHOD, shippingMethod)
      navigateTo(ROUTES.LOGIN_OR_GUEST)
    }
  }

  const qualificationTitle: string = hasParamsUrl ? 'Completa los datos de tu entrega' : '¿Cómo te gustaría hacer tu pedido?'
  const continueBtnLabel: string = hasParamsUrl ? 'Comenzar pedido' : 'Continuar'
  
  return (
    <>
      <QualificationHeader text={qualificationTitle} />
      <ShippingMethodForm doSearch={doSearch} />
      {hasParamsUrl &&
        <div className="searcher-container">
          <div className="searcher-container__input">
            <input
              type="text"
              placeholder="Escribe tu dirección"
              onChange={(({ target }) => handleAddress(target.value))}
              value={getParam(PARAMS.ADDRESS)}
            />
            <div onClick={doSearch} className="searcher-container__input--searcher-icon">
              <SearchIcon />
            </div>
          </div>
          <div className="searcher-container__user-location">
            <LocationIcon />
            <span>Buscar cerca de mí</span>
          </div>
        </div>
      }
      {isLoading
        ? <div className="loader-container-qualification">
              <Loader />
          </div>
        : <>
            {stores.length > 0 && 
              <>
                {getParam(PARAMS.SHIPPING_METHOD) === SHIPPING_METHOD.DELIVERY 
                  ? <DeliveryFlow store={stores[0]} /> 
                  : <TakeawayFlow stores={stores} /> 
                }
                <ScheduleOrderChoose />
              </>
            }
            <div className="qualification-container__continue-btn">
              <Button
                text={continueBtnLabel}
                disabled={!canContinueOrder()}
                onClick={handleContinueOrder}
              />
            </div>
          </>         
      }
    </>
  )
}