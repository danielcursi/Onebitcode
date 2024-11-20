function PhoneNuber(phoneNumberString){
    const fixeString = phoneNumberString.replace(/[\sa-zA-Z]/g, "") // Usando expressão regular, [] para fazer um agrupamento de regras, pegando com \s os espaços, pagando de a - z minusculos e de A - Z maiúsculos, no final substituindo por nada.
    this.countryCode = fixeString.match(/(?<=\+)\d{1,3}/)[0] // Olhando para trás qualquer numero que sejá antecedido de +. contrabarra serve para escapar caracteres especiais.
    this.ddd = fixeString.match(/(?<=\()\d+(?=\))/)[0] // Olhando para trás quem comece por "(" precedido de numero, seguido por ")"
    this.number = fixeString.match(/(?<=\)).+/)[0].replace(/-/g, "") // Depois do ")" pegando qualquer coisa. no final pegando "-" substituindo por nada.
}

console.log(new PhoneNuber('+55 (22) 9 9876-5432'))
console.log(new PhoneNuber('+1 (999) as555-999-8888'))