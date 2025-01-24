

class Player {
    constructor () {
        this.positionX = 10;
        this.positionY = 0;
        this.width = 20;
        this.height = 10;

        this.playerElm = document.getElementById("player");
        this.updateUi();
    }

    updateUi() {
        this.playerElm.style.width = this.width + "vw";
        this.playerElm.style.height = this.height + "vh";
        this.playerElm.style.left = this.positionX + "vw";
        this.playerElm.style.bottom = this.positionY + "vh";

    }

    moveLeft() {
        this.positionX--;
        this.updateUi();   
    };

    moveRight() {
        this.positionX++;
        this.updateUi();
    }
}

class Obstacle {
    constructor () {
    this.width = 20;
    this.height = 10;  
    this.positionX = Math.floor(Math.random()* (100 - this.width));
    this.positionY = 100;



    //this.obstacleElm = document.getElementsByClassName("obstacle");

    this.createDomElement();
}

createDomElement () {
// STEP 1 create element
this.obstacleElm = document.createElement("div");

//STEP2 : add content or modify
this.obstacleElm.className = "obstacle";
this.obstacleElm.style.width = this.width + "vw";
this.obstacleElm.style.height = this.height + "vh";
this.obstacleElm.style.left = this.positionX + "vw";
this.obstacleElm.style.bottom = this.positionY + "vh";




//step3: append to the dom: `parentElm.appendChild()`
const parentElm = document.getElementById("board");
parentElm.appendChild(this.obstacleElm);
    }

moveDown() {
    this.positionY--;
    this.obstacleElm.style.bottom = this.positionY + "vh";
}
}


const player = new Player();

const obstaclesArr = []; // will store instances of the class Obstacle

//create obstale
setInterval(() => {
    const newObstacle = new Obstacle();
    obstaclesArr.push(newObstacle);
    console.log("new obstacle", obstaclesArr.length)
}, 4000);

//move obstacle
setInterval(() => {
    obstaclesArr.forEach(function(obstacleInstance) {
        obstacleInstance.moveDown();
    });
}, 60
)

document.addEventListener("keydown", (event) => {
   
     if (event.code === 'ArrowLeft') {
        player.moveLeft();
    } else if (event.code === 'ArrowRight') {
        player.moveRight();;
    } else {
        console.log('user pressed other key....');
    }
})

//Milestone 2 : obstacles
// new class
// new methods
//position and sizes
//method move down

// create obstacles
// create an interval to manage obstacles creation
// and another to manage movement. T>outes les 0,5sec move de -1 par ex

