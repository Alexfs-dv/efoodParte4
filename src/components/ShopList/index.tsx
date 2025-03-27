import Shop from '../Shop'

import { Container } from '../../styles'
import { List } from './styles'
import Loader from '../Loader'

type Props = {
  shop: ApiRestaurants[]
  isLoading: boolean
}

export const getDescricao = (descricao: string) => {
  if (descricao.length > 0) {
    return descricao.slice(0, 192) + '...'
  }
  return descricao
}
const ShopList = ({ shop, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <Container>
      <div className="Container">
        <List>
          {shop.map((shop) => (
            <Shop
              key={shop.id}
              title={shop.titulo}
              isFeatured={shop.destacado}
              tagInfo={shop.tipo}
              rate={shop.avaliacao}
              description={getDescricao(shop.descricao)}
              img={shop.capa}
              id={shop.id}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ShopList
