const dayjs = require("dayjs")

const birthDate = '10/04/1999'
const birthDateFormat = dayjs(birthDate).format('YYYY/DD/MM')
const currentYear = dayjs()
const age = currentYear.diff(birthDateFormat, 'year')
const nextBirthDay = dayjs(birthDateFormat).add(age +1, 'year')
const totalDays = nextBirthDay.diff(currentYear, 'day')

console.log(`Current age: ${age} years`)
console.log(`next BirthDay: ${dayjs(nextBirthDay).format('DD/MM/YYYY')}`)
console.log(`Days until your birthdays: ${totalDays}`)