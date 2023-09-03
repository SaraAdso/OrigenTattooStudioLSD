const schemaTattooartist = new mongoose.Schema({    
    nombre: {        
        type: String,        
        required: [true, 'Se requiere ingresar un nombre']    
    },    
    apellido: {        
        type: String,        
        required: [true, 'Se require ingresar un apellido']    
    },    
    celular: {        
        type: String,        
        required: [true, 'Se require ingresar un número de celualr'],        
        minLength: [10, 'El celular debe tener 10 dígitos'],        
        maxLength: [10, 'El celular debe tener 10 dígitos']    
    },    
    documento: {        
        type: String,        
        required: [true, 'Se require un número de documento'],        
        minLength: [8, 'El documento debe tener 8 dígitos como mínimo'],        
        maxLength: [10, 'El documento debe tener menos de 10 dígitos para ser válido']    
    },    
    correo: {        
        type: String,        
        required: [true, 'Se require ingresar un correo electrónic']    
    },    
    contrasena: {        
        type: String,        
        required: [true, 'Es requerida una contraseña']    
    }});
    
    const tattooArtist = mongoose.model('TattooArtist', schemaTattooartist)
    module.exports = tattooArtist