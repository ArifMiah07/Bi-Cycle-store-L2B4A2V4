import app from "./app";

// getting-started.js
// const mongoose = require('mongoose');
import mongoose from "mongoose";
import config from "./app/config";

async function main() {
 try{
    await mongoose.connect(config.db_url as string);//as 'db_url' is surly string, so that why, we using type assertion ---> as string
    app.listen(config.port, ()=>{
        console.log(`Bicycle app server is running on Port : ${config.port} `);
    })

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
 }
 catch(err){
    console.log(err);
 }
}

main();