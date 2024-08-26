let opcao = "";
let base, altura, lado;

console.log(base)

function AreaDoTriangulo(base, altura){
    return (base * altura) / 2
}

function BaseDoRetangulo(base, altura){
    return base * altura
}

function AreaDoQuadrado(lado){
    return Math.pow(lado, 2)
}

function AreaDoTrapezio(basem, base, altura){
    return (basem + base) * altura / 2
}

function AreaDoCirculo(raio){
    return 3.14 * Math.pow(raio, 2)
}

function exibirMenu(){
    return prompt("####Calculadora geometrica####\n1. Área do triângulo\n2. Área do retângulo\n3. Área do quadrado\n4. Área do trapézio\n5. Área do circulo\n6. Sair")
}

while(opcao != "6"){
    opcao = exibirMenu()
    switch(opcao){
        case "1":
            base = parseFloat(prompt("Informe a base do triangulo:"))
            altura = parseFloat(prompt("Informe a altura do triangulo:"))
            alert("Área do triangulo: " + AreaDoTriangulo(base, altura) + "m²")
            break
        case "2":
            base = parseFloat(prompt("Informe a base do retangulo:"))
            altura = parseFloat(prompt("Informe a altura do retangulo:"))
            alert("Base do retangulo: " + BaseDoRetangulo(base, altura) + "m²")
            break
        case "3": 
            lado = parseFloat(prompt("Informe o lado do quadrodo:"))
            alert("Área do quadrado: " + AreaDoQuadrado(lado) + "m²")
            break
        case "4":
            let basem = parseFloat(prompt("Informe a base menor do trapézio:"))
            base = parseFloat(prompt("Informe a base maior:"))
            altura = parseFloat(prompt("Informe a altura do trapezio:"))
            alert("Área do trapézio: " + AreaDoTrapezio(basem, base, altura) + "m²")
            break
        case "5":
            let raio = parseFloat(prompt("Informe o raio do circulo:"))
            alert("Área do circulo: " + AreaDoCirculo(raio) + "m²")
            break
            case "6":
            alert("Encerrando...")
            break
        default:
            alert("Opção não encontrada!")
    }
}