let number = parseFloat(prompt("Informe o Número a ser convertido em metros!"))
let option = prompt("Escolha a medida desejada: \n1- Milímetro (mm)\n2- Centimentro (cm)\n3- Decímetro (dm)\n4- decâmetro (dam)\n5- hectômetro (hm)\n6- quilômetro (km)")
let convert = 0;
switch(option){
    case "1":
        convert = number * 1000
        alert(convert)
        break
    case "2":
        convert = number * 100
        alert(convert)
        break
    case "3":
        convert = number * 10
        alert(convert)
        break
    case "4":
        convert = number * 0.1
        alert(convert)
        break
    case "5":
        convert = number * 0.01
        alert(convert)
        break
    case "6":
        convert = number * 0.001
        alert(convert)
        break
    default:
        alert("Opção não encontrada!")
}