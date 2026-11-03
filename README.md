# WA Bot · promo + demo lokal

Landing jual bot WhatsApp + inbox staf, plus demo di browser.  
Diskusi: `Diskusi/ide-monetisasi-resource/a2-presentasi-wa-bot-2026-11-03.md` · antrian clone: `Diskusi/wa-bot-clone-template/`

## Jalankan

```bash
cd Clients/0_Ren/Proyek/wa-bot-promo
python3 -m http.server 4180
# http://localhost:4180
```

## Isi

| File | Fungsi |
| --- | --- |
| `index.html` | Pitch: layanan, alur, harga, batas |
| `demo.html` | Jendela pengguna + inbox staf (layout produk) |
| `js/demo.js` | Simulasi menu, ambil alih, filter antrean |
| `DESIGN.md` | Arah visual + harga publik |
| `anti-slop/` | Audit antislop mode AFTER |

## Harga (publik)

- Setup: Rp 3–8 juta  
- Maintenance: Rp 500.000 / bulan (langganan)  
- Biaya WhatsApp (Meta): ditanggung klien ke Meta  
- Hosting: bisa dibicarakan  

## Batas demo

- Simulasi browser saja; tidak kirim ke WhatsApp sungguhan.  
- Data teks di perangkat (bukan gambar).  
- Reset: tombol di halaman demo.
