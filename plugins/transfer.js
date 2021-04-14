let handler = async (m, { conn, args, usedPrefix }) => {
    try {
        if (args.length < 3) {
            conn.reply(m.chat, `${usedPrefix}transfer <type> <jumlah> <@tag>\ncontoh penggunaan *${usedPrefix}transfer money 100 @tag*`.trim(), m)
        } else {
            let count = args[1] && args[1].length > 0 ? Math.min(9999999, Math.max(parseInt(args[1]), 1)) : Math.min(1)
            let b = args[2].replace(/[@]/g, '')
            let tagg = (b + '@s.whatsapp.net')
            if (args[0] === 'money') {
                if (global.DATABASE._data.users[m.sender].money >= count * 1) {
                    global.DATABASE._data.users[m.sender].money -= count * 1
                    global.DATABASE._data.users[tagg].money += count * 1
                    conn.reply(m.chat, `Berhasil mentransfer money sebesar ${count}`.trim(), m)
                } else conn.reply(m.chat, `Uang kamu tidak mencukupi untuk mentransfer Money sebesar ${count}`.trim(), m)
            }
            if (args[0] === 'potion') {
                if (global.DATABASE._data.users[m.sender].potion >= count * 1) {
                    global.DATABASE._data.users[m.sender].potion -= count * 1
                    global.DATABASE._data.users[tagg].potion += count * 1
                    conn.reply(m.chat, `Berhasil mentransfer ${count} Potion`.trim(), m)
                } else conn.reply(m.chat, `Potion kamu tidak cukup`.trim(), m)
            }
            if (args[0] === 'sampah') {
                if (global.DATABASE._data.users[m.sender].sampah >= count * 1) {
                    global.DATABASE._data.users[m.sender].sampah -= count * 1
                    global.DATABASE._data.users[tagg].sampah += count * 1
                    conn.reply(m.chat, `Berhasil mentransfer ${count} Sampah`.trim(), m)
                } else conn.reply(m.chat, `Sampah kamu tidak cukup`.trim(), m)
            }
            if (args[0] === 'diamond') {
                if (global.DATABASE._data.users[m.sender].diamond >= count * 1) {
                    global.DATABASE._data.users[m.sender].diamond -= count * 1
                    global.DATABASE._data.users[tagg].diamond += count * 1
                    conn.reply(m.chat, `Berhasil mentransfer ${count} Diamond`.trim(), m)
                } else conn.reply(m.chat, `Diamond kamu kamu tidak cukup`.trim(), m)
            }
            if (args[0] === 'common') {
                if (global.DATABASE._data.users[m.sender].common >= count * 1) {
                    global.DATABASE._data.users[m.sender].common -= count * 1
                    global.DATABASE._data.users[tagg].common += count * 1
                    conn.reply(m.chat, `Berhasil mentransfer ${count} Common Crate`.trim(), m)
                } else conn.reply(m.chat, `Common crate kamu kamu tidak cukup`.trim(), m)
            }
            if (args[0] === 'uncommon') {
                if (global.DATABASE._data.users[m.sender].uncommon >= count * 1) {
                    global.DATABASE._data.users[m.sender].uncommon -= count * 1
                    global.DATABASE._data.users[tagg].uncommon += count * 1
                    conn.reply(m.chat, `Berhasil mentransfer ${count} Uncommon Crate`.trim(), m)
                } else conn.reply(m.chat, `Uncommon crate kamu kamu tidak cukup`.trim(), m)
            }
            if (args[0] === 'mythic') {
                if (global.DATABASE._data.users[m.sender].mythic >= count * 1) {
                    global.DATABASE._data.users[m.sender].mythic -= count * 1
                    global.DATABASE._data.users[tagg].mythic += count * 1
                    conn.reply(m.chat, `Berhasil mentransfer ${count} Mythic crate`.trim(), m)
                } else conn.reply(m.chat, `Mythic crate kamu kamu tidak cukup`.trim(), m)
            }
            if (args[0] === 'legendary') {
                if (global.DATABASE._data.users[m.sender].legendary >= count * 1) {
                    global.DATABASE._data.users[m.sender].legendary -= count * 1
                    global.DATABASE._data.users[tagg].legendary += count * 1
                    conn.reply(m.chat, `Berhasil mentransfer ${count} Legendary crate`.trim(), m)
                } else conn.reply(m.chat, `Legendary crate kamu kamu tidak cukup`.trim(), m)
            }
        }
    } catch (e) {
        conn.reply(m.chat, `Format yang anda gunakan salah\n\nGunakan format ${usedPrefix}transfer <type> <jumlah> <@tag>\ncontoh penggunaan: *${usedPrefix}transfer money 100 @tag*`.trim(), m)
        console.log(e)
    }
}
    
handler.help = ['transfer <Args>']
handler.tags = ['rpg']
handler.command = /^(transfer)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.money = 0

module.exports = handler
