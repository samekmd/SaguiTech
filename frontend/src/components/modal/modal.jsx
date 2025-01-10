import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

export default function ModalNotaFiscal({ open, setOpen, dados }) {
    const handleClose = () => {
      setOpen(false);
    };
  
  
  
    return (
      <React.Fragment>
        <Dialog open={open} onClose={handleClose} PaperProps={{ component: 'form', onSubmit: (event) => { event.preventDefault(); handleClose(); } }}>
          <DialogTitle>Nota Fiscal</DialogTitle>
          <DialogContent>
            <Typography variant="h6">Valor da Venda:</Typography>
            <Typography variant="body1">R$ {dados.valorVenda ? dados.valorVenda.toFixed(2) : "0.00"}</Typography>
  
            <Typography variant="h6" sx={{ marginTop: 2 }}>
              Itens Vendidos:
            </Typography>
            <ul>
              {dados.itens ? dados.itens.map((item, index) => (
                <li key={index}>{item}</li>
              )) : null}
            </ul>
  
            <Typography variant="h6" sx={{ marginTop: 2 }}>
              Impostos:
            </Typography>
            <ul>
              {dados.impostos && (
                <>
                  <li>IRPF: R$ {dados.impostos.IRPF || "0.00"}</li>
                  <li>PIS: R$ {dados.impostos.PIS || "0.00"}</li>
                  <li>COFINS: R$ {dados.impostos.COFINS || "0.00"}</li>
                  <li>INSS: R$ {dados.impostos.INSS || "0.00"}</li>
                  <li>ISSQN: R$ {dados.impostos.ISSQN || "0.00"}</li>
                </>
              )}
            </ul>
  
            <Typography variant="h6" sx={{ marginTop: 2 }}>
              Total de Impostos:
            </Typography>
            <Typography variant="body1">R$ {dados.valorTotalImpostos || "0.00"}</Typography>
  
            <Typography variant="h6" sx={{ marginTop: 2 }}>
              Valor Líquido:
            </Typography>
            <Typography variant="body1">R$ {dados.valorLiquido || "0.00"}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>OK</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
  


ModalNotaFiscal.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    dados: PropTypes.object.isRequired

    
  };