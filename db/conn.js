const mongoose = require("mongoose");

async function main(){
 try{
    mongoose.set("strictQuery", true);

    await mongoose.connect(
        'mongodb+srv://joaolucasgs:3ryGkD3yQH0KUXbk@cluster0.ernth1a.mongodb.net/?retryWrites=true&w=majority');
        console.log("Conectado ao banco de dados");


 } catch (error) {
        console.log(error);
 }




}

module.exports = main;