var table = document.getElementById("newTable");
var count = document.getElementById("count");
var startButton = document.getElementById("startButton");
var resetGame = document.getElementById("resetGame");
var inputName = document.getElementById("inputName");
var buttonName = document.getElementById("buttonName");
var toplist = document.getElementById("toplist");
var inputAge = document.getElementById("inputAge");
var personArray = [];
var counter = -1;
var countdownTimer;

//Draws playtable and calls functions.
function makeRowsAndColumns() {
    for (i = 0; i < 8; i++) {
        rad = document.createElement("tr");
            for (j = 0; j < 13; j++) {
                kolumn = document.createElement("td");
                //Marks one column when clicked.
                kolumn.addEventListener("click", markColumn);
                //Calls the random function when clicked.
                kolumn.addEventListener("click", randomizer);
                kolumn.setAttribute("class", "unactive");
                //Calls the startgame function ans starts timer.
                startButton.addEventListener("click", startGame);
                rad.appendChild(kolumn);
        }
        table.appendChild(rad);
    }
};

//Reload page when reset game. Solution for now, needs an update later.
function resetTheGame() {
    location.reload();
}

    resetGame.addEventListener("click", resetTheGame);


//Starts game and counts time in sec from 15 to 0.
function startGame() {
countdownTimer = setInterval('secondPassed()', 1000);
}
var seconds = 15;
function secondPassed() {
    var minutes = Math.round((seconds - 30)/60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 16) {
        remainingSeconds = "Time: " + remainingSeconds;  
    }
    document.getElementById('countdown').innerHTML = remainingSeconds;
    if (seconds == 0) {
        
        alert("Times up! You killed " + counter + " badgers");
        clearInterval(countdownTimer);
        
    } else {
        seconds--;
    }
}



//When clicking active, make unactive.
function  markColumn() {

if (this.getAttribute("class") === "active") {
    this.setAttribute("class", "unactive");
    
} else {
//Makes the counter take away points if miss.
counter--
counter--
}
}

//Makes one random active badger.
var allTds = document.getElementsByTagName("td");

function randomizer() {
      var randomnummer = (Math.floor(Math.random() * allTds.length / 150) + allTds.length / 150);
    
    for (var i = 0; i < randomnummer; i++) {
        allTds[Math.floor(Math.random() * allTds.length)].setAttribute("class", "active");
        counter++;
        count.innerHTML = "Dead badgers: " + counter;
    }
};

// ----------------  Following code is for input fields ---------------
// OBS! Tanken är att senare lagra denna data i en databas tillsammans med //en highscore.
//Constructor
function person(name, age) {
    this.name = name,
    this.age = age
};

//Creates new objects.
function newPlayer(){
toplist.innerHTML = "";
var newPerson = new person(inputName.value, inputAge.value);    
personArray.push(newPerson)

for (i = 0; i < personArray.length; i++) {
    var newLi = document.createElement("li");
    toplist.appendChild(newLi);
    newLi.innerHTML = personArray[i].name + " " + personArray[i].age + " " + "år."
}
}

buttonName.addEventListener("click", newPlayer);


//Call functions below
makeRowsAndColumns();
randomizer();
secondPassed();
