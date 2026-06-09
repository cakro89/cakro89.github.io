
        // 1. Fungsi untuk Greeting berdasarkan waktu (dari script sebelumnya)
        function setGreeting() {
            const now = new Date();
            const hours = now.getHours();
            let greeting = "";

            if (hours >= 4 && hours < 11) {
                greeting = "Selamat Pagi, Bos WiFi! ☕";
            } else if (hours >= 11 && hours < 15) {
                greeting = "Selamat Siang, Bos WiFi! ☀️";
            } else if (hours >= 15 && hours < 18) {
                greeting = "Selamat Sore, Bos WiFi! 🌅";
            } else {
                greeting = "Selamat Malam, Bos WiFi! 🌙";
            }

            document.getElementById("greeting-text").innerHTML = `
                <strong>${greeting}</strong><br><br>
                Situs ini didedikasikan khusus untuk membantu para <strong>pengusaha WiFi dan RT/RW Net</strong> dalam mengelola bisnisnya. Di sini, Anda akan menemukan dokumentasi, tools, skrip konfigurasi, serta panduan praktis seputar jaringan komputer dan manajemen internet. Semoga bermanfaat untuk kelancaran dan kemajuan usaha Anda!
            `;
        }

        // 2. Fungsi untuk mengubah kata-kata (Quote) secara acak
        function setRandomQuote() {
            // Daftar kata-kata pilihan (bisa Anda tambah atau ubah sendiri isinya)
            const quotes = [
                {
                    text: "Allah yang pertama, keluarga yang kedua, dan pekerjaan yang ketiga. Jangan sampai terbalik.",
                    author: "Kambing"
                },
                {
                    text: "Sebaik-baiknya jaringan adalah jaringan yang berkah, lancar jalurnya, dan halal rezekinya.",
                    author: "Quote Hari Ini"
                },
                {
                    text: "Gaji boleh UMR, tapi income dari voucheran WiFi harus loss tanpa limit!",
                    author: "Pejuang RT/RW Net"
                },
                {
                    text: "Jangan cuma sibuk setting Mangle dan Queue Tree, ingat waktu untuk keluarga dan ibadah.",
                    author: "Pengingat Diri"
                },
                {
                    text: "Koneksi internet boleh pakai failover, tapi urusan masa depan harus terencana dengan pasti.",
                    author: "Kambing"
                },
                {
                    text: "Pelanggan komplain internet lambat itu biasa, yang penting silaturahmi dengan tetangga tetap lancar.",
                    author: "Kandang Kambing"
                }
            ];

            // Memilih satu quote secara acak
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const selectedQuote = quotes[randomIndex];

            // Memasang teks quote baru ke dalam HTML
            document.getElementById("random-quote").innerHTML = `
                "${selectedQuote.text}" — <em>${selectedQuote.author}</em>
            `;
        }

        // Jalankan kedua fungsi saat halaman selesai dimuat
        window.onload = function() {
            setGreeting();
            setRandomQuote();
        };
   