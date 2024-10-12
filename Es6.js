

////template string/////


const minhazSkills = ` javaScript, typeScript, reactJs, nextJs, redux, nodeJs, expressJs, mongoDB, mongoose, redis, AWS, docker, graphQL `

console.log(minhazSkills) 


/////arrow function///////


const aponSkils = (javaScript, typeScript) =>{

    const all = javaScript + typeScript 

    console.log(all)

}

aponSkils(20, 40)


//////spread operator////////


const numz = [ 20, 49, 50, 60, 70, 80 ]


console.log(...numz)


//////map//////


const allNumZ = [ 20, 30, 40, 50, 60 ]

const allZ = allNumZ.map( num => num + 5 );

console.log(...allZ)


///forEach//////


const numbers = [ 20, 40, 50, 60, 70] 

const nmZ = numbers.forEach( nZ => nZ + 3 )

console.log(nmZ) 

/////filter/////


const filterZ = [ 400, 500, 600, 700, 800, 1000, 20, 40, 70 ] 

const filZ = filterZ.filter( fil => fil < 100 )

console.log(filZ)

/////find////////


const findZ = [ 20, 40, 50, 70, 80, 100, 200, 30 ]

const fY =  findZ.find( fin => fin < 50 )

console.log(fY)



/////destructure/////


const AponSkills = {
     
     tech1: 'javaScript',
     tech2: 'typeScript',
     tech3: 'reactJs',
     tech4: 'next.js',
     tech5: 'node.js',
     tech6: 'express.js',
     tech7: 'AWS'


}

const {tech1, tech7, tech5} = AponSkills

console.log(tech1, tech7, tech5)


//////keys value////////


const Food ={

    f1: 'biriyani',
    f2: 'burger',
    f3: 'kalaVuna',
    f4: 'kabuli polaw',

} 

const keys = Object.keys(Food);
console.log(keys)


//////dot and bracket/////////////


const politicalParty = {

     p1: 'bangladesh national party',
     p2: 'jamat e islami',

}


console.log(politicalParty.p1);
console.log(politicalParty['p2']);



////////array push pop///////////////


const language = [ 'javaScript', 'python', 'Go', 'java', 'ruby and rails' ]

//   language.pop();
  language.push('php')

console.log(language)  