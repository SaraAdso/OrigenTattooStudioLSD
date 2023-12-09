(() => {
  'use strict';
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach((form) => {
    form.addEventListener('submit', (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();

const documentoInput = document.getElementById('documento');
documentoInput.addEventListener('input', function() {
  this.setCustomValidity('');
    if (!this.value.match(/^\d{8,}$/)) {
     this.setCustomValidity('El documento debe contener solo números y tener un mínimo de 8 dígitos.');
    }
  });


  const celularInput = document.getElementById('celular');


  celularInput.addEventListener('input', function() {
    this.setCustomValidity('');
    if (!this.value.match(/^\d{10,}$/)) {
      this.setCustomValidity('El número de celular debe contener solo números y tener un mínimo de 10 dígitos.');
    }
  });


