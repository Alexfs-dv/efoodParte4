import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Hero } from "../../components/Hero";
import ProductList from "../../components/ProductList";

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
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes');
      const data = await response.json();
      const selectedRestaurant = data.find((rest: Restaurant) => rest.id === Number(id));
      setRestaurant(selectedRestaurant);
    };
    fetchRestaurants();
  }, [id]);

  if (!restaurant) return <div>Carregando...</div>;

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
      <Footer />
    </>
  );
};

export default Profile;
