const frases = require("../frases/frases");
const banco = require("../banco");

function execute(user, msg) {
  banco.db[user].stage = 1;
  return [ frases.BoaVindas ];
}

exports.execute = execute;


