let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Tutorial Buat Bot WA:
Credit: *~Dhamz*

*[HP]*
1.download dan isntall termux
2.sebelum install bot ketik di termux:
	1.termux-setup-storage
	2.ijinkan penyimpanan
	3.cd storage
	4. LALU LAKUKAN HAL DI BAWAH INI:
1) $pkg install git
2) $pkg install ffmpeg
3) $pkg install imagemagick
4) $pkg install nodejs

Untuk Githubnya..
5) $git clone https://github.com/idhamthoriqbot/bot
6) $ls
7) $cd bot

yang *terakhirr*..
Penginstalannya cuy :)
8) bash install.sh
9) npm i
10) node index.js
11) scan Qr pake hp elu


*[PC]*
1) Download Node.js
2) Install imagemagick (ceklis semuanya)
3) Path FFmpeg (https://youtu.be/04Gf6TEnmjk)
4) buka cmd
5) KETIK Di cmd
	1. git clone https://github.com/idhamthoriqbot/bot
	2. cd bot
	3. npm i
	4. node .
6) scan Qr pake hp elu


`.trim(), m)
}
handler.help = ['tutorial']
handler.tags = ['about']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

