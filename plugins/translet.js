const translate = require('google-translate-api')
let handler = async (m, { conn, command, args, usedPrefix }) => {
    try {
        if (args.length < 1) return conn.reply(m.chat, 'Teksnya mana?', m)
        let textnya = args.join` `
        if (/indonesia|id/i.test(command)) {
            translate('where', {to: 'id'}).then(res => {
                console.log(res.text)
                //=> I speak English
                console.log(res.from.language.iso)
                conn.reply(m.chat, res.text + '\n' + res.from.language.iso, m)
            }).catch(err => {
                console.error(err)
                conn.reply('Bahasa alien kah?')
            })
        }
    } catch (e) {
        console.log(e)
        conn.reply('Error')
    }
}
            
handler.help = ['id']
handler.tags = ['internet']
handler.command = /^(en|inggris|id|indonesia)$/i
module.exports = handler