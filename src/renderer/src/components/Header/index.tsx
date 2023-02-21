import { Container, FrameButton, Title } from './styles'
import icon from '../../assets/icon.png'
import { X, Minus, ArrowsOutSimple, ArrowsInSimple, Gear } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { useState } from 'react'
import { IPC } from '../../../../shared/constants/ipc'

type MaximizeParamsType = {
  isMaximized: boolean
}

export function Header() {
  const colors = useTheme()

  const [isMaximized, setIsMaximized] = useState(false)

  function handleMaximizedScreen() {
    window.api.maximize()
  }

  window.electron.ipcRenderer.on(
    IPC.FRAME_EVENTS.MAXIMIZE,
    (event, { isMaximized: maximized }: MaximizeParamsType) => {
      setIsMaximized(maximized)
    }
  )

  return (
    <Container>
      <div>
        <img src={icon} alt="" />
        <Title>Note pad</Title>
      </div>
      <div>
        <FrameButton className="no-hover">
          <Gear color={colors.white} weight="bold" />
        </FrameButton>
        <FrameButton onClick={window.api.minimize}>
          <Minus color={colors.white} weight="bold" />
        </FrameButton>
        <FrameButton onClick={handleMaximizedScreen}>
          {isMaximized ? (
            <ArrowsInSimple color={colors.white} weight="bold" />
          ) : (
            <ArrowsOutSimple color={colors.white} weight="bold" />
          )}
        </FrameButton>
        <FrameButton onClick={window.api.close} className="close">
          <X size={18} color={colors.white} weight="bold" />
        </FrameButton>
      </div>
    </Container>
  )
}
