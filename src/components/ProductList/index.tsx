
import { Container } from '../../styles'
import Product, { ProductProps } from '../Product'
import { ListProduct } from './styles'

type ProductListProps = {
  products: ProductProps[]
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <Container>
      <ListProduct>
      {products.map((product) => (
        <Product
          key={product.id}
          foto={product.foto}
          preco={product.preco}
          id={product.id}
          nome={product.nome}
          descricao={product.descricao}
          porcao={product.porcao}
        />
      ))}
    </ListProduct>
    </Container>
  )
}

export default ProductList
