class Box{
  constructor(x, y, width, height) {
      var options = {
          restitution:1,
          friction:0,
          density:0.5,
          isStatic : false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.visibility = 0;
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    async display(){
      if(this.body.speed<5){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        //console.log(angle);
        rect(0,0, this.width, this.height);
        pop();
      } else {
        push();

        this.visibility=this.visibility-10;
        await fill(255,this.visibility);

        World.remove(world,this.body);

        pop();
      }
    }
}
