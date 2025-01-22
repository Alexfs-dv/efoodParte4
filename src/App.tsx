import { BrowserRouter, Routes, Route } from "react-router-dom"

import { GlobalStyle } from "./styles"
import Home from "./pages/Home"
import { Profile } from "./pages/Profile"

const Rotas = ()=> (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil" element={<Profile />} />
  </Routes>
)

function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
