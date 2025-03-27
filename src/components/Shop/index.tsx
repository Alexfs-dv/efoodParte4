import Tag from '../Tag'
import star from '../../assets/images/star.png'

import Button from '../Button'

import * as S from './styles'

type ShopProps = {
  isFeatured: boolean
  title: string
  img: string
  tagInfo: string
  description: string
  rate: number
  id: number
}

const Shop = ({
  isFeatured,
  title,
  img,
  tagInfo,
  description,
  rate,
  id
}: ShopProps) => {
  return (
    <S.Card>
      <S.CardImage>
        <img src={img} alt={title} />
      </S.CardImage>
      <S.Info>
        {isFeatured && <Tag>Destaque da semana</Tag>}
        <Tag>{tagInfo}</Tag>
      </S.Info>
      <S.CardBody>
        <div className="title">
          <S.Title>{title}</S.Title>
          <div className="rate">
            <p>{rate}</p>
            <img src={star} alt="classificação" />
          </div>
        </div>
        <S.Description>{description}</S.Description>
        <Button type="link" to={`/shop/${id}`} title="Saiba mais">
          Saiba mais
        </Button>
      </S.CardBody>
    </S.Card>
  )
}

export default Shop
