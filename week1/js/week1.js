
// Javascript for localStorage page
function loadHint(){
    var HintName = document.getElementById("username_input").value + "hint"
    var HintHTML = localStorage.getItem(HintName)
    document.getElementById("Hint_editor").value = HintHTML
    }
function saveHint(){
    var HintName = document.getElementById("username_input").value + "hint"
    var HintHTML = document.getElementById("Hint_editor").value
    localStorage.setItem(HintName, HintHTML)
    }
function displayHint(){
    var HintHTML = document.getElementById("Hint_editor").value
    document.getElementById("Hint_display").innerHTML = HintHTML
    }
// Code source: https://masteringjs.io/tutorials/fundamentals/string-concat
// https://www.w3.org/TR/WebCryptoAPI/#dfn-SubtleCrypto-method-digest


// Javascript for mobile UX page
    function myFunction() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }