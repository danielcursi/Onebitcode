class Vehicle{
    move(){
        console.log('O veiculo está se movendo!')
    }
}

class Car extends Vehicle{
    move(){
        console.log('O carro está se andando!')
    }
}

class ship extends Vehicle{
    move(){
        console.log('O navio está navegando!')
    }
}

class plane extends Vehicle{
    move(){
        console.log('O avião está voando!')
    }
}

const relampagoMarquinhos = new Car()
const blackPearl = new ship()
const epoch = new plane()

// relampagoMarquinhos.move()
// blackPearl.move()
// epoch.move()

function start(vehicle){
    console.log('Iniciando um veiculo...')
    vehicle.move()
}

start(relampagoMarquinhos)
start(blackPearl)
start(epoch)