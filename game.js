import { MilleniumFalcon } from "./millenium_falcon.js"
import { Stormtrooper } from "./stormtrooper.js"
import { Bullet } from "./bullet.js"

function Game() {
  this.milleniumFalcon1 = new MilleniumFalcon()
  this.bindedGameLoop = this.gameLoop.bind(this)
  this.bullets = []
  this.stormtroopers = [ new Stormtrooper(40, 15), new Stormtrooper(105, 15), new Stormtrooper(170, 15), new Stormtrooper(235, 15), new Stormtrooper(68, 75), new Stormtrooper(133, 75), new Stormtrooper(198, 75),  ]
  this.score = document.getElementsByClassName('score')
  this.score[0].innerHTML = '0'
  this.scoreCounter = 0
  this.gameTimer = null
  // this.audio = document.getElementById("myAudio");
}


Game.prototype.gameLoop = function () {
  this.update()
  this.draw()
  
}

Game.prototype.update = function () {
  this.bulletStormtrooperCollision()
  this.milleniumFalcon1.update()
  this.removeBullets()
  this.removeStormtroopers()
  this.updateBullets()
  this.updateStormtroopers()
}

Game.prototype.draw = function() {
  this.milleniumFalcon1.draw()
  this.drawStormtroopers()
  this.drawBullets()
}

Game.prototype.updateStormtroopers = function() {
  for (let i = 0; i < this.stormtroopers.length; i++) {
    this.stormtroopers[i].updateX()
  }
}

Game.prototype.drawStormtroopers = function(){
  for (let i = 0; i < this.stormtroopers.length; i++) {
    this.stormtroopers[i].draw()
  }
}

Game.prototype.initialScreen = function () {
  const divStart = document.createElement('div')
  const divFatherStart = document.getElementsByClassName('gameContainer')
  divStart.setAttribute('class', 'gameStart')
  divStart.innerHTML = `<span class="startText">PRESS ENTER TO START NEW GAME</span>`
  divFatherStart[0].appendChild(divStart)
  this.listenKeys()
}

Game.prototype.startGame = function() {
  this.gameTimer = setInterval(this.bindedGameLoop, 75)
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

Game.prototype.removeStormtroopers = function () {
  this.stormtroopers = this.stormtroopers.filter((stormtrooper) => stormtrooper.destroyed === false)
}

Game.prototype.bulletStormtrooperCollision = function () {
  for (let i = 0; i < this.bullets.length; i++) {
    for ( let j = 0; j < this.stormtroopers.length; j++) {
    const bulletLeft = this.bullets[i].position.left
    const stormtrooperRight = this.stormtroopers[j].position.left + this.stormtroopers[j].width
    const bulletRight = this.bullets[i].position.left + this.bullets[i].width
    const stormtrooperLeft = this.stormtroopers[j].position.left
    const bulletTop = this.bullets[i].position.top
    const stormtrooperBottom = this.stormtroopers[j].position.top + this.stormtroopers[j].height
    const bulletBottom = this.bullets[i].position.top + this.bullets[i].height
    const stormtrooperTop = this.stormtroopers[j].position.top

    if (bulletLeft < stormtrooperRight && bulletRight > stormtrooperLeft && bulletTop < stormtrooperBottom && bulletBottom > stormtrooperTop) {
      this.bullets[i].destroy()
      if ( this.stormtroopers[j].destroyed === false ) {
      this.stormtroopers[j].destroy()
      this.scoreCounter += 15
      this.score[0].innerHTML = parseInt(this.scoreCounter)
      console.log(this.scoreCounter)
      }
      }
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
    if (e.key === 'Enter'){
      document.getElementsByClassName("gameStart")[0].remove()
      this.startGame()
    }
  })
}

///prueba 
// Te lo devuelvo


Game.prototype.playMyAudio = function(){
  document.getElementById("myAudio").play();
 }



const game = new Game()
game.initialScreen()
// game.playMyAudio()

