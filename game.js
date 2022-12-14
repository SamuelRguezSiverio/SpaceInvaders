import { MilleniumFalcon } from "./millenium_falcon.js"
const milleniumFalcon1 = new MilleniumFalcon()

import { Stormtrooper } from "./stormtrooper.js"
const stormtrooper1 = new Stormtrooper()

function update(){
    milleniumFalcon1.update()
    stormtrooper1.update()
}


function draw(){
    milleniumFalcon1.draw()
    stormtrooper1.update()
}


function gameLoop() {
    update()
    draw()
}

window.addEventListener('keydown', function(e) {
    if(e.key === 'ArrowLeft') {
        milleniumFalcon1.direction = -1
    } else if (e.key === 'ArrowRight') {
        milleniumFalcon1.direction = 1
    }
})

setInterval(gameLoop, 75)




/*Game.prototype.milleniumFalconCollision = function() {
    if (this.milleniumFalcon1)
}*/




/*Game.prototype.gameLoop = function() {
    this.update()
    if (this.stormtrooperBullet){
        clearInterval(this.gameInterval)
        this.gameOver()
        return
    }
    this.draw()
}*/



//gameLoop
//setInterval 



function Game() {
    this.score = 0;
    this.milleniumFalcon = null;
    this.stormtrooper = null;
    this.position = {left: 135, top: 410};
    this.direction = 0;
}


// PRUEBA