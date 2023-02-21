import styled from 'styled-components'

import * as Menubar from '@radix-ui/react-menubar'

export const Container = styled(Menubar.Root)`
  background-color: ${(props) => props.theme.gray[900]};

  height: fit-content;
  width: 100%;

  padding: 0.1875rem;
`

export const Menu = styled(Menubar.Menu)``

export const MenuPortal = styled(Menubar.Portal)``

export const MenuSub = styled(Menubar.Sub)``

export const MenuSeparator = styled(Menubar.Separator)`
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.gray[200]};
`

export const MenuSubTrigger = styled(Menubar.SubTrigger)`
  display: flex;

  align-items: center;
  justify-content: space-between;

  width: 100%;
  min-height: 28px;

  gap: 0.5rem;

  padding: 0.125rem 0.25rem;
  border-radius: 4px;

  cursor: pointer;

  &:hover,
  &[data-highlighted],
  &[data-state='open'] {
    filter: brightness(0.9);
    background-color: ${(props) => props.theme.gray[500]};
  }

  div:first-child {
    display: flex;

    justify-content: flex-start;
    align-items: center;

    width: fit-content;

    gap: 0.5rem;
  }
`

export const MenuSubContent = styled(Menubar.SubContent)`
  display: flex;

  flex-direction: column;

  align-items: flex-start;
  justify-content: space-between;

  gap: 0.5rem;

  width: 150px;
  height: fit-content;

  margin-left: 10px;

  background-color: ${(props) => props.theme.gray[600]};

  border-radius: 3px;
  padding: 0.25rem 0.25rem;

  animation-duration: 400ms;

  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
`

export const MenuContent = styled(Menubar.Content)`
  display: flex;

  flex-direction: column;

  align-items: flex-start;
  justify-content: space-between;

  gap: 0.5rem;

  min-width: 200px;
  height: fit-content;

  margin-top: 5px;

  background-color: ${(props) => props.theme.gray[600]};

  border-radius: 3px;
  padding: 0.25rem 0.25rem;

  animation-duration: 400ms;

  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
`

export const MenuTrigger = styled(Menubar.Trigger)`
  all: unset;

  padding: 0.5rem 1rem;

  color: ${(props) => props.theme.gray[200]};
  font-family: 'Inter', sans-serif;
  font-weight: 500;

  border-radius: 3px;

  &:hover,
  &[data-highlighted],
  &[data-state='open'] {
    background-color: ${(props) => props.theme.gray[600]};
  }
`

export const MenuItem = styled(Menubar.Item)`
  display: flex;

  align-items: center;
  justify-content: space-between;

  width: 100%;
  min-height: 28px;

  gap: 0.5rem;

  padding: 0.125rem 0.25rem;
  border-radius: 4px;

  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
    background-color: ${(props) => props.theme.gray[500]};
  }

  div:first-child {
    display: flex;

    justify-content: flex-start;
    align-items: center;

    width: fit-content;

    gap: 0.5rem;
  }
`

export const Label = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 0.9rem;

  color: ${(props) => props.theme.gray[400]};
`
