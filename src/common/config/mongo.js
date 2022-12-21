import mongoose from 'mongoose';
import 'dotenv/config';

async function CRUD () {
    const URI = process.env.URI
    let rta = await mongoose.connect(URI, {
        useNewUrlParser: true,
        UseUnifedTopology: true
    })
    console.info('Database is connect!')
}

export default CRUD;