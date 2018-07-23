class centreBox{
	constructor(){
	this.right=true;
	this.draw();
	}
	draw(){
		context.fillStyle="white";
		context.fillRect((canvas.width/2)-90,0,180,120);
		context.fillStyle="black";
		context.rect((canvas.width/2)-90,0,180,60);
		context.rect((canvas.width/2)-90,60,180,60);
		context.stroke();
		context.font="30px Arial";
		context.fillText("left",(canvas.width/2)-90,20);
	}
}



/*
class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }

}

let user = new User("John");
user.sayHi();
*/