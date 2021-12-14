const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    },
    {
        label: "Week2 notes",
        url: "week2/index.html"
      },
    {
        label: "Week3 notes",
        url: "week3/index.html"
      },
    {
        label: "Week4 notes",
        url: "week4/index.html"
      },
    {
        label: "Week5 notes",
        url: "week5/index.html"
      },
    {
        label: "Week6 notes: Todo App",
        url: "week6/index.html"
      },
    {
        label: "Week7 notes",
        url: "week7/index.html"
      },
    {
        label: "Week8 notes",
        url: "week8/index.html"
      },
    {
        label: "Week9 notes",
        url: "week9/index.html"
      },
    {
        label: "Week10 notes",
        url: "week10/index.html"
      },
    {
        label: "Week11 notes",
        url: "week11/index.html"
      },
    {
        label: "Week12 notes: Final Project: Mars & Crypto",
        url: "week12/index.html"
      },
    {
        label: "Week13 notes",
        url: "week13/index.html"
      },
    {
        label: "Week14 notes",
        url: "week14/index.html"
      }
  ]


  let txt = "";
  links.forEach(myFunction);
  document.getElementById("links").innerHTML = txt;
  
  function myFunction(value, index, array) {
    txt += "<li><a href=\"" + value.url + "\">" + value.label +"</a></li>"; 
  }


// code sources: 
// https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_script_src
// https://github.com/matkat99/wdd330-portfolio-example
// https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_script
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_foreach
// https://stackoverflow.com/questions/13219348/adding-multiple-values-to-single-array-item-in-javascript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
// https://stackoverflow.com/questions/40647538/get-key-and-value-of-a-javascript-array-into-variable
