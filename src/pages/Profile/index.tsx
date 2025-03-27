import { useParams } from 'react-router-dom'

import { useGetApiRestaurantsQuery } from '../../services/api'

import Header from '../../components/Header'
import { Hero } from '../../components/Hero'
import ProductList from '../../components/ProductList'
import Loader from '../../components/Loader'

interface Product {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export interface Restaurant {
  id: number
  titulo: string
  tipo: string
  capa: string
  cardapio: Product[]
}

const Profile = () => {
  const { id } = useParams()
  const { data, isLoading } = useGetApiRestaurantsQuery()

  if (isLoading) return <Loader />

  const restaurant = Array.isArray(data)
    ? data.find((rest: Restaurant) => rest.id === Number(id))
    : undefined

  if (!restaurant) return <div>Restaurante não encontrado.</div>

  return (
    <>
      <Header
        $showtext={false}
        $cartitem={0}
        $restaurantlabel={'Restaurantes'}
        isProfilePage={true}
      />
      <Hero
        tipo={restaurant.tipo}
        titulo={restaurant.titulo}
        imagem={restaurant.capa}
      />
      <div>
        <ProductList isLoading={isLoading} products={restaurant.cardapio} />
      </div>
    </>
  )
}

export default Profile
