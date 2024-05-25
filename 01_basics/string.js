const name='poornima'
const repoCount=50

console.log(`Hello my name is ${name}and my repo count is ${repoCount}`);

const gameName=new String('gamezzz')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString=gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-3,1)

const string1="   abcs  "
console.log(string1);
console.log(string1.trim());