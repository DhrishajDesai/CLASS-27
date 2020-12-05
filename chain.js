class Chain {
    constructor(bodyA_ob,bodyB_ob){
        var options={
            bodyA: bodyA_ob,
            bodyB: bodyB_ob,
            stiffness: 0.04,
            length: 10
        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain);

    }
    display(){
        var pointA= this.chain.bodyA.position;
        var pointB= this.chain.bodyB.position;

        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    
    }
}