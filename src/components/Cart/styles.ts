import styled from 'styled-components'
import { colors } from '../../styles'
import remove from '../../assets/images/lixeira_icon.svg'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.tertiary};
  color: ${colors.secondary};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.primary};
    text-align: center;
  }
`

export const PriceTotal = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 700;
  margin: 40px 0 16px 0;
`

export const $Cartitem = styled.li`
  position: relative;
  display: flex;
  background-color: ${colors.secondary};
  padding: 8px 8px 12px 8px;
  color: ${colors.tertiary};
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  div {
    h3 {
      font-size: 18px;
      font-weight: 900;
      margin-bottom: 16px;
    }

    span {
      display: block;
      font-size: 14px;
      font-weight: 400;
    }
  }

  button {
    background-image: url(${remove});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`
