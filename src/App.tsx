import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './store'

import Rotas from './routes'

import Footer from './components/Footer'

import Cart from './components/Cart'

import { GlobalStyle } from './styles'
import { useState } from 'react'
import Checkout from './components/Checkout'

function App() {
  const [showCart, setShowCart] = useState(true) // Estado para alternar entre carrinho e checkout

  const openCheckout = () => {
    setShowCart(false) // Exibe o Checkout
  }

  const backToCart = () => {
    setShowCart(true) // Volta para o Carrinho
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
        <Footer />
      </BrowserRouter>
      {showCart ? (
        <Cart onCheckout={openCheckout} />
      ) : (
        <Checkout onBackToCart={backToCart} />
      )}
    </Provider>
  )
}

export default App
