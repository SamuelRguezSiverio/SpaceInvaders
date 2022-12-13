export function MilleniumFalcon() {
this.position = {left: 135, top: 410}
this.direction = 1
this.domMilleniumFalcon = document.getElementById('milleniumFalcon')
}

MilleniumFalcon.prototype.update =  function () {
    if (this.direction === 1) {
        this.position.left += 50
    } else if (this.direction === -1) {
        this.position.left -= 1
    }

} 

MilleniumFalcon.prototype.draw = function() {
    this.domMilleniumFalcon.style.left = this.position.left + "px"
    console.log(this.domMilleniumFalcon.style)
    
}  
    /*left > 135 
    return derecha
    if left < 135
    return izquierda*/
