// function foo(a, b, c) {
//     return a + b + c;
// }

// function boo(a, c) {
//     var d = c + 2;
//     var x = foo(a, c, d);
//     return x - d;
// }

// function goo(x) {
//     var y = boo(x, 3);
//     return y + foo(y, y, y);
// }

// function moo(n, k) {
//     return goo(n) + too(k);
// }

// function too(j) {
//     return j * 2;
// }

// function zoo(z) {
//     return too(z);
// }

// function noo(a, b) {
//     if (boo(a, b) * 3.7 > 5887) {
//         return moo(4, koo(b));
//     }
//     return boo(a, b) + 4.66;
// }

// function koo(d) {
//     var f = zoo(d) * 5.3;
//     return f * 1.2;
// }
// var r = goo(5);
// var w = r + too(3) + zoo(r) + boo(r, too(712));
// var q = foo(r, w, 4) + koo(34) + noo(w, r);
// Ex1
// const person = {
//     hungry: true,

//     feed: function() {
//         if (this.hungry) {
//             this.hungry = false;
//             console.log(('Im no longer hungry!'))
//         }
//     }
// }

// person.feed() //should alert "I'm no longer hungry"
// Ex2
// const pump = function(amount) {
//     this.liters += amount;
//     console.log('You put ' + amount + ' liters in ' + this.name);
// };

// const garage = {
//     car1: {
//         name: 'Audi',
//         liters: 3,
//         fillTank: pump
//     },
//     car2: {
//         name: 'Mercedes',
//         liters: 1,
//         fillTank: pump
//     }
// };

// garage.car1.fillTank(2);
// console.log('Audi should have 5 liters: ', garage.car1.liters);

// garage.car2.fillTank(30);
// console.log('Mercedes should have 31 liters: ', garage.car2.liters);
// Ex3
// const pumpFuel = function(plane) {
//     plane.fuel += 1;
// };

// const airplane = {
//     fuel: 0,
//     fly: function() {

//         if (this.fuel < 2) {
//             return 'on the ground!';
//         } else {
//             return 'flying!';
//         }
//     }
// };

// console.log('The plane should not be able to fly (yet): ' + airplane.fly());

// pumpFuel(airplane);
// console.log('The plane should STILL not be able to fly: ' + airplane.fly());

// pumpFuel(airplane);
// console.log('Take off! ' + airplane.fly());
// Ex4
// const tipJar = {
//     coinCount: 20,
//     stealCoins: function(num) {
//         this.coinCount -= num;
//     },
//     tip: function() {
//         this.coinCount += 1;
//     }
// };

// tipJar.tip();
// console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);

// tipJar.stealCoins(3);
// console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);

// tipJar.stealCoins(10);
// console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);
// Ex5
// const revealSecret = function() {
//     return this.secret;
// };

// const shoutIt = function(person, func) {
//     person.revealItAll = func;
//     const result = person.revealItAll();
//     console.log((person.name + " said: " + result));
// };

// const avi = {
//     name: "Avi",
//     secret: "Im scared of snakes!"
// };

// const narkis = {
//     name: "Narkis",
//     secret: "I dont have secrets because I'm zen like that."
// };

// shoutIt(avi, revealSecret);
// shoutIt(narkis, revealSecret);
// Ex6
const coffeeShop = {
    beans: 40,
    money: 50,

    drinkRequirements: {
        latte: 10,
        americano: 5,
        doubleShot: 15,
        frenchPress: 12
    },
    buyBeans: function(numBeans) {
        if (this.money - numBeans * 10 >= 0) {
            this.money -= numBeans * 10
            this.beans += numBeans
        }
        console.log("  " + this.beans);
    }

    ,
    makeDrink: function(drinkType) {


        if (drinkType in this.drinkRequirements) {
            console.log("hello " + drinkType);
        } else {
            console.log(" bhaa tota7" + drinkType);

        }

    }
}
coffeeShop.buyBeans(2)
coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"