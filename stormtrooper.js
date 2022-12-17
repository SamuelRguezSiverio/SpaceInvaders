export function Stormtrooper(paramLeft, paramTop) {
    this.position = { left: paramLeft, top: paramTop }
    this.positionInitial = { left: paramLeft, top: paramTop }
    this.width = 50
    this.height = 50
    this.direction = 1
    this.speed = 1
    this.domStormtrooper = document.getElementById('stormtrooper')
  }
  
  Stormtrooper.prototype.update = function (stormtrooperDeleted) {
    if (this.position.left <= this.positionInitial.left - 30 || this.position.left >= this.positionInitial.left + this.width + 30) {
      this.direction *= -1
    }
    this.position.left += (10 + this.speed) * this.direction
  }
  
  Stormtrooper.prototype.draw = function () {
    this.domStormtrooper.style.left = this.position.left + "px"
    this.domStormtrooper.style.top = this.position.top + "px"
  }
  
  