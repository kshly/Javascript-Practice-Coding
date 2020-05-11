//using callback
const getData = ((callback)=>{
    setTimeout(()=>{
        callback(undefined, 'This is the data')
    }, 2000)
})


getData((err , data) =>{
    if(err){
        return `Error: ${err}`
    }
    else{
        console.log(data)
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