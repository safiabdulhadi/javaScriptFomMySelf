/*

-----------------------1------------------------
console.log("start");

function getName(name){

    setTimeout(()=>{
        console.log("Inside SetTimeOut");
        return name; // undefined
    },2000);

}
const myName = getName('Abdulhadi');
console.log(myName);

console.log("End");

// Let's continous

*/



// -----------------------2------------------------


// for the solution i have to create call back function to solve

/*

console.log("start");

function getName(name,callback){

    setTimeout(()=>{
        console.log("Inside SetTimeOut");
        //replace return for callback
        callback(name); // undefined
    },2000);

}
const myName = getName('Abdulhadi',(myName)=>{
    console.log(myName);
    // so this arrow function go back to calllback arrgo where i declare getName func
    // all the arow will go to callback where i put on the top
    // call back(name) myName go to the name

});

console.log("End");


*/

