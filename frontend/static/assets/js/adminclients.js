$(document).ready(function () {
  const table = $('#tableclients').DataTable({
    lengthChange: false,
    buttons: ['copy', 'excel', 'pdf', 'colvis'],
  });
  table.buttons().container().appendTo('#datatable_wrapper .col-md-6:eq(0)');
});

function llenarClients(id, nombre, apellido, celular, documento, correo, fechaNacimiento, alergias, actfotoDocumeto) {
    idactclient.value = id;
    nomactclient.value = nombre;
    apellidoactclient.value = apellido
    celularactclient.value = celular;
    documentoactclient.value = documento;
    correoactclient.value = correo;
    fechaNacimientoactclient.value = fechaNacimiento;
    alergiasactclient.value = alergias;
    actfotoDocumeto.value = fotoDocumeto;
};