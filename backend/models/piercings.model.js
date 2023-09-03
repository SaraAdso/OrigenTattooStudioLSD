const SchemaPiercing = new mongoose.Schema({    
    nombre: {        
        type: String,        
        required: [true, 'Se require el nombre del piercing']    
    },    
    zona: {        
        type: String,        
        required: [true, 'Se requiere establecer la zona donde se ubica la perforación']    
    },    
    imagen: {        
        type: String,        
        required: [true, 'Se requiere una imagen demostrativa']    
    }});
    
    const piercing = mongoose.model('Piercing', SchemaPiercing);
    module.exports = piercing