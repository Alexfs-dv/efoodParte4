import styled from 'styled-components';
import { cores } from '../../styles';

export const ContentHero = styled.div`
  display: flex;
  color: ${cores.branco}
  `

  export const ImgHero = styled.img`
  position: absolute;
  top: 185px;
  height: 280px;
  max-width: 100%;
  `
  export const TextHero = styled.div`
    position: absolute;
    top: 200px;
    height: 240px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;
    font-weight: 100;
    font-size: 32px;
  `

