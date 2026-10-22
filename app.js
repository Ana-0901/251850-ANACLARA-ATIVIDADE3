const express = require("express");
const app = express();

app.use(express.json());

const clienteRouter = require("./routes/cliente");
app.use("/clientes", clienteRouter);

app.listen(3000, () => console.log("Servidor rodando na porta: 3000"));
