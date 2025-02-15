import { Container } from "../../styles";
import Product from "../Product";
import { ListProduct } from "./styles";

export type Product = {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
}

export type Props = {
  products: Product[];
}

const ProductList = ({ products }: Props) => {

  return (
    <Container>
      <ListProduct>
        {products.map(product => (
          <Product
            key={product.id}
            nome={product.nome}
            descricao={product.descricao}
            foto={product.foto}
            porcao={product.porcao}
            preco={product.preco}
            />
        ))}
      </ListProduct>
    </Container>
  );
}

export default ProductList;
