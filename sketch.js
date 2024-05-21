let cor;
let circulox; // pocição horizontal
let circuloy; // pocição vertical


function setup() {
  createCanvas(600, 600);//width = largura x heigth = altura
  background("white");
  cor = color(random(0,255),random(0,255),random(0,255));
  circulox = [0,0,0];
  circuloy = [random(height),random(height),random(height)];
  
}
//cirulox = 0,0,0
//ciruloy = 300.150,50

function draw() {
fill(cor);

 // console.log(circulox.length);
  for(let contador in circulox) {
    console.log(contador);
    circle(circulox[contador], circuloy[contador], 50);
    circulox[contador]+= random(0,3);
    circuloy[contador]+= random(-3,3);
  
  if(circulox[contador] >= width) {
    circulox[contador] = 0;
    circuloy[contador] = random(height);
  }
  }

  if(mouseIsPressed) {
   cor = color(random(0,255),random(0,255),random(0,255)), 
 random(0,100);
  
  }
}
