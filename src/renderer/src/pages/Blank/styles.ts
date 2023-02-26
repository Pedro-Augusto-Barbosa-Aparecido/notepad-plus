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

  div#buttons {
    flex-direction: row !important;

    gap: 2rem;
  }

  p,
  strong {
    color: ${(props) => props.theme.gray[500]};

    width: 28.25rem;
  }
`

export const FileButton = styled.button`
  all: unset;

  background-color: ${(props) => props.theme.gray[600]};
  color: ${(props) => props.theme.gray[500]};

  border-radius: 4px;
  padding: 0.5rem 1.5rem;

  cursor: pointer;

  transition: all 0.5s;

  &:hover {
    transform: scale(1.2);
    box-shadow: 0px 0px 10px 0px ${(props) => props.theme.white};
    color: ${(props) => props.theme.gray[200]};
  }
`
