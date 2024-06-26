interface Props {
  text: string
  className?: string
}

export const MainTitle = ({ text = '', className = '' }: Props) => {
  return (
    <h1 className={`main-title ${className}`}>{text}</h1>
  )
}