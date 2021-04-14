let { Presence, GroupSettingChange } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, args, usedPrefix, command }) => {
	if(!args || !args[0]) {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*Format salah! Contoh :*\n\n	*○ ${usedPrefix + command} close*\n	*○ ${usedPrefix + command} open*`, m)
	} else if(args[0] == 'open') {
		conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, false)
		conn.reply(m.chat, `		*「 GRUP BUKA 」*\n\n		SELAMAT PAGI DUNIA TIPU TIPU:V`, m)
	} else if(args[0] == 'close') {
		conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, true)
		conn.reply(m.chat, `		*「 GRUP TUTUP 」*\n\n		TIDUR DULU BYE:)`, m)
	} else {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*Format salah! Contoh :*\n\n	*○ ${usedPrefix + command} close*\n	*○ ${usedPrefix + command} open*`, m)
	} 
}
handler.help = ['grup *open / close*']
handler.tags = ['group']
handler.command = /^(grup)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.fail = null
handler.exp = 0
module.exports = handler