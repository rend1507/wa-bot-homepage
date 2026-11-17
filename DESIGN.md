# DESIGN.md: WA Bot Homepage and Offer

Dokumen ini menjadi sumber utama untuk positioning, copywriting, struktur homepage, penawaran, batas fitur, dan arahan implementasi WA Bot.

**Status:** revisi berdasarkan koreksi pemilik produk, 17 November 2026  
**Tujuan:** membuat pengunjung paham produk dalam satu kali lihat, percaya pada batas kemampuannya, mencoba demo, lalu menghubungi developer dengan kebutuhan yang lebih jelas.

---

## 1. Keputusan Strategis

### Produk yang dijual

WA Bot adalah solusi WhatsApp untuk usaha kecil yang menggabungkan:

1. Balasan otomatis untuk pertanyaan rutin berdasarkan informasi usaha yang disiapkan.
2. Inbox staf untuk membaca dan membalas percakapan.
3. Handover antara bot dan staf agar pelanggan tetap bisa mendapat bantuan manusia.

Jangan memosisikannya sebagai CRM, omnichannel, AI agent serba bisa, atau platform marketing automation. Nilai utamanya lebih sederhana: pertanyaan berulang ditangani bot, sedangkan percakapan yang perlu perhatian manusia ditangani staf.

### Target pembeli utama

Prioritaskan usaha yang:
- Menerima pertanyaan berulang melalui WhatsApp.
- Menjual produk atau layanan dengan informasi yang relatif terstruktur.
- Memiliki pemilik atau staf yang bergantian membalas chat.
- Belum membutuhkan CRM besar atau banyak channel komunikasi.

Contoh: toko kecil, bisnis jasa, tempat kursus, klinik kecil, salon, bengkel, dan usaha lokal.

### Positioning satu kalimat

> Jawab otomatis untuk setiap pertanyaan berulang. Ambil alih kapan saja!

### Bahasa homepage

Gunakan **Bahasa Indonesia sebagai bahasa utama**. Istilah UI yang sudah umum boleh memakai English, misalnya Inbox, Setup, FAQ, dan Broadcast. Jangan mencampur bahasa hanya agar terdengar modern.

Gunakan sapaan **Anda** pada website karena targetnya pemilik usaha. Kalimat pendek, konkret, dan tidak terlalu formal. Hindari jargon teknis di bagian penjualan.

---

## 2. Review Homepage Saat Ini

Halaman live yang ditinjau: https://wabot-home.pages.dev/

### Yang sudah bekerja

- Headline sudah menjelaskan dua hal terpenting: bot menjawab dan staf tetap bisa mengambil alih.
- Demo diberi keterangan bahwa itu simulasi browser, bukan chat WhatsApp sungguhan.
- Alur pelanggan bertanya, bot menjawab, staf mengambil alih mudah dipahami.
- Harga setup dan biaya pihak ketiga sudah dipisahkan.
- FAQ sudah menjawab pertanyaan tentang biaya bulanan, hosting, biaya Meta, batas jawaban bot, dan demo.

### Yang perlu diperbaiki

1. **Hero masih bisa lebih berorientasi pada situasi pembeli.** Sebutkan pertanyaan yang dijawab dan fungsi inbox tanpa mengulang headline.
2. **Katalog dan stok belum terlihat sebagai kemampuan yang jelas di homepage.** Sistem dapat menjawab berdasarkan stok yang diperbarui melalui edit produk. Jangan menyebut sinkronisasi real-time dari POS atau sistem eksternal.
3. **Fitur pengelolaan kontak dan broadcast perlu ditampilkan.** Pemilik mengonfirmasi Segmentasi Kontak, Broadcast, dan Pencarian Chat sudah tersedia. Deteksi spam merupakan bagian dari pengelolaan/segmentasi kontak.
4. **Harga perlu sesuai daya beli UMKM.** Model setup ringan ditambah langganan bulanan lebih layak diuji daripada biaya implementasi besar di muka.
5. **Keterangan biaya Meta, hosting, dan layanan perlu dipisahkan.** Pembeli harus tahu biaya mana yang dibayar ke penyedia sistem dan mana yang dibayar ke Meta atau pihak lain.
6. **Perlu satu bagian yang menjelaskan apa yang bot lakukan ketika tidak tahu jawaban.** Ini membangun ekspektasi yang realistis.
7. **Integrasi resmi Meta telah dikonfirmasi oleh pemilik produk.** Sistem menggunakan Meta Business dan webhook. Jangan menjanjikan nomor bebas suspend karena jalur resmi tetap tunduk pada kebijakan Meta.

### Prinsip revisi

Jangan menambah section hanya untuk membuat homepage terlihat panjang. Satu section harus menjawab satu pertanyaan pembeli. Gabungkan bagian yang mengulang manfaat yang sama.

---

## 3. Copywriting Homepage

Copy di bawah ini adalah versi utama yang direkomendasikan. Sesuaikan hanya jika ada batas implementasi aktual yang berbeda.

### 3.1 Header

Logo: **WA Bot**

Navigasi:
- Fitur
- Cara kerja
- Harga
- FAQ

CTA: **Coba Demo**

Jangan menambah menu Tentang Kami atau Blog jika belum ada konten yang berguna.

### 3.2 Hero

Eyebrow:

**UNTUK BISNIS YANG MELAYANI PELANGGAN LEWAT WHATSAPP**

Headline:

# Jawab otomatis untuk setiap pertanyaan berulang. Ambil alih kapan saja!

Subheadline:

Bot menjawab dari informasi usaha, produk, harga, dan stok yang Anda kelola. Saat pelanggan perlu bantuan langsung, staf bisa melanjutkan chat dari satu Inbox.

CTA utama: **Coba Demo**  
CTA sekunder: **Lihat Harga**

Microcopy:

Demo berjalan di browser. Tidak mengirim pesan ke WhatsApp dan tidak meminta data pelanggan.

Hero visual:

- Gunakan tampilan Inbox yang benar-benar mewakili produk.
- Tampilkan satu chat dengan jawaban bot dan satu contoh chat yang diambil alih staf.
- Beri label `Preview Demo` jika tampilannya berupa simulasi.
- Jangan memakai statistik, testimoni, atau logo partner yang belum bisa dibuktikan.

### 3.3 Feature strip

Judul kecil:

**SATU INBOX UNTUK MELAYANI PELANGGAN**

Isi:

- Balasan otomatis FAQ
- Info produk, harga, dan stok
- Segmentasi dan pencarian kontak/chat
- Broadcast ke kontak yang sesuai

Catatan: stok mengikuti data produk yang diedit di sistem. Jangan menyebut sinkronisasi stok dari POS atau sistem eksternal karena integrasi tersebut tidak dikonfirmasi.

### 3.4 Section fitur utama

Eyebrow: **FITUR UTAMA**

Judul:

## Satu nomor WhatsApp, bot dan staf bekerja bersama.

Intro:

Bot menangani pertanyaan yang sudah disiapkan. Staf tetap bisa membaca percakapan dan membalas ketika pelanggan membutuhkan bantuan lebih lanjut.

Fitur utama:

**Balasan otomatis dari info usaha**  
Siapkan FAQ, jam buka, alamat, harga, dan detail layanan. Bot menggunakan informasi tersebut untuk menjawab pertanyaan yang sesuai.

**Staf bisa mengambil alih chat**  
Saat percakapan perlu ditangani manusia, staf membalas dari Inbox. Bot berhenti membalas pada percakapan yang sedang diambil alih, sesuai mekanisme sistem.

**Kontak dan chat lebih teratur**  
Kelompokkan kontak, cari percakapan, dan gunakan segmentasi untuk membedakan kelompok pelanggan serta kontak yang perlu ditinjau sebagai spam.

**Produk dan stok terkelola**  
Perbarui informasi produk di sistem agar bot dapat menjawab pertanyaan tentang detail, harga, dan ketersediaan stok berdasarkan data yang tersimpan.

**Broadcast lebih terarah**  
Kirim pesan ke segmen kontak yang dipilih. Pengiriman tetap harus mengikuti persetujuan penerima, template, dan ketentuan WhatsApp.

### 3.5 Cara kerja

Eyebrow: **CARA KERJA**

Judul:

## Dari pertanyaan masuk sampai ditangani staf.

Langkah 1: **Pelanggan mengirim pesan**  
Pelanggan tetap menghubungi nomor WhatsApp bisnis Anda.

Langkah 2: **Bot memberi jawaban**  
Bot membalas pertanyaan yang cocok dengan informasi usaha yang sudah disiapkan.

Langkah 3: **Staf mengambil alih**  
Jika perlu, staf melanjutkan percakapan melalui Inbox.

Langkah 4: **Bot aktif kembali**  
Setelah staf selesai, chat dapat dikembalikan ke mode bot.

Catatan: pastikan tombol atau aksi untuk mengembalikan chat ke bot memang tersedia sebelum menampilkan langkah keempat.

### 3.6 Batas kemampuan dan fallback

Judul:

## Kalau bot tidak tahu jawabannya?

Copy:

Bot hanya menjawab berdasarkan informasi yang Anda siapkan. Jika pertanyaan tidak dikenali atau informasinya belum tersedia, pelanggan diarahkan untuk menunggu bantuan staf.

Microcopy opsional:

**Anda tetap bisa mengatur informasi dan jawaban yang digunakan bot.**

Bagian ini sebaiknya tampil di homepage, bukan hanya FAQ. Ini membangun ekspektasi yang realistis.

### 3.7 Demo

Judul:

## Coba alur bot dan Inbox sebelum memutuskan.

Copy:

Lihat contoh percakapan pelanggan, balasan bot, dan cara staf mengambil alih chat. Demo ini berjalan di browser dan tidak terhubung ke nomor WhatsApp Anda.

CTA: **Buka Demo**

### 3.8 Harga

Eyebrow: **HARGA**

Judul:

## Mulai dengan biaya ringan. Pilih paket bulanan sesuai kebutuhan.

Intro:

Biaya aktivasi dibayar sekali. Langganan mencakup akses sistem dan layanan sesuai paket. Tagihan penggunaan WhatsApp dari Meta dibayar terpisah.

**Starter**

### Rp99.000/bulan

**Biaya aktivasi Rp299.000**

Untuk usaha kecil yang ingin mulai merapikan chat pelanggan.

- 1 nomor WhatsApp
- Akses bot FAQ dan Inbox
- Pengelolaan produk, harga, dan stok
- Segmentasi kontak dan pencarian chat
- Broadcast sesuai ketentuan Meta
- Bantuan penggunaan dasar

CTA: **Pilih Starter**

**Business**

### Rp199.000/bulan

**Biaya aktivasi Rp499.000**

Untuk usaha dengan beberapa staf dan aktivitas pelanggan lebih tinggi.

- Semua fitur Starter
- Kapasitas penggunaan lebih besar
- Pengelolaan beberapa akun staf
- Segmentasi dan broadcast untuk kebutuhan tim
- Prioritas bantuan pada hari kerja

CTA: **Pilih Business**

**Custom**

### Konsultasikan kebutuhan

Untuk kebutuhan multi-nomor, integrasi eksternal, atau alur kerja khusus.

CTA: **Konsultasikan Kebutuhan**

Catatan di bawah kartu:

- Biaya aktivasi dibayar satu kali. Langganan dibayar bulanan.
- Biaya pesan Meta, domain, dan layanan pihak ketiga tidak termasuk.
- Batas jumlah staf, kontak, produk, dan kuota pesan harus ditetapkan sebelum paket dipublikasikan.
- Fitur atau integrasi di luar paket dihitung terpisah.

**Alasan model harga:** pembanding pasar Indonesia menampilkan langganan chatbot/inbox sekitar Rp35 ribu sampai Rp247.500 per bulan, dengan beberapa layanan mengenakan biaya aktivasi sekitar Rp350 ribu sampai Rp600 ribu. Model dan batas tiap layanan berbeda, tetapi kisaran ini menunjukkan bahwa biaya masuk besar dapat menjadi hambatan bagi UMKM. Harga di atas adalah hipotesis awal yang perlu diuji, bukan harga pasar yang sudah terbukti.

### 3.9 Bantuan dan dukungan

Judul:

## Ada bantuan saat Anda membutuhkan.

Copy:

Setiap paket mencakup bantuan penggunaan sesuai batas paket. Penanganan gangguan, perubahan konfigurasi, dan pekerjaan tambahan memiliki cakupan yang dijelaskan sejak awal.

Jangan menambahkan Care Lite/Care Plus sebagai biaya wajib tambahan jika dukungan dasar sudah termasuk langganan. Jika nantinya ada layanan maintenance premium, tampilkan sebagai add-on dengan batas waktu dan ruang lingkup yang jelas.

Ketentuan internal yang harus ditetapkan: jam layanan, target waktu respons, batas bantuan per bulan, apakah pemantauan aktif termasuk, serta prosedur eskalasi gangguan Meta atau provider.

### 3.10 Biaya eksternal

Judul:

## Biaya apa saja di luar langganan?

**WhatsApp / Meta**  
Penggunaan WhatsApp Business Platform dapat dikenakan biaya berdasarkan kategori dan jumlah pesan yang dikirim. Tarif mengikuti ketentuan Meta dan dapat berubah. Biaya ini terpisah dari biaya aktivasi dan langganan WA Bot.

**Hosting dan layanan pendukung**  
Hosting dapat menggunakan free tier selama kebutuhan masih sesuai batas dan ketentuan penyedia. Jika dibutuhkan layanan berbayar, biaya dan alasannya akan disampaikan untuk persetujuan sebelum diaktifkan. Tidak ada janji gratis selamanya.

**Layanan tambahan**  
Domain, database berbayar, penyimpanan tambahan, API AI, integrasi POS, dan layanan pihak ketiga lain tidak otomatis termasuk paket.

### 3.11 FAQ

**Apakah ada biaya bulanan?**  
Ya. Ada biaya langganan sesuai paket, selain biaya aktivasi satu kali. Biaya penggunaan WhatsApp dari Meta dihitung terpisah.

**Apakah hosting gratis?**  
Hosting dapat memakai free tier selama kebutuhan masih sesuai batas dan ketentuan penyedia. Jika perlu layanan berbayar, biayanya akan dijelaskan dan disetujui lebih dulu.

**Apakah ada biaya dari WhatsApp atau Meta?**  
Bisa ada. Biaya WhatsApp Business Platform mengikuti kategori pesan, negara penerima, dan pemakaian. Biaya tersebut tidak termasuk biaya aktivasi maupun langganan WA Bot.

**Apakah bot bisa menjawab semua pertanyaan?**  
Tidak. Bot menjawab berdasarkan FAQ dan informasi yang Anda siapkan. Pertanyaan di luar informasi tersebut perlu ditangani staf.

**Apakah pelanggan perlu mengunduh aplikasi?**  
Tidak perlu aplikasi tambahan. Pelanggan menghubungi nomor WhatsApp bisnis yang digunakan pada implementasi.

**Apakah nomor WhatsApp dijamin tidak akan dibatasi?**  
Tidak. Integrasi resmi bukan jaminan bebas pembatasan. Pengiriman pesan harus mematuhi kebijakan WhatsApp, termasuk persetujuan penerima dan ketentuan template untuk pesan tertentu.

**Apakah sistem menggunakan WhatsApp API resmi?**  
Ya. Sistem menggunakan WhatsApp Business Platform dari Meta melalui integrasi resmi. Penggunaan tetap mengikuti kebijakan WhatsApp dan biaya pesan Meta yang berlaku.

**Apakah demo mengirim pesan sungguhan?**  
Tidak. Demo hanya simulasi browser untuk memperlihatkan alur pelanggan dan Inbox staf.

**Bisakah saya menambah fitur?**  
Bisa dievaluasi. Kebutuhan, estimasi waktu, dan biaya akan disepakati sebelum pekerjaan dimulai.

### 3.12 CTA akhir

Eyebrow: **MULAI DARI KEBUTUHAN USAHA ANDA**

Judul:

## Coba demonya. Lihat apakah alurnya cocok untuk tim Anda.

Copy:

Ceritakan pertanyaan yang paling sering diterima dan siapa saja yang membalas chat. Kami bantu tentukan paket yang sesuai.

CTA utama: **Coba Demo**  
CTA sekunder: **Chat untuk Konsultasi**

---

## 4. Struktur Homepage Final

Urutan yang direkomendasikan:

1. Header
2. Hero + preview Inbox
3. Feature strip: contoh pertanyaan yang bisa dijawab
4. Tiga fitur utama
5. Cara kerja
6. Fallback: jika bot tidak tahu
7. Demo interaktif
8. Harga dan paket langganan
9. Biaya eksternal
10. FAQ
11. CTA akhir
12. Footer

### Section yang digabung atau dihapus

- Hapus section masalah terpisah. Masalah sudah tersirat dari hero dan contoh pertanyaan.
- Jangan membuat section manfaat lain yang mengulang FAQ, handover, dan inbox.
- Tampilkan katalog, segmentasi kontak, pencarian chat, dan broadcast sebagai fitur aktif sesuai implementasi yang dikonfirmasi pemilik produk.
- Jelaskan bahwa stok mengikuti data produk yang diedit di sistem, bukan sinkronisasi eksternal otomatis.
- Pertahankan preview Inbox karena produk perlu terlihat, bukan hanya dijelaskan.
- Pertahankan demo browser, dengan keterangan simulasi yang terlihat.

---

## 5. Peta Fitur: Status Implementasi

Status berikut diperbarui berdasarkan konfirmasi langsung pemilik produk. Homepage lama belum menampilkan seluruh kemampuan ini, sehingga desain dan demo perlu diselaraskan.

| Fitur | Status | Arahan copy |
|---|---|---|
| FAQ / jawaban otomatis | Tersedia | Bot menjawab berdasarkan informasi usaha yang disiapkan |
| Inbox staf | Tersedia | Staf membaca dan membalas chat dari Inbox |
| Handover bot ke staf | Tersedia | Staf dapat mengambil alih percakapan |
| Pengembalian chat ke bot | Tersedia | Bot dapat melanjutkan sesuai kontrol sistem |
| Status percakapan | Tersedia | Tampilkan status aktual yang digunakan aplikasi |
| Katalog produk | Tersedia | Kelola detail dan harga produk |
| Stok produk | Tersedia melalui edit produk | Bot menggunakan nilai stok yang tersimpan di sistem |
| Segmentasi kontak | Tersedia | Kelompokkan dan saring kontak |
| Deteksi/penandaan spam | Melalui segmentasi kontak | Hindari klaim AI anti-spam jika prosesnya berupa filter atau label |
| Broadcast | Tersedia | Kirim ke segmen kontak dengan kepatuhan opt-in dan aturan template Meta |
| Pencarian chat | Tersedia | Cari percakapan yang dibutuhkan |
| Integrasi WhatsApp resmi Meta | Dikonfirmasi pemilik produk | Boleh menyebut WhatsApp Business Platform resmi |

### Catatan stok

Gunakan frasa `Bot menjawab ketersediaan berdasarkan data stok produk yang tersimpan di sistem.` Jangan menyebut stok tersinkron otomatis dari POS atau sistem eksternal kecuali integrasi tersebut memang tersedia.

### Catatan segmentasi dan broadcast

Segmentasi kontak digunakan untuk mengelompokkan penerima dan membantu memilah kontak yang perlu ditinjau, termasuk spam. Broadcast harus memiliki pemilihan segmen, pemeriksaan penerima, serta mengikuti aturan opt-in dan template WhatsApp yang berlaku. Jangan menyiratkan bahwa broadcast boleh dikirim ke daftar nomor yang dibeli atau dikumpulkan tanpa persetujuan.

### Bukti integrasi dan aplikasi

Pemilik produk memberikan screenshot Meta Business yang menampilkan aplikasi `Universitas Gajayana Malang`, App ID `1410357230906527`, serta konfigurasi webhook ke `https://unigama-wa-bot.elap.workers.dev/webhook`. Ini mendukung keterangan bahwa aplikasi dikelola melalui Meta Business dan webhook telah dikonfigurasi pada dashboard. Screenshot saja bukan audit kode atau bukti bahwa setiap skenario produksi telah lolos pengujian. Jangan tampilkan App ID atau token verifikasi pada homepage.

Aplikasi login yang diberikan: https://wabot.unigamalang.ac.id/login. Halaman publik menampilkan `SISKA Inbox` dan keterangan bahwa staf masuk untuk mengelola antrean chatbot WhatsApp UNIGA. Ini membuktikan halaman login dapat diakses, bukan bahwa fitur di balik login telah diuji secara publik.

## 6. Rekomendasi Pengembangan Berikutnya

Karena fitur inti sudah tersedia, jangan menambah daftar fitur hanya untuk memperpanjang roadmap. Prioritaskan kualitas operasional: audit log broadcast, preview penerima, status opt-in, laporan pesan terkirim/gagal, dan panduan ketika kualitas nomor menurun. Pastikan juga ada mekanisme ekspor atau pemulihan data pelanggan yang sesuai kebutuhan bisnis dan kebijakan privasi.

Fitur baru lain sebaiknya ditentukan dari permintaan pelanggan berbayar, bukan asumsi.

## 7. WhatsApp, Meta, dan Klaim Keamanan

### Status integrasi

Pemilik produk mengonfirmasi bahwa sistem menggunakan Meta API resmi melalui Meta Business. Screenshot menunjukkan aplikasi Meta Business dan konfigurasi webhook. Untuk materi publik, gunakan klaim: `Terhubung melalui WhatsApp Business Platform resmi dari Meta.` Simpan screenshot sebagai bukti internal; jangan tampilkan App ID, token verifikasi, atau data konfigurasi sensitif.

Tetap lakukan pengujian end-to-end pada penerimaan webhook, pengiriman pesan, status pesan, template, dan penanganan error sebelum menyebut integrasi siap produksi untuk semua skenario.

### Klaim yang dilarang

- Bebas blokir atau bebas suspend.
- 100% aman.
- Tidak mungkin terkena pembatasan.
- Broadcast tanpa risiko.
- Tidak perlu izin penerima.

Jalur resmi tidak menghapus risiko pembatasan. Kualitas pesan, persetujuan penerima, kepatuhan kebijakan, dan perilaku akun tetap penting.

### Catatan biaya Meta

Per 2025, model harga WhatsApp Business Platform beralih ke biaya per pesan untuk kategori template yang dikenakan biaya, dengan tarif yang berbeda menurut kategori dan negara penerima. Tarif dapat berubah. Karena itu, homepage cukup menyatakan biaya Meta terpisah dan mengikuti tarif yang berlaku. Jangan menanam tarif tetap pada halaman tanpa proses pembaruan.

Karena broadcast sudah tersedia, jelaskan bahwa pengiriman template dan biaya pesan mengikuti ketentuan Meta. Pesan promosi harus ditujukan kepada kontak yang memberikan izin.

---

## 8. Pricing Internal dan Batas Pekerjaan

### Harga rekomendasi untuk uji pasar

| Paket | Biaya aktivasi | Langganan | Target |
|---|---:|---:|---|
| Starter | Rp299.000 sekali | Rp99.000/bulan | Usaha kecil, satu nomor dan kebutuhan dasar |
| Business | Rp499.000 sekali | Rp199.000/bulan | Tim dengan beberapa staf dan volume lebih tinggi |
| Custom | Berdasarkan scope | Berdasarkan scope | Multi-nomor, integrasi eksternal, atau alur khusus |

Harga ini sengaja menurunkan hambatan pembelian awal. Pembanding yang ditemukan pada November 2026 menampilkan langganan chatbot/inbox mulai Rp35.000 sampai Rp247.500 per bulan, sementara contoh lain mengenakan biaya aktivasi Rp350.000 sampai Rp600.000. Produk-produk tersebut memiliki kuota dan fitur berbeda, sehingga bukan perbandingan satu banding satu.

Sebelum harga dipasang di website, tetapkan dan hitung biaya riil untuk: jumlah nomor, jumlah staf, jumlah kontak, jumlah produk, kapasitas pesan, penyimpanan, backup, support, dan biaya layanan pendukung. Jika biaya operasional per pelanggan lebih tinggi daripada margin langganan, naikkan harga atau batasi kuota. Jangan menjual unlimited tanpa perhitungan.

### Cara mengevaluasi harga

Catat setiap proyek:
- Jam komunikasi dan discovery.
- Jam konfigurasi dan implementasi.
- Jam pengujian dan revisi.
- Waktu onboarding.
- Jumlah support setelah serah terima.
- Biaya layanan eksternal yang benar-benar muncul.

Hitung pendapatan efektif per jam setelah biaya langsung. Jika paket berulang kali memakan waktu lebih banyak dari estimasi, naikkan harga atau kurangi scope. Jangan menutup kekurangan margin dengan support gratis tanpa batas.

### Batas paket

- Satu nomor WhatsApp untuk paket Starter dan Team, kecuali ada persetujuan tambahan.
- FAQ dihitung sebagai satu pertanyaan dan satu jawaban yang disetujui.
- Konten FAQ dan data katalog disediakan atau disetujui klien.
- Maksimal dua putaran revisi konten selama setup.
- Paket tidak mencakup fitur baru atau integrasi eksternal.
- Pekerjaan tambahan memerlukan estimasi dan persetujuan tertulis.
- Setup fee: 50% di awal, 50% setelah pengujian dan sebelum serah terima final.
- Support dilakukan pada hari kerja, bukan layanan darurat 24/7.
- Garansi hanya mencakup bug implementasi awal, bukan perubahan kebijakan Meta, gangguan provider, perubahan data klien, atau layanan pihak ketiga.

### Perbandingan pasar

Contoh harga publik yang ditemukan saat revisi: AZZAM Rp99.000 dan Rp179.000/bulan dengan biaya pemasangan Rp350.000 atau Rp600.000; Sahut Rp35.000 dan Rp75.000/bulan; Chatera Basic Rp247.500/bulan. Setiap layanan punya kuota, fitur, dan model biaya berbeda. Gunakan ini sebagai pembanding rentang harga, bukan dasar untuk menyalin paket.

Implikasi: harga awal WA Bot perlu terasa terjangkau untuk UMKM, tetapi kuota dan biaya support wajib dibatasi agar langganan tidak merugikan pengelola.

---

## 9. Design Direction

### Brand feel

- Ramah untuk pemilik usaha kecil.
- Terpercaya, sederhana, dan praktis.
- Tidak terlihat seperti software enterprise mahal.
- Fokus pada percakapan, bukan ilustrasi AI abstrak.

### Palette

| Token | Hex | Penggunaan |
|---|---|---|
| ink | `#17241f` | Teks utama |
| paper | `#f5f6ef` | Latar utama |
| green | `#103f33` | Hero, CTA, identitas |
| lime | `#c9ef74` | Aksen |
| muted | `#52635b` | Teks sekunder |
| line | `#d9e0d9` | Border |
| waiting | `#bd780f` | Status menunggu |
| user-head | `#0f766e` | Header pelanggan |
| bot-head | `#0e7490` | Header bot |
| admin-head | `#475569` | Header admin |
| chat-bg | `#eae6df` | Latar chat |
| mine | `#d9fdd3` | Bubble pesan |

### Typography

- IBM Plex Sans untuk heading dan body.
- IBM Plex Mono hanya untuk label kecil atau detail teknis.
- Utamakan keterbacaan mobile.
- Batasi paragraf homepage menjadi 1 sampai 3 kalimat pendek.

### Visual rules

- Gunakan UI produk asli atau preview yang diberi label.
- Tampilkan perbedaan Bot, Menunggu, dan Admin secara konsisten.
- Jangan menggunakan foto stok generik.
- Jangan menambahkan badge diskon, angka performa, testimoni, atau logo partner tanpa bukti.
- Jangan membuat ilustrasi dashboard yang menampilkan fitur yang belum ada.
- CTA utama harus mudah ditemukan dan konsisten.

---

## 10. UX, Responsivitas, dan Aksesibilitas

- Mobile-first. Mayoritas calon pembeli kemungkinan membuka halaman dari ponsel.
- Header mobile cukup logo, CTA, dan menu ringkas.
- CTA utama menuju demo atau chat konsultasi yang benar-benar aktif.
- CTA harga menuju section pricing, bukan link yang tidak relevan.
- Gunakan anchor yang konsisten.
- Hormati `prefers-reduced-motion`.
- Pastikan kontras teks dan ukuran target sentuh memadai.
- Jangan menyampaikan status hanya melalui warna. Tambahkan label teks.
- Hindari modal yang menghalangi pengunjung membaca harga.
- Demo harus memiliki penjelasan bahwa tidak mengirim pesan sungguhan.

---

## 11. Footer dan Trust

Footer cukup memuat:
- Nama WA Bot.
- Identitas developer atau bisnis yang benar.
- Kontak yang aktif.
- Link demo.
- Kebijakan privasi jika sistem menyimpan data pelanggan.
- Keterangan biaya Meta dan layanan pihak ketiga terpisah.

Jangan memasang logo Meta Business Partner, sertifikasi, testimoni, atau klaim jumlah pengguna tanpa bukti dan izin.

---

## 12. Checklist Sebelum Publish

### Produk dan klaim

- [ ] Fitur yang disebut di homepage sudah diuji di implementasi aktual.
- [ ] Handover dan pengembalian ke bot bekerja sesuai copy.
- [ ] Fallback tidak mengarang jawaban.
- [ ] Copy stok menjelaskan bahwa jawaban memakai data produk yang tersimpan, bukan sinkronisasi eksternal.
- [ ] Broadcast mengikuti opt-in, template, dan kebijakan WhatsApp.
- [ ] Integrasi Meta Business Platform resmi sudah diuji end-to-end.
- [ ] Tidak ada klaim bebas blokir, 100% aman, atau bebas suspend.

### Pricing

- [ ] Harga homepage sama dengan dokumen ini.
- [ ] Batas FAQ, staf, katalog, revisi, dan garansi sesuai implementasi.
- [ ] Batas bantuan, jam layanan, dan waktu respons tiap paket jelas.
- [ ] Biaya Meta dan pihak ketiga disebut terpisah.
- [ ] Hosting tidak dijanjikan gratis selamanya.

### UX

- [ ] Demo diberi label simulasi.
- [ ] CTA demo dan WhatsApp aktif.
- [ ] Tampilan mobile diuji.
- [ ] Status chat tidak hanya dibedakan dengan warna.
- [ ] Kebijakan privasi tersedia jika data pelanggan disimpan.

---

## 13. Referensi

Sumber untuk review halaman dan snapshot kompetitor. Harga dan fitur dapat berubah, jadi cek ulang sebelum dipakai dalam materi publik.

- Homepage WA Bot: https://wabot-home.pages.dev/
- SISKA Inbox login: https://wabot.unigamalang.ac.id/login
- AZZAM pricing: https://azzam.id/aiumkm/
- Sahut: https://www.sahut.id/
- Chatera: https://chatera.id/
- NgirimWA pricing: https://ngirimwa.com/harga/
- SleekFlow Indonesia pricing: https://sleekflow.io/en-id/pricing
- Barantum WhatsApp chatbot: https://www.barantum.com/id/features/whatsapp-chatbot
- Meta WhatsApp Business Platform pricing: https://developers.facebook.com/docs/whatsapp/pricing/
- Meta WhatsApp Cloud API documentation: https://developers.facebook.com/docs/whatsapp/cloud-api/

---

## 14. Keputusan yang Masih Menjadi Gate

1. Tetapkan batas kuota Starter dan Business: nomor, staf, kontak, produk, pesan, dan penyimpanan.
2. Tentukan apakah broadcast hanya memakai template yang disetujui Meta dan bagaimana status opt-in dicatat.
3. Uji alur stok dari edit produk sampai jawaban bot, termasuk ketika stok berubah menjadi nol.
4. Uji pencarian chat, segmentasi kontak, dan pemilahan spam pada data nyata.
5. Pastikan demo mencerminkan aplikasi yang benar-benar dijual.
6. Pastikan halaman login, onboarding, reset password, dan penghapusan akses pelanggan siap untuk penggunaan komersial.
7. Tinjau Terms of Service, Privacy Policy, retensi data, backup, dan prosedur ekspor/penghapusan data.
