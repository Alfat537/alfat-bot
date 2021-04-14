let handler = async (m, { conn }) => {
conn.sendFile(m.chat, './dhamzganz/halohalo.mp3', 'halohalo.mp3', null, m, true)
}

handler.command = new RegExp
handler.customPrefix = /halo|hai/i

module.exports = handler