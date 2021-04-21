const { app, BrowserWindow, autoUpdater} = require('electron')



function createWindow () {
const mainWindow = new BrowserWindow({
    width: 1300,
    height: 900
})

mainWindow.loadFile('view/index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

autoUpdater.setFeedURL('https://localhost:3000')
autoUpdater.checkForUpdates()