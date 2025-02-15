import { CardProduct, CardProductBody, Description, Modal, ModalBody, ModalContent, ModalDescription, ProductButton, Title } from "./styles";
import fechar from '../../assets/images/close.svg'
import { getDescricao } from '../../components/ShopList'
import { useState } from "react";

type Props = {
  nome: string
  foto: string
  descricao: string
  porcao: string
  preco: number
}

export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const Product = ({ nome, foto, descricao, porcao, preco }: Props) => {
  const [modalIsVisible, setModalIsVisible] = useState(false)

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
            <ProductButton type="button" title="Adicionar ao carrinho">Adicionar ao carrinho - R$ {formatPrice(Number(preco))}</ProductButton>
            </ModalDescription>
          </ModalBody>
        </ModalContent>
        <div onClick={() => setModalIsVisible(false)} className="overlay"></div>
      </Modal>
    </>
  )
}

export default Product;
