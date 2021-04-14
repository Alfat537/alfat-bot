let usepotion = 40
let handler  = async (m, { conn, command, args, usedPrefix }) => {
  let count = args[1]
  count = count ? /all/i.test(count) ? Math.floor(global.DATABASE._data.users[m.sender].potion / count) : parseInt(count) : args[1] ? parseInt(args[1]) : 1
  count = Math.max(1, count)
  if (args.length < 2) return conn.reply(m.chat, usedPrefix + 'use <item> <jumlah>\n\nContoh penggunaan: ' + usedPrefix + 'use potion 1', m)
  let healt = global.DATABASE._data.users[m.sender].healt
  let shop = args[0].toLowerCase()
  if (args[0] === 'potion') {
      if (global.DATABASE._data.users[m.sender].healt < 100) {
          if (global.DATABASE._data.users[m.sender].potion >= count * 1) {
              global.DATABASE._data.users[m.sender].potion -= count * 1
              global.DATABASE._data.users[m.sender].healt += usepotion * count
              conn.reply(m.chat, `Succes memakai ${count} Potion`, m)
          } else conn.reply(m.chat, `potionmu tidak cukup`, m)
      } else conn.reply(m.chat, `Nyawamu sudah penuh`, m)
  }
}

handler.help = ['use <item> <jumlah>']
handler.tags = ['rpg']
handler.command = /^(use)$/i

module.exports = handler
