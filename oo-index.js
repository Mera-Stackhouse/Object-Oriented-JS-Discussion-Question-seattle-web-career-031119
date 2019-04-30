class Unicorn {
  constructor(name, occupation) {
    this.name = name;
    this.occupation = occupation;
    this.health = 1000
    this.eventArea = document.getElementById('event_area')
    this.imageArea = document.getElementById('image_area')
  }

  restart() {
    while (this.eventArea.hasChildNodes()) {
        this.eventArea.removeChild(this.eventArea.lastChild);
    }
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("Out on the street, ready to go!"));
    this.eventArea.prepend(div);
    this.imageArea.className = 'new';
  }

  attack() {
    var div = document.createElement("div")
    div.appendChild(document.createTextNode("'ATTAAAAAAAAAK!''"))
    this.eventArea.prepend(div)
    this.imageArea.className = 'attack'
  }

  defend() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("You put sunglasses on."));
    this.eventArea.prepend(div);
    this.imageArea.className = 'defend';
  }

  heal() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("You feel refreshed after yoga."));
    this.eventArea.prepend(div);
    this.imageArea.className = 'heal';
  }

  breakdance() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("It's really spinning class"));
    this.eventArea.prepend(div);
    this.imageArea.className = 'breakdance';
  }

  eatCronut() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("You've gained 1000 health points."));
    this.health = parseInt(this.health) + 1000
    this.eventArea.prepend(div);
    this.imageArea.className = 'eat';
    
  }



}

function main() {
  const unicorn = new Unicorn('mera', 'student')
  const restartButton = document.getElementById('restart').addEventListener("click",()=> unicorn.restart())
  const attackButton = document.getElementById('attack').addEventListener("click",()=> unicorn.attack())
  const defendButton = document.getElementById('defend').addEventListener("click",()=> unicorn.defend())
  const healButton = document.getElementById('heal').addEventListener("click",()=> unicorn.heal())
  const breakdanceButton = document.getElementById('breakdance').addEventListener("click",()=> unicorn.breakdance())
  const eatButton = document.getElementById('eat').addEventListener("click",()=> unicorn.eatCronut())
}

main()
