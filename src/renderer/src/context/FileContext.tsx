import React, { useState } from 'react'
import { createContext } from 'use-context-selector'

interface IFile {
  filepath: string
  filename: string
  fileExtention: string
}

interface IFileContext {
  openedFile: string
  file: IFile | null
  changeWindowTitle: (title: string) => void
  loadFileToContext: (file: IFile) => void
}

export const FileContext = createContext({} as IFileContext)

type FileContextProviderProps = {
  children: React.ReactNode
}

export function FileContextProvider({ children }: FileContextProviderProps) {
  const [openedFile, setOpenedFile] = useState<string>('')
  const [file, setFile] = useState<IFile | null>(null)

  function changeWindowTitle(title: string) {
    const newTitleCleaned = title.trim()

    setOpenedFile(newTitleCleaned)
  }

  function loadFileToContext(recentFileOpened: IFile) {
    setFile(recentFileOpened)
  }

  return (
    <FileContext.Provider
      value={{
        file,
        openedFile,
        changeWindowTitle,
        loadFileToContext
      }}
    >
      {children}
    </FileContext.Provider>
  )
}
