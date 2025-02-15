import styled from 'styled-components';
import { cores } from '../../styles';
import { Button } from '../../styles';

export const CardProduct = styled.div`
  background-color: ${cores.terciaria};
  color: ${cores.secundaria};
  padding: 8px;
  display: block;

  @media (max-width: 768px){
    margin-bottom: 32px;
  }
`

export const CardProductBody = styled.div`
  margin-bottom: 8px;
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 900;
  margin-top: 8px;
  margin-bottom: 8px;

`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`

export const ProductButton = styled(Button)`
  background-color: ${cores.secundaria};
  color: ${cores.terciaria};
  width: 100%;
`

export const Modal = styled.div`
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  background-color: ${cores.terciaria};
  position: relative;
  width: 1024px;
  height: 344px;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  .modalClose {
     width: 16px;
     height: 16px;
     position: absolute;
     right: 0;
     top: 0;
     margin: 8px;
     cursor: pointer;
  }
`

export const ModalBody = styled.div`
  display: flex;
  margin: 32px;

  .modalImage {
    width: 280px;
    height: 280px;
    margin-right: 24px;
  }


  ${ProductButton} {
    margin-bottom: 59px;
    width: 238px;
  }
`

export const ModalDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  color: ${cores.branco};

  h4 {
    font-size: 18px;
    font-weight: 900;
  }
`

