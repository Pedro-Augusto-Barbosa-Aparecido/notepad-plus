import { dialog, ipcMain } from 'electron'
import { IPC } from '../../shared/constants/ipc'

import path from 'node:path'

ipcMain.handle(IPC.FILE_EVENTS.OPEN, async (_, params) => {
  const dialogResponse = await dialog.showOpenDialog({
    title: 'Open file',
    properties: ['openFile']
  })

  if (!dialogResponse.canceled) {
    const filepath = dialogResponse.filePaths[0]

    return {
      filename: path.basename(filepath),
      fileExtention: path.extname(filepath),
      filepath
    }
  }

  return null
})
