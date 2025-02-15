import { ApiRestaurants } from "../../pages/Home";
import { Container } from "../../styles";
import Shop from "../Shop";
import { List } from "./styles";

type Props = {
  shop: ApiRestaurants[]
}

export const getDescricao = (descricao: string) => {
    if(descricao.length > 0) {
      return descricao.slice(0, 192) + '...'
    }
    return descricao;
  }
const ShopList = ({ shop }: Props) => {

  return (
    <Container>
    <div className="Container">
      <List>
        {shop.map((shop) => (
          <Shop
            key={shop.id}
            title={shop.titulo}
            isFeatured= {shop.destacado}
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

export default ShopList;
