// import inquirer from "inquirer";
// let students: string[] = [];
// let adding = true;
// while (adding) {
//     const enrollInputs: {
//         studentName: string;
//         Courses: string;
//         addMoreStudents: boolean;
// } = await inquirer.prompt([
//     {
//         type: 'input',
//         name: 'studentName',
//         message: 'Enter the student\'s name:'
//     },
//     {
//         type: 'list',
//         name: 'Courses',
//         message: 'select the courses you want to enroll in: ',
//         choices: ['digital marketing', 'fiver freelancing', 'word press', 'web development']
//     },
//     {
//         type: 'confirm',
//         name: 'addMoreStudents',
//         message: 'Do you want to add more students? ',
//         default: false
//     },
// ]);
// const { studentName, Courses, addMoreStudents } = enrollInputs;
// adding = addMoreStudents;
//     if (studentName && Courses) {
//     students.push(studentName, Courses);
// }
// };
// console.log('students who have taken these courses are :\n' + students);
// // if (students.length > 0) {
// //     students.forEach(student => {
// //         console.log(student);
// //     });
// // }
class Student {
    name;
    studentID;
    courses;
    balance;
    constructor(name) {
        this.name = name;
        this.studentID = this.generateStudentID();
        this.courses = [];
        this.balance = 0;
    }
    generateStudentID() {
        return Math.random().toString(36).substr(2, 5).toUpperCase();
    }
    enrollCourse(course) {
        this.courses.push(course);
    }
    viewBalance() {
        console.log(`Balance for ${this.name}: $${this.balance}`);
    }
    payTuition(amount) {
        this.balance -= amount;
        console.log(`Payment of $${amount} received from ${this.name}.`);
        this.viewBalance();
    }
    showStatus() {
        console.log(`Name: ${this.name}`);
        console.log(`Student ID: ${this.studentID}`);
        console.log(`Courses Enrolled: ${this.courses.join(', ')}`);
        this.viewBalance();
    }
}
class StudentManagementSystem {
    students;
    constructor() {
        this.students = new Map();
    }
    addStudent(name) {
        const student = new Student(name);
        this.students.set(student['studentID'], student);
        console.log(`Student ${name} added with ID ${student['studentID']}`);
    }
    enrollStudent(studentID, course) {
        const student = this.students.get(studentID);
        if (student) {
            student.enrollCourse(course);
            console.log(`${student['name']} enrolled in ${course}`);
        }
        else {
            console.log(`Student with ID ${studentID} not found.`);
        }
    }
    viewStudentBalance(studentID) {
        const student = this.students.get(studentID);
        if (student) {
            student.viewBalance();
        }
        else {
            console.log(`Student with ID ${studentID} not found.`);
        }
    }
    payStudentTuition(studentID, amount) {
        const student = this.students.get(studentID);
        if (student) {
            student.payTuition(amount);
        }
        else {
            console.log(`Student with ID ${studentID} not found.`);
        }
    }
    showStudentStatus(studentID) {
        const student = this.students.get(studentID);
        if (student) {
            student.showStatus();
        }
        else {
            console.log(`Student with ID ${studentID} not found.`);
        }
    }
}
// Example usage
const sms = new StudentManagementSystem();
sms.addStudent("Alice");
sms.addStudent("Bob");
sms.enrollStudent("ABC12", "Math");
sms.enrollStudent("XYZ45", "Science");
sms.payStudentTuition("ABC12", 500);
sms.payStudentTuition("XYZ45", 300);
sms.showStudentStatus("ABC12");
sms.showStudentStatus("XYZ45");
export {};
