# DESIGN.md: WA Bot promo

## Identity

Landing + demo lokal untuk jual **bot WhatsApp + inbox staf**.  
Suara: jujur, praktis, menjual tanpa overclaim. Bukan CRM, bukan “AI yang paham semua”.

## Arah Homepage

- Sasaran: pemilik atau penanggung jawab usaha yang menerima pertanyaan berulang lewat WhatsApp.
- Pesan utama: bot menjawab dari informasi usaha; staf mengambil alih chat yang perlu penanganan langsung.
- Copy memakai contoh yang dikenal pemilik usaha: jam buka, lokasi, dan harga. Kalimat pendek; tanpa statistik atau testimoni yang belum ada sumbernya.
- Belum ada hasil panel pembeli atau wawancara pelanggan di proyek ini. Harga tetap pada kisaran yang sudah disepakati, bukan diklaim hasil validasi pasar.
- Urutan: manfaat dan demo inbox → cara kerja → status chat → harga → kontak.
- Visual utama: ilustrasi inbox yang diberi label pratinjau, status Bot/Menunggu/Admin, warna hijau gelap dan aksen lime. Tidak memakai foto stok atau ornamen yang tidak menjelaskan produk.
- Footer hanya ikon tautan sosial/kontak dengan nama aksesibel untuk pembaca layar.

## Palette Homepage

| Token | Hex | Alasan |
| --- | --- | --- |
| ink | `#17241f` | teks utama |
| paper | `#f5f6ef` | latar hangat |
| green | `#103f33` | hero, CTA, identitas layanan |
| lime | `#c9ef74` | penanda aksi dan sorotan |
| muted | `#52635b` | teks pendamping |
| line | `#d9e0d9` | pemisah |
| waiting | `#bd780f` | status menunggu |
| user-head | `#0f766e` | header chat pelanggan (teal, beda dari hijau inbox) |
| bot-head | `#0e7490` | header mode bot (cyan) |
| admin-head | `#475569` | header mode admin (abu) |
| chat-bg | `#eae6df` | latar gelembung chat |
| mine | `#d9fdd3` | bubble pengirim |

## Type

IBM Plex Sans untuk keterbacaan; IBM Plex Mono hanya pada nomor langkah kecil.

## Motif dan Interaksi

- Landing statis dengan satu tangkapan/ilustrasi produk yang diberi label pratinjau.
- Demo interaktif tetap di halaman terpisah: chat pelanggan dan inbox staf berganti lewat switch.
- Gerak dibatasi pada hover; hormati `prefers-reduced-motion`.
- Harga: Setup Rp 3–8 juta; Maintenance Rp 500.000/bulan; biaya Meta dibayar klien; hosting dibicarakan.

## Header warna (demo)

- Jendela pengguna: `user-head`
- Chat mode bot: `bot-head` + banner cyan
- Chat mode admin: `admin-head` + banner abu

## Harga (publik)

- Setup: Rp 3–8 jt
- Biaya Meta: ditanggung klien langsung ke Meta
- Maintenance (subscription): Rp 500.000 / bulan
- Hosting: bisa dibicarakan
