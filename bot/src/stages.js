var stages = {
  0: {
    descricao: "Boas Vindas",
    obj: require("./stages/0"),
  },
  1: {
    descricao: "Menu",
    obj: require("./stages/1"),
  },
  2: {
    descricao: "Respondendo Menu",
    obj: require("./stages/2"),
  },
  3: {
    descricao: "Retornar Conversa",
    obj: require("./stages/3"),
  },
  
  4: {
    descricao: "Atendente",
    obj: require("./stages/4")
  },
  
  5: {
    descricao : "Continuação",
    obj : require("./stages/5")
  },
  6: {
    descricao : "Finalizar Atendimento",
    obj : require("./stages/6")
  }
};

exports.step = stages;
