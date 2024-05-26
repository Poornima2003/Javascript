//array

const myArr=[0,1,2,3,4,5]
const myHeros=['shaktiman','nagraj']
const myArr2=new Array(1,2,3,4)


// Array methods

// myArr.push(6)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()
console.log(myArr.includes(9));
console.log(myArr.indexOf(3));
const newArr=myArr.join()
console.log(myArr);
console.log(typeof newArr);


//slice splice

console.log('A',myArr);
const myn1=myArr.slice(1,3)
console.log(myn1)
console.log("B",myArr)

const myn2=myArr.splice(1,3)
console.log(myn2)

//concate two arrays
const num1=[1,2,3,4,5]
const num2=[6,7,8,9,10]

const num3=num1.concat(num2);
console.log(num3)

//spread operator
const all_new_numbers=[...num1,...num2]
console.log(all_new_numbers)

console.log(Array.isArray("poornima"))
console.log(Array.from("poornima"))
console.log(Array.from({name:"poornima"}))