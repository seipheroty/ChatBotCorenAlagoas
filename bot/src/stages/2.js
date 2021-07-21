const frases = require("../frases/frases");
const banco = require("../banco");

function execute(user, msg) {
  if (msg == "1") {
    banco.db[user].stage = 3;
    return [frases.Inscricao_Definitiva_Principal,frases.Finalizarconversa];
  }
  if (msg == "2") {
    banco.db[user].stage = 3;
    return [frases.Inscricao_Secundaria,frases.Finalizarconversa];
  }
  if (msg == "3") {
    banco.db[user].stage = 3;
    return [frases.Inscricao_Remida,frases.Finalizarconversa];
  }
  if (msg == "4") {
    banco.db[user].stage = 3;
    return [frases.Suspensao,frases.Finalizarconversa];
  }
  if (msg == "5") {
    banco.db[user].stage = 3;
    return [frases.Cancelamento,frases.Finalizarconversa];
  }
  if (msg == "6") {
    banco.db[user].stage = 3;
    return [frases.Transferencia,frases.Finalizarconversa];
  }
  if (msg == "7") {
    banco.db[user].stage = 3;
    return [frases.CRT,frases.Finalizarconversa];
  }
  if (msg == "8") {
    banco.db[user].stage = 3;
    return [frases.Denuncia,frases.Finalizarconversa];
  }
  if (msg == "9") {
    banco.db[user].stage = 3;
    return [frases.Denúncia_Instituicao_Saude,frases.Finalizarconversa];
  }
  if (msg == "10") {
    banco.db[user].stage = 3;
    return [frases.Cadastro_Profisional,frases.Finalizarconversa];
  }
  if (msg == "11") {
    banco.db[user].stage = 3;
    return [frases.Renovacao_Carteita,frases.Finalizarconversa];
  }
  if (msg == "12") {
    banco.db[user].stage = 3;
    return [frases.Boletos,frases.Finalizarconversa];
  }
  if (msg == "13") {
    banco.db[user].stage = 3;
    return [frases.Registro,frases.Finalizarconversa];
  }
  if (msg == "14") {
    banco.db[user].stage = 3;
    return [,frases.Reativacao,frases.Finalizarconversa];
  }
  if (msg == "15") {
    banco.db[user].stage = 3;
    return [,frases.Certidoes,frases.Finalizarconversa];
  }
  if (msg == "16") {
    banco.db[user].stage = 3;
    return [frases.Segunda_Via,frases.Finalizarconversa];
  }

  if (msg == "19") {
    banco.db[user].stage = 1;
    return [frases.Valor];
  }
  return [frases.Naoentendeu, frases.Menu ];
}

exports.execute = execute;
