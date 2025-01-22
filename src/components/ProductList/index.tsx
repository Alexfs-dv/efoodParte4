import { Container } from "../../styles";
import Product from "../Product";
import { ListProduct } from "./styles";

const ProductList = () => (
   <Container>
    <ListProduct>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </ListProduct>
   </Container>
)

export default ProductList;
