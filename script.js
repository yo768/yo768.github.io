let loggedIn = false;

function showSection(id) {
    document.querySelectorAll('section').forEach(sec => sec.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

function showLogin() {
    showSection('login');
}

function validateLogin() {
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;

    if (user === 'alumno' && pass === '1234') {
        loggedIn = true;
        alert('Login exitoso');
        showSection('perfil');
    } else {
        document.getElementById('error').textContent = 'Usuario o contraseña incorrectos';
    }
}

function accessSection(id) {
    if (loggedIn) {
        showSection(id);
    } else {
        alert('Debe iniciar sesión primero.');
        showLogin();
    }
}