import Header from "../../components/Header";
import ShopList from "../../components/ShopList";
import ShopClass from "../../models/ShopClass";
import hiori_sushi from '../../assets/images/hioki_sushi.png'
import LaDoceVitta from '../../assets/images/LaDolceVitta.png'
import Footer from "../../components/Footer"

const shopListArray: ShopClass[] = [
  {
    id: 1,
    isFeatured: true,
    title: "Hioki Sushi",
    img: hiori_sushi,
    tagInfo: "Japonesa",
    description: "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    rate: 4.9
  },
  {
    id: 2,
    isFeatured: false,
    title: "La Dolce Vita Trattoria",
    img: LaDoceVitta,
    tagInfo: "Italiana",
    description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    rate: 4.6
  },
  {
    id: 3,
    isFeatured: false,
    title: "La Dolce Vita Trattoria",
    img: LaDoceVitta,
    tagInfo: "Italiana",
    description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    rate: 4.6
  },
  {
    id: 4,
    isFeatured: false,
    title: "La Dolce Vita Trattoria",
    img: LaDoceVitta,
    tagInfo: "Italiana",
    description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    rate: 4.6
  },
  {
    id: 5,
    isFeatured: false,
    title: "La Dolce Vita Trattoria",
    img: LaDoceVitta,
    tagInfo: "Italiana",
    description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    rate: 4.6
  },
  {
    id: 6,
    isFeatured: false,
    title: "La Dolce Vita Trattoria",
    img: LaDoceVitta,
    tagInfo: "Italiana",
    description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    rate: 4.6
  },
]

const Home = () => (
  <>
    <Header showText={true} />
    <ShopList shop={shopListArray}/>
    <Footer />
  </>
)

export default Home;
