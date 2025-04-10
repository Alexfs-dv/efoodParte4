import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './store'

import Rotas from './routes'

import Footer from './components/Footer'

import Cart from './components/Cart'

import { GlobalStyle } from './styles'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
        <Footer />
      </BrowserRouter>
      <Cart />
    </Provider>
  )
}

export default App
