let handler = async (m, { conn }) => {
conn.sendFile(m.chat, './dhamzganz/inggris.mp3', 'inggris.mp3', null, m, true)
}

handler.command = new RegExp
handler.customPrefix = /why|where|wait/i

module.exports = handler