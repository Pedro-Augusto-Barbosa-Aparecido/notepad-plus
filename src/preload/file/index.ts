import { ipcRenderer } from 'electron'
import { IPC } from '../../shared/constants/ipc'

export const FILE_EVENTS = {
  async open() {
    return await ipcRenderer.invoke(IPC.FILE_EVENTS.OPEN, {})
  }
}
