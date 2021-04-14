let handler = async (m, { conn, usedPrefix }) => {
    let __timers = (new Date - global.DATABASE._data.users[m.sender].lastclaim)
    let _timers = (300000 - __timers)
    let timers = clockString(_timers)
    if (global.DATABASE._data.users[m.sender].healt > 79) {
        if (new Date - global.DATABASE._data.users[m.sender].lastclaim > 300000) {
        let armor = global.DATABASE._data.users[m.sender].armor
        let rubah = global.DATABASE._data.users[m.sender].rubah
        let kuda = global.DATABASE._data.users[m.sender].kuda
        let kucing = global.DATABASE._data.users[m.sender].kucing
        let _healt = (pickRandom(global.healt) - (armor * 5))
        let healt = (_healt - (kucing * 1))
        let exp = (Math.floor(Math.random() * 400) + (kuda * 70))
        let uang = `${Math.floor(Math.random() * 400)}`.trim() 
        let potion = `${Math.floor(Math.random() * 2)}`.trim()
        let diamond = (rubah == 0 ? pickRandom(['0', '1', '0', '1', '0', '1', '0']) : '' || rubah == 1 ? pickRandom(['0', '1', '0', '1']) : '' || rubah == 2 ? pickRandom(['0', '1', '0', '1', '2']) : '' || rubah == 3 ? pickRandom(['0', '1', '0', '2', '2', '0']) : '' || rubah == 4 ? pickRandom(['0', '1', '1', '2', '1', '1', '0']) : '' || rubah == 5 ? pickRandom(['0', '0', '1', '2', '2', '1', '1', '0']) : '' )
        let common = `${Math.floor(Math.random() * 3)}`.trim()
        let uncommon = `${Math.floor(Math.random() * 2)}`.trim()
        let mythic = `${pickRandom(['1', '0', '0', '1'])}`
        let legendary = `${pickRandom(['1', '0', '0', '0'])}`
        let sampah = `${Math.floor(Math.random() * 300)}`.trim()
        let str = `
Nyawa mu berkurang -${healt} karena Kamu telah berpetualang sampai ${pickRandom(['Jepang', 'Korea', 'Bali', 'Amerika', 'Iraq', 'Arab', 'Pakistan', 'German', 'Finlandia', 'Ke bawa dunia mimpi', 'Ujung dunia', 'Mars', 'Bulan', 'Pluto', 'Matahari', 'Hatinya dia', '...'])} dan mendapatkan
*exp:* ${exp} 
*uang:* ${uang}
*Potion:* ${potion} 
*diamond:* ${diamond}
*common crate:* ${common}
*uncommon crate:* ${uncommon}
*mythic crate:* ${mythic}
*legendary crate:* ${legendary}
*sampah:* ${sampah}
`.trim()
        conn.reply(m.chat, str, m)
        global.DATABASE._data.users[m.sender].healt -= healt * 1
        global.DATABASE._data.users[m.sender].exp += exp * 1
        global.DATABASE._data.users[m.sender].money += uang * 1
        global.DATABASE._data.users[m.sender].potion += potion * 1
        global.DATABASE._data.users[m.sender].diamond += diamond * 1
        global.DATABASE._data.users[m.sender].common += common * 1 
        global.DATABASE._data.users[m.sender].uncommon += uncommon * 1
        global.DATABASE._data.users[m.sender].mythic += mythic * 1
        global.DATABASE._data.users[m.sender].legendary += legendary * 1
        global.DATABASE._data.users[m.sender].sampah += sampah * 1
        global.DATABASE._data.users[m.sender].lastclaim = new Date * 1
        } else conn.reply(m.chat, `Anda sudah berpetualang dan kelelahan, silahkan coba *${timers}* lagi`, m)
    } else conn.reply(m.chat, 'Silahkan beli nyawa dulu dengan ketik *' + usedPrefix + 'shop buy potion <jumlah>*\ndan ketik *' + usedPrefix + 'use potion <jumlah>*\n\n_Untuk mendapat money dan potion gratis ketik_ *' + usedPrefix + 'claim*', m)
}
handler.help = ['adventure', 'petualang', 'berpetualang', 'mulung', 'work']
handler.tags = ['rpg']
handler.command = /^(adventure|petualang|berpetualang|mulung|work)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
global.healt = ['100', '99', '98', '97', '96', '95', '94', '93', '92', '91', '90', '89', '88', '87', '86', '85', '84', '83', '82', '81', '80', '79', '78', '77', '76', '75', '74', '73', '72', '71', '70', '69', '68', '67', '66', '65', '64', '63', '62', '61', '60', '59', '58', '57', '56', '55', '54', '53', '52', '51', '50', '100', '95', '90', '89', '100', '99', '98']
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
