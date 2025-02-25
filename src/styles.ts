import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  primaria: '#FFF8F2',
  secundaria: '#FFEBD9',
  terciaria: '#E66767',
  branco: '#FFFFFF'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    }

    body {
      background-color: ${cores.primaria}
  }
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${breakpoints.desktop}){
    max-width: 80%;
  }

  @media (max-width: ${breakpoints.tablet}){
    max-width: 90%;
  }
`

export const Button = styled.button`
  padding: 4px 6px;
  font-size: 14px;
  font-weight: 700;
  border: none;
  margin-top: 16px;
  cursor: pointer;
`
