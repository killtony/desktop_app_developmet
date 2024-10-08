// const { app, BrowserWindow } = require("electron");
import {app, BrowserWindow } from "electron";
// const serve = require("electron-serve");
import serve from "electron-serve";
// const path = require("path");
import path from "path";
const __dirname = path.resolve();
console.log(__dirname);

const appServe = app.isPackaged ? serve({
  directory: path.join(__dirname, "../out")
}) : null;

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1920,
    height: 1020,
    webPreferences: {
      preload: path.join(__dirname, "main/preload.js")
    }
  });

  if (app.isPackaged) {
    appServe(win).then(() => {
      win.loadURL("app://-");
    });
  } else {
    win.loadURL("http://localhost:3000");
    // win.webContents.openDevTools();
    win.webContents.on("did-fail-load", (e, code, desc) => {
      win.webContents.reloadIgnoringCache();
    });
  }
}

app.on("ready", () => {
    createWindow();
});

app.on("window-all-closed", () => {
    if(process.platform !== "darwin"){
        app.quit();
    }
});