const frases = require("../frases/frases");
const banco = require("../banco");

function execute(user,msg){
    if (msg == 2){
        banco.db[user].stage = 4;
        return [frases.MenuSetores]; 
    } 
    else if (msg == "1"){
        banco.db[user].stage = 2;
        return [frases.Menu];  
    }
}

exports.execute = execute;