



//basic array


const ponnyInfo = {

    FullName: 'farzana Moutushi ponny',
    Address: 'jhenaida',
    education: ['vatoi high school', 'jhenaidah mohila college', 'kc college jhenaidah'],
    marrige: 'not marrige',
    country: 'Bangladesh',
    catagory: 'student',

}


console.log(ponnyInfo.FullName)
console.log(ponnyInfo.education)
console.log(ponnyInfo.catagory)
console.log(ponnyInfo.Address)
console.log(ponnyInfo.marrige)
console.log(ponnyInfo.country)



const minhazInfo = {

    Name: 'minhazul abedin apon',
    wifeName: 'farzana  moutushi ponny',
    education: [ 'education : >', 'jhenaidah high school', 'shishukuz high school', 'kc college  jheniadah']


}

minhazInfo.Address = 'jhenaidah sadar'
minhazInfo.skills = 'react engineer'
minhazInfo.language = 'javaScript'
minhazInfo.country = 'bangladesh'



console.log(minhazInfo);

delete minhazInfo.country

console.log(minhazInfo)






//array in object----------------------------------------------




const frontEnd = {

    tech1: 'react.js',
    tech2: 'next.js',
    tech3: 'tailwind',
     
}


const dataBase = {

     data1: 'mongoDB',
     data2: 'mySQL',
     data3: 'postgreSQL'

}


const backEnd = {

     backEnd1: 'node.js',
     backEnd2: 'express.js',
     backEnd3: 'next.jsBACKEND'


}



const allInfo = [ frontEnd, dataBase, backEnd ]


console.log(allInfo);







 