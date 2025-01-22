import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Hero } from "../../components/Hero";
import ProductList from "../../components/ProductList";

export const Profile = () => (
  <>
    <Header showText={false} cartItem={0} restaurantLabel={"Restaurantes"} isProfilePage={true} />
    <Hero />
    <ProductList />
    <Footer />
  </>
);
