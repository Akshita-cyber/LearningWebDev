let myDate=new Date();//Creates a new date object with the current date and time
// console.log(myDate);// Logs the raw date object → often shown in ISO format like 2025-06-27T13:45:00.000Z
// console.log(myDate.toString());//Converts the date to a human-readable full string
// 📝 Example: "Fri Jun 27 2025 19:15:23 GMT+0530 (India Standard Time)"
// console.log(myDate.toLocaleDateString());//It returns only the date part

// console.log(myDate.toLocaleString());// Converts to localized date & time format
// 📝 Example (India): "27/6/2025, 7:15:23 pm"


// console.log(typeof myDate);// Returns "object" → because Date is a built-in object in 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// console.log("///////////////////////////////////////////////////////////");

let myCreatedDate = new Date(2023, 0, 23)//You're creating a date using numeric arguments:months are 0-indexed

// console.log(myCreatedDate);
// console.log(myCreatedDate.toLocaleString());
// console.log("---------------------")
// myCreatedDate = new Date(2023, 0, 23, 5, 3) //You're now adding hours and minutes!

// console.log(myCreatedDate);
// console.log(myCreatedDate.toLocaleString());
// console.log("---------------------")

// myCreatedDate = new Date("2023-01-14")//This one uses a date string in ISO format: "YYYY-MM-DD"
// console.log(myCreatedDate);
// console.log(myCreatedDate.toLocaleString());

// ✅ Always use "YYYY-MM-DD" string format — it's safe and clear

let myTimeStamp = Date.now()//returns the current time in milliseconds since: January 1, 1970, 00:00:00 UTC
console.log(myTimeStamp);

console.log(myCreatedDate.getTime());//Returns the timestamp (in milliseconds) for the myCreatedDate object.

// new Date(Date.now())
//-> Date.now() → gives current time in milliseconds
//-> new Date(...) → turns that into a readable date



console.log(Math.floor(Date.now()/1000));
/**🔧 How it works:
Date.now() → gives time in milliseconds (e.g. 1719494000000)
   /1000 → converts to seconds
Math.floor(...) → removes decimal part (rounds down to whole number)**/

let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay())



// customizing how dates are displayed using toLocaleString()
newDate.toLocaleString('default', {
    weekday: "long",
    
})
 