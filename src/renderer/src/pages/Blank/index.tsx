import { NoteBlank } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { useContextSelector } from 'use-context-selector'
import { FileContext } from '../../context/FileContext'
import { Container, FileButton } from './styles'

type FileEventResponseType = {
  filename: string
  fileExtention: string
  filepath: string
}

export function Blank() {
  const colors = useTheme()
  const { changeWindowTitle, loadFileToContext } = useContextSelector(FileContext, (context) => {
    return {
      changeWindowTitle: context.changeWindowTitle,
      loadFileToContext: context.loadFileToContext
    }
  })

  async function handleOpenFile() {
    const file: FileEventResponseType | null = await window.api.file.open()

    if (!file) return

    changeWindowTitle(file.filename)
    loadFileToContext(file)
  }

  async function handleCreateFile() {}

  return (
    <Container>
      <NoteBlank color={colors.gray[600]} size={200} weight="thin" />
      <div id="buttons">
        <FileButton onClick={handleOpenFile}>Open a file</FileButton>
        <FileButton onClick={handleCreateFile}>Create a file</FileButton>
      </div>
      <div>
        <p>You haven&apos;t created or opened any files, how about opening or creating a file?</p>
        <strong>NOTE PAD PLUS</strong>
      </div>
    </Container>
  )
}
