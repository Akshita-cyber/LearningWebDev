// const user={//Singleton Object
//     name:"Akshita",
//     age: 20
// };

//  Non-Singleton Object
// function User(name,age){
//     this.name="name",
//     this.age=age
// }
// let user1=new User("Anupriya", 19)
// let user2=new User("Anamika", 17)

//////////////////////////
// const tinderUser={}
// tinderUser.id="123098"
// tinderUser.name="Paridhi"
// tinderUser.isLoggedIn=false

// console.log(tinderUser);

// const regularUser={
    // email:"some@gmail.com",
    // fullname:{
    //     userfullname:{
    //         firstname:"Akshita",
    //         lastname:"exe"
    //     }
    // }
// }
//merging two objects'
// const obj1={1:'a',2:'b'}
// const obj2={3:'c',4:'d'}

// const obj3=Object.assign({},obj1, obj2)//{} adding this curly braces is optional but a good practice, here we are assuming { } the empty array or object is atrget and the other are sources
// console.log(obj3)

//spreading
// const obj3={...obj1,...obj2} 


// console.log(Object.keys(tinderUser));//Returns an array of all the keys (property names) of the object.
// console.log(Object.values(tinderUser));//Returns an array of all the values in the object.
// console.log(Object.entries(tinderUser));//Returns an array of key-value pairs, where each pair is in its own array.

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "simran"
}

// course.courseInstructor

const {courseInstructor} = course

console.log(courseInstructor);

const{courseInstructor:teacher}=course
console.log(teacher);
