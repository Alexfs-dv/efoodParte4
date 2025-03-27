import styled from 'styled-components'
import { Sidebar as CartSidebar } from '../Cart/styles'
import { colors } from '../../styles'

type InputGroupProps = {
  $maxwidth?: string
  $margintop?: string
}

export const CheckoutSideBar = styled(CartSidebar)`
  display: block;

  h2 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  span {
    display: flex;
    justify-content: space-between;
  }

  p {
    margin-top: 16px;
    font-size: 14px;
    font-weight: 400;
  }
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  margin-top: ${(props) => props.$margintop || '0'};
  max-width: ${(props) => props.$maxwidth || 'auto'};

  input {
    width: 100%;
    height: 32px;
    border: 1px solid ${colors.secondary};
    background-color: ${colors.secondary};
    font-size: 14px;
    font-weight: 700;
    color: #4b4b4b;
    padding: 8px;
    margin-top: 8px;

    &.error {
      border: 2px solid red;
    }
  }

  label {
    font-size: 14px;
    font-weight: 700;
  }
`
