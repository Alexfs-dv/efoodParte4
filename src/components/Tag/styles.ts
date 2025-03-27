import styled from 'styled-components'
import { colors } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${colors.tertiary};
  color: ${colors.secondary};
  font-size: ${(props) => (props.size === 'big' ? '1.5rem' : '1rem')};
  font-weight: 700;
  padding: 4px 6px;
  display: inline-block;
`
