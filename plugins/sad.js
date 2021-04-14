let handler = async (m, { conn }) => {
conn.sendFile(m.chat, './dhamzganz/tayo.mp3', 'tayo.mp3', null, m, true)
}

handler.command = new RegExp
handler.customPrefix = /sad|sedih|mengsedih|meng sedih/i

module.exports = handler