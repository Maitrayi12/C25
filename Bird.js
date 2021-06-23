class Bird extends BaseClass{
    constructor(x, y) {
      super(x,y,50,50);
      var options = {
        'density':1.5,
        'friction': 1.0,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      this.image = loadImage("sprites/bird.png");
      World.add(world, this.body);
    };
   display(){
      var pos = this.body.position;
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      super.display();
    };
  };
  