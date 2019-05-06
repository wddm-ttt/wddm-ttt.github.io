const checkForwin = (positionNumber,playCount) => {  // Function to check for winning player
let positionCounter = positionNumber + positionCounter;
if (positionCounter = 6 || 15 || 24 || 18 || 12) {
 if ( playCount % 2 == 0) {
    alert('Player Two Wins');
}else{
    alert('Player one Wins');
}
}
}
document.getElementById("gameboard").addEventListener(`click`, event => {  // Activate the event function after any cick on the board

 let boxId = document.querySelector('box-style').dataset.ID

if ( playCount % 2 == 0) {
document.getElementById("${boxId}").innerHTML = "O";
 playCount = playCount + 1;
 checkForwin();

}else{
document.getElementById("${boxId}").innerHTML = "X";
  playCount=playCount+1;
 checkForwin();
}
});
