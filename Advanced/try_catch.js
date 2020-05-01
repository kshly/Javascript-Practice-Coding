const getTip = (amount) => {
    if(typeof amount === 'number'){
        return amount *.25
    } 
    else {
        //throw 'amount is not a number'  //throwing a custom error
        throw Error('amount is not a number')  // using the stack trace from the error function
    }
   
}

try{
    const result = getTip(10)
    console.log(result)
} catch(e) {
    console.log('Catch block is running')
    // console.log(e)
}

// const result = getTip(true) // true is converted to 1 by Type coercion
// console.log(result)