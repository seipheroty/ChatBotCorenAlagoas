const frases = require("../Frases/frases");
const banco = require("../banco");

function execute(user, msg) {

  banco.db[user].stage = 1;

  return [ frases.Menu,frases.BoaVindas ];
}

exports.execute = execute;
