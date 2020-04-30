const square = (a) => {
    return a*a
}

console.log(square(5))

const Persons = [
        {
            name: "Kishalay",
            age: 25
        },
        {
            name: "Kartick",
            age: 67
        },
        {
            name: "Rahul",
            age: 32
        }
]

const under30 = Persons.filter((person) => person.age < 30)
const under60 = Persons.filter((person) => person.age < 60)

const person = Persons.find((person) => person.age === 32)

console.log(JSON.stringify(under30, null , 2))
console.log(JSON.stringify(under60, null , 2))
console.log(JSON.stringify(person.name , null , 2))