import styled from 'styled-components';

export const ListProduct = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-top: 126px;

  img {
    width: 100%;
    height: 167px;
  }

  @media (max-width: 768px) {
    display: block;
  }
`
