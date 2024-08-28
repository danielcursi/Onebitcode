const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ]

  const guerreiro = personagens.filter(function(personagem){
    return personagem.classe === "Guerreiro"
  })

  console.log(guerreiro)

  const totalNivel = guerreiro.reduce(function(acumulador, classes){
    return acumulador + classes.nivel
  }, 0)

  console.log(totalNivel)

  const racas = personagens.reduce(function(acumulador, personagem){
    acumulador[personagem.raca] = [acumulador]
    return acumulador
  }, {})

  console.log(racas)

