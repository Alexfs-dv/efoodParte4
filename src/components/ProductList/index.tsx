import Product, { ProductProps } from '../Product'

import { ListProduct } from './styles'
import { Container } from '../../styles'
import Loader from '../Loader'

type ProductListProps = {
  products: ProductProps[]
  isLoading: boolean
}

const ProductList = ({ products, isLoading }: ProductListProps) => {
  if (isLoading) {
    return <Loader />
  }

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
