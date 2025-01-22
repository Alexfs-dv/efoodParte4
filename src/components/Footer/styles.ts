import styled from 'styled-components';
import rodape_rect from '../../assets/images/rodape_rect.png';
import { Logo } from '../Header/styles';
import { cores } from '../../styles';

export const FooterBar = styled.footer`
  background-image: url(${rodape_rect});
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 298px;
  margin-top: 80px;
  color: ${cores.terciaria};

  ${Logo} {
    width: 125px;
  }

  .containerFooter {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    text-align: center;
    width: 480px;
    font-size: 10px;

    @media (max-width: 768px) {
    width: 320px;
  }
  }
`

export const SocialList = styled.ul`
  display: flex;
`
export const SocialItem = styled.li`
  margin-right: 8px;
  list-style: none;
  margin-top: 32px;
  cursor: pointer;
`
