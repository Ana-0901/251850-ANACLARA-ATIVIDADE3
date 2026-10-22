const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/clienteController");

router.get("/", clienteController.listarClientes);
router.get("/cidade/:cidade", clienteController.listarPorCidade);
router.get("/:id", clienteController.buscarClientePorId);
router.get("/:id/pedidos", clienteController.listarPedidos);
router.put("/:id", clienteController.atualizarCliente);
router.post("/:id/pedidos", clienteController.adicionarPedido);
router.delete("/:id", clienteController.removerCliente);

module.exports = router;
