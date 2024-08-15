



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



//object basic


const aponSkills = {

     skills1: 'reactJs',
     skills2: 'nextJs',
     skills3: 'DSA',
     skills4: 'postgreSQL'


}

console.log(aponSkills.skills1);
console.log(aponSkills.skills2);
console.log(aponSkills.skills3);
console.log(aponSkills.skills4);


const softwareEngineering = {

    soft1: 'html',
    soft2: 'css',
    soft3: 'tailwind',
    soft4: 'reactJs',
    soft5: 'next.js',
    soft6: 'nodeJs',
    soft7: 'expressJs',
    soft8: 'postgreSQL',
    soft9: 'mongoDB',
    soft10: 'mySQl'



}


console.log(softwareEngineering.soft1)
console.log(softwareEngineering.soft2)
console.log(softwareEngineering.soft3)
console.log(softwareEngineering.soft4)
console.log(softwareEngineering.soft5)
console.log(softwareEngineering.soft6)
console.log(softwareEngineering.soft7)
console.log(softwareEngineering.soft8)
console.log(softwareEngineering.soft9)
console.log(softwareEngineering.soft10)



//keys and value-------------------------------



const aponFRNDz = {

    name1: 'fahim',
    name2: 'suzon',
    name3: 'ovi',
    name4: 'fagun',
    name5: 'soponBhai'


}
 

const keys = Object.keys(aponFRNDz)
console.log(keys)



const favPlaces = {

   namez: 'kashmir',
   namez2: 'manali',
   namez3: 'ladakh',
   namez4: 'jammu',
   namaez5: 'rajisthan'

}


const value = Object.values(favPlaces);
console.log(value)



//nested object-------------------------

   

const apoSoft = {

     owner: 'minhazul abedin apon',

     aponInfo: {

       fullName: 'minhazul abedin apon',
       address: 'jheniadah, dhaka, bangladesh',
       companyName: 'apoSoft',
       position: 'softwareEngineer',
       techStack: ['reactJS', 'nextJs', 'DSA', 'postgreSQl']
     },

     location: 'jhenaidah sadar',
     country: 'bangladesh'
     

}

console.log(apoSoft.owner)
console.log(apoSoft.aponInfo.fullName)
console.log(apoSoft.aponInfo.position)
console.log(apoSoft.aponInfo.techStack)



//loop in object


const fishBongo = {
    
    fish: 'Elisha',
    fish2: 'RuiKatla',
    fish3: 'chigrimach',
    fish4: 'tunaFish'
  

}


for(const fish in fishBongo ){

    console.log(fish)

}





//array in object--------------------



const bangladeshPlaces = {

    nam: 'kuakata',
    nam2: 'coxBazar',
    nam3: 'saze;'

}

const indiaPlaces = {

    inp: 'kashmir',
    inp2: 'ladakh',
    inp3: 'hydrabad'

}

const pakistanPlaces = {

   pakP: 'karachi',
   pakP: 'lahore',
   pakP: 'gilgitBalistan'


}


const allPlaces = [bangladeshPlaces, indiaPlaces, pakistanPlaces]

console.log(allPlaces);










 