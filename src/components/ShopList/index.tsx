import { Container } from "../../styles";
import Shop from "../Shop";
import { List } from "./styles";
import ShopClass from "../../models/ShopClass";

type Props = {
  shop: ShopClass[]
}

const ShopList = ({ shop }: Props) => (
  <Container>
    <div className="Container">
      <List>
        {shop.map((shop) => (
          <Shop
            key={shop.id}
            isFeatured= {shop.isFeatured}
            title={shop.title}
            img={shop.img}
            tagInfo={shop.tagInfo}
            description={shop.description}
            rate={shop.rate}
            />
        ))}
      </List>
    </div>
  </Container>
);

export default ShopList;
