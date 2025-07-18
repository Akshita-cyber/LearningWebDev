const arr=[1,2,3,4,5]

// for(const num of arr){
//     console.log(num);
    
//  }
// console.log();
 
const greetings="Hello World"
// for( const greet of greetings){
    
//     console.log(`each char is ${greet}`);
    
// }

//Maps
//map- they are like arrays. 
//these are key value pair order but remembers the insertion order
const map=new Map();
map.set('IN', "India")
map.set('US', "United States")
map.set('Fr', "France")
// console.log(map);

// for (const key of map){ //prints keys nd value both
//     console.log(key);
     
// }

// for (const [key,value] of map){
//     console.log(key, ':-', value);
    
// }

const myObject={
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby'
}

// for(const key in myObject){
//     console.log(key, ':', myObject[key])
// }

// for (const key in map){//won't print anything because map is not iterable
//     console.log(key);

// }

const coding=['js',  'Ruby','python','C++','Java']

// coding.forEach( function (item) {//.forEach kehta h call back function do andar par phir ye call back fn hai to iska koi naam nhi hoga
//     console.log(item);
// } )

//arrow function ki baari
// coding.forEach( (item)=> {
//     console.log(item);
    
// })

//hitesh sir ne kaha ab aur interesting banate hain

// function printMe(item){
//     console.log(item);

// }
// coding.forEach(printMe) //notice that i haven't added brackets because we just have to give reference , not execute the function


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// } )

//[{},{},{}]

const myCoding=[
    {
        langName:"JavaScript",
        langFileNAmme:"js"
    },
    {
        langName:"Java",
        langFileNAmme:"java"
    },
    {
        langName:"Python",
        langFileNAmme:"py"
    }
]

// myCoding.forEach( (item)=> {
//     console.log(item.langName);
// })

const coding2=['js',  'Ruby','python','C++','Java']

// const values=coding2.forEach( (item)=> {
//     console.log(item);
// })
// console.log(values);//will print undefined

// const values=coding2.forEach( (item)=> {
//     return item;
// })

// console.log(values);//will print undefined

////////////////////////because forEach does not and can not return anything/////////////////////////////

const myNum=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNum.filter( (nums)=>nums>4)
// console.log(newNums);

// const newNums=myNum.filter( (nums)=>{
//     nums>4

// })
// console.log(newNums);//empty square brackets

// const newNums=myNum.filter( (nums)=>{ //this will give some good output
//     return nums>4
// })
// console.log(newNums); //array of nums>4

// const myNums=[]
// myNum.forEach((num)=>{
//     if(num>4){
//         myNums.push(num)
//     }
// })

// console.log(myNums);

//MAP map
const myNumers=[1,2,3,4,5,6,7,8,9]

// const newNums=myNumers.map((num)=>num+10)//map returns byitself
// console.log(newNums);


//chaining-1-2 method ek saah use krlena
const newNums=myNumers
    .map((num)=>num*10)
    .map((num)=>num+1)
    .filter((num)=>num>40)

console.log(newNums);

