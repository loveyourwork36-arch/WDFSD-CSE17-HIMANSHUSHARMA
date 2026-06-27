const arr = {
    name:"hitman",
    class:"unpad"
}
console.log(arr.name);
console.log(arr["name"]);
console.log(arr);
// symbol concept in which 
/* const new=Symbol("meow")
now in object we can write like [new]: meowchan

 */
arr.name="virat";
Object.freeze(arr);

console.log(arr);
// now to add another property to object 
/*arr.greet=function(){
    console.log("hello");

    



}
console.log(arr.greet());*/

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3=Object.assign({},obj1,obj2);
console.log(obj3);
// console.log(...obj1,...obj2)
// aaray of objects
const user = [
    {
        id: 1,
        name: "chaman"
    },
    {
        id: 2,
        name: "leo"
    }
 ];
console.log(Object.keys(user)); // similarly for values
console.log(user.hasOwnProperty("name:"));
//deconstruct



//api brief , function can be as well as array 

{
    name="chow"
    id ="1"
}