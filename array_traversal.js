let nums=[11,33,64,31,88,52]
for(let i=0;i<nums.length;i++){
    if(nums[i]%2==0){

        console.log(nums[i])

    }

}


console.log("------------------------------------")
let newArr=[]
//for each loop: for-of loop
for(let n of nums){
    if(n%2==0){
        // console.log(n)
        newArr.push(n)
    }
}
console.log(newArr)



//filtering in array

 let res=nums.filter((n) => { return n%2==0})
 console.log(res)

 //map
 let res2=nums.map((a)=>{return a*2})
 console.log(res2)

 const prices=[1200,350,3250,5890,33909]

 let res3=prices.map((p)=> {return p-p/10})
 console.log(res3)
 //wap to given array ['₹3400', '₹845', '₹20', '₹940', '₹3700'] convert all the elements to number

  const rupees=['₹3400', '₹845', '₹20', '₹940', '₹3700']

 console.log(rupees)
 let newprice= rupees.map((p)=>{return parseInt(p.slice(1))})
 console.log(newprice)

 //perfect  from array
 let num3=[2,3,4,5,6,7,8,10,12,25]
 let perfects= num3.filter((n)=>{return n**0.5!==parseInt(n**0.5)})
 console.log(perfects)

 //create a fun that takes an array and index as parameter and removes the single element on that index and returns the array
 const eleRem =(arr,i)=>{
    arr.splice(i,1)
    return arr
 }
 let res6=eleRem(num3,3)
 console.log(res6)



  
 




