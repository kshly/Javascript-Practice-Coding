const gradcal = (score, totalScore) => {
    if(typeof score === 'number' && typeof totalScore === 'number'){
        const percent = (score / totalScore) * 100
        let gradeLetter = ''
        
        if(percent >= 90){
            gradeLetter = 'A'
        }
        else if(percent >= 80 && percent < 90){
            gradeLetter = 'B'
        }
        else if(percent >= 70 && percent < 80){
            gradeLetter = 'C'
        }
        else if(percent >= 60 && percent < 70){
            gradeLetter = 'D'
        }
        else{
            gradeLetter = 'F'
        }
    
        return `You got a ${gradeLetter} (${percent}) !!`

    } else{
        throw Error('Please provide a number')
    }
   
}

try{
    const result = gradcal(670 , true)
    console.log(result)
}
catch(e){
    console.log(e.message)
}