import { MilleniumFalcon } from "./millenium_falcon.js"
import { Stormtrooper } from "./stormtrooper.js"
import { Bullet } from "./bullet.js"

function Game() {
  this.milleniumFalcon1 = new MilleniumFalcon()
  this.bindedGameLoop = this.gameLoop.bind(this)
  this.bindedAddEventListener = this.addEventListenerCallBack.bind(this)
  this.bullets = []
  this.bulletStormtrooper = []
  this.stormtroopers = [new Stormtrooper(40, 15), new Stormtrooper(105, 15), new Stormtrooper(170, 15), new Stormtrooper(235, 15), new Stormtrooper(68, 75), new Stormtrooper(133, 75), new Stormtrooper(198, 75),]
  this.score = document.getElementsByClassName('score')
  this.score[0].innerHTML = '0'
  this.scoreCounter = 0
  this.gameTimer = null
  this.sounds = {
    shoot: new Audio('assets/LaserShoot.mp3'),
    stormtrooperDestroyed: new Audio('assets/StormtrooperDestroyed.mp3'),
    gameOverSound: new Audio('assets/hansolo_badfeeling.mp3'),
    startGameSound: new Audio('assets/spaceInvaderMusic.mp3')
  }

  this.sounds.shoot.volume = 0.2
  this.sounds.stormtrooperDestroyed.volume = 0.2
  this.sounds.gameOverSound.volume = 0.2
  this.sounds.startGameSound.volume = 0.1
}
 
Game.prototype.gameLoop = function () {
  this.update()
  this.draw()
}

Game.prototype.update = function () {
  this.bulletStormtrooperCollision()
  this.milleniumFalcon1.update()
  this.removeBullets()
  this.removeBulletsStormtrooper()
  this.removeStormtroopers()
  this.updateBullets()
  this.updateBulletsStormtrooper()
  this.gameOver()
  this.youWin()
}

Game.prototype.draw = function () {
  this.milleniumFalcon1.draw()
  this.drawStormtroopers()
  this.drawBullets()
  this.drawBulletsStormtrooper()
}

Game.prototype.updateStormtroopers = function () {
  for (let i = 0; i < this.stormtroopers.length; i++) {
    this.stormtroopers[i].updateX()
  }
}

Game.prototype.drawStormtroopers = function () {
  for (let i = 0; i < this.stormtroopers.length; i++) {
    this.stormtroopers[i].draw()
  }
}

Game.prototype.initialScreen = function () {
  window.removeEventListener('keydown', this.bindedAddEventListener )
  const divStart = document.createElement('div')
  const divFatherStart = document.getElementsByClassName('gameContainer')
  divStart.setAttribute('class', 'gameStart')
  divFatherStart[0].appendChild(divStart)
  this.listenKeys()
}

Game.prototype.cleanDOM = function() {
  const main = document.querySelector('.main')
  const mainChild = document.querySelectorAll('.main > *')
  for ( let i = 0; i < mainChild.length; i++ ){
    main.removeChild(mainChild[i])
  }
}

Game.prototype.startGame = function () {
  this.cleanDOM()
  this.milleniumFalcon1 = new MilleniumFalcon()
  this.bullets = []
  this.bulletStormtrooper = []
  this.stormtroopers = [new Stormtrooper(40, 15), new Stormtrooper(105, 15), new Stormtrooper(170, 15), new Stormtrooper(235, 15), new Stormtrooper(68, 75), new Stormtrooper(133, 75), new Stormtrooper(198, 75),]
  this.score[0].innerHTML = '0'
  this.scoreCounter = 0
  this.gameTimer = null
  this.gameTimer = setInterval(this.bindedGameLoop, 75)
}

Game.prototype.addNewBulletStormtrooper = function () {
  this.bulletStormtrooper.push(new Bullet(this.positionStormtrooperShoot.position.left, this.positionStormtrooperShoot.position.top, -1))
}

Game.prototype.updateBulletsStormtrooper = function () {
  for (let i = 0; i < this.bulletStormtrooper.length; i++) {
    this.bulletStormtrooper[i].update()
  }
}

Game.prototype.drawBulletsStormtrooper = function () {
  for (let i = 0; i < this.bulletStormtrooper.length; i++) {
    this.bulletStormtrooper[i].draw()
  }
}

Game.prototype.removeBulletsStormtrooper = function () {
  this.bulletStormtrooper = this.bulletStormtrooper.filter((bulletStormtrooper) => bulletStormtrooper.destroyed === false)
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

Game.prototype.gameOver = function () {
  for (let i = 0; i < this.stormtroopers.length; i++) {
    if (this.stormtroopers[i].position.top + this.stormtroopers[i].height >= 430) {
      clearInterval(this.gameTimer)
      this.gameOverScreen()
      break
    } 
  }
}

Game.prototype.gameOverScreen = function () {
  const divGameOver = document.createElement('div')
  const divFatherGameOver = document.getElementsByClassName('gameContainer')
  divGameOver.setAttribute('class', 'gameOver')
  divFatherGameOver[0].appendChild(divGameOver)
  this.sounds.gameOverSound.play()
}

Game.prototype.bulletStormtrooperCollision = function () {
  for (let i = 0; i < this.bullets.length; i++) {
    for (let j = 0; j < this.stormtroopers.length; j++) {
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
        if (this.stormtroopers[j].destroyed === false) {
          this.stormtroopers[j].destroy()
          this.sounds.stormtrooperDestroyed.currentTime = 0.85
          this.sounds.stormtrooperDestroyed.play()
          this.scoreCounter += 15
          this.score[0].innerHTML = parseInt(this.scoreCounter)
          for (let i = 0; i < this.stormtroopers.length; i++) {
            this.stormtroopers[i].speed += 4
          }
        }
      }
    }
  }
}

Game.prototype.youWin = function () {
  if (this.score[0].innerHTML === "105") {
    clearInterval(this.gameTimer)
    this.youWinScreen()
  }
}

Game.prototype.youWinScreen = function () {
  const divYouWin = document.createElement('div')
  const divFatherYouWin = document.getElementsByClassName('gameContainer')
  divYouWin.setAttribute('class', 'youWin')
  divFatherYouWin[0].appendChild(divYouWin)
}

Game.prototype.listenKeys = function () {
  window.addEventListener('keydown', this.bindedAddEventListener )

}

Game.prototype.addEventListenerCallBack = function(e) {
    if (e.key === 'ArrowLeft') {
      this.milleniumFalcon1.direction = -1
    } else if (e.key === 'ArrowRight') {
      this.milleniumFalcon1.direction = 1
    } if (e.code === 'Space') {
      this.sounds.shoot.currentTime = 0
      this.addNewBullet()
      this.sounds.shoot.play()
    }
    if (e.key === 'Enter') {
      document.getElementsByClassName("gameStart")[0].remove()
      this.startGame()    }
    if (e.key === 'Backspace') {
      document.getElementsByClassName("gameOver")[0].remove()
      this.initialScreen()
    }
    if (e.key === 'Escape') {
      document.getElementsByClassName("youWin")[0].remove()
      this.initialScreen()
    }
}

const game = new Game()
game.initialScreen()



/*
1. Añadir array en game para guardar balas de los stormtroopers
  - Línea 10 en game.js

2. Pasar a las balas por parametros x, y e direction (para poder elegir donde aparacen y si suben o bajan (ya no salen solo del milleiunFalcon1).
  - Línea 1 y 3 bullet.js añadido los parámetros
  
3. Crear un nuevo método que genere una bala siempre que el array de las balas nuevas este vacio (esto conlleva seleccionar un stormtrooper random para conocer donde aparece la bala, aunque inicialmente podemos hacerlo a mano para ver que funciona).
  - Línea 91 a la 109 game.js

*/


