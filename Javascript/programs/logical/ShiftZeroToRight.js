//By Filter Method
 
let ar=[2,3,6,9,0,4,0,0,3,0,5,0]
zeros=ar.filter(num=>num==0)
nonZeros=ar.filter(num=>num!==0)
 
let ar1=[...nonZeros, ...zeros]
console.log(ar1.join(" "))
 
console.log("------------------------")
 
//By Foor Loop
let arr=[2,5,6,1,0,0,5,0,4,0,0,0]
ar2=new Array(arr.length).fill(0)
index=0;
for(let i=0; i<=arr.length; i++){
    if(arr[i]!==0){
        ar2[index]=arr[i];
        index++
    }
}
console.log(ar2.join(" "))