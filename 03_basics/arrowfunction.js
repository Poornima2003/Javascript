const user={
    username:'poornima',
    price:999,
    welcomeMessage:function(){
        console.log(this)
        console.log(`${this.username},welcome to website`)
    }
}

user.welcomeMessage()
user.username='sam'
user.welcomeMessage()
// console.log(this)

// function first(){
//     let username='poornima'
//     console.log(this.username)
// }
// first()

const first=()=>{
    let username='poornima'
     console.log(this)
}
// first()


//arrow-function

const addTwo=(num1,num2)=>{
return num1+num2
}
console.log(addTwo(2,4))


//implict return

const add=(num1,num2)=>
    num1+num2

console.log(add(2,5))

// const myArray=[2,3,4,5,6]
// myArray.forEach(()=>{

// })