import { transformedSpanishPhoneNumber } from "@/utils/methods"
import { LocationSecondaryIcon, PhoneIcon, ScheduleIcon } from "../../../public/icons/Icons"
import { type StoreAddress, type StorePhone, type StoreName, type StoreSchedule } from "@/types/qualificationOrder"

interface Props {
  name: StoreName,
  address: StoreAddress,
  phone: StorePhone,
  schedule: StoreSchedule,
  activeCard?: boolean
}

export const StoreCard = ({ name, address, phone, schedule, activeCard = false }: Props) => {
  return (
    <div className={`store-found__selected ${activeCard ? 'active-card' : ''}`}>
      <span className="store-name">{name}</span>
      <div className="store-found__selected--info">
        <div>
          <LocationSecondaryIcon />
          <span>{address}</span>
        </div>
        <div>
          <PhoneIcon />
          <span>{transformedSpanishPhoneNumber(phone)}</span>
        </div>
        <div>
          <ScheduleIcon />
          <span>{schedule}</span>
        </div>
      </div>
      <div className="store-found__selected--distance">
        <span>A 300 m de ti</span>
      </div>
    </div>
  )
}