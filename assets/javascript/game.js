//create array of letters then store in a variable
var alphabetArray = [ "a", "b","c","d", "e", "f","g","h","i","j","k","l",
      "m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//when key pressed log character in guesses so far
console.log("start program");
document.onkeydown = myKeyHandler;
function myKeyHandler(){
  //docment.write();
  window.alert("Key pressed");
}
myKeyHandler();

//myKeyHandler(event){
  //if (event.key === "ArrowUp"){
    //window.alert("Done!");
  //} 
//}
//myKeyHandler();




//when i press a letter i want it to show next to your guesses so far//
 //document.onkeydown = function (event){
  //var key_guessed = String.fromCharCode(event.keyCode);
 // document.getElementbyId("guessed").innerHTML = key_guessed
 //}
 //var guesses = event.key; 
 //document.write(guesses); //

//make guesses left counter
var guessesLeft = 9;
document.write("Guesses Left:"  + guessesLeft);
if (myKeyHandler() === true){
  console.log("yes");
}

console.log("end program");

 //have console print random letter from object alphabet//


//var computerAnswer = alphabet[Math.floor(Math.random() * 26) + 1];
//console.log(computerAnswer);
//document.write("Your guesses so far: " + computerAnswer);


