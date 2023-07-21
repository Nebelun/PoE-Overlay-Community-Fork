import { Injectable } from '@angular/core'
import { IpcRenderer, IpcMain } from 'electron'

// Wraps all variables located in '@electron/remote' into an interface to have type support (in the IDE)
export interface ElectronRemote {
  app: Electron.App;
  autoUpdater: Electron.AutoUpdater;
  BrowserView: typeof Electron.BrowserView;
  BrowserWindow: typeof Electron.BrowserWindow;
  clipboard: Electron.Clipboard;
  contentTracing: Electron.ContentTracing;
  crashReporter: Electron.CrashReporter;
  desktopCapturer: Electron.DesktopCapturer;
  dialog: Electron.Dialog;
  globalShortcut: Electron.GlobalShortcut;
  inAppPurchase: Electron.InAppPurchase;
  ipcMain: Electron.IpcMain;
  Menu: typeof Electron.Menu;
  MenuItem: typeof Electron.MenuItem;
  MessageChannelMain: typeof Electron.MessageChannelMain;
  nativeImage: typeof Electron.nativeImage;
  nativeTheme: Electron.NativeTheme;
  net: Electron.Net;
  netLog: Electron.NetLog;
  Notification: typeof Electron.Notification;
  powerMonitor: Electron.PowerMonitor;
  powerSaveBlocker: Electron.PowerSaveBlocker;
  protocol: Electron.Protocol;
  screen: Electron.Screen;
  session: typeof Electron.session;
  ShareMenu: typeof Electron.ShareMenu;
  shell: Electron.Shell;
  systemPreferences: Electron.SystemPreferences;
  TouchBar: typeof Electron.TouchBar;
  Tray: typeof Electron.Tray;
  webContents: typeof Electron.webContents;
  webFrameMain: typeof Electron.webFrameMain;

  getCurrentWindow(): Electron.BrowserWindow
}

type Electron = typeof Electron

@Injectable({
  providedIn: 'root',
})
export class ElectronProvider {
  private readonly electron: Electron
  private readonly electronRemote: ElectronRemote

  constructor() {
    if (window?.require) {
      this.electron = window.require('electron') as Electron
      this.electronRemote = window.require('@electron/remote') as ElectronRemote
    } else {
      console.warn('window.require not defined.')
    }
  }

  public provideRemote(): ElectronRemote {
    return this.electronRemote
  }

  public provideIpcRenderer(): IpcRenderer {
    return this.electron?.ipcRenderer
  }

  public provideIpcMain(): IpcMain {
    return this.electron?.ipcMain || this.provideRemote()?.ipcMain
  }
}
