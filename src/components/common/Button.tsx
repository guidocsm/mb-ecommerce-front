interface Props {
  text: string
  className?: string
  disabled?: boolean,
  onClick?: () => void
}

export const Button = ({ 
  text = '', 
  className = '',
  disabled = false, 
  onClick,
}: Props) => {
  return (
    <button 
      className={className}
      style={{ opacity: disabled ? .5 : 1 }} 
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}