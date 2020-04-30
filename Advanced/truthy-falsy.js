const products = [''] 

const product = products[0]

//truthy => values that resolve to be true in  boolean context
//falsy => values that resolve to be a false in a boolean context
//falsy values => false , 0 , empty string , null , undefined

if(product !== undefined){
    console.log('product found!!')
}else{
    console.log('product not found')
}