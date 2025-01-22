import { CardProduct, CardProductBody, Description, ProductButton, Title } from "./styles";
import pizza_marguerita from '../../assets/images/pizza_marguerita.png'

const Product = () => (
  <CardProduct>
    <img src={pizza_marguerita} alt="pizza marguerita" />
    <CardProductBody>
      <Title>Pizza Marguerita</Title>
      <Description>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</Description>
    </CardProductBody>
    <ProductButton type="button" title="Adicionar ao carrinho">Adicionar ao carrinho</ProductButton>
  </CardProduct>
)

export default Product;
