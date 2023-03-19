for(let i=0;i<10;i++)
{
    console.log(i)
}


for(let i=1;i<100;i++){
    if(i%7==0||i%13==0)
    {
        console.log(i)
        
    }
    
}

console.log('--------------fibinaci series-----------------');
// variavble declraion 
let [a , b]=[0,1]
console.log(a)
console.log(b)

for(let i=0;i<10;i++)
{
    let c=a+b
    console.log(c);
    [a,b] = [b,c]

}
//write a pro to find factorila of an number
console.log('--------------------------------')

num=6
fact=1
for(i=1;i<=num;i++)
{
    fact=fact*i;
    
}
console.log(fact)






console.log('------------------prime-----------------------')

let mynum=7
let prime=true

for(let i=2; i<mynum;i++)
{
    if(num%i==0)
    {
        prime=false
        console.log('nt prime')
        break;
    }



}
if(prime) console.log('prime')


console.log('=--------------------------------------revsrse no')

let n1=37654
let reverse=0
while(n1>0)
{
    let r=n1%10
    reverse=reverse* 10 + r
    n1=parseInt(n1/10)
 
}
console.log(reverse)
console.log()


//wap to print a number from 1 to 100 which are prime

for(i=2;i<=100;i++){
    prime=true;
    for(j=2;j<=Math.sqrt(i);i++){
        if(i%j==0)
        prime=false
        break

    }
    if(prime)console.log( i+"is prime")
} 

console.log("-----------------------peindrome---------")
//write a number to check whether is pelindrome
number1=121
reverse=0
while(number1>0){
    r=number1%10
    reverse=reverse*10+r
    number1=parseInt(number1/10)
}

if(number1=reverse){
    console.log('palindrome')
}

//write A program  to show armstrong number
 num=9474
temp = num;
r=0
count=0
sum=0
while(num>0){
    count++
    num =parseInt(num / 10);
}
num = temp;
 console.log(count)
while(num>0){
    r=num%10
    sum +=Math.pow(r,count)
    num=parseInt(num/10)
}
if(temp==sum){
    console.log("yes")
}else{
    console.log("no")

}

