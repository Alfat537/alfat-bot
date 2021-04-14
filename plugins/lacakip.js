let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Mana ip nya nyet', m)

	axios.get(`https://videfikri.com/api/iplookup/?ip=${text}`).then ((res) => {
	 	let hasil = `*HASIL LOOKUP IP*\n\n*IP*			: ${res.data.result.ip}\n*Country*		: ${res.data.result.country}\n*Country code*	: ${res.data.result.country_code}\n*Region*		: ${res.data.result.region_name}\n*Kota*		: ${res.data.result.city}\n*ISP*			: ${res.data.result.isp}\n*Time Zone*	: ${res.data.result.timezone}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['ip'].map(v => v + ' <ipnya>')
handler.tags = ['hack']
handler.command = /^(ip)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler