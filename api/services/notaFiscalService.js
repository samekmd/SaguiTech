





function calcularImpostos(valorVenda, porcentagens) {
  return {
    IRPF: (valorVenda * porcentagens.IRPF) / 100,
    PIS: (valorVenda * porcentagens.PIS) / 100,
    COFINS: (valorVenda * porcentagens.COFINS) / 100,
    INSS: (valorVenda * porcentagens.INSS) / 100,
    ISSQN: (valorVenda * porcentagens.ISSQN) / 100,
  };
}

export function gerarNotaFiscal(dados) {
  const impostosCalculados = calcularImpostos(dados.valorVenda, dados.porcentagens);
  const valorTotalImpostos = Object.values(impostosCalculados).reduce((a, b) => a + b, 0);
  const valorLiquido = dados.valorVenda - valorTotalImpostos;

  return {
    valorVenda: dados.valorVenda,
    itens: dados.itens,
    impostos: {
      IRPF: impostosCalculados.IRPF.toFixed(2),
      PIS: impostosCalculados.PIS.toFixed(2),
      COFINS: impostosCalculados.COFINS.toFixed(2),
      INSS: impostosCalculados.INSS.toFixed(2),
      ISSQN: impostosCalculados.ISSQN.toFixed(2),
    },
    valorTotalImpostos: valorTotalImpostos.toFixed(2),
    valorLiquido: valorLiquido.toFixed(2),
  };
}






