
// Javascript for ch2 page

let libButton = document.getElementById('lib-button');
let libIt = function() {
    let storyDiv = document.getElementById("story");
    let interestingMethods = document.getElementById("interestingMethods");
    // get the information from the html user input
    let noun = document.getElementById("noun").value;
    let adjective = document.getElementById("adjective").value;
    let person = document.getElementById("person").value;
    // Use the user inputted information to generate the madlibs story and show what javascript can do with strings
    // The generated story shows how we can use + to concatenate strings and variables
    storyDiv.innerHTML = person + " is " + adjective + ". " + person + " is " + adjective + " because " + person +" owns a pet " + noun + ".";
    // The interesting methods show how to use template literals to use string interpolation. Using ` ` is what makes it a template literal.
    interestingMethods.innerHTML =`<br>The noun has ${noun.length} letters. <br>Javascript can make the adjective be in all caps ${adjective.toUpperCase()}.<br> 
    Does the name contain the letter 'a'?  Answer: ${person.includes('a')} `;
};
libButton.addEventListener('click', libIt);


// https://www.sitepoint.com/premium/books/javascript-novice-to-ninja-2nd-edition/read/2
// https://www.dummies.com/web-design-development/javascript/how-to-prompt-the-user-for-input-in-javascript/
// https://www.w3schools.com/jsref/prop_text_value.asp
// https://www.khanacademy.org/computing/computer-programming/html-css-js/html-js-dom-events/pc/challenge-mad-libs
// https://www.codegrepper.com/code-examples/javascript/how+to+take+input+from+console+in+javascript


// Javascript for mobile UX page
    function myFunction() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }