# TrendMusic
TrendMusic adalah aplikasi web semantik untuk mencari informasi musik yang sedang trending berdasarkan judul lagu, penyanyi atau genre.

## Panduan Instalasi
### Apache Jena Fuseki
1. Download Apache Jena Fuseki di https://jena.apache.org/download/
2. Download apache-jena-fuseki-3.15.0.zip
3. Extract file
4. Pada directory buka cmd dan masukan command “fuseki-server”
5. Buka browser dan jalankan localhost:3030


### Mengupload Dataset
1. Jalankan fuseki-server
2. Buka browser dan jalankan localhost:3030
3. Klik manage dataset, dan buat baru
4. Masukkan Dataset name = trend_music
5. Create dataset
6. Upload data dari dataset folder, pilih music.ttl
7. Tunggu sampai file selesai di-upload

### Node.Js
1. Download Node.js installer
2. Install Node.js dan NPM (sumber : https://nodejs.org/en/docs/)
3. Jalankan git clone https: https://github.com/raissuror/SematikWeb.git, di tempat yang diinginkan
4. Masukan command npm install
5. Run npm start di terminal
npm start
6. Buka browser kemudian jalankan localhost:3000
7. Kemudian akan terbuka main page TrendMusic


## Cara Penggunaan
### Mencari Informasi Lagu 
1. Setelah menjalankan mulai npm, buka browser Anda, masukkan localhost:3000/
2. Cari musik, genre, dan penyanyi di kolom pencarian
