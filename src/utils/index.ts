export const parseToBrl = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export const getTotalPrice = (items: ApiRestaurants[]) => {
  return items.reduce((accumulator, currentItem) => {
    return (accumulator += currentItem.cardapio.preco)
  }, 0)
}
