const arr=[1,2,3,4,5,6]
// for(const num of arr){
    // console.log(num);
    
// }

//map- holds key value pairs and also remembers the order, there is no duplicate value in this
const map=new Map()

map.set('key', 'value')
map.set('IN', 'India')
map.set('US', 'America')
map.set('FR', 'France')
map.set('AH', 'France')//it will be added in the map
map.set('US', 'America')//it won't be added in the map
// console.log(map);

 //for loop on map
 for(const key of map){
    console.log(key);//prints each key value pair in one array each
    
 }
 for(const [key] of map){
    console.log(key);//prints only key
    
 }
 for(const [key,value] of map){
    console.log(key);//prints each key value pair in one array each
    
 }
 