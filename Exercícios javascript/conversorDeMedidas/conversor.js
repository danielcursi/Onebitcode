let num = Number(window.prompt('Digite um valor em metros(M)'))
let medida = window.prompt('Para qual medida gostará de converter? (mm,cm,dm,dam,hm,km)')
let n1 = 0
switch (medida){
    case 'mm':
       n1 = num * 1000
        window.alert(`${num}m para mm é: ${n1}mm`)
        break
    case 'cm':
       n1 = num * 100   
       window.alert(`${num}m para cm é: ${n1}cm`)
       break
    case 'dm':
        n1 = num * 10
         window.alert(`${num}m para dm é: ${n1}dm`)
         break
    case 'dam':
        n1 = num * 0.1   
        window.alert(`${num}m para dam é: ${n1}dam`)
        break
    case 'hm':
        n1 = num * 0.01   
        window.alert(`${num}m para hm é: ${n1}hm`)
        break
    case 'km':
        n1 = num * 0.001   
        window.alert(`${num}m para km é: ${n1}km`)
        break  
    default:
        window.alert('Medida invalida')
}