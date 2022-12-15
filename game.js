import { MilleniumFalcon } from "./millenium_falcon.js"
import { Stormtrooper } from "./stormtrooper.js"
import { Bullet } from "./bullet.js"

function Game() {
    this.milleniumFalcon1 = new MilleniumFalcon()
    this.stormtrooper1 = new Stormtrooper()
    this.bindedGameLoop = this.gameLoop.bind(this)

}

Game.prototype.gameLoop = function() {
    this.update()
    this.draw()
}

Game.prototype.update = function() {
    this.milleniumFalcon1.update()
    this.stormtrooper1.update()
}

Game.prototype.draw = function(){
    this.milleniumFalcon1.draw()
    this.stormtrooper1.draw()
}

Game.prototype.start = function(){
    this.listenKeys()
    setInterval(this.bindedGameLoop, 75)
}

Game.prototype.listenKeys = function(){
    window.addEventListener('keydown', (e) => { // Hemos utilizado arrow function
        if (e.key === 'ArrowLeft') {
            this.milleniumFalcon1.direction = -1
        } else if (e.key === 'ArrowRight') {
            this.milleniumFalcon1.direction = 1
        } if (e.code === 'Space'){
            var bullet1 = new Bullet(this.milleniumFalcon1.position.left + 25)
            bullet1.draw()
            bullet1.update()            
            console.log(bullet1)


        }
    })
}

const game = new Game()
game.start()



