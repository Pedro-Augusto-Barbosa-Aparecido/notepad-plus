import { NoteBlank } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { Container } from './styles'

export function Blank() {
  const colors = useTheme()

  return (
    <Container>
      <NoteBlank color={colors.gray[600]} size={200} weight="thin" />
      <div>
        <p>You haven&apos;t created or opened any files, how about opening or creating a file?</p>
        <strong>NOTE PAD PLUS</strong>
      </div>
    </Container>
  )
}
