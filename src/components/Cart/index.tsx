import { ProductButton } from "../Product/styles"

import { Overlay, CartContainer, Sidebar, PriceTotal, CartItem } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from "../../store"

import { close, remove } from '../../store/reducers/cart'
import { formatPrice } from "../Product"

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.cardapio.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
    <Overlay onClick={closeCart} />
    <Sidebar>
      <ul>
        {items.map((item) => (
          <CartItem key={item.id}>
            <img src={item.cardapio.foto} alt={item.cardapio.nome} />
            <div>
              <h3>{item.cardapio.nome}</h3>
              <span>{formatPrice(item.cardapio.preco)}</span>
            </div>
            <button onClick={() => removeItem(item.id)} type="button"></button>
          </CartItem>
        ))}
      </ul>
      <PriceTotal>Valor total <span>{formatPrice(getTotalPrice())}</span></PriceTotal>
      <ProductButton title="Clique aqui para continuar com a compra" type="button">
        Continuar com a entrega
      </ProductButton>
    </Sidebar>
  </CartContainer>
  )
}

export default Cart
