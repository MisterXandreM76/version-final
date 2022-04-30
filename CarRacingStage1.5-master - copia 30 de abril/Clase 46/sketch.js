var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var carro1
var carro2
var carro3
var carro4
var form, player, game;
var bakgr0un
var cars, car1, car2, car3, car4;
/////
function preload(){
  carro1=loadImage("images/car1.png")
  carro2=loadImage("images/car2.png")
  carro3=loadImage("images/car3.png")
  carro4=loadImage("images/car4.png")
  bakgr0un=loadImage("images/track.png")
}
/////
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}
/////
function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    clear();
    game.elFin();
  }    
}
