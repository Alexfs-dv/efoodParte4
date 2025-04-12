import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { getTotalPrice, parseToBrl } from '../../utils'

import { ProductButton } from '../Product/styles'
import {
  Overlay,
  CartContainer,
  Sidebar,
  PriceTotal,
  $Cartitem
} from './styles'

const Cart = ({ onCheckout }: { onCheckout: () => void }) => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (uniqueId: string) => {
    dispatch(remove(uniqueId))
  }

  const openCheckout = () => {
    if (items.length > 0) {
      onCheckout()
    } else {
      alert(
        'O carrinho está vazio, por favor adicione pelo menos 1 item ao carrinho para prosseguir!'
      )
      closeCart()
    }
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <$Cartitem key={item.uniqueId}>
                  <img src={item.cardapio.foto} alt={item.cardapio.nome} />
                  <div>
                    <h3>{item.cardapio.nome}</h3>
                    <span>{parseToBrl(item.cardapio.preco)}</span>
                  </div>
                  <button
                    onClick={() => removeItem(item.uniqueId)}
                    type="button"
                  ></button>
                </$Cartitem>
              ))}
            </ul>
            <PriceTotal>
              Valor total <span>{parseToBrl(getTotalPrice(items))}</span>
            </PriceTotal>
            <ProductButton
              onClick={openCheckout}
              title="Clique aqui para continuar com a compra"
              type="button"
            >
              Continuar com a entrega
            </ProductButton>
          </>
        ) : (
          <p className="empty-text">
            O carrinho está vazio, adicione pelo menos um produto para continuar
            com a compra!
          </p>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
