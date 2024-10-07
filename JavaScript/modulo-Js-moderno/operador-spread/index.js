const tows = ["Gotham City", "Metropolis", "Central City", "Star City", "Coast City"]

console.log(tows)
console.log(...tows)
console.log(...tows[0])

const towsCopy = tows

tows.pop()
tows.pop()
tows.push("Happy Harbor")

const towsClone = [...tows]
towsClone.push("National City")
towsClone.push("Hub City")

console.log({ tows, towsCopy, towsClone })

const towsObj = {...tows}
const towsObjClone = {...towsObj}
towsObjClone.teste = "teste"
console.log({towsObj, towsObjClone})