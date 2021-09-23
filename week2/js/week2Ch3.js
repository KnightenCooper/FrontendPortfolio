
// Javascript for ch2 page
const avengers = ['Captain America', 'Iron Man', 'Thor', 'Hulk']

let libButton = document.getElementById('lib-button');
let libIt = function() {
    let storyDiv = document.getElementById("story");
    let storyDiv2 = document.getElementById("story2");

    let interestingMethods = document.getElementById("interestingMethods");
    // get the information from the html user input
    let number = document.getElementById("number").value;
    let addString = document.getElementById("addString").value;
    let removeIndex = document.getElementById("removeIndex").value;
    // Use the user inputted information to generate the madlibs story and show what javascript can do with strings
    // The generated story shows how we can use + to concatenate strings and variables
    storyDiv.innerHTML = `The ${number} index in the array is the value ${avengers[number]}.<br>The current array is  ${avengers.length} long. 
    <br> We are going to add ${addString} to the array. The array is now ${avengers.push(addString)} long. Using a for loop, we can show all 
    the items in the array.`;
    let stringArrayContents = "";
    // for (let bottles = avengers.length ; bottles > 0 ; bottles--) {
    //     stringArrayContents = stringArrayContents + ' ' + a 


    avengers.forEach(function (item, index) {stringArrayContents = stringArrayContents  + item + ', '   });

    storyDiv2.innerHTML = `<br>${stringArrayContents} <br> We are going to remove ${avengers[removeIndex]}. ` ;


};
libButton.addEventListener('click', libIt);
console.log('Current values of avengers array');
console.log(avengers);
delete avengers[0];
delete avengers[2];
avengers[10] = 'What happens when there is empty slots';
console.log('Values of avengers array after I add and delete things');
console.log(avengers);

console.log("what avengers.join() looks like: " + avengers.join());
const mixedTypes = new Set().add(2).add('2');
console.log(mixedTypes);
const romanNumerals = new Map();
romanNumerals.set(2,'II').set(3,'III').set(4,'IV').set(5,'V');
console.log(romanNumerals);
const two = 2;
if (two < 3) { console.log(two + ' is less than 3 (logic test)')};

const n = 12;
if (n%2 === 0) {
console.log('n is an even number (logic test)');
} else {
console.log('n is an odd number');
}

const number = 4;
if (number === 4) {
    console.log('You rolled a four(logic test)');
    } else if (number === 5) {
    console.log('You rolled a five');
    } else if(number === 6){
    console.log('You rolled a six');
    } else {
    console.log('You rolled a number less than four');
    }

    let bottles = 4;
    while (--bottles){
        console.log(`There were ${bottles} green bottles, hanging on a wall. And if one green bottle should accidentally fall, there'd be ${bottles-1} green bottles hanging on the wall`);
    }

do {
    console.log(`There were ${bottles} green bottles, hanging on a wall. And if one green bottle should accidentally fall, there'd be ${bottles-1} green bottles hanging on the wall`);
    bottles--;
} while (bottles > 0)

for ( bottles ; bottles > 0 ; bottles--) {
    console.log(`There were ${bottles} green bottles, hanging on a wall. And if one green bottle should accidentally fall, there'd be ${bottles-1} green bottles hanging on the wall`);
}

for(let i=0, max=avengers.length; i < max; i++){
    console.log(avengers[i]);
    }

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://www.sitepoint.com/premium/books/javascript-novice-to-ninja-2nd-edition/read/2
// https://www.dummies.com/web-design-development/javascript/how-to-prompt-the-user-for-input-in-javascript/
// https://www.w3schools.com/jsref/prop_text_value.asp
// https://www.khanacademy.org/computing/computer-programming/html-css-js/html-js-dom-events/pc/challenge-mad-libs
// https://www.codegrepper.com/code-examples/javascript/how+to+take+input+from+console+in+javascript

