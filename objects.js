let user={ name:'raju', email:'raju@gmail.com',password:'8362'}
console.log(user.email,user.password)
console.log(user['name'])

user.address='lucknow'
console.log(user)

user.email="raju@hotmail.com"
console.log(user)

delete user.password
console.log(user)


console.log(Object.keys(user))
console.log(Object.values(user))

let smartphone={
    brand:'samsung',
    model :'s23 ultra',
    price :75000,
    color: 'black'

}

smartphone.color=["blue","red"]
console.log(smartphone.color)

console.log(smartphone.color[1])

smartphone.color.push('blue')
console.log(smartphone)
// smartphone.color.pop(1)
// console.log(smartphone)


