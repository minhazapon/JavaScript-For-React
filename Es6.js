

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




//////////es6.js///////////////////////


    ///template string/////////
 
    const allProducts = ` pc, laptop, clothes, frutZ, books, etc. ` 

    console.log(allProducts)


    ////arrow function/////

    const func = ( x, y, z  ) =>{

       const all = x + y + z 

       console.log(all)

    }

    func(1000, 2000, 3000) 


    ///spread operator/////

    const nums = [ 12, 2434, 345, 355, 23455, 24 ]

    console.log(...nums + nums)


    ////map///

    const items = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
   
    const allItems = items.map( i => i*i ) 

    console.log(allItems)


    ///forEach////


    const ForAll = [ 222, 345, 5456, 5566, 566, 45  ] 

    const FA = ForAll.forEach( f => f + 20 ) 

    console.log(FA)

    ////find///////

    const FND = [ 12, 34, 45, 566, 35, 45 ] 

    const fn = FND.find( nd => nd * 5 ) 

    console.log(fn)

    ///filter/////

    const fils = [ 123, 234, 3445, 566, 4566, 78, 78, 2, 4, 6 ] 

    const allFils = fils.filter( fls => fls < 50 ) 

    console.log(allFils)

    ///destructure/////////

    const allValue = {

           country1: 'bangladesh',
           country2: 'pakistan',
           country3: 'afganistan',
           country4: 'saudi arab',
           country5: 'syria',
 
    }

    const {country1, country2, country3, country4, country5} = allValue
    

    console.log( country1, country2 )


    
    
