import { useNavigation } from "@/hooks/useNavigation"
import { useOrderStore } from "@/providers/orderStoreProvider"
import { ReceiveOrderTime } from "@/types/qualificationOrder"
import { PARAMS } from "@/utils/constants"

export const ScheduleOrderForm = () => {
  const { receiveOrderTime, setReceiveOrderTime } = useOrderStore(state => state)
  const { getParam, setParam, synchronizeParamToUrl } = useNavigation()

  const setReceiveOrderDay = (value: string) => {
    const orderTime = {
      day: value,
      hour: receiveOrderTime?.hour ?? ''
    }
    setReceiveOrderTime(orderTime)

    setParam(PARAMS.ORDER_DAY, value)
    synchronizeParamToUrl()
  }

  const setReceiveOrderHour = (value: string) => {
    const orderTime: ReceiveOrderTime = {
      hour: value,
      day: receiveOrderTime?.day ?? ''
    }
    setReceiveOrderTime(orderTime)
    
    setParam(PARAMS.ORDER_TIME, value)
    synchronizeParamToUrl()
  }

  return (
    <div className="schedule-order__time-selection">
      <div className="schedule-order__time-selection--options">
        <span>Día</span>
        <input 
          type="date" 
          name="day"
          value={getParam(PARAMS.ORDER_DAY) ?? ''}
          onChange={({ target }) => setReceiveOrderDay(target.value)}
        />
      </div>
      <div className="schedule-order__time-selection--options">
        <span>Hora</span>
        <input 
          type="time" 
          name="hour"
          value={getParam(PARAMS.ORDER_TIME) ?? ''}
          onChange={(e) => setReceiveOrderHour(e.target.value)}
        />
      </div>
    </div>
  )
}