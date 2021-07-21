const frases = require("../frases/frases");
const banco = require("../banco");

function execute(user, msg) {
  if (msg == "1") {
    banco.db[user].stage = 5;
    return [frases.ContatoArrecadacao,frases.Finalizarconversa,];
  }

  else if (msg == "2") {
    banco.db[user].stage = 5;
    return [frases.ContatoRegistro,frases.Finalizarconversa];
  }

  else if (msg == "3") {
    banco.db[user].stage = 5;
    return [frases.ContatoFiscalizacao,frases.Finalizarconversa,]
  }
}

exports.execute = execute;