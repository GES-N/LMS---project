import express from 'express'
import mongoose from 'mongoose';


const app = express();

const port = 3034;

await mongoose.connect(process.env.MONGO_URI);
// const db= mongoose.connect(process.env.MONGO_URI).then(()=>{
//     console.log('Database is connected');
// })

//global config
app.use(express.json());

('/api/v1', lmsRouter);

app.listen(port, ()=>{
 console.log(`server is listening on ${port}`);
});
