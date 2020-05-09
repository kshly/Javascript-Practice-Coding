
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
class Person {
    constructor(firstName , lastName , age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes 
    }

    getFullName(){
        return `Name is ${this.firstName} ${this.lastName} \n`
    }

    getBio() {
        let bio = `${this.getFullName()}`
        bio += `Bio of ${this.firstName} is:\n`
        this.likes.forEach((like) => {
            bio += `${this.firstName} likes ${like}.\n`
        })
        
        return bio
    }
    set fullName(fullName){
        const arr = fullName.split(' ')
        this.firstName = arr[0]
        this.lastName = arr[1]
    }
}


class Employee extends Person{
    constructor(firstName , lastName ,age , likes , position){
        super(firstName , lastName , age, likes)
        this.position = position
    }
    getBio(){ 
        return `${this.firstName} ${this.lastName} is a ${this.position}`
    }

    getYearsLeft(){
        return 65 - this.age
    }
}
// // const myPerson = new Person('Kishalay', 'Ghosh' , 25 , ['Teaching', 'Biking'])
// // myPerson.setName('Nancy Turner')
// // console.log(myPerson.getFullName())

// const employee = new Employee('Kishalay', 'Ghosh' , 25 , ['Teaching', 'Swimming'] , 'Teacher')
// // console.log(employee.fullName())
// console.log(employee.getBio())
// console.log(employee.getYearsLeft())

//Create a class for a student
//Track the grade 0 - 100
// Override the bio to print a passing or failing message. 70 and above "Andrew is passing the exam"
//create "UpdateGrade" that takes the amount to add or remove from the grade


class Student extends Person{

    constructor(firstName, lastName, age, grade , likes = []){
        super(firstName , lastName , age , likes)
        this.grade = grade
    }

    updateGrade(change){
        this.grade += change
    }

    getBio(){
        const status = this.grade >= 70 ? 'Passing' : 'Failing'
        return `${this.firstName} ${this.lastName} is ${status} the exam`
    }
}

const me2 = new Person("Nance", "turin" , 22, [])
me2.fullName = 'Jio Ray'
const me = new Student("Kishalay", "Ghosh", 25 , 88, [])
me.updateGrade(-23)
console.log(me)
console.log(me.getBio())
console.log(me2)