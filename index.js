// ------------------------  MAIN  ---------------------------

// Random number between 1 - 6
var random1 = Math.floor(Math.random() * 6) + 1;
console.log("Random1 = " + random1);
var random2 = Math.floor(Math.random() * 6) + 1;
console.log("Random2 = " + random2);

setImage(1, random1);
setImage(2, random2);

displayWinner(random1, random2)

// ------------------------FUNCTIONS---------------------------

// function to take in die number and set that image
function setImage(player, num) {
  var img;
  if (player == 1) {
    img = document.querySelector(".dice .img1");
  } else if (player == 2) {
    img = document.querySelector(".dice .img2");
  }

  imgAddress = "images/dice" + num + ".png";
  img.setAttribute("src", imgAddress);
}

// Function to take in player dice scores and change h1 to indicate winner
function displayWinner(num1, num2) {
  var output = "*";
  if (num1 == num2) {
    output = "Draw!";
  } else if (num1 > num2) {
    output = "😎 Player 1 Wins!";
  } else if (num1 < num2) {
    output = "Player 2 Wins! 😎";
  }

  var h1 = document.querySelector(".container h1");
  h1.textContent = output;
}
