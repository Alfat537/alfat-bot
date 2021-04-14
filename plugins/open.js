let handler = async (m, { conn, args, usedPrefix }) => {
    let bruh = `${usedPrefix}open <crate name> < 1 | 10 | 100 | 1000 >\n\nContoh penggunaan: *${usedPrefix}open common 10*\n\nlist crate:\n*common*\n*uncommon*\n*mythic*\n*legendary*`
    let _lmao = args[0]
    let Lmao = `Hanya support 1, 10, 100, 1000\nContoh penggunaan: *${usedPrefix}open ${_lmao} 10*`
    let type = (args[0] || '').toLowerCase()
    let jumlah = (args[1] || '').toLowerCase()
    switch (type) {
        case 'common':
            switch (jumlah) {
                case '1':
                case 'crate':
                    let cm = `${Math.floor(Math.random() * 50)}`.trim()
                    let cc = `${Math.floor(Math.random() * 2)}`.trim()
                    let cp = `${Math.floor(Math.random() * 1)}`.trim()
                    let ce = `${Math.floor(Math.random() * 100)}`.trim()
                    let cu = `${Math.floor(Math.random() * 1)}`.trim()
                    let Hcom = `
Anda telah membuka *Common crate* dan mendapatkan:
Money: ${cm}
Exp: ${ce} *exp*
Potion: ${cp} *potion*
common crate: ${cc} *crate*
Uncommon crate: ${cu} *crate*
`.trim()
                    if (global.DATABASE._data.users[m.sender].common >= 1) {
                        global.DATABASE._data.users[m.sender].common -= 1
                        global.DATABASE._data.users[m.sender].money += cm * 1
                        global.DATABASE._data.users[m.sender].exp += ce * 1
                        global.DATABASE._data.users[m.sender].potion += cp * 1
                        global.DATABASE._data.users[m.sender].uncommon += cu * 1
                        global.DATABASE._data.users[m.sender].common += cc * 1
                        conn.reply(m.chat, Hcom, m)
                    } else conn.reply(m.chat, 'Common crate anda tidak cukup', m)
                    break
                case '10':
                    let cm1 = `${Math.floor(Math.random() * 200)}`.trim()
                    let cc1 = `${Math.floor(Math.random() * 5)}`.trim()
                    let cp1 = `${Math.floor(Math.random() * 2)}`.trim()
                    let ce1 = `${Math.floor(Math.random() * 300)}`.trim()
                    let cu1 = `${Math.floor(Math.random() * 3)}`.trim()
                    let Hcom1 = `
Anda telah membuka *Common crate* dan mendapatkan:
Money: ${cm1}
Exp: ${ce1} *exp*
Potion: ${cp1} *potion*
common crate: ${cc1} *crate*
Uncommon crate: ${cu1} *crate*
`.trim()
                    if (global.DATABASE._data.users[m.sender].common >= 10) {
                        global.DATABASE._data.users[m.sender].common -= 10
                        global.DATABASE._data.users[m.sender].money += cm1 * 1
                        global.DATABASE._data.users[m.sender].exp += ce1 * 1
                        global.DATABASE._data.users[m.sender].potion += cp1 * 1
                        global.DATABASE._data.users[m.sender].uncommon += cu1 * 1
                        global.DATABASE._data.users[m.sender].common += cc1 * 1
                        conn.reply(m.chat, Hcom1, m)
                    } else conn.reply(m.chat, 'Common crate anda tidak cukup', m)
                    break
                case '100':
                    let cm2 = `${Math.floor(Math.random() * 3000)}`.trim()
                    let cc2 = `${Math.floor(Math.random() * 50)}`.trim()
                    let cp2 = `${Math.floor(Math.random() * 20)}`.trim()
                    let ce2 = `${Math.floor(Math.random() * 4000)}`.trim()
                    let cu2 = `${Math.floor(Math.random() * 20)}`.trim()
                    let Hcom2 = `
Anda telah membuka *Common crate* dan mendapatkan:
Money: ${cm2}
Exp: ${ce2} *exp*
Potion: ${cp2} *potion*
common crate: ${cc2} *crate*
Uncommon crate: ${cu2} *crate*
`.trim()
                    if (global.DATABASE._data.users[m.sender].common >= 100) {
                        global.DATABASE._data.users[m.sender].common -= 100
                        global.DATABASE._data.users[m.sender].money += cm2 * 1
                        global.DATABASE._data.users[m.sender].exp += ce2 * 1
                        global.DATABASE._data.users[m.sender].potion += cp2 * 1
                        global.DATABASE._data.users[m.sender].uncommon += cu2 * 1
                        global.DATABASE._data.users[m.sender].common += cc2 * 1
                        conn.reply(m.chat, Hcom2, m)
                    } else conn.reply(m.chat, 'Common crate anda tidak cukup', m)
                    break
                case '1000':
                    let cm3 = `${Math.floor(Math.random() * 50000)}`.trim()
                    let cc3 = `${Math.floor(Math.random() * 300)}`.trim()
                    let cp3 = `${Math.floor(Math.random() * 100)}`.trim()
                    let ce3 = `${Math.floor(Math.random() * 60000)}`.trim()
                    let cu3 = `${Math.floor(Math.random() * 100)}`.trim()
                    let Hcom3 = `
Anda telah membuka *Common crate* dan mendapatkan:
Money: ${cm3}
Exp: ${ce3} *exp*
Potion: ${cp3} *potion*
common crate: ${cc3} *crate*
Uncommon crate: ${cu3} *crate*
`.trim()
                    if (global.DATABASE._data.users[m.sender].common >= 1000) {
                        global.DATABASE._data.users[m.sender].common -= 1000
                        global.DATABASE._data.users[m.sender].money += cm3 * 1
                        global.DATABASE._data.users[m.sender].exp += ce3 * 1
                        global.DATABASE._data.users[m.sender].potion += cp3 * 1
                        global.DATABASE._data.users[m.sender].uncommon += cu3 * 1
                        global.DATABASE._data.users[m.sender].common += cc3 * 1
                        conn.reply(m.chat, Hcom3, m)
                    } else conn.reply(m.chat, 'Common crate anda tidak cukup', m)
                    break
                default:
                    return conn.reply(m.chat, Lmao, m)
            }
            break
        case 'uncommon':
            switch (jumlah) {
                case '1':
                case 'crate':
                    let ud = `${Math.floor(Math.random() * 2)}`.trim()
                    let ue = `${Math.floor(Math.random() * 100)}`.trim()
                    let um = `${Math.floor(Math.random() * 150)}`.trim()
                    let up = `${Math.floor(Math.random() * 2)}`.trim()
                    let umc = `${Math.floor(Math.random() * 1)}`.trim()
                    let uu = `${Math.floor(Math.random() * 2)}`.trim()
                    let uc = `${Math.floor(Math.random() * 3)}`.trim()
                    let Hun = `
Anda telah membuka *Uncommon crate* dan mendapatkan:
Money: ${um}
Exp: ${ue} *exp*
Diamond: ${ud} *diamond*
Potion: ${up} *potion*
Common crate: ${uc} *crate*
Uncommon crate: ${uu} *crate*
Mythic crate: ${umc} *crate*
`.trim()
                    if (global.DATABASE._data.users[m.sender].uncommon >= 1) {
                        global.DATABASE._data.users[m.sender].uncommon -= 1
                        global.DATABASE._data.users[m.sender].money += um * 1
                        global.DATABASE._data.users[m.sender].diamond += ud * 1
                        global.DATABASE._data.users[m.sender].exp += ue * 1
                        global.DATABASE._data.users[m.sender].potion += up * 1
                        global.DATABASE._data.users[m.sender].mythic += umc * 1
                        global.DATABASE._data.users[m.sender].common += uc * 1
                        global.DATABASE._data.users[m.sender].uncommon += uu * 1
                        conn.reply(m.chat, Hun, m)
                    } else conn.reply(m.chat, 'Uncommon crate anda tidak cukup', m)
                    break
                case '10':
                    let ud1 = `${Math.floor(Math.random() * 4)}`.trim()
                    let ue1 = `${Math.floor(Math.random() * 250)}`.trim()
                    let um1 = `${Math.floor(Math.random() * 200)}`.trim()
                    let up1 = `${Math.floor(Math.random() * 3)}`.trim()
                    let umc1 = `${Math.floor(Math.random() * 2)}`.trim()
                    let uu1 = `${Math.floor(Math.random() * 3)}`.trim()
                    let uc1 = `${Math.floor(Math.random() * 5)}`.trim()
                    let Hun1 = `
Anda telah membuka *Uncommon crate* dan mendapatkan:
Money: ${um1}
Exp: ${ue1} *exp*
Diamond: ${ud1} *diamond*
Potion: ${up1} *potion*
Common crate: ${uc1} *crate*
Uncommon crate: ${uu1} *crate*
Mythic crate: ${umc1} *crate*
`.trim()
                    if (global.DATABASE._data.users[m.sender].uncommon >= 10) {
                        global.DATABASE._data.users[m.sender].uncommon -= 10
                        global.DATABASE._data.users[m.sender].money += um1 * 1
                        global.DATABASE._data.users[m.sender].diamond += ud1 * 1
                        global.DATABASE._data.users[m.sender].exp += ue1 * 1
                        global.DATABASE._data.users[m.sender].potion += up1 * 1
                        global.DATABASE._data.users[m.sender].mythic += umc1 * 1
                        global.DATABASE._data.users[m.sender].common += uc1 * 1
                        global.DATABASE._data.users[m.sender].uncommon += uu1 * 1
                        conn.reply(m.chat, Hun1, m)
                    } else conn.reply(m.chat, 'Uncommon crate anda tidak cukup', m)
                    break
                case '100':
                    let ud2 = `${Math.floor(Math.random() * 15)}`.trim()
                    let ue2 = `${Math.floor(Math.random() * 5000)}`.trim()
                    let um2 = `${Math.floor(Math.random() * 4500)}`.trim()
                    let up2 = `${Math.floor(Math.random() * 20)}`.trim()
                    let umc2 = `${Math.floor(Math.random() * 10)}`.trim()
                    let uu2 = `${Math.floor(Math.random() * 25)}`.trim()
                    let uc2 = `${Math.floor(Math.random() * 50)}`.trim()
                    let Hun2 = `
Anda telah membuka *Uncommon crate* dan mendapatkan:
Money: ${um2}
Exp: ${ue2} *exp*
Diamond: ${ud2} *diamond*
Potion: ${up2} *potion*
Common crate: ${uc2} *crate*
Uncommon crate: ${uu2} *crate*
Mythic crate: ${umc2} *crate*
`.trim()
                    if (global.DATABASE._data.users[m.sender].uncommon >= 100) {
                        global.DATABASE._data.users[m.sender].uncommon -= 100
                        global.DATABASE._data.users[m.sender].money += um2 * 1
                        global.DATABASE._data.users[m.sender].diamond += ud2 * 1
                        global.DATABASE._data.users[m.sender].exp += ue2 * 1
                        global.DATABASE._data.users[m.sender].potion += up2 * 1
                        global.DATABASE._data.users[m.sender].mythic += umc2 * 1
                        global.DATABASE._data.users[m.sender].common += uc2 * 1
                        global.DATABASE._data.users[m.sender].uncommon += uu2 * 1
                        conn.reply(m.chat, Hun2, m)
                    } else conn.reply(m.chat, 'Uncommon crate anda tidak cukup', m)
                    break
                case '1000':
                    let ud3 = `${Math.floor(Math.random() * 30)}`.trim()
                    let ue3 = `${Math.floor(Math.random() * 10000)}`.trim()
                    let um3 = `${Math.floor(Math.random() * 8000)}`.trim()
                    let up3 = `${Math.floor(Math.random() * 40)}`.trim()
                    let umc3 = `${Math.floor(Math.random() * 20)}`.trim()
                    let uu3 = `${Math.floor(Math.random() * 50)}`.trim()
                    let uc3 = `${Math.floor(Math.random() * 100)}`.trim()
                    let Hun3 = `
Anda telah membuka *Uncommon crate* dan mendapatkan:
Money: ${um3}
Exp: ${ue3} *exp*
Diamond: ${ud3} *diamond*
Potion: ${up3} *potion*
Common crate: ${uc3} *crate*
Uncommon crate: ${uu3} *crate*
Mythic crate: ${umc3} *crate*
`.trim()
                    if (global.DATABASE._data.users[m.sender].uncommon >= 1000) {
                        global.DATABASE._data.users[m.sender].uncommon -= 1000
                        global.DATABASE._data.users[m.sender].money += um3 * 1
                        global.DATABASE._data.users[m.sender].diamond += ud3 * 1
                        global.DATABASE._data.users[m.sender].exp += ue3 * 1
                        global.DATABASE._data.users[m.sender].potion += up3 * 1
                        global.DATABASE._data.users[m.sender].mythic += umc3 * 1
                        global.DATABASE._data.users[m.sender].common += uc3 * 1
                        global.DATABASE._data.users[m.sender].uncommon += uu3 * 1
                        conn.reply(m.chat, Hun3, m)
                    } else conn.reply(m.chat, 'Uncommon crate anda tidak cukup', m)
                    break
                default:
                    return conn.reply(m.chat, Lmao ,m)
            }
            break
        case 'mythic':
            switch (jumlah) {
                case '1':
                case 'crate':
                    let mm = `${Math.floor(Math.random() * 200)}`.trim()
                    let mmm = `${pickRandom(['0', '0', '1', '0'])}`.trim()
                    let me = `${Math.floor(Math.random() * 250)}`.trim()
                    let mp = `${Math.floor(Math.random() * 3)}`.trim()
                    let mu = `${Math.floor(Math.random() * 3)}`.trim()
                    let mc = `${Math.floor(Math.random() * 5)}`.trim()
                    let ml = `${pickRandom(['0', '0', '1', '0',  '0'])}`.trim()
                    let md = `${Math.floor(Math.random() * 3)}`.trim()
                    let Mychat = `
Anda telah membuka *Mythic crate* dan mendapatkan:
Money: ${mm}
Exp: ${me} *exp*
Diamond: ${md} *diamond*
Potion: ${mp} *potion*
Common crate: ${mc} *crate*
Uncommon crate: ${mu} *crate*
Mythic crate: ${mmm} *crate*
Legendary crate: ${ml} *crate*
`.trim()
                    if (global.DATABASE._data.users[m.sender].mythic >= 1) {
                        global.DATABASE._data.users[m.sender].mythic -= 1
                        global.DATABASE._data.users[m.sender].money += mm * 1
                        global.DATABASE._data.users[m.sender].diamond += md * 1
                        global.DATABASE._data.users[m.sender].exp += me * 1
                        global.DATABASE._data.users[m.sender].potion += mp * 1
                        global.DATABASE._data.users[m.sender].mythic += mmm * 1
                        global.DATABASE._data.users[m.sender].common += mc * 1
                        global.DATABASE._data.users[m.sender].uncommon += mu * 1
                        global.DATABASE._data.users[m.sender].legendary += ml * 1
                        conn.reply(m.chat, Mychat, m)
                    } else conn.reply(m.chat, 'Mythic crate anda tidak cukup', m)
                    break
                case '10':
                    let mm1 = `${Math.floor(Math.random() * 2000)}`.trim()
                    let mmm1 = `${Math.floor(Math.random() * 4)}`.trim()
                    let me1 = `${Math.floor(Math.random() * 2500)}`.trim()
                    let mp1 = `${Math.floor(Math.random() * 5)}`.trim()
                    let mu1 = `${Math.floor(Math.random() * 6)}`.trim()
                    let mc1 = `${Math.floor(Math.random() * 9)}`.trim()
                    let ml1 = `${Math.floor(Math.random() * 1)}`.trim()
                    let md1 = `${Math.floor(Math.random() * 5)}`.trim()
                    let Mychat1 = `
Anda telah membuka *Mythic crate* dan mendapatkan:
Money: ${mm1}
Exp: ${me1} *exp*
Diamond: ${md1} *diamond*
Potion: ${mp1} *potion*
Common crate: ${mc1} *crate*
Uncommon crate: ${mu1} *crate*
Mythic crate: ${mmm1} *crate*
Legendary crate: ${ml1} *crate*
`.trim()
                    if (global.DATABASE._data.users[m.sender].mythic >= 10) {
                        global.DATABASE._data.users[m.sender].mythic -= 10
                        global.DATABASE._data.users[m.sender].money += mm1 * 1
                        global.DATABASE._data.users[m.sender].diamond += md1 * 1
                        global.DATABASE._data.users[m.sender].exp += me1 * 1
                        global.DATABASE._data.users[m.sender].potion += mp1 * 1
                        global.DATABASE._data.users[m.sender].mythic += mmm1 * 1
                        global.DATABASE._data.users[m.sender].common += mc1 * 1
                        global.DATABASE._data.users[m.sender].uncommon += mu1 * 1
                        global.DATABASE._data.users[m.sender].legendary += ml1 * 1
                        conn.reply(m.chat, Mychat1, m)
                    } else conn.reply(m.chat, 'Mythic crate anda tidak cukup', m)
                    break
                case '100':
                    let mm2 = `${Math.floor(Math.random() * 25000)}`.trim()
                    let mmm2 = `${Math.floor(Math.random() * 10)}`.trim()
                    let me2 = `${Math.floor(Math.random() * 30000)}`.trim()
                    let mp2 = `${Math.floor(Math.random() * 50)}`.trim()
                    let mu2 = `${Math.floor(Math.random() * 80)}`.trim()
                    let mc2 = `${Math.floor(Math.random() * 150)}`.trim()
                    let ml2 = `${Math.floor(Math.random() * 6)}`.trim()
                    let md2 = `${Math.floor(Math.random() * 20)}`.trim()
                    let Mychat2 = `
Anda telah membuka *Mythic crate* dan mendapatkan:
Money: ${mm2}
Exp: ${me2} *exp*
Diamond: ${md2} *diamond*
Potion: ${mp2} *potion*
Common crate: ${mc2} *crate*
Uncommon crate: ${mu2} *crate*
Mythic crate: ${mmm2} *crate*
Legendary crate: ${ml2} *crate*
`.trim()
                    if (global.DATABASE._data.users[m.sender].mythic >= 100) {
                        global.DATABASE._data.users[m.sender].mythic -= 100
                        global.DATABASE._data.users[m.sender].money += mm2 * 1
                        global.DATABASE._data.users[m.sender].diamond += md2 * 1
                        global.DATABASE._data.users[m.sender].exp += me2 * 1
                        global.DATABASE._data.users[m.sender].potion += mp2 * 1
                        global.DATABASE._data.users[m.sender].mythic += mmm2 * 1
                        global.DATABASE._data.users[m.sender].common += mc2 * 1
                        global.DATABASE._data.users[m.sender].uncommon += mu2 * 1
                        global.DATABASE._data.users[m.sender].legendary += ml2 * 1
                        conn.reply(m.chat, Mychat2, m)
                    } else conn.reply(m.chat, 'Mythic crate anda tidak cukup', m)
                    break
                case '1000':
                    let mm3 = `${Math.floor(Math.random() * 200000)}`.trim()
                    let mmm3 = `${Math.floor(Math.random() * 50)}`.trim()
                    let me3 = `${Math.floor(Math.random() * 300000)}`.trim()
                    let mp3 = `${Math.floor(Math.random() * 70)}`.trim()
                    let mu3 = `${Math.floor(Math.random() * 200)}`.trim()
                    let mc3 = `${Math.floor(Math.random() * 500)}`.trim()
                    let ml3 = `${Math.floor(Math.random() * 10)}`.trim()
                    let md3 = `${Math.floor(Math.random() * 30)}`.trim()
                    let Mychat3 = `
Anda telah membuka *Mythic crate* dan mendapatkan:
Money: ${mm3}
Exp: ${me3} *exp*
Diamond: ${md3} *diamond*
Potion: ${mp3} *potion*
Common crate: ${mc3} *crate*
Uncommon crate: ${mu3} *crate*
Mythic crate: ${mmm3} *crate*
Legendary crate: ${ml3} *crate*
`.trim()
                    if (global.DATABASE._data.users[m.sender].mythic >= 1000) {
                        global.DATABASE._data.users[m.sender].mythic -= 1000
                        global.DATABASE._data.users[m.sender].money += mm3 * 1
                        global.DATABASE._data.users[m.sender].diamond += md3 * 1
                        global.DATABASE._data.users[m.sender].exp += me3 * 1
                        global.DATABASE._data.users[m.sender].potion += mp3 * 1
                        global.DATABASE._data.users[m.sender].mythic += mmm3 * 1
                        global.DATABASE._data.users[m.sender].common += mc3 * 1
                        global.DATABASE._data.users[m.sender].uncommon += mu3 * 1
                        global.DATABASE._data.users[m.sender].legendary += ml3 * 1
                        conn.reply(m.chat, Mychat3, m)
                    } else conn.reply(m.chat, 'Mythic crate anda tidak cukup', m)
                    break
                default:
                    return conn.reply(m.chat, Lmao, m)
            }
            break
        case 'legendary':
            switch (jumlah) {
                case '1':
                case 'crate':
                    let lm = `${Math.floor(Math.random() * 450)}`.trim()
                    let le = `${Math.floor(Math.random() * 550)}`.trim()
                    let lp = `${Math.floor(Math.random() * 5)}`.trim()
                    let lu = `${Math.floor(Math.random() * 7)}`.trim()
                    let lc = `${Math.floor(Math.random() * 10)}`.trim()
                    let ll = `${pickRandom(['0', '0', '1', '0'])}`.trim()
                    let ld = `${Math.floor(Math.random() * 5)}`.trim()
                    let lmm = `${pickRandom(['0', '1', '0', '1', '0', '0'])}`.trim()
                    let Lechat = `
Anda telah membuka *Legendary crate* dan mendapatkan:
Money: ${lm}
Exp: ${le} *exp*
Diamond: ${ld} *diamond*
Potion: ${lp} *potion*
Common crate: ${lc} *crate*
Uncommon crate: ${lu} *crate*
Mythic crate: ${lmm} *crate*
Legendary crate: ${ll} *crate*
`.trim()  
                    if (global.DATABASE._data.users[m.sender].legendary >= 1) {
                        global.DATABASE._data.users[m.sender].legendary -= 1
                        global.DATABASE._data.users[m.sender].money += lm * 1
                        global.DATABASE._data.users[m.sender].diamond += ld * 1
                        global.DATABASE._data.users[m.sender].exp += le * 1
                        global.DATABASE._data.users[m.sender].potion += lp * 1
                        global.DATABASE._data.users[m.sender].mythic += lmm * 1
                        global.DATABASE._data.users[m.sender].common += lc * 1
                        global.DATABASE._data.users[m.sender].uncommon += lu * 1
                        global.DATABASE._data.users[m.sender].legendary += ll * 1
                        conn.reply(m.chat, Lechat, m)
                    } else conn.reply(m.chat, 'Legendary crate anda tidak cukup', m)
                    break
                case '10':
                    let lm1 = `${Math.floor(Math.random() * 5000)}`.trim()
                    let le1 = `${Math.floor(Math.random() * 6000)}`.trim()
                    let lp1 = `${Math.floor(Math.random() * 30)}`.trim()
                    let lu1 = `${Math.floor(Math.random() * 50)}`.trim()
                    let lc1 = `${Math.floor(Math.random() * 75)}`.trim()
                    let ll1 = `${Math.floor(Math.random() * 2)}`.trim()
                    let ld1 = `${Math.floor(Math.random() * 20)}`.trim()
                    let lmm1 = `${Math.floor(Math.random() * 5)}`.trim()
                    let Lechat1 = `
Anda telah membuka *Legendary crate* dan mendapatkan:
Money: ${lm1}
Exp: ${le1} *exp*
Diamond: ${ld1} *diamond*
Potion: ${lp1} *potion*
Common crate: ${lc1} *crate*
Uncommon crate: ${lu1} *crate*
Mythic crate: ${lmm1} *crate*
Legendary crate: ${ll1} *crate*
`.trim()  
                    if (global.DATABASE._data.users[m.sender].legendary >= 10) {
                        global.DATABASE._data.users[m.sender].legendary -= 10
                        global.DATABASE._data.users[m.sender].money += lm1 * 1
                        global.DATABASE._data.users[m.sender].diamond += ld1 * 1
                        global.DATABASE._data.users[m.sender].exp += le1 * 1
                        global.DATABASE._data.users[m.sender].potion += lp1 * 1
                        global.DATABASE._data.users[m.sender].mythic += lmm1 * 1
                        global.DATABASE._data.users[m.sender].common += lc1 * 1
                        global.DATABASE._data.users[m.sender].uncommon += lu1 * 1
                        global.DATABASE._data.users[m.sender].legendary += ll1 * 1
                        conn.reply(m.chat, Lechat1, m)
                    } else conn.reply(m.chat, 'Legendary crate anda tidak cukup', m)
                    break
                case '100':
                    let lm2 = `${Math.floor(Math.random() * 70000)}`.trim()
                    let le2 = `${Math.floor(Math.random() * 100000)}`.trim()
                    let lp2 = `${Math.floor(Math.random() * 100)}`.trim()
                    let lu2 = `${Math.floor(Math.random() * 200)}`.trim()
                    let lc2 = `${Math.floor(Math.random() * 500)}`.trim()
                    let ll2 = `${Math.floor(Math.random() * 6)}`.trim()
                    let ld2 = `${Math.floor(Math.random() * 50)}`.trim()
                    let lmm2 = `${Math.floor(Math.random() * 11)}`.trim()
                    let Lechat2 = `
Anda telah membuka *Legendary crate* dan mendapatkan:
Money: ${lm2}
Exp: ${le2} *exp*
Diamond: ${ld2} *diamond*
Potion: ${lp2} *potion*
Common crate: ${lc2} *crate*
Uncommon crate: ${lu2} *crate*
Mythic crate: ${lmm2} *crate*
Legendary crate: ${ll2} *crate*
`.trim()  
                    if (global.DATABASE._data.users[m.sender].legendary >= 100) {
                        global.DATABASE._data.users[m.sender].legendary -= 100
                        global.DATABASE._data.users[m.sender].money += lm2 * 1
                        global.DATABASE._data.users[m.sender].diamond += ld2 * 1
                        global.DATABASE._data.users[m.sender].exp += le2 * 1
                        global.DATABASE._data.users[m.sender].potion += lp2 * 1
                        global.DATABASE._data.users[m.sender].mythic += lmm2 * 1
                        global.DATABASE._data.users[m.sender].common += lc2 * 1
                        global.DATABASE._data.users[m.sender].uncommon += lu2 * 1
                        global.DATABASE._data.users[m.sender].legendary += ll2 * 1
                        conn.reply(m.chat, Lechat2, m)
                    } else conn.reply(m.chat, 'Legendary crate anda tidak cukup', m)
                    break
                case '1000':
                    let lm3 = `${Math.floor(Math.random() * 1000000)}`.trim()
                    let le3 = `${Math.floor(Math.random() * 1500000)}`.trim()
                    let lp3 = `${Math.floor(Math.random() * 250)}`.trim()
                    let lu3 = `${Math.floor(Math.random() * 500)}`.trim()
                    let lc3 = `${Math.floor(Math.random() * 1000)}`.trim()
                    let ll3 = `${Math.floor(Math.random() * 21)}`.trim()
                    let ld3 = `${Math.floor(Math.random() * 200)}`.trim()
                    let lmm3 = `${Math.floor(Math.random() * 80)}`.trim()
                    let Lechat3 = `
Anda telah membuka *Legendary crate* dan mendapatkan:
Money: ${lm3}
Exp: ${le3} *exp*
Diamond: ${ld3} *diamond*
Potion: ${lp3} *potion*
Common crate: ${lc3} *crate*
Uncommon crate: ${lu3} *crate*
Mythic crate: ${lmm3} *crate*
Legendary crate: ${ll3} *crate*
`.trim()  
                    if (global.DATABASE._data.users[m.sender].legendary >= 1000) {
                        global.DATABASE._data.users[m.sender].legendary -= 1000
                        global.DATABASE._data.users[m.sender].money += lm3 * 1
                        global.DATABASE._data.users[m.sender].diamond += ld3 * 1
                        global.DATABASE._data.users[m.sender].exp += le3 * 1
                        global.DATABASE._data.users[m.sender].potion += lp3 * 1
                        global.DATABASE._data.users[m.sender].mythic += lmm3 * 1
                        global.DATABASE._data.users[m.sender].common += lc3 * 1
                        global.DATABASE._data.users[m.sender].uncommon += lu3 * 1
                        global.DATABASE._data.users[m.sender].legendary += ll3 * 1
                        conn.reply(m.chat, Lechat3, m)
                    } else conn.reply(m.chat, 'Legendary crate anda tidak cukup', m)
                    break
                default:
                    return conn.reply(m.chat, Lmao, m)
            }
            break
        default:
            return conn.reply(m.chat, bruh, m)
    }
}
handler.help = ['open <crate>', 'gacha <crate>']
handler.tags = ['rpg']
handler.command = /^(open|gacha)$/i
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

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}