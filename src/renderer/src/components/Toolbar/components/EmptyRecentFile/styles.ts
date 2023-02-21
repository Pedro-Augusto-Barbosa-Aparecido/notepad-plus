import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 100%;

  gap: 0.5rem;

  padding: 0;

  strong {
    color: ${(props) => props.theme.gray[500]};
  }
`
