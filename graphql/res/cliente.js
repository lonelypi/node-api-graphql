const Operacoes = require('../../infraestrutura/operations')
const Clientes = new Operacoes('clientes')

const resolvers = {
    Query: {

      clientes: () => Clientes.lista(),
      cliente: (root, { id }) => Clientes.buscaPorId(id),

    },

    Mutation: {
      
      adicionarCliente: (root, params) => Clientes.adiciona(params),
      atualizarCliente: (root, params) => Clientes.atualiza(params),
      deletarCliente: (root, { id }) => Clientes.deleta(id),
  
    }
  }

module.exports = resolvers