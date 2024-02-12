"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _12_object_1 = __importDefault(require("./12-object"));
console.log(_12_object_1.default);
const login = (Homepage) => {
    console.log('loader start');
    setTimeout(() => {
        console.log('login');
        console.log('loader off');
        home();
    }, 2000);
};
const home = () => {
    setTimeout(() => {
        console.log('Home page');
    }, 500);
};
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
