let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
// // pour le carré
// ctx.beginPath();
// ctx.rect(20, 40, 50, 50);
// ctx.fillStyle = "#ff0000"; // stocke couleur rouge
// ctx.fill(); // peint la couleur rouge
// ctx.closePath();

// // pour le rond coloré en totalité
// ctx.beginPath();
// ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
// ctx.fillStyle = "green";
// ctx.fill();
// ctx.closePath();

// // pour colorier l'extérieur du cercle
// ctx.beginPath();
// ctx.rect(160, 10, 100, 40);
// ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
// ctx.stroke();
// ctx.closePath();
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
let ballRadius = 10;
//Dessiner draw

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  //code pour dessiner la balle
  ctx.clearRect(0, 0, canvas.width, canvas.height); // pour effacer la trace de l'ajout de dx et dy
  drawBall();
  x += dx;
  y += dy;

  // pour le rebondissement de la balle
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }
}
setInterval(draw, 10); // la fonction draw sera appélé toutes les 10 millisecondes jusque qd on la stoppe
