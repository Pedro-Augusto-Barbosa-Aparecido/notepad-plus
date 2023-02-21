import { BrowserWindow, ipcMain } from 'electron'
import { IPC } from '../../shared/constants/ipc'

ipcMain.on(IPC.FRAME_EVENTS.CLOSE, (event, params) => {
  const currentWindow = BrowserWindow.fromWebContents(event.sender)

  currentWindow?.close()
})

ipcMain.on(IPC.FRAME_EVENTS.MAXIMIZE, (event, params) => {
  const currentWindow = BrowserWindow.fromWebContents(event.sender)
  if (!currentWindow?.isMaximized()) {
    currentWindow?.maximize()

    return currentWindow?.webContents.send(IPC.FRAME_EVENTS.MAXIMIZE, {
      isMaximized: currentWindow?.isMaximized()
    })
  }

  currentWindow?.unmaximize()
  currentWindow?.webContents.send(IPC.FRAME_EVENTS.MAXIMIZE, {
    isMaximized: currentWindow?.isMaximized()
  })
})

ipcMain.on(IPC.FRAME_EVENTS.MINIMIZE, (event, params) => {
  const currentWindow = BrowserWindow.fromWebContents(event.sender)

  currentWindow?.minimize()
})
