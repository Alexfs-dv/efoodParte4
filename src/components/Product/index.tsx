import { CardProduct, CardProductBody, Description, Modal, ModalBody, ModalContent, ModalDescription, ProductButton, Title } from "./styles";
import fechar from '../../assets/images/close.svg'
import { getDescricao } from '../../components/ShopList'
import { useState } from "react";
import { useDispatch } from "react-redux";

import { add, open } from '../../store/reducers/cart';
import { ApiRestaurants } from "../../pages/Home";

export type ProductProps = {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
}

export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const Product = ({ foto, preco, id, nome, descricao, porcao }: ProductProps) => {
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
      descricao: ''
    }
      dispatch(add(product))
      setModalIsVisible(false)
      dispatch(open())
    } catch (error) {
      console.error("Erro ao adicionar ao carrinho:", error)
    }
  }

  return (
    <>
      <CardProduct>
        <img src={foto} alt={nome} />
        <CardProductBody>
          <Title>{nome}</Title>
          <Description>{getDescricao(descricao)}</Description>
        </CardProductBody>
        <ProductButton onClick={() => setModalIsVisible(true)} type="button" title="Adicionar ao carrinho">Adicionar ao carrinho</ProductButton>
      </CardProduct>
      <Modal className={modalIsVisible ? 'visible' : ''}>
        <ModalContent>
          <img onClick={() => setModalIsVisible(false)} className="modalClose" src={fechar} alt="Ícone fechar" />
          <ModalBody>
              <img className="modalImage" src={foto} alt="Foto do produto" />
            <ModalDescription>
              <h4>{nome}</h4>
              <p>
                {descricao}
              </p>
              <p>Serve: {porcao}</p>
            <ProductButton type="button" title="Adicionar ao carrinho" onClick={addToCart} >Adicionar ao carrinho - R$ {formatPrice(Number(preco))}</ProductButton>
            </ModalDescription>
          </ModalBody>
        </ModalContent>
        <div onClick={() => setModalIsVisible(false)} className="overlay"></div>
      </Modal>
    </>
  )
}

export default Product;
