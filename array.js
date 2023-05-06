let movies=['rrr','shyam','sundar','uusdu']

//indexing
// console.log(movies[2])
// console.log(movies.indexOf('rrr'))

//to fetch from backside of array

// console.log(movies.at(-1))

//total no of element
// console.log(movies.length)

//slicing
console.log('---------------')
console.log(movies.slice(2,5))
console.log('---------------')


//adding element
//[...]   spread operator
console.log([...movies,'barfi'] )
// console.log(['batman',...movies,'barfi'] )
console.log('---------------')



//stoing of value
movies=[...movies,'barfi']
//insert at any place
// console.log([...movies.slice(0,3),'100days',...movies.slice(4)])
// console.log([...movies.slice(0,3),'100days',...movies.slice(3)])

//wap a program to add element at 4 position in an array
console.log([...movies.slice(0,3),'baywatch',...movies.slice(3)])
console.log(movies)
movies=[...movies.slice(0,3),'baywatch',...movies.slice(3)]


//wap to replace 4 element in any array
console.log(movies)
movies[3]='tiger'
console.log(movies)


//wap to store 5 friends name in an array and the fetch the first three character of 2nd element
const friends=['sai','ram','shyam','sundar','maurya']
console.log(friends)
console.log(friends[1].charAt(2))


//removing element fro array
console.log(movies)
movies.pop()//removes last element from array
console.log(movies)
movies.shift()//removes first element from array
console.log(movies)

//removing multiple element from aray

movies=[...movies,'flash','exit','xxx']
console.log(movies)

movies.splice(1,2)//(1,2) here 1 is the index and 2 rpresents no of element to be removed after index 1
console.log(movies)




