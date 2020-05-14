
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
const getDataPuzzle = (wordCount) =>{
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`,{}).then((response) =>{
        if(response.status === 200)
            return response.json()
        else
            throw new Error(`ErrorCode: ${response.status} has occured`)
    }).then((data) =>{
        return data.puzzle
    }).catch((error) =>{
        return error
    })
}


const getCountryName = (countryCode) =>{
    return fetch('http://restcountries.eu/rest/v2/all', {}).then((response) =>{
        if(response.status === 200)
            return response.json()
        else{
            throw new Error(`ErrorCode: ${response.status} has occured`)
        }

    }).then((data) =>{
        const country = data.find((country) =>{
            return country.alpha2Code === countryCode
        })

        const countryDetails = `${country.name}\n`+
            `${country.population}\n`+
            `${country.currencies[0].name}\n`+
            `${country.latlng[0]}\n`+
            `${country.latlng[1]}`
        
        return countryDetails

    }).catch((error) =>{
        return error
    })
}

const getLocationDetails = () =>{
    const token = '95bfa784799e9e'
    fetch(`http://ipinfo.io/json?token=${token}`, {}).then((response) =>{
        if(response.status === 200){
            return response.json()
        }
        else{
            throw new Error(`ErrorCode: ${response.status} has occured`)
        }
    }).then((data) =>{
        return (`${data.city}\n${data.region}\n${data.country}\n${data.timezone}`)
    }).catch((error) =>{
        return error
    })
}