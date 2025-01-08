import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import router from './routes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/', router);

app.listen(port, () => {
    try{
        console.log("Servidor rodando na porta " + port);
    }catch(error){
        console.log("Erro ao iniciar o servidor" + error);
    }
})