//4. Find the smallest element in marks array
let arr=[22,12,34,3]
let min=arr[0]
for(i=1;i<arr.length;i++){
    if(min>arr[i])
        min=arr[i]
}
console.log("smallest element is",min)