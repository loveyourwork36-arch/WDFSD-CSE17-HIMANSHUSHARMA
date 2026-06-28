/*console.log("h"

)
console.log("i ")*/

function saymeow()
{
    console.log("h")


    console.log("i ")
    
}
saymeow();

function loginUserame(username)

{
    return `${username} just logged in`
}
console.log(loginUserame('susan'))
// shipping cart
function priceCart(... price)
{
    return price
}
console.log(priceCart(100,200,300))
// passing object in function 
const currentUser = {
    username: "hitman",
    id: "3"
}
function handleObject(anyobject) {
    console.log(`${anyobject.username} and price is ${anyobject.id}`)
}
handleObject(currentUser)
// array as function 
function handleArray(user) {
    return user[2]
}
console.log(handleArray(["300","450","500"]))


// hoisting in java script
function  user()
{
    return "hello"
}
console.log(user)

//  other way is to give  name to expression 
 


