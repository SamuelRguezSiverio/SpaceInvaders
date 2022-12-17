export function MilleniumFalcon() {
    this.position = {left: 135}
    this.direction = 0
    this.domMilleniumFalcon = document.getElementById('milleniumFalcon')
    }
    
    MilleniumFalcon.prototype.update =  function () {
        if (this.direction === 1 && this.position.left < 265) {
            this.position.left += 10
        } else if (this.direction === -1 && this.position.left > 5) {
            this.position.left -= 10
        }
    
    } 
    
    MilleniumFalcon.prototype.draw = function() {
        this.domMilleniumFalcon.style.left = this.position.left + "px"
    }  
    