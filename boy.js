class boy {
    constructor() {
        var options = {
            isStatic: true
        }
    this.body = Bodies.rectangle(300,500,10,10,options);
    this.width = 10;
    this.height = 10;
    this.image= loadImage("Plucking mangoes/boy.png");
    World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
      }
}