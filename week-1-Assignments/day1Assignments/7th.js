//7. Write a function that receives an array & search element as args and returns the index of that search element in the array.
//  It should return "not found" when search element not found.
 function search(arr,key){
    for(let i=0;i<arr.length;i++)
    {
        if(key==arr[i])
            return i
      
    }
      return"not found"
}
let arr=[15,5,20,18,25]
let res=search(arr,5)
console.log(res)