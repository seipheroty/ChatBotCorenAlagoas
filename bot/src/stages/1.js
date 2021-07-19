const frases = require("../Frases/frases");
const banco = require("../banco");

function execute(user, msg) {
  if (msg == "0") {
    banco.db[user].stage = 1;
    return [frases.Menu];
  }
  if (msg == "1") {
    banco.db[user].stage = 2;
    return [frases.Finalizarconversa,frases.Inscricao_Definitiva_Principal];
  }
  if (msg == "2") {
    banco.db[user].stage = 2;
    return [frases.Finalizarconversa,frases.Inscricao_Secundaria];
  }
  if (msg == "3") {
    banco.db[user].stage = 2;
    return [frases.Finalizarconversa,frases.Inscricao_Remida];
  }
  if (msg == "4") {
    banco.db[user].stage = 2;
    return [frases.Finalizarconversa,frases.Suspensao];
  }
  if (msg == "5") {
    banco.db[user].stage = 2;
    return [frases.Finalizarconversa,frases.Cancelamento];
  }
  if (msg == "6") {
    banco.db[user].stage = 2;
    return [frases.Finalizarconversa,frases.Transferencia];
  }
  if (msg == "7") {
    banco.db[user].stage = 2;
    return [frases.Finalizarconversa,frases.CRT];
  }
  if (msg == "8") {
    banco.db[user].stage = 2;
    return [frases.Finalizarconversa,frases.Denuncia];
  }
  if (msg == "9") {
    banco.db[user].stage = 2;
    return [frases.Finalizarconversa,frases.Denúncia_Instituicao_Saude];
  }
  if (msg == "10") {
    banco.db[user].stage = 2;
    return [frases.Finalizarconversa,frases.Cadastro_Profisional];
  }
  if (msg == "11") {
    banco.db[user].stage = 2;
    return [frases.Finalizarconversa,frases.Renovacao_Carteita];
  }
  if (msg == "12") {
    banco.db[user].stage = 2;
    return [frases.Finalizarconversa,frases.Boletos];
  }
  if (msg == "13") {
    banco.db[user].stage = 2;
    return [frases.Finalizarconversa,frases.Registro];
  }
  if (msg == "14") {
    banco.db[user].stage = 2;
    return [frases.Finalizarconversa,frases.Reativacao];
  }
  if (msg == "15") {
    banco.db[user].stage = 2;
    return [frases.Finalizarconversa,frases.Certidoes];
  }
  if (msg == "16") {
    banco.db[user].stage = 2;
    return [frases.Finalizarconversa,frases.Segunda_Via];
  }
  
  if (msg == "17") {
    banco.db[user].stage = 3;
    return [frases.Secretaria];
  }
  if (msg == "19") {
    banco.db[user].stage = 1;
    return [frases.Valor];
  }
  return [frases.Naoentendeu, frases.Menu ];
}

exports.execute = execute;
