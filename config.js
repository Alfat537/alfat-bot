global.owner = ['6285294959195'] // Put your number here
global.mods = ['6281390658325', '6281393345280'] // Want some help?
global.prems = ['6283820430102', '6285285796181', '6285236085595', '6288287243319', '601123665591', '6289686137369', '6285243051201'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'belilahanjink!!'
}

// Sticker WM
global.packname = 'Kalo mau nyolong pake Surat Izin Nyolong Stiker lah :v'
global.author = 'Fatih Bot'

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})