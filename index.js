var dice1 = Math.floor(Math.random() * 6 + 1);
var dice2 = Math.floor(Math.random() * 6 + 1);

document.querySelector(".img1").setAttribute("src", "images/dice" + dice1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + dice2 + ".png");

// Switch stmt is for pussies

// switch (dice1) {
//   case 1:
//     document.querySelector(".img1").setAttribute("src", "images/dice1.png");
//     break;
//   case 2:
//     document.querySelector(".img1").setAttribute("src", "images/dice2.png");
//     break;
//   case 3:
//     document.querySelector(".img1").setAttribute("src", "images/dice3.png");
//     break;
//   case 4:
//     document.querySelector(".img1").setAttribute("src", "images/dice4.png");
//     break;
//   case 5:
//     document.querySelector(".img1").setAttribute("src", "images/dice5.png");
//     break;
//   case 6:
//     document.querySelector(".img1").setAttribute("src", "images/dice6.png");
//     break;
// }

// switch (dice2) {
//   case 1:
//     document.querySelector(".img2").setAttribute("src", "images/dice1.png");
//     break;
//   case 2:
//     document.querySelector(".img2").setAttribute("src", "images/dice2.png");
//     break;
//   case 3:
//     document.querySelector(".img2").setAttribute("src", "images/dice3.png");
//     break;
//   case 4:
//     document.querySelector(".img2").setAttribute("src", "images/dice4.png");
//     break;
//   case 5:
//     document.querySelector(".img2").setAttribute("src", "images/dice5.png");
//     break;
//   case 6:
//     document.querySelector(".img2").setAttribute("src", "images/dice6.png");
//     break;
// }

if (dice1 > dice2) {
  document.querySelector(".bigHeading").innerHTML =
    "<img src='images/winner.png' class = 'winner'> Player 1 Wins!";
} else if (dice1 < dice2) {
  document.querySelector(".bigHeading").innerHTML =
    "Player 2 Wins! <img src='images/winner.png' class = 'winner'>";
} else {
  document.querySelector(".bigHeading").innerHTML = "It's a draw...";
}
