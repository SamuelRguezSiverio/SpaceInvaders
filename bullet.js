export function Bullet(x) {
    this.position = {left: x, top: 410}
    this.direction = 0
    this.speed = 10
    this.sprite = document.createElement('div')
    this.sprite.setAttribute('class', 'bullet')
    this.father = document.getElementsByClassName('main')
    this.father[0].appendChild(this.sprite)
}

Bullet.prototype.update = function () {
    if (this.direction === 1 && this.position.top > -25){
        this.position.top -= 10 + this.speed
    } 
} 

Bullet.prototype.draw = function() {
    this.sprite.style.left = this.position.left + "px"
    this.sprite.style.top = this.position.top + "px"
}  




