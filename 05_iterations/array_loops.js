//+++++++for of loop++++++++

const arr=[1,2,3,4,5]

for (const num of arr ) {
    console.log(num);
}

const greeetings='hello world!'
for (const greet of greeetings) {
    console.log(`each char is ${greet}`);
}

// Maps

const map=new Map()
map.set('IN',"INDIA")
map.set('US',"UNITED STATE")
map.set('FR',"FRANCE")

console.log(map);

for (const [key,value] of map) 
    {
        console.log(key,':-',value);
    
}

const myObject={
    'game1':"nfs",
    'game2':"spiderman"
}

// for (const [key,value] of object) 
//     {
//         console.log(key,':-',value);
    
// }

// +++++++++for in loop++++++++++++++++

for (const key in myObject) {
    console.log(`${key} shorcut is for ${myObject[key]}`);
}


const programming=['js','rb','py','java']
for (const key in programming) {
    console.log(programming[key]);
        
    }

for (const key in map) {
    console.log(key);
}


//+++++++++++for each loop+++++++++++++

const coding=['js','ruby','java','python','cpp']
// coding.forEach(function (item){
//    console.log(item);
// })

coding.forEach((item)=>{
console.log(item);
})

// function printMe(item){
//     console.log(item);
// }

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

const myCoding=[{
    languageName:"javascript",
    languageFileName:"js"
},
{
    languageName:"python",
    languageFileName:"py"
},
{
    languageName:"java",
    languageFileName:"ja"
},
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
})