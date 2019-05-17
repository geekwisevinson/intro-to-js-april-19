const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const img = document.querySelector('img');
const back = document.querySelector('#back');
back.src = './sprites/background pixel.png';
const luffy = document.querySelector('#luffy');
luffy.src = './sprites/Luffy Sprite.png';
const asset = document.querySelector('#asset');
asset.src = './sprites/asset pixels.png';
const width = 360;
const height = 640;

class Drawable {
    x = 0;
    y = 0;
    w = 0;
    h = 0;
    s = {x: 0, y: 0, w: 700, h: 315};
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    draw() {
        context.drawImage(back, this.s.x, this.s.y, this.s.w, this.s.h, this.x, this.y, this.w, this.h );
    }
    update(){
        this.x -= 1;
        if ( this.x <= -360){
            this.x = 360;
        }
    }
}

class Background extends Drawable {
}

class luffyy {
    x = 0;
    y = 0;
    w = 0;
    h = 0;
    s = {x: 0, y: 0, w: 0, h: 5};
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    draw() {
        context.drawImage(luffy, 0 , 300, 200, 150, this.x, this.y, this.w, this.h );
    }
    update(){
        this.x -= 1;
        if ( this.x <= -360){
            this.x = 360;
        }
    }
}
class Bird extends luffyy {
    speed = 0;
    gravity = 500;
    s = {x: 30, y: 81, w: 80, h: 70};
    update(){
        this.gravity += .2;
        this.y += this.speed + this.gravity;
        if ( this.y > 640 - this.h){
            this.y = 640 - this.h;
        }

        if (this.gravity < 1) {
            this.s.y = 150;
        } else {
            this.s.y = 81;
        }
    }
    flap() {
        this.speed = -5;
        this.gravity = 0;
        flapSound.currentTime = 0;
        flapSound.play();
    }
}

class assets {
    x = 0;
    y = 0;
    w = 0;
    h = 0;
    s = {x: 0, y: 0, w: 0, h: 0};
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    draw() {
        context.drawImage(asset, 300 , 300, 200, 150, this.x, this.y, this.w, this.h );
    }
    update(){
        this.x -= 1;
        if ( this.x <= -360){
            this.x = 360;
        }
    }
}
function myMove() {
    var elem = document.getElementById("heart");   
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
  }
class Pipe extends assets {
    gap = 400;
    startGap = 100;
    s = {x: 361, y: 0, w: 80, h: 80};
    speed = 2;
    bInstance;
    constructor(x,y,w,h, bInstance) {
        super(x,y,w,h);
        this.bInstance = bInstance;
    }
    update() {
        this.x -= this.speed;
        if ( this.x <= -360){
            this.x = 360;
            this.randomGap();
        }
        this.collision();
    }
    draw() {
        const bottom = this.startGap + this.gap;
        context.drawImage(asset, 455, 515, 22, 25, this.x, 0, 75, this.startGap );
        context.drawImage(asset, 390, 500, 22, this.s.h, this.x, bottom, 75, 640- bottom );
    }
    randomGap() {
        this.startGap = Math.floor(Math.random() * 300) + 100;
        this.speed += .2;
    }

    collision() {
        const birdLeft = this.bInstance.x;
        const birdRight = this.bInstance.x + this.bInstance.w;
        const pipeLeft = this.x;
        const pipeRight = this.x + this.w;

        const gapTop = this.startGap;
        const gapBottom = this.startGap + this.gap;
        const birdTop = this.bInstance.y;
        const birdBottom  = this.bInstance.y + this.bInstance.h;

        const notHittingFront = birdRight < pipeLeft;
        if (birdRight < pipeLeft) {
            return;
        }
        const notHittingBehind = birdRight < pipeLeft;
        if (birdLeft > pipeRight) {
            return;
        }
        const notHittingTop = birdTop > gapTop;
        const notHittingBottom = birdBottom < gapBottom;
        if (notHittingBottom && notHittingTop) {
            return;
        }
        console.log('collision');
    }
}

const bg = new Background(0, 0, 360, 640);
const bg2 = new Background(360, 0, 360, 640);
const bird = new Bird(80, 100, 80, 70);
const pipe = new Pipe(200, 100, 80, 80, bird);

function gameLoop() {
    context.clearRect(0, 0, width, height);
    bg.update();
    bg2.update();
    pipe.update();
    bird.update();
    bg.draw();
    bg2.draw();
    bird.draw();
    pipe.draw();
    window.requestAnimationFrame( gameLoop )
}

window.addEventListener('click', function () {
    bird.flap();
});

gameLoop();

