import app from './app';

// getting-started.js
// const mongoose = require('mongoose');
import mongoose from 'mongoose';
import config from './app/config';

async function main() {
  try {
    await mongoose.connect(config.db_url as string); //as 'db_url' is surly string, so that why, we using type assertion ---> as string
    app.listen(config.port, () => {
      console.log(`Bicycle app server is running on Port : ${config.port} `);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
