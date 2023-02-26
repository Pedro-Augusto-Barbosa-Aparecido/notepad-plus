import { Container, FrameButton, Title } from './styles'

import { useContextSelector } from 'use-context-selector'
import { X, Minus, ArrowsOutSimple, ArrowsInSimple, Gear } from 'phosphor-react'

import { useTheme } from 'styled-components'
import { useState } from 'react'

import icon from '../../assets/icon.png'
import { IPC } from '../../../../shared/constants/ipc'
import { FileContext } from '../../context/FileContext'

type MaximizeParamsType = {
  isMaximized: boolean
}

export function Header() {
  const colors = useTheme()

  const [isMaximized, setIsMaximized] = useState(false)
  const openedFile = useContextSelector(FileContext, (context) => {
    return context.openedFile
  })

  function handleMaximizedScreen() {
    window.api.frame.maximize()
  }

  window.electron.ipcRenderer.on(
    IPC.FRAME_EVENTS.MAXIMIZE,
    (_, { isMaximized: maximized }: MaximizeParamsType) => {
      setIsMaximized(maximized)
    }
  )

  return (
    <Container>
      <div>
        <img src={icon} alt="" />
        <Title>{!!openedFile && `${openedFile} | `} Note pad</Title>
      </div>
      <div>
        <FrameButton className="no-hover">
          <Gear color={colors.white} weight="bold" />
        </FrameButton>
        <FrameButton onClick={window.api.frame.minimize}>
          <Minus color={colors.white} weight="bold" />
        </FrameButton>
        <FrameButton onClick={handleMaximizedScreen}>
          {isMaximized ? (
            <ArrowsInSimple color={colors.white} weight="bold" />
          ) : (
            <ArrowsOutSimple color={colors.white} weight="bold" />
          )}
        </FrameButton>
        <FrameButton onClick={window.api.frame.close} className="close">
          <X size={18} color={colors.white} weight="bold" />
        </FrameButton>
      </div>
    </Container>
  )
}
