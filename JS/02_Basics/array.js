// const myArr = [0, 1, 2, 3, 4, 5]

// const myArr2 = new Array(1, 2, 3, 4)
// // console.log(myArr[1]);

// // Array methods

// // myArr.push(6)
// // myArr.push(7)
// // myArr.pop()

// // myArr.unshift(9)//adds 9 in the starting
// // myArr.shift()//removes first element

// const newArr = myArr.join()//converts it into string

 //slice, splice
//  console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);

// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);
//in interview: difference between slice and splice 

////////////////////////////////
//OTHER BASICS OF ARRAY THAT WILL BE USEFUL IN NODE AND REACT
const ind_heroes=["hero", "shaktimaan","krish","baalveer","sonpari"]
const dc_heroes = ["superman", "flash", "batman"]
console.log(ind_heroes);

// ind_heroes.push(dc_heroes)//it will take assume another array as just a data structure and it won't merge , instead add the array including the sqaure brackets as the data structure
// console.log(ind_heroes);
// const all_heroes=ind_heroes.concat(dc_heroes)
// console.log(all_heroes);

//concat does not modify original array ,BUT, push modifies the original array


const all_new_heroes=[...ind_heroes,...dc_heroes]//better for concatenation

console.log(Array.from({name: "hitesh"})) // interesting
