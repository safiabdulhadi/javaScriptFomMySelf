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


// -----------------------3------------------------


/*

console.log("start");

function getName(name,callback){

    setTimeout(()=>{
        console.log("Inside Name SetTimeOut");

        callback(name);
    },2000);

}


function getHobbies(name,callback){
    setTimeout(()=>{
        console.log("Inside Hobbies SetTimeOut");

        callback(['cricket','Reading']);
    },2000);
}


const myName = getName('Abdulhadi',(myName)=>{
    console.log(myName); getHobbies(myName,(hobby)=>{
        console.log(hobby)
    });

});

console.log("End");

*/
// call back hill ke y te ye
// FOR ALL IN THIS WE HAVE PROMISE



/*
 A Promise is an objet representing the eventual completion or faiure of an asynchronous operation


 A JavaScript Promise object contains both the producing code and calls to the
 consuming code . It can be used to deal with Asynchronous operation in JavaScript.


Promise State: -
Pending - Initial Satte, Not yet Fulfilled or Rejected
Fulfilled/Resolved - prommise Completed
Rejected - promise Failed
 */



// ---------------------Creating promise
/*
Promise()- A Promise object is created using the new keword and its comstructor.This constructor
takes a function , called the "executor function", as its parameter. This funcdtion
should take two function as parameters.The fist of these function (resolve) is called
when the asynchronous task
completes successfully and returns the results of the task as a value. The second (reject)is called
when the task fails, and eturns the eson for failure, which is tyically an error object.
*/


