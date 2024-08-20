

//1no problem----Take four parameters. Multiply the four numbers and then return the result----------



function nums(num1, num2, num3, num4){


    const allNums = num1 * num2 * num3 * num4

    return allNums


}

const allnumbers = nums(20, 30, 40, 50)

console.log(allnumbers)




//2no problem------------Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.



function numers(number){

   const nu = number - 2;

   if( nu === 4){

      const n = number / 2

      return n

   } else {

     const s = number + 4

     return s

   }


}

const A = numers(5)

console.log(A)



//3no--problem--Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.



function make_avg(a){

  const arr = a / 2;

  return arr

}

const array = make_avg([23, 45, 56, 34, 70])

console.log(array);



//4no-----problem--------Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.


function count_zero(c){

  const count = '10010100011000' + c.length

  console.log(count.length)

  if(count === 0){

     console.log('result by length of zero')

  } else {
      
    console.log('result is not good')
     
  }


}

count_zero(10)



//5no-----problem---Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd


function odd_even(OE){

 const oddeven = OE + 10

 console.log(oddeven)

 if( oddeven ===  (OE - 3) ){

    const O = oddeven - OE
    return O


 } else {
    
    const E = oddeven + OE

    return E

 }

 
}

odd_even(12)