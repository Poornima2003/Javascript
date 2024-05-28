function sayMyName(){
    console.log('p');
    console.log('o');
    console.log('o');
    console.log('r');
    console.log('n');
    console.log('i');
    console.log('m');
    console.log('a')
    
}
// sayMyName()

function addTwoNumber(n01,n02){
   console.log(n01+n02) 

}
addTwoNumber(3,4)

function add(no1,no2){
    // let result=no1+no2
    // return result
    return no1+no2
}
const result=add(3,2)
console.log('result:',result)

function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("poornima"))


function calculateCartPrice(...num1){
return num1
}
console.log(calculateCartPrice(200,300,400))

const user={
    username:'poornima',
    "price":122
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username:'sana',
    price:244
})

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));