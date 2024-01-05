window.onload = function() {
    var form = document.querySelector('.a-form');

    form.addEventListener('submit', function(event) {
        var email = document.getElementById('Email').value;
        var password = document.getElementById('Password').value;

        if (email === '' || password === '') {
            event.preventDefault();
            alert('Please fill in both fields.');
        }
    });
}