import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'
import { Button } from '../../styles'

export const ButtonContainer = styled(Button)`
  background-color: ${colors.tertiary};
  color: ${colors.tertiary};
`

export const ButtonLink = styled(Link)`
  background-color: ${colors.tertiary};
  color: ${colors.primary};
  text-decoration: none;
  padding: 4px 6px;
  font-size: 14px;
  font-weight: 700;
  border: none;
  margin-top: 16px;
`
