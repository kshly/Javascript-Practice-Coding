
// const Person = function(firstName , lastName , age, likes) {
//     //console.log(this) //'this' refers to the current empty object
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this.likes = likes 
// }
// //adding functions for the constructor using the property "prototype"
// Person.prototype.getBio = function() {
//     let bio =  `${this.firstName} is ${this.age}.`

//     this.likes.forEach((like) => {
//         bio += ` ${this.firstName} likes ${like}.`
//     })

//     return bio
// }

// Person.prototype.setName = function(fullName){
//     const names = fullName.split(' ')
//     this.firstName = names[0]
//     this.lastName = names[1]
// }
// // const me = new Person('Kishalay' , 'Ghosh' , 25) // an object type of person is created(reference to a Constructor function)
// // me.lastName = 'Banerjee' //we can modify any existing property of the object that we just instantiated
// // console.log(JSON.stringify(me, null , 2))

// // const person2 = new Person('Clensey' , 'Turner' , 51)
// // console.log(JSON.stringify(person2, null , 2))

// // //prototypal inheritance

// const me = new Person('Kishalay' , 'Ghosh' , 25 , ["coding", "Biking"])

// me.getBio = function() {
//     return `This is fake`
// }
// console.log(me.getBio())
// const me2 = new Person('Kishalay' , 'Ghosh' , 25 , ["coding", "Biking"])
// //me2.setName('Alexis Turner')
// console.log(me2.getBio())

//Class approach
class personClass {
    constructor(firstName , lastName , age, likes) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes 
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
    setName(fullName){
        const arr = fullName.split(' ')
        this.firstName = arr[0]
        this.lastName = arr[1]
    }
}

const myPerson = new personClass('Kishalay', 'Ghosh' , 25 , 20)
myPerson.setName('Nancy turner')
console.log(myPerson.getFullName())
