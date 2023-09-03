const SchemaTattoo = new mongoose.Schema({    
    nombre: {        
        type: String,        
        required: [true, 'Se requiere un nombre para el tatuaje']    
    },    
    descripcion: {        
        type: String,        
        required: [true, 'Se requiere una descripcion de lo que contiene el tatuaje']    
    },    
    tamaño: {        
        type: String,        
        required: [true, 'Se requiere el tamaño, cm o decriptivo']    
    },    
    color: {        
        type: String,        
        required: [true, 'Se requiere el color del tatuaje']    
    },    
    tecnica: {        
        type: String,        
        required: [true, 'Se requiere la técnica que se utilizó para la elaboración del tatuaje']    
    },    
    autor: {        
        type: String    
    },    
    imagen: {        
        type: String    
    }});
    
    const tattoo = mognoose.model('Tattoo', SchemaTatuajes);
    module.exports = tattoo