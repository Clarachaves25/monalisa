function setup() {
  createCanvas(400, 400);
}
let olhoX;
let olhoY;
function draw() {
  background('#796A95');
  fill ('#F44336');
circle (200,200,300);//rosto
   fill('white');
  circle (150,150,60);//olho esquerdo
circle (250,150,60);//olho direito
arc(200, 270, 80, 75, 0, PI + QUARTER_PI);
  fill ('#C2BD89')
 triangle(200,180,170,220,220,220);//nariz
  line(123,115,178,113);// Sobrancelha esquerda
  line(225,116,279,106);// Sobrancelha direita
  olhoX = map(mouseX,0,400,132,166);
  olhoY = map(mouseY,0,400,130,170);
  circle(olhoX,olhoY,10);
  circle(olhoX + 100,olhoY, 10);//nova pupila direita
  circle(mouseX,mouseY,10);// nova pupila esquerda
 if (mouseIsPressed) {
    console.log(mouseX, mouseY);
  }
  }
