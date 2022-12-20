export function MilleniumFalcon() {
    this.position = {left: 135, top: 410}
    this.direction = 0
    this.domMilleniumFalcon = document.createElement('div')
    this.father = document.getElementsByClassName('main')
    this.isFirstRender = true
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
        this.domMilleniumFalcon.style.top = this.position.top + "px"
        if ( this.isFirstRender === true ){
            this.domMilleniumFalcon.setAttribute('id', 'milleniumFalcon')
            this.father[0].appendChild(this.domMilleniumFalcon) 
            this.isFirstRender = false
          }
    }  
    