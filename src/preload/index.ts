import { contextBridge } from 'electron'
import { ElectronAPI, electronAPI } from '@electron-toolkit/preload'
import { FRAME_EVENTS } from './frame'
import { FILE_EVENTS } from './file'

declare global {
  export interface Window {
    electron: ElectronAPI
    api: typeof api
  }
}

// Custom APIs for renderer
const api = {
  frame: FRAME_EVENTS,
  file: FILE_EVENTS
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
