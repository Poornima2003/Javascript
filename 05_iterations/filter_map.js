//+++++++++Filter map+++++++++++++++

const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums.filter((num)=>
// num>4)
// console.log(newNums);

const newNums=[]
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums);

//+++++++++++ map  +++++++++++++++

const  myNumers=[1,2,3,4,5,6,7,8,9,10]
const newnum=myNumers.map((num)=>{
    return num+10
})
console.log(newnum);



//+++++++++ reduce_map ++++++++++++++++

const arr=[1,2,3,4,5]

const initialvalue=0;
const sumWithIntial=arr.reduce(
    (accumulator,currentValue)=> accumulator+currentValue,initialvalue
       
);
console.log(sumWithIntial);



const shoopingCart=[
    {
        itemName:'js course ',
        price:2999
    },
    {
        itemName:'data science ',
        price:6799
    },
    {
        itemName:'java course ',
        price:2999
    },
    {
        itemName:'c++ course ',
        price:1999
    },{
        itemName:'python course ',
        price:30000
    }
]

const priceToPay=shoopingCart.reduce((acc,item)=> acc+item.price,0)
console.log(priceToPay);