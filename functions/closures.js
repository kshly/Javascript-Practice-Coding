
const createCounter = () => {
    let count = 0

    return {
        increment(){
            count++
        },
        decrement(){
            count--
        },
        get(){
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())


//Another example for closures
const createAdder = (a) => {
    return (b) => {
        return a+b    //Lexical scope of b 
    }
}
const add10 = createAdder(10)
console.log(add10(-32))
console.log(add10(100))


const createTipper = (baseTip) => {
    return (amount) => {
        return baseTip*amount
    }
}

const tip20 = createTipper(0.2)
console.log(tip20(100))