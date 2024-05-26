// const tinderUser=new Object()
const tinderUser={}
tinderUser.id='123abc'
console.log(tinderUser)

const regularUser={
    email:"poornima@gmail.com",
    fullname:{
        userfullname:{
            firstname:'poornima',
            lastname:'theurkar'
        }
    }
}
console.log(regularUser)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj4={5:"e",6:"f"}


// const obj3=Object.assign({},obj1,obj2,obj4)
const obj3={...obj1,...obj2} //spread method
console.log(obj3)
console.log(Object.keys(obj3));
console.log(Object.values(obj3));
console.log(Object.entries(obj3));

console.log(obj3.hasOwnProperty('7'))
