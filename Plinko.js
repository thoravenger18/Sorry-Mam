class Plinko{
    constructor(x,y,r) {

     var options ={
        restitution: 0.4,
        isStatic:true
    }
    this.r = 10;

    this.body = Bodies.circle(x,x,this.r,options);
    World.add = (world, this.body);
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(255,255,255);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}