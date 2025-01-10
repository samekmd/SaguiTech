import { Paper, Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import "./index.css";
import { useState } from "react";
import ModalNotaFiscal from "../modal/modal";
import calcNotaFiscal from ".";

function Form() {
  
  const [itens, setItens] = useState([]);
  const [item, setItem] = useState("");
  const [valorVenda, setValorVenda] = useState(0);
  const [irpf, setIrpf] = useState(0);
  const [pis, setPis] = useState(0);
  const [cofins, setCofins] = useState(0);
  const [inss, setInss] = useState(0);
  const [issqn, setIssqn] = useState(0);
  const [open, setOpenModal] = useState(false);
  const [notaFiscal, setNotaFiscal] = useState({});
  
  const fetchNotaFiscal = async () => {

    
    try{
      
      const dados = {
        "valorVenda": valorVenda,
        "itens": itens,
        "porcentagens": {
          "IRPF": irpf,
          "PIS": pis,
          "COFINS": cofins,
          "INSS": inss,
          "ISSQN": issqn
        }
      }
      console.log(dados)
      const response =  await calcNotaFiscal(dados);
      setNotaFiscal(response);
    }catch(error){
      
      console.log(error)
    }

  }

  const addItem = () => {
    if (item.trim() !== "") {
      setItens([...itens, item]); // Adiciona o item à lista
      setItem(""); // Limpa o campo após adicionar
    }
  };


  const handleOpenModal = async () => {
    // executar a função fetchNotaFiscal e depois abrir o modal
    await fetchNotaFiscal();
    setOpenModal(true);
    
  }

  

  return (
    <>
      <Paper
        elevation={5}
        style={{
          padding: "20px",
          margin: "auto",
          width: "60%",
          height: "540px",
          marginTop: "3%",
          backgroundColor: "#00a8e8",
        }}
      >
        <br />
        <br />

        <Box
          sx={{
            gap: 1,
            display: "flex",
            flexDirection: "row",
            textAlign: "center",
            color: "white",
          }}
        >
          <Box
            sx={{
              gap: 2,
              width: "50%",
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
              color: "white",
            }}
          >
            <TextField
              type="number"
              variant="outlined"
              label="Valor da Venda"
              className="text-field"
              value={valorVenda}
              onChange={(e) => setValorVenda(Number(e.target.value))}
            />
            <TextField
              type="number"
              variant="outlined"
              label="IRPF"
              className="text-field"
              value={irpf}
              onChange={(e) => setIrpf(Number(e.target.value))}
            />
            <TextField
              type="number"
              variant="outlined"
              label="PIS"
              className="text-field"
              value={pis}
              onChange={(e) => setPis(Number(e.target.value))}
            />
            <TextField
              type="number"
              variant="outlined"
              label="COFINS"
              className="text-field"
              value={cofins}
              onChange={(e) => setCofins(Number(e.target.value))}
            />
            <TextField
              type="number"
              variant="outlined"
              label="INSS"
              className="text-field"
              value={inss}
              onChange={(e) => setInss(Number(e.target.value))}
            />
            <TextField
              type="number"
              variant="outlined"
              label="ISSQN"
              className="text-field"
              value={issqn}
              onChange={(e) => setIssqn(Number(e.target.value))}
            />
            <br />
          </Box>

          <Box
            sx={{
              gap: 1,
              ml: "2%",
              width: "50%",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              color: "white",
            }}
          >
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <TextField
                type="text"
                variant="outlined"
                label="Itens do Pedido"
                className="text-field"
                value={item}
                onChange={(e) => setItem(e.target.value)} // Atualiza o estado do item
              />
              <Button
                onClick={addItem}
                variant="contained"
                sx={{
                  ml: "4%",
                  mt: "2%",
                  width: "25%",
                  
                  fontSize: "12px",
                  backgroundColor: "#003459",
                  display: "flex",
                }}
              >
                Adicionar
              </Button>
            </Box>
           
            <Box
              sx={{
                mt: "20px",
                textAlign: "left",
                color: "white",
                overflowY: "auto",
                maxHeight: "150px",
              }}
            >
              {itens.length > 0 ? (
                itens.map((item, index) => (
                  <p key={index} style={{ margin: "5px 0" }}>
                    - {item}
                  </p>
                ))
              ) : (
                <p>Nenhum item adicionado ainda.</p>
              )}
            </Box>
          </Box>
        </Box>
        <br />
        <Button
          variant="contained"
          sx={{ ml: "22%" ,width: "50%", backgroundColor: "#003459" }}
          onClick={handleOpenModal}

        >
          Gerar nota fiscal
        </Button>
      </Paper>

    <ModalNotaFiscal open={open} setOpen={setOpenModal} dados={notaFiscal}/>
    </>
  );
}

export default Form;
