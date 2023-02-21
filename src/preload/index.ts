import { contextBridge, ipcRenderer } from 'electron'
import { ElectronAPI, electronAPI } from '@electron-toolkit/preload'
import { IPC } from '../shared/constants/ipc'

declare global {
  export interface Window {
    electron: ElectronAPI
    api: typeof api
  }
}

// Custom APIs for renderer
const api = {
  maximize() {
    ipcRenderer.send(IPC.FRAME_EVENTS.MAXIMIZE, {})
  },

  minimize() {
    ipcRenderer.send(IPC.FRAME_EVENTS.MINIMIZE, {})
  },

  close() {
    ipcRenderer.send(IPC.FRAME_EVENTS.CLOSE, {})
  }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('api', api)
    contextBridge.exposeInMainWorld('electron', electronAPI)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.api = api
}
