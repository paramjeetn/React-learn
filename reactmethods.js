
const numbers=[2,3,4,1,24,1344];


//map
// let newnumber=[];
// numbers.map((num)=>{
// newnumber.push(num*2);
// })
// console.log(newnumber);

//filter
// let filternumber=[]
// numbers.filter((num)=>{
//     if(num>3){
//         filternumber.push(num);
//     }

// })
// console.log(filternumber);



//reduce: acumulate a value by doing something to each item in a array

var newreduce=numbers.reduce((accumulator,currentNumber)=>{
return accumulator+currentNumber;
})
console.log(newreduce);
