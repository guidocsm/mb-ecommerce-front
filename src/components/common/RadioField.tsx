interface Props {
  name: string
  checked?: boolean
  onClick: () => void
  children: React.ReactNode
}

export const RadioField = ({ name, checked, children, onClick }: Props) => {
  return (
    <>
      <label
        className="custom-radio"
        htmlFor={name}
      >
        <input
          type="radio"
          className="custom-radio__input"
          name={name}
          onClick={onClick}
          checked={checked}
          readOnly
        />
        {children}
      </label>
    </>
  )
}