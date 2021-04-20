/*Ex1
let p1 = {
    name: "p1",
    age: "23",
    city: "kfar qassem"
}
let p2 = {
    name: "p2",
    age: "23",
    city: "kfar qassem"
}
if (p1.age == p2.age && p1.city == p2.city) {
    console.log("Jill wanted to date Robert");
} else {
    console.log("Jill wanted to date Robert, but couldn’t");
}*/
/*EX2*/
let p1 = {
    name: "p1",
    age: "23",
    city: "kfar qassem"
}
let p2 = {
    name: "p2",
    age: "23",
    city: "kfar qassem"
}
let myList = [p1, p2]
myList[0].age = 24
myList[1].age = 24
console.log(myList[0]);
console.log(myList[1]);
/*ex3
let p3 = {
    name: "p3",
    age: "24",
    city: "kfar bra"
}
let p4 = {
    name: "p4",
    age: "29",
    city: "kfar bra"
}
let myList2 = [p3, p4]
myList.push(myList2)
console.log(myList);*/
/*ex4*/
let library = []
let book = {
    title: "dregatpro",
    author: "ahmad"
}
library.push(book)
console.log(library);