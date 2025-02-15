import styled from 'styled-components';

import { Props } from '.'
import { cores } from '../../styles';

export const HeaderBar = styled.header<Props>`
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 80px;
  min-height: 384px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 64px;
  color: ${cores.terciaria};

  @media (max-width: 768px) {
    padding-top: 10%;
    padding-bottom: 10%;
    }
    `;

    export const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    font-weight: 900;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const Logo = styled.img`
  top: 65px;
  width: 125px;
  height: auto;

  @media (max-width: 768px) {
    width: 30%;
    margin-top: 24px;
    margin-bottom: 24px;
  }
`;

export const Text = styled.p<Props>`
  position: absolute;
  bottom: 60px;
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  width: 80%;
  max-width: 539px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 5vw;
    line-height: 32px;
  }
`
