// root of html = document
// root of browser js = window
// root of css = :root {}

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const img = document.querySelector('img');
const width = 360;
const height = 640;

// context.fillStyle = 'black';
// context.fillRect(100, 100, 100, 100);

class Background {
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
        this.x--;
    }
}

const bg = new Background(0, 0, 360, 640);
// const bg2 = new Background(360, 0, 360, 640);


function gameLoop() {
    context.clearRect(0, 0, width, height);
    bg.update();
    // bg2.update();
    bg.draw();
    // bg2.draw();
    window.requestAnimationFrame( gameLoop )
}

gameLoop();

