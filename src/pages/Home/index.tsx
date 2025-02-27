import Header from "../../components/Header";
import ShopList from "../../components/ShopList";
import { useGetApiRestaurantsQuery } from '../../services/api'

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
  uniqueId: string
}

const Home = () => {
  const { data: restaurants, isLoading } = useGetApiRestaurantsQuery()

  if (isLoading) return <div>Carregando...</div>;

  return (
    <>
    <Header showText={true} />
    <ShopList shop={Array.isArray(restaurants) ? restaurants : []} />
  </>
  )
}

export default Home;
