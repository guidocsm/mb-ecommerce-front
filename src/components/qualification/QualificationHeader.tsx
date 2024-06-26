interface Props {
  text: string
}

export const QualificationHeader = ({ text = '' }: Props) => {
  return (
    <>
      <span className="qualification-container--header">{text}</span>
      <div className="thin-line"></div>
    </>
  )
}