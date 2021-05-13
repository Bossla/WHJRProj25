class BaseClass {
    constructor(x,y,width,height,angle){
        var options = {
            isStatic:false,
            "restitutuion": 0.3,
            "friction": 0,
            "density": 1.2
        }
        
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.image = loadImage("paper.png")
        this.body = Bodies.rectangle(x,y,width,height,angle,options)
        World.add(world,this.body)
    }

    display(){
        var angle = this.body.angle
        push()
        translate(this.body.position.x, this.body.position.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        pop()
    }

}