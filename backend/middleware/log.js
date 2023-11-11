const fs = require('fs');

exports.registerLog = (file, text)=>{
    fs.appendFile(file, text, (err) =>{
        if(err) {
            console.log(err);
        } else{
            console.log("log registered successfully")
        }
    })
}