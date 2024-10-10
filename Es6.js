

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

