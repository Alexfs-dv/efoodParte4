import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { cores } from '../../styles';
import { Button } from '../../styles';

export const ButtonContainer = styled(Button)`
  background-color: ${cores.terciaria};
  color: ${cores.primaria};

`

export const ButtonLink = styled(Link)`
  background-color: ${cores.terciaria};
  color: ${cores.primaria};
  text-decoration: none;
  padding: 4px 6px;
  font-size: 14px;
  font-weight: 700;
  border: none;
  margin-top: 16px;
`
