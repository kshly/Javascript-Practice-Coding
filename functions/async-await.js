const getPromise = (num) => new Promise((resolve, reject) =>{
    setTimeout(() =>{
        typeof num === 'number' ? resolve(num*2) : reject('Number must be provided')
    }, 2000)
})

//async functions always returns promises
//await only works inside an aync function it waits for the promise of the function to be settled
const processData = async () => {
    let data = await getPromise(2)
    data = await getPromise(10)
    return data
}

processData().then((data) =>{
    console.log('Data',data)
}).catch((error)=>{
    console.log(`${error}`)
})