

function factorsOf(n) {
    if(Number.isNaN(Number(n))) {
        throw new RangeError('Argument Error: Value must be an integer');
    }
    if(n < 0) {
        throw new RangeError('Argument Error: Number must be positive');
    }
    if(!Number.isInteger(n)) {
        throw new RangeError('Argument Error: Number must be an integer');
    }
    const factors = [];
    for (let i=1 , max = Math.sqrt(n); i <= max ; i++) {
        if (n%i === 0){
        factors.push(i,n/i);
        }
    }
    return factors.sort((a,b) => a - b);
}


function isPrime(n) {
    try{
        return factorsOf(n).length === 2;
    } catch(error) {
        return false;
    }
    }

// Superhero Quiz
const quiz = [
    { name: "Superman",realName: "Clark Kent" },
    { name: "Wonderwoman",realName: "Dianna Prince" },
    { name: "Batman",realName: "Bruce Wayne" },
  ];
// View Object
const view = {
score: document.querySelector('#score strong'),
question: document.querySelector('#question'),
result: document.querySelector('#result'),
info: document.querySelector('#info'),
start: document.querySelector('#start'),
response: document.querySelector('#response'),
timer: document.querySelector('#timer strong'),
render(target,content,attributes) {
for(const key in attributes) {
target.setAttribute(key, attributes[key]);
}
target.innerHTML = content;
},
show(element){
element.style.display = 'block';
},
hide(element){
element.style.display = 'none';
},
resetForm(){
this.response.answer.value = '';
this.response.answer.focus();
},
setup(){
this.show(this.question);
this.show(this.response);
this.show(this.result);
this.hide(this.start);
this.render(this.score,game.score);
this.render(this.result,'');
this.render(this.info,'');
this.resetForm();
},
teardown(){
this.hide(this.question);
this.hide(this.response);
this.show(this.start);
}
};

const game = {
start(quiz){
console.log('start() invoked');
this.score = 0;
this.questions = [...quiz];
view.setup();
this.secondsRemaining = 20;
this.timer = setInterval( this.countdown , 1000 );
this.ask();
},
countdown() {
game.secondsRemaining--;
view.render(view.timer,game.secondsRemaining);
if(game.secondsRemaining <= 0) {
game.gameOver();
}
},
ask(name){
console.log('ask() invoked');
if(this.questions.length > 0) {
this.question = this.questions.pop();
const question = `What is ${this.question.name}'s real name?`;
view.render(view.question,question);
}
else {
this.gameOver();
}
},
check(event){
console.log('check(event) invoked');
event.preventDefault();
const response = view.response.answer.value;
const answer = this.question.realName;
if(response === answer){
view.render(view.result,'Correct!',{'class':'correct'});
this.score++;
view.render(view.score,this.score);
} else {
view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
}
view.resetForm();
this.ask();
},
gameOver(){
console.log('gameOver() invoked');
view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
view.teardown();
clearInterval(this.timer);
}
}

view.start.addEventListener('click', () => game.start(quiz), false);
view.response.addEventListener('submit', (event) => game.check(event), false);
view.hide(view.response);


function amIOldEnough(age){
    if (age < 12) {
        console.log( 'No, sorry.');
    } else if (age < 18) {
        console.log( 'Only if you are accompanied by an adult.');
    }
    else {
        console.log( 'Yep, come on in!');
    }
}
console.log("Test to see if 5 is old enough")
amIOldEnough(5);
console.log("Test to see if 10 is old enough")
amIOldEnough(10);
console.log("Test to see if 15 is old enough")
amIOldEnough(15);
console.log("Test to see if 20 is old enough")
amIOldEnough(20);
console.log("Test to see if 25 is old enough")
amIOldEnough(25);

function squareRoot(number) {
    'use strict';
    if (number < 0) {
        throw new RangeError('You can\'t find the square root of negative numbers')
    }
    return Math.sqrt(number);
};
console.log(' try and get the square number of 9')
console.log(squareRoot(9));
console.log(' try and get the square number of -9, this should create an error')
console.log(squareRoot(-9));