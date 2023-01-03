export function Bullet(x, y, dir) {
  this.position = { left: x, top: y }
  this.direction = dir
  this.speed = 10
  this.width = 2
  this.height = 25
  this.sprite = document.createElement('div')
  this.father = document.getElementsByClassName('main')
  this.destroyed = false
  this.isFirstRender = true
}

Bullet.prototype.update = function () {
  if (this.direction === 1) {
    this.position.top -= 10 + this.speed
  } else if (this.direction === -1) {
    this.position.top += 10 + this.speed
  }
}

Bullet.prototype.draw = function () {
  this.sprite.style.left = this.position.left + "px"
  this.sprite.style.top = this.position.top + "px"

  if (this.position.top < -25 || this.position.top > 480 - this.height) {
    this.destroy()
  }

  if (this.isFirstRender === true) {
    this.sprite.setAttribute('class', 'bullet')
    this.father[0].appendChild(this.sprite)
    this.isFirstRender = false
  }
}

Bullet.prototype.destroy = function () {
  this.father[0].removeChild(this.sprite)
  this.destroyed = true
}




/* Añadir un nuevo parametro para saber de quien es la bala
stormtrooper o millenium falcon

Añadir una condicion nueva en el firstrender para saber de quein es y añadir la clase css de la bullet correspondiente.

Crear una nueva clase css para la bala del stormtrooper.

*/