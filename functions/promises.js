//using callback 
const getDataCallBack = ((num, callback)=>{
    setTimeout(()=>{
        if(typeof num === 'number'){
            callback(undefined , num*2)
        }
        else{
            callback('The number must be provided', undefined)
        }
    }, 2000)
})

//implementation of callback hell
getDataCallBack(2,(err , data) =>{
    if(err){
        return `Error: ${err}`
    }
    else{
        getDataCallBack(data , (err, data) =>{
            if(err){
                console.log(err)
            }
            else{
                console.log(data)
            }
        })
    }
})

//using promise api

const getDataPromise = (data) => new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve(`This is the promise data: ${data}`)
    }, 2000)
})

const myPromise = getDataPromise(112)

myPromise.then((data) => {
    console.log(data)
    }, (err)=> {
    console.log(err)
})

//implementation of promise chain 
const getPromise = (num) => new Promise((resolve, reject) =>{
    setTimeout(() =>{
        typeof num === 'number' ? resolve(num*2) : reject('Number must be provided')
    }, 2000)
})

//without using promise chaining
getPromise(2).then((data)=>{
    getPromise(data).then((data) =>{
        console.log(`Tha data is ${data}`)
    },(err) =>{
        console.log(err)
    })
}, (err)=>{
    console.log(err)
})

//using promise chaining 
//if anyone of the promise in the promise chain fails it directly goes to catch
getPromise(10).then((data) =>{
    return getPromise(data)
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})