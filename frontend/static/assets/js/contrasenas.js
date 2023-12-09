/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
function validatePassword() {
    const password = document.getElementById('contrasena').value;
    const passwordconfirm = document.getElementById('contrasenaconfirmar').value;
    const alertpasswords = document.getElementById('alerta')
    if (password !== passwordconfirm) {
        console.log('no coinciden')
        alertpasswords.style.display = "block";
        return false
    } else {
        console.log('coinciden')
        alertpasswords.style.display = "none"
        return true;
    }
}

function showPassword(inputId) {
    let passwordInput = document.getElementById(inputId);
  
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  }
  