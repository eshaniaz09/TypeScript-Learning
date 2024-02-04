import object1 from "./12-object";
console.log(object1);


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

// setInterval() for infinite loop , we the condition in setInterval for the specific request
let o = 0;
const intervalID = setInterval(() => {
    console.log('login');
    if (o === 3) {
        clearInterval(intervalID);
    }
    o++;
}, 1000);



