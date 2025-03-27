import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'
import { getDescricao } from '../../components/ShopList'
import { parseToBrl } from '../../utils'

import fechar from '../../assets/images/close.svg'

import * as S from './styles'

export type ProductProps = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Product = ({
  foto,
  preco,
  id,
  nome,
  descricao,
  porcao
}: ProductProps) => {
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const dispatch = useDispatch()

  const addToCart = () => {
    try {
      const product: ApiRestaurants = {
        id,
        titulo: nome,
        capa: foto,
        cardapio: { foto, preco, id, nome, descricao, porcao },
        destacado: false,
        tipo: '',
        avaliacao: 0,
        uniqueId: '',
        descricao: ''
      }
      dispatch(add(product))
      setModalIsVisible(false)
      dispatch(open())
    } catch (error) {
      console.error('Erro ao adicionar ao carrinho:', error)
    }
  }

  return (
    <>
      <S.CardProduct>
        <img src={foto} alt={nome} />
        <S.CardProductBody>
          <S.Title>{nome}</S.Title>
          <S.Description>{getDescricao(descricao)}</S.Description>
        </S.CardProductBody>
        <S.ProductButton
          onClick={() => setModalIsVisible(true)}
          type="button"
          title="Adicionar ao carrinho"
        >
          Mais detalhes
        </S.ProductButton>
      </S.CardProduct>
      <S.Modal className={modalIsVisible ? 'visible' : ''}>
        <S.ModalContent>
          <img
            onClick={() => setModalIsVisible(false)}
            className="modalClose"
            src={fechar}
            alt="Ícone fechar"
          />
          <S.ModalBody>
            <img className="modalImage" src={foto} alt="Foto do produto" />
            <S.ModalDescription>
              <h4>{nome}</h4>
              <p>{descricao}</p>
              <p>Serve: {porcao}</p>
              <S.ProductButton
                type="button"
                title="Adicionar ao carrinho"
                onClick={addToCart}
              >
                Adicionar ao carrinho - R$ {parseToBrl(Number(preco))}
              </S.ProductButton>
            </S.ModalDescription>
          </S.ModalBody>
        </S.ModalContent>
        <div onClick={() => setModalIsVisible(false)} className="overlay"></div>
      </S.Modal>
    </>
  )
}

export default Product
