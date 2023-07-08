import express from 'express';
import mongoose from 'mongoose';
import router from './router/index.js';
import cors from 'cors'
import "dotenv/config";


const app = express(); 

const PORT = process.env.PORT ?? 3000;
const mongoURL = process.env.MONGO_URL;


// const corsOptions = { 
//    origin: 'http://localhost:3000',
//    credentials: true, 
//    optionSuccessStatus: 200
//  }

try { 
mongoose.set('strictQuery' , true);
mongoose.connect(mongoURL)
   .then(()=> console.log(`Your db connect`))
   .catch((er)=> console.log(er , `Your db have error: ${er}`))

app.use(cors());

app.use(express.json());

app.use(router)
app.listen(PORT , ()=>{ 
   console.log(`Your server has been started on port ${PORT}`);
})
} catch(err) { 
   console.log(`Your server have error: ${e}`);
}


