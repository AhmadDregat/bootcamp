/* ex1
console.log("hello , word");
let myV = "The potential of the future"
console.log("ahmad is a good way " + myV)
let password = 123456
let confirmPassword = 123456
if (password === confirmPassword) {
    console.log("success");
}*/
/*ex2
console.log(423 * 12);
console.log(802 / 2);

/*ex3
console.log((5 > 2) && false);
console.log(!("knife" === "sword"));
console.log((1 < 2) || (-1 > -1) || !false);
console.log("");
console.log((31 % 5) == "1");
console.log(!!true);
console.log("5th Avenue" != "5th Avenue");
console.log(52 !== "52");
console.log((undefined || null));
*/
/*ex4
let a = 3
a = 4
let c = 0
let b = a
b = 2
a = b
b = c
c = a
a = b*/
/*ex5
let a = 3
a = 4
let c = 0
let b = a
b = 2
a = b
b = c
c = a
a = b
console.log(a, b, c);
*/
/*Exercise 1
let numChildren = prompt("please enter a num ");
let isCareful;
if (!isCareful) {
    numChildren++

}
console.log(numChildren);*/
/*Exercise 2
let silverwareCount = prompt("please enter a num ");
if (silverwareCount % 2 == 0) {
    console.log("even");
} else { console.log("odd"); }*/
/*Exercise 3
let performance = "stellar"
let salary = 10000
const goodBonus = 1000
const stellarBonus = 3000
if(performance === "stellar"){
    salary += stellarBonus
    console.log("You've received a stellar bonus! Current amount: "+ salary);
} else{
    salary += goodBonus
    console.log("You've received a good bonus! Current amount: "+ salary);
}

console.log(salary);
*/
/*Exercise 4
const isVIP = false
let cash = 200
if (isVIP === true || cash > 300) {
    console.log("you can enter the club");
} else {
    console.log("stop you can mot enter the club");
}
*/
/*Exercise 5
const a = 3
let b = 2
let c = 0 || 12
let d

b = c
b++
if (d) {
    b = a
}

d = a + (b * c)
d++
b += 2
console.log(a, b, c, d);*/
/*Exercise 6
const gender = null
let profession = "business"

if (gender == null) {
    let genderInput = prompt("No gender was specified. Please provide a gender")
    if (genderInput == "man" || genderInput == "woman") {
        profession = profession + genderInput
        console.log("user said gender is: " + genderInput + ". Therefore, the preofession is: " + profession)
    } else {
        console.log("invalid gender: " + genderInput)
    }
} else {
    profession = profession + gender
    conssole.log(profession)
}*/
/*Exercise 7*/
let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018

if (boughtTesla) {
    if (isUSCitizen) {
        let yearsSincePurchase = currentYear - yearOfTeslaPurchase
        if (yearsSincePurchase > 4 || yearsSincePurchase == 4) {
            console.log("You previously bought a Tesla car " + yearsSincePurchase + " years ago. Would you like an upgrade?")
        } else {
            console.log("Ypu previously bought a Tesla car " + yearsSincePurchase + " years ago. Are you satisfied with the car?")
        }
    } else {
        console.log("Would you like to move to the US?")
    }
} else {
    console.log("Are you interested in buying a Tesla car?")
}