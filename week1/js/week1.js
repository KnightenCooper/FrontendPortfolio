function loadHint(){
    var HintName = document.getElementById("username_input" + "-hint").value
    var HintHTML = localStorage.getItem(HintName)
    document.getElementById("Hint_editor").value = HintHTML
    }
function saveHint(){
    var HintName = document.getElementById("username_input"+ "-hint").value
    var HintHTML = document.getElementById("Hint_editor").value
    localStorage.setItem(HintName, HintHTML)
    }
function displayHint(){
    var HintHTML = document.getElementById("Hint_editor").value
    document.getElementById("Hint_display").innerHTML = HintHTML
    }