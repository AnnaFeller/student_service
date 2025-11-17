import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import studentRouter from "./routes/studentRouter.js";

dotenv.config();   //Загружаем переменные из .env
const port = process.env.PORT || 3000;
const app = express();

app.use(express.json()); //Чтобы Express умел читать JSON из body
app.use(studentRouter); //роуты студентов

app.use((req, res) => {
    res.status(404).type('text/plain; charset=utf-8').send('Not Found')
});

async function startSever(){
    try {
        await mongoose.connect(process.env.MONGO_URL, {  // Подключаемся к MongoDB
            dbName: process.env.DB_NAME
        })
        console.log("Connected to MongoDB")

        //Запускаем Express сервер
        app.listen(port, () => console.log(`Server started on port ${port}. Press Ctrl-C to finish`));    }catch (e){
        console.log('faild to connect to mongo server', e);
    }
}

startSever()