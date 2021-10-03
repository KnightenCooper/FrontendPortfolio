
// Javascript for wk3 article
let calculator = {
    sum() {
        return this.a + this.b;
            
    },
    subtract() {
        return this.a - this.b;
            
    },
    multiply() {
        return this.a * this.b;
            
    },
    divide() {
        return this.a / this.b;
            
    },
  
    read() {
      this.a = 10
      this.b = 5
    }
  };
  
  calculator.read();
  console.log( "The numbers are '10' and '5'. The sum of these two numbers is " + calculator.sum() + ". The difference of these two numbers is " + calculator.subtract()  
  + ". The product of these two numbers is " + calculator.multiply() + ". The quotient of these two numbers is " + calculator.divide() );

  let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    upTenSteps() {
        this.step += 10;
        return this;
      },
    down() {
      this.step--;
      return this;
    },
    downTenSteps() {
        this.step-= 10;
        return this;
      },
    showStep() {
      console.log( "The current step of the ladder is " + this.step );
      return this;
    }
  };

console.log("I made a ladder object that has a up method and a down method. This is what happens when you go up 14 steps and down 11 steps.");

  ladder
  .showStep()
  .upTenSteps()
  .up()
  .up()
  .up()
  .downTenSteps()
  .showStep(); 

  console.log("I created my own object with different methods that creates madlibs. Madlibs are games where you select nouns, adjectives, and other things and what you select is incorporated into a story.")
  console.log("I created an object full of random words that are then used by each method to create stories."  )
  
  let madlibs = {
          adjective: "smelly",
          noun: "spoon",
          emotion: "angry",
          job: "janitor",
          superheroName: "Crateman",
        madlib1() {
          console.log("Today I am " + this.emotion + " because I was walking and found a free " + this.noun + " on the side of the road. " + 
          "The " + this.noun + " was magic and gave me super powers. I now spend my days as a " + this.job + " and my nights as " + this.superheroName
          + "! I stop criminals using my magic " + this. noun + ", which gives my the ability to be super " + this.adjective +"!"); 
      }
      ,madlib2() {
          console.log('\"Welcome to McBurger! I will now take your order ' + this.superheroName +".\"");
          console.log( "\"I would like to order the " + this.adjective + " " 
          + this.noun + ". I got to eat a " + this.adjective + " " + this.noun + " while working as a " + this.job + " and it tastes amazing! I am super "
          + this.emotion + " to finally be able to eat it again.\"" );
      }
  }
  console.log("This is the first madlibs:")
  madlibs.madlib1()
  console.log("This is the second madlibs:")
  madlibs.madlib2();

