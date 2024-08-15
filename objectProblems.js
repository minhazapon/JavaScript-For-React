

//1no problem--------------

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

console.log(colors.red)


//2no problem------------------------------

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    passengerCapacity: 5
};

console.log(car.passengerCapacity)


//3no problem--------------------------

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

console.log(student.physics.marks);


//4no problem----------------------


let students = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

const keyss = Object.keys(students)

console.log(keyss.length);


//5no problem-----------------------------


let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

const keys = Object.keys(myObject)


console.log( keys)

const value = Object.values(myObject)

console.log( value)



