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
`;

