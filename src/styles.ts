import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  primaria: '#FFF8F2',
  secundaria: '#FFEBD9',
  terciaria: '#E66767',
  branco: '#FFFFFF'
}
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    }

    body {
      background-color: ${cores.primaria}
  }
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

export const Button = styled.button`
  padding: 4px 6px;
  font-size: 14px;
  font-weight: 700;
  border: none;
  margin-top: 16px;
  cursor: pointer;
`
