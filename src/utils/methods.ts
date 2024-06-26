export const transformedSpanishPhoneNumber = (phone: number|string) => {
  const phoneString = phone.toString()
  const num1 = phoneString.substring(0, 3)
  const num2 = phoneString.substring(3, 5)
  const num3 = phoneString.substring(5, 7)
  const num4 = phoneString.substring(7, 9)

  return `${num1} ${num2} ${num3} ${num4}`
}