// root of html = document
// root of browser js = window
// root of css = :root {}

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const img = document.querySelector('img');
const width = 360;
const height = 640;
const flapSound = document.createElement('audio');
flapSound.src = 'flap.mp3';

// context.fillStyle = 'black';
// context.fillRect(100, 100, 100, 100);

class Drawable {
    x = 0;
    y = 0;
    w = 0;
    h = 0;
    s = {x: 0, y: 0, w: 360, h: 640};
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    draw() {
        context.drawImage(img, this.s.x, this.s.y, this.s.w, this.s.h, this.x, this.y, this.w, this.h );
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
class Bird extends Drawable {
    speed = 0;
    gravity = 0;
    s = {x: 361, y: 81, w: 80, h: 70};
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

class Pipe extends Drawable {
    gap = 200;
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
        context.drawImage(img, this.s.x, this.s.y, this.s.w, this.s.h, this.x, 0, this.w, this.startGap );
        context.drawImage(img, this.s.x, this.s.y, this.s.w, this.s.h, this.x, bottom, this.w, 640- bottom );
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

        // if (!(notHittingBottom || notHittingTop) || notHittingBehind || notHittingFront) {
        //     return;
        // }


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

window.addEventListener('keyup', function () {
    bird.flap();
});

gameLoop();

