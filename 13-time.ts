import object1 from "./12-object";
console.log(object1);


// setTimeout() is an asynchronous function, meaning that the timer function will not pause execution of other functions in the functions stack.
const login = (Homepage: () => void) => {
    console.log('loader start');
    
    setTimeout(() => {
        console.log('login');
        console.log('loader off');
        home();
    },2000)
}
const home = () => {
    setTimeout(() => {
        console.log('Home page');
    },500)
}
login(home);

// setInterval() for infinite loop 
let o = 0;
const intervalID = setInterval(() => {
    console.log('login');
    if (o === 3) {
        clearInterval(intervalID);
    }
    o++;
}, 1000);



