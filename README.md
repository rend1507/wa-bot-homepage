# WA Bot · promo + demo lokal

Landing jual bot WhatsApp + inbox staf, plus demo di browser.  
Diskusi: `Diskusi/ide-monetisasi-resource/a2-presentasi-wa-bot-2026-11-03.md` · antrian clone: `Diskusi/wa-bot-clone-template/`

Situs publik: https://wabot-home.pages.dev

## Jalankan

```bash
cd Clients/0_Ren/Proyek/wa-bot-promo
python3 -m http.server 4180
# http://localhost:4180
```

## Isi

| File | Fungsi |
| --- | --- |
| `index.html` | Homepage layanan, demo, alur, harga, dan kontak |
| `css/home.css` | Gaya khusus homepage |
| `demo.html` | Jendela pengguna + inbox staf (layout produk) |
| `js/demo.js` | Simulasi menu, ambil alih, filter antrean |
| `img/inbox-dashboard.svg` | Ilustrasi pratinjau inbox dan status chat |
| `DESIGN.md` | Arah visual + harga publik |

## Harga (publik)

- Starter: Rp99.000/bulan · aktivasi Rp299.000
- Business: Rp199.000/bulan · aktivasi Rp499.000
- Custom: konsultasi
- Hosting: free tier selama masih masuk batas; berbayar hanya setelah persetujuan
- Biaya WhatsApp (Meta): ditanggung pemilik bisnis  

## Batas demo

- Simulasi browser saja; tidak kirim ke WhatsApp sungguhan.  
- Data teks di perangkat (bukan gambar).  
- Reset: tombol di halaman demo.
- Kontak: WhatsApp +62 812-3306-9610 · Instagram @tuntaskannow dan @ren.jofana · LinkedIn melalui pencarian nama.
- Tidak ada hasil panel pembeli atau validasi harga dari calon pelanggan di proyek ini.
