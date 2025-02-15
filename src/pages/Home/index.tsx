import { useEffect, useState } from "react";

import Header from "../../components/Header";
import ShopList from "../../components/ShopList";
import Footer from "../../components/Footer"

export type ApiRestaurants = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Home = () => {
  const [restaurants, setRestaurants] = useState<ApiRestaurants[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
    .then((response) => response.json())
    .then((response) => setRestaurants(response))
  }, [])

  return (
    <>
    <Header showText={true} />
    <ShopList shop={restaurants} />
    <Footer />
  </>
  )
}

export default Home;
