class playSound {
    constructor(sound) {
        this.audio = {
            win: new Audio('./media/win.m4a'),
            loseHealth: new Audio('./media/auch.m4a'),
            pad: new Audio('./media/doing.m4a'),
            gameOver: new Audio('./media/gameover.m4a')
        };
    }
    boink() {
        let sound = new Audio('./media/boink.m4a')
        sound.play()
    }
}
// class ball {
//     constructor(canvasId, ballDaimeter, ballColor, speed,x,y,speed,width,height) {
//         this.radius = diamter / 2;
//         this.color = color;
//         this.area = canvas.getContext("2d");
//         this.ball = new Ball (ballDaimeter, ballColor, speed);
//         this.register();
//         this.action = null;
//         this.score = 0;
//         this.lives = 3;
//         this.paddle = new this.paddle(100,300,100,10,"red");
//         this.x = 100;
//         this.y = 200;
//         this.dx = 2;
//         this.dy = -2;
//     }
//     register(e){
//         if (e.keyCode == 27 ){this.pause};
//         if (e.keyCode == 13 ){this.start}
//     }
//     start (e){
//         if (!this.action){
//             this.action = setInterval(function(){ game.play() },200/this.ball.speed)
//         }
//     }
//     pause (e){
//         clearInterval(this.action)
//         this.action = null;
//     }
//     drawBall() {
//         let area = this.area;
//         let width = area.canvas.width;
//         let height = area.canvas.height;
//         let middle = width/2;
//         ctx.beginPath();
//         ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
//         ctx.fillStyle = "#0095DD";
//         ctx.fill();
//         ctx.closePath();
//     }

// }
// class game {
//     constructor() {
//         this.rightPressed = asd;
//         this.leftPressed = asdd;
//         this.brickColumCount = asdd;
//         this.score = 0;
//         this.live = 3
//     }
// }