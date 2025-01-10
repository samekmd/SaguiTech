import axios from 'axios';


export default async function calcNotaFiscal(dados){

    try{
        
        const response = await axios.post('http://localhost:3000/nota-fiscal', dados);
        console.log(response.data)
        return response.data;
    }catch(error){
        console.log(dados)
        console.error(error);
    }

}