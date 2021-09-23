
// Javascript for ch2 page
function hello(){
    console.log('Hello World!');
}
console.log("I can call the same function 3 times to get 3 'hello worlds'")
hello();
hello();
hello();

function square(x){
    return x*x;
}
console.log('Testing a function that uses parameter 3 to return 3 squared')
console.log(square(3));

function addValues(a,b,c){
    return a+b+c;
}
console.log('Functions can have tons of parameters, this one takes 3 values and adds them: a=1 b=2 c=3');
console.log(addValues(1,2,3));
console.log('If you add additional parameters, then the function will ignore the extra ones. This example gives the parameters of 1,2,3,4,5,6,7,8,9,10.')
console.log(addValues(1,2,3,4,5,6,7,8,9,10));
console.log('We can use rest parameters to create functions that can accept any number of parameters and add them all. This function adds all parameters. Here\'s an example with 1,2,3,4,5,6,7,8,9,10 all added together')

function addInfiniteValues(...values) {
    let total = 0;
    for(const value of values) {
        total += value;
    }
    return total;
}
console.log(addInfiniteValues(1,2,3,4,5,6,7,8,9,10));
console.log('We can also set default parameters that are used when no parameters is provided');

function helloParameter(name='World') {
    console.log(`Hello ${name}!`);
}
console.log('this is the default with no parameter')
helloParameter();
console.log('this is if I pass Mars as the parameter using the same function')
helloParameter('Mars');
console.log('this is if I pass Jupiter as the parameter using the same function')
helloParameter('Jupiter');
console.log('this is if I pass Pluto as the parameter using the same function')
helloParameter('Pluto');
console.log('We can mix normal parameters and once with defaults as long as the defaults go last. If the defaults are first, then the inputted parameter will replace the parameter with a default and ignore the 2nd parameter with no default.')
console.log('This is an example of using a for loop with a function to go through an array of colors')

function color(i, colors) {
    console.log(`Color at position ${i} is ${colors[i]}`);
}

const colors = ['Red', 'Green', 'Blue', 'Purple', 'Orange', 'Yellow', 'Black', 'White'];
for(let i = 0, max = colors.length ; i < max ; i++ ) {
    color(i, colors);
}

console.log('We can also use .map to run a function on all the numbers within an array. This is what happens when I run the function that squares numbers on an array with the values [1,2,3,4,5,6,7,8,9,10]');
const randomNumbers = [1,2,3,4,5,6,7,8,9,10];
console.log (randomNumbers.map( square ));

// https://www.sitepoint.com/premium/books/javascript-novice-to-ninja-2nd-edition/read/2
// https://www.dummies.com/web-design-development/javascript/how-to-prompt-the-user-for-input-in-javascript/
// https://www.w3schools.com/jsref/prop_text_value.asp
// https://www.khanacademy.org/computing/computer-programming/html-css-js/html-js-dom-events/pc/challenge-mad-libs
// https://www.codegrepper.com/code-examples/javascript/how+to+take+input+from+console+in+javascript

