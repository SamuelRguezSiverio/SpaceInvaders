export function Stormtrooper(paramLeft, paramTop) {
    this.position = { left: paramLeft, top: paramTop }
    this.positionInitial = { left: paramLeft, top: paramTop }
    this.width = 36
    this.height = 50
    this.direction = 1
    this.speed = 5
    // this.domStormtrooper = document.getElementById('stormtrooper')
    this.domStormtrooper = document.createElement('div')
    this.father = document.getElementsByClassName('main')
    this.marginMovement = 5
    this.domStormtrooper.setAttribute('id', 'stormtrooper')
    this.father[0].appendChild(this.domStormtrooper)
    this.pixelsToMove = (2 + this.speed) * this.direction
    this.counter = 0
  }
  
  Stormtrooper.prototype.updateX = function () {
    if (this.direction === 1) {
      if ( this.position.left <= this.positionInitial.left + 20 ) {
      this.position.left += this.speed
      this.domStormtrooper.style.left = this.position.left + "px"     
      } else {
        this.direction *= -1
      }
    } else {
      if ( this.position.left >= this.positionInitial.left - 20) {
      this.position.left -= this.speed
      this.domStormtrooper.style.left = this.position.left + "px"     
      } else {
        this.direction *= -1
        this.counter ++
      }
    } if (this.counter === 2) {
      this.updateY()
      this.counter = 0
    }
  }

  Stormtrooper.prototype.updateY = function () {
    this.position.top += 50
    this.domStormtrooper.style.top = this.position.top + "px"     

  }









  //   if (this.direction === 1 && this.position.left < 265) {
  //     this.position.left += 10 
  // } else if (this.direction === -1 && this.position.left > 5) {
  //     this.position.left -= 10
  // }


    // if (this.position.left <= this.positionInitial.left - this.marginMovement || this.position.left >= this.positionInitial.left + this.width + this.marginMovement) {
    //   this.direction *= -1
    //   this.pixelsToMove = (2 + this.speed) * this.direction
    // }
    // console.log('primero',this.position.left - this.pixelsToMove)
    // console.log(this.positionInitial.left - this.marginMovement)
    // console.log('dirección', this.direction)
  //   if ( this.position.left - this.pixelsToMove < this.positionInitial.left - this.marginMovement && this.direction === -1 ) {
  //     this.position.left = this.positionInitial.left - this.marginMovement
  //     this.direction *= -1
  //     this.pixelsToMove = (2 + this.speed) * this.direction
  //     console.log(this.position.left)
  //   } else if ( this.position.left + this.pixelsToMove + this.width > this.positionInitial.left + this.width + this.marginMovement && this.direction === 1) {
  //     this.position.left = this.positionInitial.left + this.width + this.marginMovement
  //     this.direction *= -1
  //     this.pixelsToMove = (2 + this.speed) * this.direction
  //   } else {
  //     this.position.left += this.pixelsToMove
  //   }      
  // }
  
  Stormtrooper.prototype.draw = function () {
    this.domStormtrooper.style.left = this.position.left + "px"
    this.domStormtrooper.style.top = this.position.top + "px"
  }
