import Tag from "../Tag"
import { Card, CardBody, CardImage, Description, Info, Title } from "./styles"
import Button from "../Button"
import star from '../../assets/images/star.png'

type ShopProps = {
  isFeatured: boolean
  title: string
  img: string
  tagInfo: string
  description: string
  rate: number
  id: number
};

const Shop = ({ isFeatured, title, img, tagInfo, description, rate, id }: ShopProps) => {

  return (
    <Card>
    <CardImage>
      <img src={img} alt={title} />
    </CardImage>
    <Info>
      {isFeatured && <Tag>Destaque da semana</Tag>}
      <Tag>{tagInfo}</Tag>
    </Info>
    <CardBody>
      <div className="title">
        <Title>{title}</Title>
        <div className="rate">
          <p>{rate}</p>
          <img src={star} alt="classificação" />
        </div>
      </div>
      <Description>
        {description}
      </Description>
      <Button type="link" to={`/shop/${id}`} title="Saiba mais">Saiba mais</Button>
    </CardBody>
  </Card>
  )
}

export default Shop;
