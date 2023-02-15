/* function addCount(){
    
}

const obj = {
    name: 'name',
    showName: () => {
        console.log(this.name);
    }
}

const addCountTwo = () => {
    console.log(this);
}

addCount();

addCountTwo();

obj.showName(); */

/* const sumArray = (arr) => {
    return arr.map((number) => number * 2)
}

function sumArrayTwo(arr){
    return arr.map((number) => number * 2)
}

console.log(sumArray([1,2,3,4,5]));
console.log(sumArrayTwo([2,4,6,8,10])); */



/* const someArrayFunc = () => {
    console.log(this.property);
}

function someFunc() {
    console.log(this.property);
}

const bindedFunc = someFunc.bind({property: 'hello'})
bindedFunc(); */

/* class Student {
    name = '';
    grades = [];

    constructor(){
        console.log(this);
    }

    addGrade(){
     this.grades.push(1);
    }
}

const Student = new Student(); */

/* function varTest() {
    var x = 1;
   
    if (true) {
        var x = 2;
        console.log('x: ', x);
    }

    console.log('x: ', x);
}

varTest(); */

/* let [firstName, lastName, age] = ['Илья', 'Кантор', 20];

console.log(firstName);
console.log(lastName);
console.log(age); */

// * деструктутризация обЪекта;



/* const obj = {
    title: 'title',
    price: 1000,
    sale: false 
}


const copyObj = {...obj};

copyObj.title = 'new title'

console.log('obj', obj);
console.log('copyObj', copyObj); */

/* const arr = [1,2,3,4,5];

const arrCopy = [...arr, 6];

console.log('arrCopy', arrCopy); */

/* const person = {
    name: 'Alex',
    age: 20,
    job: 'waiter'
}

const personTwo = {...person, job: 'pilot'}

console.log('person', person);
console.log('personTwo', personTwo); */
