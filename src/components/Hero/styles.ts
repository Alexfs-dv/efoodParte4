import styled from 'styled-components'
import { colors } from '../../styles'

export const ContentHero = styled.div`
  position: absolute;
  display: block;
  height: 280px;
  width: 100%;
  top: 185px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding-top: 25px;
    padding-bottom: 32px;
    z-index: 1;

    p,
    h4 {
      font-size: 32px;
      font-weight: 100;
      color: ${colors.white};
    }

    h4 {
      font-weight: 900;
    }
  }

  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.5;
  }
`
