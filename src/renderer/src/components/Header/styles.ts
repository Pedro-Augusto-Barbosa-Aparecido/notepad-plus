import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  height: 35px;

  background-color: ${(props) => props.theme.gray[1000]};

  -webkit-app-region: drag;

  div {
    display: flex;

    align-items: center;
    justify-content: center;

    width: fit-content;
    height: 100%;

    &:first-child {
      padding: 0.75rem;

      gap: 0.5rem;

      img {
        width: 20px;
        height: 20px;
      }
    }

    &:last-child {
      justify-content: flex-end;
    }
  }
`

export const Title = styled.div`
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  font-weight: 500;

  color: ${(props) => props.theme.white};
`

export const FrameButton = styled.button`
  all: unset;

  -webkit-app-region: no-drag;

  width: 60px;
  height: 100%;

  display: flex;

  align-items: center;
  justify-content: center;

  cursor: pointer;

  &.no-hover {
    width: 40px;
  }

  &:hover {
    background-color: ${(props) => props.theme.gray[700]};
    filter: brightness(0.9);

    &.close {
      background-color: ${(props) => props.theme.red[600]};
      filter: brightness(1);
    }

    &.no-hover {
      background-color: transparent;
    }
  }
`
