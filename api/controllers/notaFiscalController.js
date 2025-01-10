
import { gerarNotaFiscal } from '../services/notaFiscalService.js';



const gerarNotaFiscalController =  (req, res) => {
  try{
    const dados = req.body;

  if (!dados.valorVenda || !dados.itens || !dados.porcentagens) {
    return res.status(400).json({ error: 'Dados incompletos. Verifique as entradas.' });
  }

  const notaFiscal = gerarNotaFiscal(dados);
  return res.status(200).json(notaFiscal);

}catch(error){
    
    return res.status(500).json({ error: 'Erro interno no servidor.' });

}

  }
    

export default gerarNotaFiscalController;
