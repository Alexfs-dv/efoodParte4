import styled from 'styled-components';
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.terciaria};
  color: ${cores.secundaria};
  font-size: ${props => props.size === 'big' ? '1.5rem' : '1rem'};
  font-weight: 700;
  padding: 4px 6px;
  display: inline-block;
`
