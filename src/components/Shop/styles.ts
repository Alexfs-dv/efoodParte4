import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${colors.white};
  display: block;
  margin-bottom: 48px;
  position: relative;
  color: ${colors.tertiary};

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
  display: flex;

  img {
    width: 100%;
    height: 217px;
    object-fit: cover;
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
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: #e66767;
  margin-top: -4px;
`
