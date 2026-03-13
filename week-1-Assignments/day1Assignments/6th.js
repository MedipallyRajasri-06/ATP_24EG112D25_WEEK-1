//6. Write a function that receives an array as arg and return their sum
function sum(arr)
{
let sum=0
for(let i=0;i<arr.length;i++)
    sum=sum+arr[i]
console.log("sum of array",sum)
}
let arr=[10,20,30,25]
sum(arr)