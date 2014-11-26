/*
* I detta dokument skriver kod för att lägga till och ta bort tasks
* i todo-listen. Utöver funktionerna som finns nedan måste du hämta 
* elementen från DOMet och spara ner dem i variabler samt lägga till
* de eventlisteners som behövs.
*/
var addbutton = document.getElementById("addbutton"); //Hämtar "addknappen".
var tasks = document.getElementById("tasks");   //Hämtar diven där all ska hamna.
var date = document.getElementById("date");
var date2 = document.getElementById("date2");
var rooms = document.getElementById("room");

/* 
* Funktionen ska köras när add-knappen klickas på
* Förväxla inte add-knappen med save-knappen
*/
function addTask()
{
var newtask = document.getElementById("new-task").value; //Hämtar värdet från input.
    var newField = document.createElement("fieldset"); //Skapar ett fält med ram för input samt knapp att hamna i.
    var newData = document.createElement("label"); //Skapar en label inuti fälet för input.
    var newData2 = document.createElement("legend");  //Skapar en legend för knappen att hamna i, av estetiska skäl.
    var deleteButton = document.createElement("button"); //Skapar en deleteknapp.
    deleteButton.innerHTML = "Delete";  //Sätter namn på knappen.
    newField.appendChild(newData); // Label blir barn till fieldset.
    newField.appendChild(newData2); // Deleteknappen blir också barn till fieldset.
    tasks.appendChild(newField); // Alla blir barn till tasks, i den form allt ska läggas.
    newData2.appendChild(deleteButton); // Deleteknappen blir barn till legend.
    newData.innerHTML = newtask; // Visar värdet från inputfältet till listan.
    
    deleteButton.addEventListener("click", deleteTask); // Kopplar deleteknappen till funktionen.
}

/* 
* Funktionen ska köras när delete-knappen klickas på för en task klickas på.
* Knappen ska endast finnas när det finns en task i listan.
* Förväxla inte delete-knappen för tasks med delete-knappen i saved-listan.
*/

function deleteTask()
{
    this.parentNode.parentNode.remove(); /* Här blev det knepigt men jag var tvungen att sätta parentnode två gånger då jag skapade en "fieldset" som ram för där allt ska hamna, sen en label och en legend som barn till denna. */
}

addbutton.addEventListener("click", addTask); //Detta kopplar knappen till funktionen.