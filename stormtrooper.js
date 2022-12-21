export function Stormtrooper(paramLeft, paramTop) {
  this.position = { left: paramLeft, top: paramTop }
  this.positionInitial = { left: paramLeft, top: paramTop }
  this.width = 36
  this.height = 50
  this.direction = 1
  this.speed = 5
  this.domStormtrooper = document.createElement('div')
  this.father = document.getElementsByClassName('main')
  this.counter = 0
  this.destroyed = false
  this.isFirstRender = true
}

Stormtrooper.prototype.updateX = function () {
  if (this.direction === 1) {
    if (this.position.left <= this.positionInitial.left + 20) {
      this.position.left += this.speed
    } else {
      this.direction *= -1
    }
  } else {
    if (this.position.left >= this.positionInitial.left - 20) {
      this.position.left -= this.speed
    } else {
      this.direction *= -1
      this.counter++
    }
  } if (this.counter === 2) {
    this.updateY()
    this.counter = 0
  }
}

Stormtrooper.prototype.updateY = function () {
  this.position.top += 50
}

Stormtrooper.prototype.draw = function () {
  this.domStormtrooper.style.left = this.position.left + "px"
  this.domStormtrooper.style.top = this.position.top + "px"
  if ( this.isFirstRender === true ){
    this.domStormtrooper.setAttribute('id', 'stormtrooper')
    this.father[0].appendChild(this.domStormtrooper)
    this.isFirstRender = false
  }
}


Stormtrooper.prototype.destroy = function () {
  this.father[0].removeChild(this.domStormtrooper)
  this.destroyed = true
}