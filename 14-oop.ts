class Seat{
    count: number;
    setColor: string;
    heat: boolean;
    constructor(count: number, setColor: string, heat: boolean) {
        this.count = count;
        this.setColor = setColor;
        this.heat = heat;                                       
    }
}
// inheritance: Seat is the parent class and car is the child class
class car extends Seat{
    companY: string = "google"
    coloR: string = "black"
    pricE: number = 234;
    //constructor automatically call when the oject is created
    constructor(a: string, b: string, c: number) {
        // super()=> is used to call the constructor of the parent class
        super(4,"black",true)
        this.companY = a
        this.coloR = b;
        this.pricE = c;
        
    }
}

var carObject = new car("honda", "red", 2345);
var carObject2 = new car("tobasha", "black", 4567);
console.log(carObject);
// carObject2.coloR = "yellow";bv
console.log(carObject.coloR);
console.log(carObject2.coloR);


// another example
class triangle{
    width: number;
    height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
}

class shape extends triangle{
    length: number;
    constructor(width: number, height: number,length: number) {
        super(width, height);
        this.length = length;
    }
    getArea() {
        return (this.width * this.height * this.length);
    }
}
var triangleObj=new triangle(12,12)
var shapeObj = new shape(12, 13, 13);
console.log(shapeObj.getArea());


// defining the type of the class of an object wih "interface" keyword and use in the class with "implements"

interface A{
    userName: string,
    email: string,
    isPerson: boolean
}

class A implements A{
    userName: string;
    email: string;
    isPerson: boolean;
    // email: 'eshaniaz5@gmail.com'
    constructor(userName: string, email: string, isPerson: boolean) {
        this.userName = userName;
        this.email = email;
        this.isPerson = isPerson;
    }
}
let student1 = new A('esha', 'eshaniaz5@gmail.com', true);
let student2 = new A('hamna', 'hamna@gmail.com', true);
let student3 = new A('tehzeeb', 'tehzeeb@gmail.com', true);
console.log(student1.userName);
console.log(student2.userName);
console.log(student3.userName);


interface B{
    rollNumber: number;
}
class B extends A{
    rollNumber: number;
    constructor(userName: string, email: string, isPerson: boolean,rollNumber: number) {
        super(userName,email,isPerson);
        this.rollNumber = rollNumber;
    }
}
let student1Info = new B('esha', 'eshaniaz5@gmail.com', true, 9);



