import { useOrderStore } from "@/providers/orderStoreProvider"
import { PARAMS, SHIPPING_METHOD } from "@/utils/constants"
import { RadioField } from "../common/RadioField"
import { useNavigation } from "@/hooks/useNavigation"
import { type OrderType } from "@/types/qualificationOrder"

interface Props {
  doSearch: () => void
}

export const ShippingMethodForm = ({ doSearch }: Props) => {
  const { shippingMethod, setShippingMethod } = useOrderStore(state => state)
  const { hasParamsUrl, setParam, getParam, synchronizeParamToUrl } = useNavigation()

  const handleShippingMethod = async (method: OrderType) => {
    doSearch()
    setShippingMethod(method) 

    if (hasParamsUrl) {
      setParam(PARAMS.SHIPPING_METHOD, method)
      synchronizeParamToUrl()
    }
  }

  const isTakeawayMethod = getParam(PARAMS.SHIPPING_METHOD) === SHIPPING_METHOD.TAKEAWAY

  return (
    <div className="qualification-container__shipping-method">
      <RadioField 
        name="shippingMethod"
        onClick={() => handleShippingMethod(SHIPPING_METHOD.DELIVERY)}
        checked={!isTakeawayMethod || shippingMethod === SHIPPING_METHOD.DELIVERY}
      >
        <div className="custom-radio__label">
          <span className="delivery-label">A domicilio</span>
          <p className="delivery-description">Te lo llevamos a tu casa, Manolover</p>
        </div>
      </RadioField>
      <RadioField 
        name="shippingMethod"
        onClick={() => handleShippingMethod(SHIPPING_METHOD.TAKEAWAY)}
        checked={isTakeawayMethod || shippingMethod === SHIPPING_METHOD.TAKEAWAY}
      >
        <div className="custom-radio__label">
          <span className="delivery-label">Para recoger</span>
          <p className="delivery-description">Ven a recogerlo en cualquiera de nuestras stores</p>
        </div>
      </RadioField>
    </div>
  )
}