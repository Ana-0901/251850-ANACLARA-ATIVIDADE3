let clientes = [
  {
    id: 1,
    nome: "Ana Souza",
    idade: 28,
    cidade: "São Paulo",
    pedidos: [{ codigo: 101, produto: "Notebook", quantidade: 1 }],
  },
  {
    id: 2,
    nome: "Carlos Lima",
    idade: 35,
    cidade: "Rio de Janeiro",
    pedidos: [],
  },
];

exports.listarClientes = (req, res) => {
  res.json(clientes);
};

exports.buscarClientePorId = (req, res) => {
  const { id } = req.params;
  const cliente = clientes.find((c) => c.id === parseInt(id));
  if (!cliente) return res.status(404).json({ mensagem: "Id não existente" });
  res.json(cliente);
};

exports.listarPedidos = (req, res) => {
  const { id } = req.params;
  const cliente = clientes.find((c) => c.id === parseInt(id));
  if (!cliente) return res.status(404).json({ mensagem: "Id não existente" });
  res.json(cliente.pedidos);
};

exports.atualizarCliente = (req, res) => {
  const { id } = req.params;
  const { nome, idade, cidade } = req.body;
  const cliente = clientes.find((c) => c.id === parseInt(id));
  if (!cliente) return res.status(404).json({ mensagem: "Id não existente" });

  if (nome !== undefined) cliente.nome = nome;
  if (idade !== undefined) cliente.idade = idade;
  if (cidade !== undefined) cliente.cidade = cidade;
  res.json(cliente);
};

exports.adicionarPedido = (req, res) => {
  const { id } = req.params;
  const { codigo, produto, quantidade } = req.body;
  const cliente = clientes.find((c) => c.id === parseInt(id));
  if (!cliente) return res.status(404).json({ mensagem: "Id não existente" });

  const novoPedido = { codigo, produto, quantidade };
  cliente.pedidos.push(novoPedido);
  res.status(201).json(novoPedido);
};

exports.listarPorCidade = (req, res) => {
  const { cidade } = req.params;
  const resultado = clientes.filter(
    (c) => c.cidade.toLowerCase() === cidade.toLowerCase(),
  );
  res.json(resultado);
};

exports.removerCliente = (req, res) => {
  const { id } = req.params;
  const indice = clientes.findIndex((c) => c.id === parseInt(id));
  if (indice === -1)
    return res.status(404).json({ mensagem: "Id não existente" });

  clientes.splice(indice, 1);
  res.json({ mensagem: "Cliente removido com sucesso" });
};
