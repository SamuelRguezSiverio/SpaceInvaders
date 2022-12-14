export function Stormtrooper() {
    this.position = {left: 135, top: 410}
this.direction = 0
this.domStormtrooper = document.getElementById('stormtrooper')
}

Stormtrooper.prototype.update =  function () {
    if (this.direction === 1 && this.position.left < 265) {
        this.position.left += 10
    } else if (this.direction === -1 && this.position.left > 5) {
        this.position.left -= 10
    }

} 

Stormtrooper.prototype.draw = function() {
    this.domStormtrooper.style.left = this.position.left + "px"
}  

const stormtrooperMove = function () {
    if (this.position.left > 5 || this.position.left < 265) {
        this.direction *= -1;
    } this.position.left += 10*this.direction;
    this.domStormtrooper.style.position = this.position.left + 'px';
}

var moving = false;
var timerId;

window.addEventListener('keydown', function (e) {
    if (!moving) {
      timerId = setInterval(stormtrooperMove, 50);
    } else {
      clearInterval(timerId);
    }
    moving = !moving;
  })
  /* repairing*/