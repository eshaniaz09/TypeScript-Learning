// objects are used for the entry in the database , add some key-value pairs in the data base

// const User = {
//     name: "esha",
//     email: "eshaniaz5@gmail.com",
//     isActive: true
// }

// the usecase of the objects are through functions
// you have to actually pass on these objects into a function or you have to return some objects through functions


// function createUser({ name: string, isPaid: boolean }) {
    
//  }

// let newUser = {name: "esha" , isPaid: true, email: "esha@gemail.com"}
// createUser(newUser);
 


// // the code practice to write the objects are this:
// function createCourse(): {name: string , price: number}{
//     return {name: "esha", price: 3456}
// }



// creating the type of an object
type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUser(user: User): User {
    return {name: "", email: "", isActive: true}
 };

createUser({name: "", email: "", isActive: true})





export {}