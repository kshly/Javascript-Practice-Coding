
//the function passed to the new Promise is the function executor Initial state:Pending 
//after the promise returns a result either from resolve(state:fulfilled) or reject(state:rejected) 
//../app.js acts as the promise consumer and prints a meaninful result or prints the error depending on the state.
// const getPuzzle = (wordCount) => new Promise((resolve, reject) =>{

//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', (event) => {
//         if(request.readyState === 4 && request.status === 200){
//             const data = JSON.parse(request.responseText)
//             resolve(data.puzzle)
//         }
//         else if(request.readyState === 4){
//             reject('An Error has taken place')
//         }
//     })
//     request.open('GET',`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     request.send()
// })


// const getPuzzleSync = () => {
//     //Making a synchronous HTTP request 
//     const request = new XMLHttpRequest()
//     request.open('GET','http://puzzle.mead.io/puzzle?wordCount=8', false) //'false' indicates the HTTP request to run synchrounously
//     request.send()

//     if(request.readyState === 4 && request.status === 200){
//         const data = JSON.parse(request.responseText)
//         return data.puzzle
//     }
//     else if(request.readyState === 4){
//         throw new Error('Something went wrong!!')
//     }
// }


//using fetch api 
const getPuzzle = (wordCount) =>{
    fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`,{}).then((response) =>{
        if(response.status === 200)
            return response.json()
        else
            throw new Error('Something went wrong!!')
    }).then((data) =>{
        console.log(data.puzzle)
    }).catch((error) =>{
        console.log(error)
    })
}



const getCountryName = (countryCode) => new Promise((resolve , reject) => {
    const request = new XMLHttpRequest()

    request.open('GET','http://restcountries.eu/rest/v2/all')
    request.send()

    request.addEventListener('readystatechange', (event) => {
        if(event.target.readyState === 4 && event.target.status === 200){
        
            const data = JSON.parse(event.target.responseText)
            
            const country = data.find((country) => {
                return country.alpha2Code === countryCode
            })
            const countryDetails = `${country.name}\n`+
            `${country.population}\n`+
            `${country.currencies[0].name}\n`+
            `${country.latlng[0]}\n`+
            `${country.latlng[1]}`
            resolve(countryDetails)
        }
        else if(event.target.readyState === 4){
            reject("Something went wrong" , undefined)
        }
    })
})

