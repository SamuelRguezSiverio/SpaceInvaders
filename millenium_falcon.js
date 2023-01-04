export function MilleniumFalcon(paramLeft, paramTop) {
  this.position = { left: paramLeft, top: paramTop }
    this.direction = 0
    this.width = 50
    this.height = 50
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
    