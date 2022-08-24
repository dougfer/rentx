export const formatToRealStr = (
  num: number,
  options?: Intl.NumberFormatOptions
) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    ...options,
  }).format(num)
}
