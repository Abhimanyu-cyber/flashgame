class Box{
    constructor(x,y,width,height){
        var options={
            'friction':1.0,
            'restitution':0.8,
            'density':0.04
}
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        
        strokeWeight(4);
        stroke(255)
        fill(0);
        rect(0,0,this.width,this.height);
        pop();
    }
};
