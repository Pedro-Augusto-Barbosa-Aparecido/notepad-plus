import styled from 'styled-components'

export const Container = styled.footer`
  height: 30px;
  width: 100%;

  position: absolute;

  bottom: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
  }

  a,
  strong {
    font-size: 0.75rem;
    font-family: 'Inter', sans-serif;

    color: ${(props) => props.theme.gray[500]};
  }
`
