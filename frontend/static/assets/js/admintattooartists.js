$(document).ready(function () {
    const table = $('#tabletattooartists').DataTable({
        lengthChange: false,
        buttons: ['copy', 'excel', 'pdf', 'colvis'],
    });
    table.buttons().container().appendTo('#datatable_wrapper .col-md-6:eq(0)');
});

function llenarTattooArtists(id, nombre, apellido, alias, celular, documento, correo, contrasena) {
    idactTattooArtist.value = id;
    nomactTattooArtist.value = nombre;
    apellidoactTattooArtist.value = apellido,
    aliasactTattooArtist.value = alias
    celularactTattooArtist.value = celular;
    documentoactTattooArtist.value = documento;
    correoactTattooArtist.value = correo;
    contrasenaactTattooArtist.value = contrasena;
    fotoactTattooArtist.value = imagen
};