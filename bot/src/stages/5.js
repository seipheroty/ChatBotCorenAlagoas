const banco = require("../banco");
const frases = require("../frases/frases")

function execute (user,msg){
    if (msg == "1") {
        banco.db[user].stage = 1;
        return [frases.BoaVindas];
      }
      else if (msg == "2") {
        banco.db[user].stage = 0;
        return [frases.Finalizarconversaaceitou];
      }
      else {
        return [frases.Finalizarconversa, frases.Finalizarnaoentendeu];
    }
}


exports.execute = execute;