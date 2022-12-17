import { MilleniumFalcon } from "./millenium_falcon.js"
import { Stormtrooper } from "./stormtrooper.js"
import { Bullet } from "./bullet.js"

function Game() {
  this.milleniumFalcon1 = new MilleniumFalcon()
  this.stormtrooper1 = new Stormtrooper(135, 15)
  this.bindedGameLoop = this.gameLoop.bind(this)
  this.bullets = []
  this.stormtrooperDeleted = false
}


Game.prototype.gameLoop = function () {
  this.update()
  this.draw()
}

Game.prototype.update = function () {
  this.bulletStormtrooperCollision()
  this.milleniumFalcon1.update()
  this.stormtrooper1.update()
  this.removeBullets()
  this.updateBullets()
}

Game.prototype.draw = function () {
  this.milleniumFalcon1.draw()
  this.stormtrooper1.draw()
  this.drawBullets()
}

Game.prototype.start = function () {
  this.listenKeys()
  setInterval(this.bindedGameLoop, 75)
}

Game.prototype.addNewBullet = function () {
  this.bullets.push(new Bullet(this.milleniumFalcon1.position.left + 25))
}

Game.prototype.updateBullets = function () {
  for (let i = 0; i < this.bullets.length; i++) {
    this.bullets[i].update()
  }
}

Game.prototype.drawBullets = function () {
  for (let i = 0; i < this.bullets.length; i++) {
    this.bullets[i].draw()
  }
}

Game.prototype.removeBullets = function () {
  this.bullets = this.bullets.filter((bullet) => bullet.destroyed === false)
}

Game.prototype.bulletStormtrooperCollision = function () {
  for (let i = 0; i < this.bullets.length; i++) {
    const bulletLeft = this.bullets[i].position.left
    const stormtrooperRight = this.stormtrooper1.position.left + this.stormtrooper1.width
    const bulletRight = this.bullets[i].position.left + this.bullets[i].width
    const stormtrooperLeft = this.stormtrooper1.position.left
    const bulletTop = this.bullets[i].position.top
    const stormtrooperBottom = this.stormtrooper1.position.top + this.stormtrooper1.height
    const bulletBottom = this.bullets[i].position.top + this.bullets[i].height
    const stormtrooperTop = this.stormtrooper1.position.top

    if (bulletLeft < stormtrooperRight && bulletRight > stormtrooperLeft && bulletTop < stormtrooperBottom && bulletBottom > stormtrooperTop) {
      this.bullets[i].destroy()
    }
  }
}



Game.prototype.listenKeys = function () {
  window.addEventListener('keydown', (e) => { // Hemos utilizado arrow function
    if (e.key === 'ArrowLeft') {
      this.milleniumFalcon1.direction = -1
    } else if (e.key === 'ArrowRight') {
      this.milleniumFalcon1.direction = 1
    } if (e.code === 'Space') {
      this.addNewBullet()
    }
  })
}

const game = new Game()
game.start()



