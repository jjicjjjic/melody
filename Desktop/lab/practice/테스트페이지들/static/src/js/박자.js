
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width=window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var user = {
    x: 200,
    y: 300,
    width: 10,
    height: 50,
    draw(){
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

class Notes {
    constructor(){
        this.x = 700;
        this.y = 300;
        this.width = 10;
        this.height = 50;
    }
    draw(){
        ctx.fillStyle = 'lightblue';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

var notes = new Notes();
notes.draw();

var timer = 0;
var notesmix = [];
var time = 0;
var animation;

function animate() {
    animation= requestAnimationFrame(animate);
    timer++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);


    if (timer%60 === 0){

        var notes = new Notes();
        notesmix.push(notes);
    
    }

    notesmix.forEach((a, i, o) => {
        if(a.x < (0-a.width)){
            o.splice(i, 1)
        }
        a.x--;
        a.draw();

        var xDifference = a.x - (user.x + user.width);
        var yDifference = a.y - (user.y + user.height);

        if(xDifference < 0) {
            notesmix.i = 1;
        }
    })

    if(big == true){
        user.width = 15;
        user.height = 55;
        time++;
    }

    if(big == false){
        user.width = 10;
        user.height = 50;
    }

    if(time > 20){
        big = false;
        time = 0;
    }
    user.draw();

}

animate();

var big = false;
document.addEventListener('keydown', function(e){
    if (e.code === 'Space'){
        big = true;
    }
})

