import styled from 'styled-components'

export const Container = styled.main`
  height: calc(100vh - 80px);
  width: 100%;

  display: flex;

  flex-direction: column;

  justify-content: center;
  align-items: center;

  gap: 1.5rem;

  div {
    display: flex;

    flex-direction: column;

    align-items: center;
    justify-content: center;

    text-align: center;

    gap: 0.5rem;
  }

  p,
  strong {
    color: ${(props) => props.theme.gray[500]};

    width: 28.25rem;
  }
`
