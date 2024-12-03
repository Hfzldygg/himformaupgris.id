// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        if (data.success) {
            // Redirect to aspirasi page or dashboard
            window .location.href = 'aspirasi.html';
        }
    })
    .catch(error => console.error('Error:', error));
});

// Handle aspirasi form submission
document.getElementById('aspirasiForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const user_id = 1; // Replace with actual user ID after login
    const nama = document.getElementById('nama').value;
    const npm = document.getElementById('npm').value;
    const aspirasi = document.getElementById('aspirasi').value;

    fetch('http://localhost:3000/aspirasi', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_id, nama, npm, aspirasi })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        if (data.success) {
            // Clear the form or redirect
            document.getElementById('aspirasiForm').reset();
        }
    })
    .catch(error => console.error('Error:', error));
});