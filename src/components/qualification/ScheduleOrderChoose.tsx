import { ORDER_TIME, PARAMS } from "@/utils/constants"
import { ScheduleOrderForm } from "./ScheduleOrderForm"
import { useOrderStore } from "@/providers/orderStoreProvider"
import { RadioField } from "../common/RadioField"
import { useNavigation } from "@/hooks/useNavigation"

export const ScheduleOrderChoose = () => {
  const { getParam, setParam, deleteParam, synchronizeParamToUrl } = useNavigation()
  const { 
    receiveOrderType,
    setReceiveOrderType,
    setReceiveOrderTime
  } = useOrderStore(state => state)

  const handleASAPMethod = () => {
    setReceiveOrderType(ORDER_TIME.ASAP)
    setReceiveOrderTime(null)
    deleteParam(PARAMS.ORDER_TIME)
    deleteParam(PARAMS.ORDER_DAY)
    synchronizeParamToUrl()
  }

  const handleScheduleMethod = () => {
    setReceiveOrderType(ORDER_TIME.SCHEDULE)
    setParam(PARAMS.ORDER_TIME, '')
    setParam(PARAMS.ORDER_DAY, '')

    synchronizeParamToUrl()
  }

  const hasOrderTime = getParam(PARAMS.ORDER_TIME)
  
  return (
    <div className="schedule-order">
      <span className="store-found__title">¿Cuándo quieres recibirlo?</span>
      <div className="schedule-order__options">
        <RadioField
          name={receiveOrderType}
          checked={hasOrderTime == undefined}
          onClick={handleASAPMethod}
        >
          <div className="custom-radio__label">
            <span>Lo antes posible</span>
            <span className="schedule-order__options--subvalue asap-time">Aproximadamente en 35 min</span>
          </div>
        </RadioField>
        <RadioField
          name={receiveOrderType}
          checked={hasOrderTime !== undefined}
          onClick={handleScheduleMethod}
        >
          <div className="custom-radio__label">
            <span>Programar pedido</span>
            <span className="schedule-order__options--subvalue">Elige cuando lo quieres</span>
          </div>
        </RadioField>
        {hasOrderTime !== null && <ScheduleOrderForm /> }
      </div>
    </div>
  )
}