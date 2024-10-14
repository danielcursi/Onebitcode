const person = {
    name: "Luke",
    job: "Farme",
    parents: ["Anakin", "Padme"]
}

const name = person.name
console.log(name)

const { job, parents } = person
console.log(name, job, parents)

const [father, monther] = parents
console.log(father, monther)

function createUser({name, job, parents}){
    const id = Math.floor(Math.random() * 9999)
    return {
        id,
        name,
        job,
        parents
    }
}

console.log(createUser(person))

