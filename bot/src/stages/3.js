const banco = require("../banco");
const frases = require("../frases/frases")

function execute(user, msg) {
  if (msg == 1) {
    banco.db[user].stage = 2;
    return [frases.Menu];
  }
  else if (msg == 2) {
    banco.db[user].stage = 0;
    return [frases.Finalizarconversaaceitou];
  }
  else {
    return [frases.Finalizarnaoentendeu,frases.Finalizarconversa];
  }

}
exports.execute = execute;