let accesoPermitido = false;

function mostrarSeccion(id) {
  document.querySelectorAll('section').forEach(sec => sec.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

function mostrarSeccionProtegida(id) {
  if (accesoPermitido) {
    mostrarSeccion(id);
  } else {
    mostrarSeccion('login');
    document.getElementById('mensaje-login').textContent = 'Debes iniciar sesión para acceder.';
  }
}

function validarLogin() {
  const usuario = document.getElementById('usuario').value;
  const contrasena = document.getElementById('contrasena').value;

  if (usuario === 'alumno' && contrasena === '1234') {
    accesoPermitido = true;
    mostrarSeccion('perfil');
  } else {
    document.getElementById('mensaje-login').textContent = 'Usuario o contraseña incorrectos.';
  }
}