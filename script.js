const scriptURL = 'https://script.google.com/macros/s/AKfycbzQFVZTBjxTEHx5HlXJjR12YGt0BXIgjz2UXeNyCIPtbhVnsY3CC6HjGP68f0naiBZp/exec';
const form = document.forms['myForm'];

// Ambil elemen tombol submit di dalam form
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 1. Simpan teks asli & Ubah tombol jadi mode "Menyimpan..."
    const originalText = submitBtn.innerText;
    submitBtn.innerText = 'Menyimpan...';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';
    
    // 2. Kirim data ke Google Sheets
    fetch(scriptURL, { 
        method: 'POST', 
        body: new FormData(form) 
    })
    .then(function(response) {
        alert('Data berhasil disimpan ke Google Sheets!');
        form.reset();
    })
    .catch(function(error) {
        alert('Gagal menyimpan data, coba lagi!');
        console.error('Error!', error.message);
    })
    .finally(function() {
        // 3. Kembalikan kondisi tombol seperti semula (selalu jalan walau sukses/error)
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
    });
});