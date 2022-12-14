export function Stormtrooper() {
    this.position = {left: 135, top: 15}
    this.direction = 1
    this.speed = 10
    this.domStormtrooper = document.getElementById('stormtrooper')
}

Stormtrooper.prototype.update =  function () {
    if (this.position.left <= 5 || this.position.left >= 265) {
        this.direction *= -1;
    } 
    this.position.left += (10 + this.speed) * this.direction;
} 

Stormtrooper.prototype.draw = function() {
    this.domStormtrooper.style.left = this.position.left + "px"
    this.domStormtrooper.style.top = this.position.top + "px"
}  
