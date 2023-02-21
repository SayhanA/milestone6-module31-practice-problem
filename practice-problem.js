/*---------------------- Practice Problem 1 -----------------------------*/


/* (a) Write an arrow function that will take 3 parameters, will multiply
the parameters and will return the result.*/

const num = (num1, num2, num3) => num1 * num2 * num3 ;
const result = num(5, 10, 20);
// console.log(result);


/* (b) Write the following sentence in three lines and print the result:
I am a web developer. I love to code. I love to eat biryani. */

const sentences = `
    I am a web developer.
    I love to code.
    I love to eat biryani.
`
// console.log(sentences)


/* (c) Write an arrow function that will take 2 parameters: One parameter
will come from you and the other parameter will be a default
parameter. Add these two parameters and return the result. */
const number = (val1, val2=50 ) => val1 + val2 ;
const result1 = number(10);
// console.log(result1)


/*---------------------- Practice Problem 2 -----------------------------*/

/*
  Write an arrow function where it will do the following:
   a) It will take an array where the array elements will be the
       name of your friends
   b) Check if the length of each element is even, push elements
       with even length to a new array and return the result
       Print the result.
*/
const array = ['Rahim','Riad','Karim','Kalam','Balam','Mosfique','Rahman','Asif'];
const newArray = []
const friends = (array) =>{
    for(i=0; i<array.length; i++){
        // console.log(array[i], array[i].length);
        if(array[i].length%2 == 0){
            newArray.push(array[i])
        }
        else{
            
        }
    }
}
const result3 = friends(array)
// console.log(newArray)


/*  Write an arrow function where it will do the following:
        a) Square each array element
        b) Calculate the sum of the squared elements
        c) Return the average of the sum of the squared elements
        Print the result .
*/


const numbers = [5, 10, 15, 20, 25, 30];
const arrayNumbers = (numbers) => {
    let num = 0;
    for(i=0; i<numbers.length; i++){
        const squire = Math.pow(numbers[i],2);
        // console.log(squire)
        num = num + squire;
    }
    const average = num/numbers.length;
    const fixAverageString = average.toFixed(2);
    const averageNumber = parseFloat(fixAverageString)
    return averageNumber

}
const result4 = arrayNumbers(numbers)
// console.log(result4)


/* Write an arrow function where it will do the following:
    a) It will take two array inputs
    b) Combine the two arrays and assign them in a new array
    c) Find the maximum number from the new array and return the
    result
    Print the result.
*/

const flowers = ['Rose','Lily','Sunflower','Tuberose',' Marigold'];
const fruits = ['Mango','Pineapple','Guava','Lichi','Watermelon','Banana'];

const combine = (first, second) => {
    const newArray = [...first, ...second]
    return newArray
}
const result5 = combine(flowers,fruits)
console.log(result5)