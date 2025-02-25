import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { Hero } from "../../components/Hero";
import ProductList from "../../components/ProductList";
import { useGetApiRestaurantsQuery } from '../../services/api';

interface Product {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
}

export interface Restaurant {
  id: number;
  titulo: string;
  tipo: string;
  capa: string;
  cardapio: Product[];
}

const Profile = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetApiRestaurantsQuery();

  if (isLoading) return <div>Carregando...</div>;

  const restaurant = Array.isArray(data) ? data.find((rest: Restaurant) => rest.id === Number(id)) : undefined;

  if (!restaurant) return <div>Restaurante não encontrado.</div>;

  return (
    <>
      <Header
        showText={false}
        cartItem={0}
        restaurantLabel={"Restaurantes"}
        isProfilePage={true}
      />
      <Hero
        tipo={restaurant.tipo}
        titulo={restaurant.titulo}
        imagem={restaurant.capa}
      />
      <div>
        <ProductList products={restaurant.cardapio} />
      </div>
    </>
  );
};

export default Profile;
