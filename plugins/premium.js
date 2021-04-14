let handler = async m => m.reply(`
╭─「 BUY PREMIUM 」
│Keuntungan :
│•Limit dan XP tak terbatas
│•Unlimited semua barang di RPG
│•Fitur Premium dapat digunakan
│•Dapat menambahkan bot ke Grup
│
│Harga :
│•Free Trial : 3 Hari (Cuma bisa
│klaim sekali)
│•20k : 1 Bulan
│•25k : 3 Bulan
│•30k : 6 Bulan
│•60k : Permanen
│
│Hehe, maaf kalau mahal. Mau 
│turun harga?
│Beliin owner Kelas Wordpress di
│https://kelaswordpress.my.id/diskon
│
│Pembayaran :
│•Telkomsel : 085369444544
│•Gopay : 085369444544 an. Endang
│Rasim
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['premium']
handler.tags = ['premium']
handler.command = /^(premium|prem)$/i

module.exports = handler
