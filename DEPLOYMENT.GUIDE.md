# 📚 PANDUAN LENGKAP: Upload ke GitHub & Deploy ke Vercel

## 🎯 BAGIAN 1: UPLOAD KE GITHUB

### Langkah 1: Buat Repository di GitHub

1. Buka browser dan pergi ke https://github.com
2. Login ke akun GitHub Anda
3. Klik tombol "+" di pojok kanan atas
4. Pilih "New repository"
5. Isi detail repository:
   - Repository name: `portfolio-ali` (atau nama lain yang Anda suka)
   - Description: "Portfolio website Ali Yusup Ramadhan"
   - Pilih "Public" (atau Private jika ingin)
   - JANGAN centang "Initialize this repository with a README"
6. Klik "Create repository"

### Langkah 2: Upload Project dari VS Code

Buka Terminal di VS Code (Ctrl + `) lalu jalankan perintah berikut SATU PER SATU:

```bash
# 1. Inisialisasi Git di project Anda
git init

# 2. Tambahkan semua file ke staging
git add .

# 3. Buat commit pertama
git commit -m "Initial commit: Portfolio Ali Yusup Ramadhan"

# 4. Ganti USERNAME dan REPOSITORY dengan milik Anda
# Contoh: git remote add origin https://github.com/aliyusup/portfolio-ali.git
git remote add origin https://github.com/USERNAME/REPOSITORY.git

# 5. Rename branch ke main
git branch -M main

# 6. Push ke GitHub (akan minta login GitHub)
git push -u origin main
```

### Troubleshooting Upload GitHub

**Jika muncul error "Please tell me who you are":**
```bash
git config --global user.email "aliyusupr@gmail.com"
git config --global user.name "Ali Yusup"
```

**Jika minta username/password:**
- Username: username GitHub Anda
- Password: Gunakan **Personal Access Token** (bukan password biasa)

**Cara membuat Personal Access Token:**
1. Buka GitHub → Settings → Developer settings
2. Personal access tokens → Tokens (classic)
3. Generate new token → beri nama "Portfolio Token"
4. Centang "repo"
5. Generate token → Copy token-nya
6. Gunakan token ini sebagai password saat git push

---

## 🚀 BAGIAN 2: DEPLOY KE VERCEL

### Metode 1: Deploy via Website Vercel (TERMUDAH)

1. **Buka https://vercel.com**
2. **Klik "Sign Up"** atau "Login"
3. **Pilih "Continue with GitHub"** untuk login dengan GitHub
4. **Izinkan akses** ke repository Anda
5. **Klik "Add New..." → Project**
6. **Pilih repository** `portfolio-ali`
7. **Konfigurasi Project:**
   - Framework Preset: Vite
   - Root Directory: ./
   - Build Command: `npm run build` (biasanya sudah otomatis)
   - Output Directory: `dist` (biasanya sudah otomatis)
8. **Klik "Deploy"**
9. **Tunggu 1-2 menit** hingga deploy selesai
10. **Selesai!** Anda akan dapat URL seperti: `https://portfolio-ali-xxx.vercel.app`

### Metode 2: Deploy via Vercel CLI

Jika ingin menggunakan command line:

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Login ke Vercel
vercel login

# 3. Deploy
vercel

# Ikuti instruksi:
# - Set up and deploy? Y
# - Which scope? (pilih akun Anda)
# - Link to existing project? N
# - What's your project's name? portfolio-ali
# - In which directory? ./ (tekan Enter)
# - Auto-detect settings? Y
# - Override settings? N

# 4. Deploy ke production
vercel --prod
```

---

## 🔄 UPDATE WEBSITE (Setelah Edit)

Setiap kali Anda membuat perubahan pada website:

### Update GitHub:
```bash
git add .
git commit -m "Update: deskripsi perubahan Anda"
git push
```

### Update Vercel:
**Otomatis!** Vercel akan otomatis deploy ulang setiap kali ada push baru ke GitHub.

---

## ✅ CHECKLIST SEBELUM DEPLOY

- [ ] File `src/assets/profile.jpg` sudah ada
- [ ] Semua informasi di komponen sudah benar
- [ ] Test di localhost (`npm run dev`) sudah oke
- [ ] File `.gitignore` sudah ada
- [ ] Repository GitHub sudah dibuat
- [ ] Project sudah di-push ke GitHub
- [ ] Vercel sudah connected dengan GitHub

---

## 🎉 SETELAH DEPLOY BERHASIL

Anda akan mendapatkan:
1. URL website: `https://portfolio-ali-xxx.vercel.app`
2. Custom domain (opsional): Bisa setting di Vercel Dashboard
3. SSL Certificate: Otomatis dari Vercel
4. Analytics: Tersedia di Vercel Dashboard

---

## 📞 NEED HELP?

Jika ada masalah:
1. Cek error message dengan teliti
2. Google error message-nya
3. Cek dokumentasi:
   - Vite: https://vitejs.dev
   - Vercel: https://vercel.com/docs
   - GitHub: https://docs.github.com

---

**Selamat! Website portfolio Anda sudah online! 🎊**