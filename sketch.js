//definiçoes bolinha
let xBolinha=300;
let yBolinha=200;
let diametro=15;
let raio = diametro / 2 ;

//velocidade da bolinha
let velocidadeXbolinha=6;
let velocidadeYBolinha=6;

//definições da raquete
let xRaquete=5;
let yRaquete=150;
let raqueteComprimento=10;
let raqueteAltura= 90;

//desinições raquete oponente
let xRaqueteOponente=585;
let yRaqueteOponente =150;

let colidiu =false
// placar do jogo

let meusPontos=0;
let pontosOponente=0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha=loadSound("trilha.mp3");
  ponto=loadSound("ponto.mp3");
  raquetada=loadSound("raquetada.mp3");
}


function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostrarBolinha();
  movimentaBolinha();
  verificaColisao();
  mostraRaquete(xRaquete,yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
  mostraRaquete(xRaqueteOponente,yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaqueteOponente();
  incluiPlacar();
  marcaPonto();
}

function mostrarBolinha()
{
  circle(xBolinha,yBolinha,diametro);
}

function movimentaBolinha()
{
 xBolinha +=velocidadeXbolinha;
  yBolinha+=velocidadeYBolinha; 
}

function verificaColisao()
{
  if (xBolinha + raio > width || xBolinha - raio <0)
    {
      velocidadeXbolinha *= -1;
    }
  if (yBolinha +raio > height || yBolinha - raio <0)
    {
      velocidadeYBolinha *= -1;
    } 
}

function mostraRaquete(x,y){
  rect(x,y,raqueteComprimento,raqueteAltura)
  
}
function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 8 ; 
  }
   if(keyIsDown(DOWN_ARROW)){
    yRaquete += 8;
}
}

function verificaColisaoRaquete(){
  if (xBolinha-raio < xRaquete + raqueteComprimento && yBolinha -raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadeXbolinha *=-1;
    raquetada.play();
  }
}
function verificaColisaoRaqueteOponente(){
 colidiu =   collideRectCircle(xRaqueteOponente,yRaqueteOponente,raqueteComprimento,raqueteAltura,xBolinha,yBolinha,raio);
  if (colidiu ){
    velocidadeXbolinha *=-1;
    raquetada.play();
    
  }
  }


function movimentaRaqueteOponente(){
 
    yRaqueteOponente =yBolinha - raqueteComprimento / 2 -30;
 
}
function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));//colocar na cor branca o texto
  rect(150,10,40,20);
  fill(255);
  text(meusPontos,170,26);
  fill(color(255,140,0));
  rect(450,10,40,20);
  fill(255);
  text(pontosOponente,470,26);
}
function marcaPonto(){
  if(xBolinha>590){
    meusPontos +=1;
    ponto.play();
  }
  if (xBolinha<10){
    pontosOponente+=1;
     ponto.play();
  }
}