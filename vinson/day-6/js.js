console.dir( document.body);

document.body.style.overflow = 'hidden';

let difficulty = 20;

let score = 0;
let chances = 3000;

const colors = ['green', 'red', 'yellow', 'blue', 'black'];

function createBox() {
    const el = document.createElement('div');
    el.wasClicked = false;
    el.addEventListener('click', function () {
        console.dir(this.wasClicked = true);
    });
    el.style.display = 'inline-block';
    el.style.width = '100px';
    el.style.height = '100px';
    el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    el.style.position = 'absolute';
    const top =  Math.floor(Math.random() * document.body.clientHeight ) - 100 ;
    const left = Math.floor(Math.random() * document.body.clientWidth ) - 100;
    el.style.top = (top < 100 ? 100 : top) +'px';
    el.style.left = (left < 100 ? 100 : left) +'px';
    document.body.appendChild(el);
    const randomBetween0and500 = (Math.random() * 500);
    const minimumTime = 50 * difficulty;
    chances--;
    console.log('chances', chances)
    if (chances < 1) {
        alert(`Game Over, Score: ${score}`);
        score = 0;
        chances = 20;
    }
    setTimeout(function () {
        console.log(el.wasClicked);
        if (el.wasClicked) {
            score++;
        } else {
            score--;
        }
        el.remove();
        createBox();
    }, randomBetween0and500 + minimumTime );
}


const answer = prompt('choose your difficulty');
difficulty = 100 - Number(answer) ;

createBox();
createBox();
createBox();
createBox();
createBox();


// function createBox2() {
//     const el = document.createElement('div');
//     el.wasClicked = false;
//     el.addEventListener('click', function () {
//         console.dir(this.wasClicked = true);
//     });
//     el.style.display = 'inline-block';
//     el.style.width = '100px';
//     el.style.height = '100px';
//     el.style.backgroundColor = 'green';
//     el.style.position = 'absolute';
//     const top =  Math.floor(Math.random() * document.body.clientHeight ) - 100 ;
//     const left = Math.floor(Math.random() * document.body.clientWidth ) - 100;
//     el.x = 0;
//     el.y = 0;
//     el.style.top = el.y +'px';
//     el.style.left = el.x +'px';
//     document.body.appendChild(el);
//     const randomBetween0and500 = (Math.random() * 500);
//     const minimumTime = 50 * difficulty;
//     chances--;
//     console.log('chances', chances)
//     if (chances < 1) {
//         alert(`Game Over, Score: ${score}`);
//         score = 0;
//         chances = 20;
//     } return el;
// }

// const el = createBox2();
//
// const pressed = {};
//
// window.addEventListener('keydown', function(e) {
//     pressed[e.code] = true;
//     console.log(pressed);
// });
// window.addEventListener('keyup', function(e) {
//     pressed[e.code] = false;
//     console.log(pressed);
// });
//
//
// function gameLoop() {
//     if (pressed['ArrowDown']) {
//         el.y++;
//         el.style.top = el.y + 'px';
//     }
//     if (pressed['ArrowRight']) {
//         el.x++;
//         el.style.left = el.x + 'px';
//     }
//     if (pressed['ArrowUp']) {
//         el.y--;
//         el.style.top = el.y + 'px';
//     }
//     if (pressed['ArrowLeft']) {
//         el.x--;
//         el.style.left = el.x + 'px';
//     }
//     window.requestAnimationFrame(gameLoop);
// }
//
// gameLoop();
