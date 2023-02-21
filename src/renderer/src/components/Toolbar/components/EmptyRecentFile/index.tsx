import { FileSearch } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { Container } from './styles'

export function EmptyRecentFile() {
  const colors = useTheme()

  return (
    <Container>
      <FileSearch color={colors.gray[500]} size={24} />
      <strong>No history.</strong>
    </Container>
  )
}
