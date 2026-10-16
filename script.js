const scriptURL = 'https://script.google.com/macros/s/AKfycbzQFVZTBjxTEHx5HlXJjR12YGt0BXIgjz2UXeNyCIPtbhVnsY3CC6HjGP68f0naiBZp/exec';
const form = document.forms['myForm'];

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    fetch(scriptURL, { 
        method: 'POST', 
        body: new FormData(form) 
    })
    .then(function(response) {
        alert('Data berhasil disimpan ke Google Sheets!');
        form.reset();
    })
    .catch(function(error) {
        console.error('Error!', error.message);
    });
});