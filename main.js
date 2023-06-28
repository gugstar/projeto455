var foguete,foguete_img
var terra,terra_img
var meteoro,meteoro_img

function preload(){
  foguete_img = loadImage("assets/nave.png")
  terra_img = loadImage ("assets/terraaaa.png")
  meteoro_img = loadImage ("assets/meteoro.png")
}
function setup(){
createCanvas(windowWidth,windowHeight)
terra = createSprite(width/2,height+700)
terra.addImage(terra_img)
terra.scale = 1
terra.debug=true
terra.setCollider("rectangle",0,0,2070,1600)
foguete = createSprite(width-100,300)
foguete.addImage(foguete_img)
foguete.scale = 0.4
foguete.rotation=-90
meteoroo();

}  

function draw(){
    background("white")
    drawSprites()
    foguete.y=mouseY
}

function meteoroo(){
 meteoro = createSprite(width/2,height/2)
 meteoro.addImage(meteoro_img)
 meteoro.scale = 0.1
}

function gerarMeteoro(){
  
}