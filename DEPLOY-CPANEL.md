# Deploy ke cPanel (tanpa akses terminal)

Repo ini (`sefasgroup/sefas_new_website`) adalah **salinan kode website dari repo vendor** `sefasgroup/sefas-landing`, ditambah beberapa file milik SEFAS sendiri:

| File | Fungsi |
|---|---|
| `.github/workflows/cpanel-package.yml` | Membuat paket zip siap upload ke cPanel |
| `sync-vendor.sh` | Menyalin versi terbaru dari repo vendor ke repo ini |
| `DEPLOY-CPANEL.md` | Panduan ini |
| `.gitattributes` | Menjaga `sync-vendor.sh` tetap memakai line ending LF |

Selain file-file itu, semua file di sini adalah salinan dari vendor. **Jangan ubah kode website di repo ini**: perubahan akan tertimpa pada sync berikutnya. Perubahan kode diminta ke vendor. `VENDOR_COMMIT.txt` mencatat commit vendor yang sedang tersalin.

## 0. Ambil versi terbaru dari vendor

Lakukan di PC, lewat Git Bash. Repo vendor ada di `C:laragonwwwsefas-landing` dan repo ini di `C:laragonwwwsefas-deploy`.

```bash
cd /c/laragon/www/sefas-deploy
git pull
bash sync-vendor.sh main      # atau: bash sync-vendor.sh develop
git show --stat               # cek file yang berubah
git push
```

Script hanya membaca repo vendor (`git fetch` dan `git archive`), tidak pernah menulis ke sana. Yang disalin hanya file yang tercatat di git vendor, jadi `.env`, `node_modules` dan `.next` tidak ikut. File yang dihapus vendor juga ikut terhapus di sini. Kalau tidak ada perubahan, script berhenti tanpa membuat commit.

Workflow CI bawaan vendor (`.github/workflows/main.yml`) ikut tersalin. Workflow itu berjalan otomatis setiap kali ada push ke `main`, untuk lint, typecheck dan build. Workflow ini hanya memeriksa kode, tidak men-deploy, dan berguna untuk melihat bahwa versi yang disalin bisa di-build.

Panduan ini untuk hosting cPanel yang **tidak** menyediakan terminal/SSH. Semua langkah di server dilakukan lewat **File Manager** dan menu **Setup Node.js App**. Home folder akun: `/home/sefasgro`.

Website ini adalah aplikasi Node.js (Next.js), bukan kumpulan file HTML statis: halaman dirender di server dan form kontak berjalan di server. Karena server tidak bisa menjalankan `pnpm install` atau `pnpm build`, paket dibuat siap pakai oleh GitHub Actions lalu tinggal diupload.

## Syarat hosting

Cek di cPanel sebelum mulai:

| Syarat | Cara cek |
|---|---|
| Menu **Setup Node.js App** tersedia | cPanel → bagian *Software*. Tanpa menu ini website tidak bisa dijalankan di hosting tersebut. |
| Node.js **24.x** tersedia | Pilihan *Node.js version* saat membuat aplikasi. Kalau 24 belum ada, minta ke penyedia hosting. Versi minimum yang bisa menjalankan Next.js 16 adalah 20.9, tetapi proyek ini diuji di 24. |
| Memori proses cukup | Server Next.js butuh kira-kira 200–400 MB RAM. Paket hosting dengan batas sangat kecil bisa membuat aplikasi berhenti. |
| SSL untuk domain | cPanel → *SSL/TLS Status* (AutoSSL). |

## Struktur di server

```
/home/sefasgro/
├── public_html/            document root domain (jangan taruh aplikasi di sini)
└── sefas-landing/          Application root untuk Setup Node.js App
    ├── app/                isi paket dari GitHub Actions
    │   ├── server.js       startup file
    │   ├── .next/          (folder tersembunyi)
    │   ├── node_modules/
    │   ├── public/
    │   └── DEPLOY_INFO.txt commit dan tanggal build
    └── app-prev/           versi sebelumnya, untuk rollback (setelah update pertama)
```

Paket sengaja diletakkan di subfolder `app/`. CloudLinux Node.js Selector tidak mengizinkan folder `node_modules` asli di application root, sedangkan paket ini membawa `node_modules` sendiri.

## 1. Buat paket di GitHub

1. Buka repo ini di GitHub → tab **Actions** → workflow **cPanel Package**.
2. Klik **Run workflow** (branch `main`), lalu isi `site_url`: `https://sefasgroup.com` untuk production, atau alamat staging (misalnya `https://staging.sefasgroup.com`).
   - Centang **noindex** hanya untuk staging atau preview. Pilihan ini membuat mesin pencari tidak mengindeks salinan tersebut. **Jangan dicentang untuk production**, atau sefasgroup.com hilang dari hasil pencarian Google.
3. Tunggu sampai selesai (beberapa menit). Workflow juga menjalankan uji singkat: paket dinyalakan dan `/api/health`, `/`, `/id` serta `/robots.txt` harus membalas 200. Setelah itu, di halaman run tersebut unduh artifact **sefas-landing-cpanel-&lt;nomor&gt;**. Hasilnya satu file `.zip` berisi folder `app/`.

`site_url` ditanam saat build. Mengganti domain berarti membuat paket baru, tidak cukup restart.

## 2. Upload lewat File Manager

1. cPanel → **File Manager** → masuk ke `/home/sefasgro`.
2. Buat folder `sefas-landing` (tombol *+ Folder*).
3. Masuk ke `sefas-landing`, klik **Upload**, pilih file zip dari langkah 1.
4. Klik kanan file zip → **Extract** ke `/home/sefasgro/sefas-landing`. Hasilnya harus `/home/sefasgro/sefas-landing/app/server.js`.
5. Aktifkan *Settings → Show Hidden Files* dan pastikan folder `app/.next` ikut terekstrak.
6. Hapus file zip setelah ekstrak selesai.

## 3. Buat aplikasi di Setup Node.js App

cPanel → **Setup Node.js App** → **Create Application**:

| Isian | Nilai |
|---|---|
| Node.js version | 24.x |
| Application mode | Production |
| Application root | `sefas-landing` |
| Application URL | domain tujuan, misalnya `sefasgroup.com` |
| Application startup file | `app/server.js` |

Tambahkan **Environment variables** (tombol *Add Variable*):

| Nama | Nilai | Catatan |
|---|---|---|
| `HOSTNAME` | `0.0.0.0` | **Wajib.** Dengan nilai lain (misalnya `127.0.0.1`) semua halaman berbahasa Inggris masuk redirect loop. |
| `CONTACT_MODE` | `smtp` | |
| `MAIL_MAILER` | `smtp` | |
| `MAIL_HOST` | host SMTP | |
| `MAIL_PORT` | `587` atau `465` | |
| `MAIL_ENCRYPTION` | `tls` (587) atau `ssl` (465) | |
| `MAIL_USERNAME` | login SMTP | rahasia |
| `MAIL_PASSWORD` | password / App Password | rahasia |
| `MAIL_FROM_ADDRESS` | alamat pengirim | |
| `MAIL_RECIPIENT` | inbox penerima pesan form | |

`ROBOTS_NOINDEX` **tidak** diisi di sini. Variabel itu hanya berlaku saat build, jadi kalau diisi di cPanel tidak berpengaruh apa pun. Untuk staging, pakai pilihan **noindex** saat menjalankan workflow (langkah 1).

Semua variabel di atas baru terbaca setelah aplikasi di-**Restart**. Menyimpan saja tidak cukup.

Lalu klik **Create**, kemudian **Start App** atau **Restart**.

Jangan klik **Run NPM Install**. Semua dependency sudah ada di dalam `app/node_modules`.

## 4. Cek setelah deploy

1. `https://<domain>/api/health` menampilkan `{"status":"ok"}`.
2. `/` dan `/id` tampil, tombol ganti bahasa berfungsi.
3. `/sitemap.xml` dan `/robots.txt` memakai domain yang benar.
4. Kirim satu pesan dari form kontak di versi Inggris dan Indonesia, lalu pastikan keduanya masuk ke `MAIL_RECIPIENT`.
5. Pasang uptime monitoring ke `/api/health`.

Kalau aplikasi tidak mau jalan, buka log di Setup Node.js App (atau file `stderr.log` di application root) untuk melihat errornya.

## Update versi baru

1. Buat paket baru di GitHub (langkah 1).
2. Di File Manager, hapus `app-prev` lama (kalau ada), lalu rename `app` menjadi `app-prev`.
3. Upload dan extract zip baru ke `/home/sefasgro/sefas-landing` sehingga terbentuk `app/` baru.
4. Setup Node.js App → **Restart**.
5. Ulangi pengecekan di langkah 4. Versi yang sedang berjalan bisa dilihat di `app/DEPLOY_INFO.txt`.

Environment variables tersimpan di Setup Node.js App, jadi tidak perlu diisi ulang saat update.

## Rollback

Rename `app` menjadi `app-broken` dan `app-prev` menjadi `app`, lalu **Restart**.

## Hal yang perlu diperhatikan

- **Domain yang sedang dipakai website lama.** Kalau Application URL diarahkan ke domain yang sudah berisi website, cPanel mengganti `.htaccess` di document root dan website lama tidak tampil lagi. Katalog produk menautkan brosur PDF ke `https://sefasgroup.com/upload/products/brochures/` (`app/_configs/catalogue.ts`). Cek dulu bahwa path itu tetap bisa dibuka setelah pindah, sebelum go-live. Sebaiknya uji dulu di subdomain staging.
- **Rate limit form kontak.** Batas 5 pesan/menit dan 20 pesan/jam dihitung per IP dari header `X-Forwarded-For`. Kalau server hosting tidak meneruskan IP asli pengunjung, semua pengunjung terhitung sebagai satu IP. Akibatnya batas itu berlaku untuk seluruh website. Gejalanya: form menolak pesan (429) padahal pengirimnya berbeda-beda.
- **Restart menghapus hitungan rate limit**, karena disimpan di memori.
- **Jangan upload file `.env`** ke server. Kredensial cukup disimpan di environment variables Setup Node.js App.
