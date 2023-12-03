function llenarClients(id, nombre, apellido, correo, documento, celular, alergias, fechaNacimiento, imagen) {
    idclient.value = id;
    nomactclient.value = nombre;
    apellidoactclient.value = apellido
    correoactclient.value = correo;
    documentoactclient.value = documento;
    celularactclient.value = celular;
    alergiasactclient.value = alergias;
    fechaactclient.value = fechaNacimiento;
    imagenactclient.value = imagen;
};

function llenarCita(id, fechaCita, tatuador, cliente, piercing){
    idactbooking.value = id;
    idfechaCita.value = fechaCita.toISOString().slice(0,16);
    actidTatuador.value = tatuador;
    actidCliente.value = cliente;
    actIdPiercing.value = piercing;

}