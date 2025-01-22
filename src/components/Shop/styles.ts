import styled from 'styled-components';
import { cores } from '../../styles';
import { TagContainer } from '../Tag/styles';

export const Card = styled.div`
  background-color: ${cores.branco};
  display: block;
  margin-bottom: 48px;
  position: relative;
  color: ${cores.terciaria};

  ${TagContainer} {
    margin-right: 8px;
  }

  .title {
    display: flex;
    justify-content: space-between;
  }

  .rate {
    display: flex;
    align-items: center;

    p {
      margin-right: 8px;
      font-size: 18px;
      font-weight: bold;
    }
  }
`
export const Info = styled.div`
  display: flex;
  position: absolute;
  top: 16px;
  right: 16px;
`

export const CardImage = styled.div`
  display: inline-block;

  img {
    width: 100%;
  }
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
`
export const CardBody = styled.div`
  padding: 8px;
`
