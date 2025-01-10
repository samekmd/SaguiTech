import { Router } from "express";
import gerarNotaFiscalController from "./controllers/notaFiscalController.js";

const router = Router();

router.post('/nota-fiscal', gerarNotaFiscalController);

export default router;