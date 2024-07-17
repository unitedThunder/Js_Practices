const arr = [1,2,3,4,5]
// console.log(arr)
const myHero = ["Ch.Shivaji", "M Pratap", "Ch.Sambhaji","R Sanga"]
// console.log(myHero)
const myArr = new Array(10, 20, 30, 40, 50);
// console.log(myArr)

// console.log(myArr.toString())

// console.log(myArr[1])

// myArr.push(60)
// console.log(myArr)

// myArr.pop()
// console.log(myArr)

// myArr.unshift(0)
// console.log(myArr)

// myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(20))
// console.log(myArr.indexOf(40))

const newMyArr = myArr.join()
// console.log(myArr)
// console.log(typeof myArr)
// console.log(newMyArr)
// console.log(typeof newMyArr)

// slice , splice
// console.log("A", myArr)

const myn1 = myArr.slice(1,3)

// console.log(myn1)
// console.log("B", myArr)

const myn2 = myArr.splice(1,3)
// console.log(myn2)
// console.log("C", myArr)

/* Note : Differene in slice and splice - 
1. slice excludes range of index and splicce includes range of index. 
2. splice modify the original array and eliminate the spliced element and slice does not modify original array
 */

// myArr.forEach((e)=> console.log(e))

let mrvel_hero = ["Iron Man", "Thor", "Captain America"]
let dc_hero = ["Flash", "SuperMan", "BatMan"]
let bolly_hero = ["Krish", "Makkhi"]

// mrvel_hero.push(dc_hero)
// console.log(mrvel_hero)

// let newArr = mrvel_hero.concat(dc_hero)
// console.log(newArr)

// let new_arr = mrvel_hero.concat(...dc_hero, ...bolly_hero) 
// console.log(new_arr)

let nestedArray = [1,2,3,[4,5],[6,7,[8,9]]]

// console.log(nestedArray)
// console.log("=========================================")
// nestedArray.forEach((e)=> console.log(e))
// console.log("=========================================")
// let realArray = nestedArray.flat(Infinity)
// console.log(realArray)
// console.log("=========================================")

// console.log(Array.isArray("Hemant"))

// Array.from() Demo

// console.log(Array.from("Hemant"))

const mapper = new Map([
["1" , "A"],
["2" , "b"]
])

// console.log(Array.from(mapper.values()))
// console.log(Array.from(mapper.keys()))


// Array.of() Demo

let new_arr = Array.of(1,2,3,4,5)
console.log(new_arr)
