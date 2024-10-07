const person = {
    name: 'Daniel',
    lastName: 'Cursi',
    age: 25,
    nationality: 'Brazil'
}

// const {name} = person
// const {lastName} = person
// console.log(name + " " + lastName)

const register = ({name, lastName, age, nationality}) => {
    console.log(`Nome: ${name}
SobreNome: ${lastName}
Idade: ${age}
Nacionalidade: ${nationality}`)
}

register(person)