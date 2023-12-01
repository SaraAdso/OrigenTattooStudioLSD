$(document).ready(function () {
    const table = $('#tablebooking').DataTable({
        lengthChange: false,
        buttons: ['copy', 'excel', 'pdf', 'colvis'],
    });
    table.buttons().container()
        .appendTo('#datatable_wrapper .col-md-6:eq(0)');
});

function llenarBooking(id, fechaCita, idTatuador, idCliente, idPiercing, idTatuaje, estado, fotoConsentimiento){
    console.log(idCliente)
    id.value = id;
    fechaCita.value = fechaCita;
    idTatuador.value = idTatuador;
    idCliente.value = idCliente;
    idPiercing.value = idPiercing;
    idTatuaje.value = idTatuaje;
    estado.value = estado;
    fotoConsentimiento.value = fotoConsentimiento;
};