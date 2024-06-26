import { CroissantIcon } from "../../../public/icons/Icons"

export const Loader = () => {
  return (
    <div className="loader-container">
      <CroissantIcon />
      <span className="spinner"></span>
    </div>
  )
}