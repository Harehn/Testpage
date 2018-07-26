class centreBox{
	constructor(){
	this.right=true;
	this.rightBox=new Box((canvas.width/2)-transformX(90),0,transformX(180),transformY(60));
	this.leftBox=new Box((canvas.width/2)-transformX(90),60,transformX(180),transformY(60));
	this.draw();
	}
	draw(){
		//context.fillStyle="white";
		//context.fillRect((canvas.width/2)-transformX(90),0,transformX(180),transformY(120));
		
		context.fillStyle="black";
		context.rect((canvas.width/2)-transformX(90),0,transformX(180),transformY(60));
		context.rect((canvas.width/2)-transformX(90),transformY(60),transformX(180),transformY(60));
		context.stroke();
		this.write();
	}
	
	write(){
	context.fillStyle="black";
	context.font="30px Arial";
	context.fillText("left",(canvas.width/2)-transformX(20),transformY(40));
	context.font="30px Arial";
	context.fillText("right",(canvas.width/2)-transformX(30),transformY(100));
	}
	
	stress(){
		if(right){
			//this.rightBox.highlighted=true;
			//this.leftBox.highlighted=false;
			
			this.rightBox.highlight();
			this.leftBox.unhighlight();
		}else{
			//this.rightBox.highlighted=false;
			//this.leftBox.highlighted=true;
			
			this.rightBox.unhighlight();
			this.leftBox.highlight();
		}
		this.write();
	}
	changeDirection(){
		this.right=!this.right;
	}
}
function transformX(num){
		return num*canvas.width/1200;
	}
function transformY(num){
		return num*canvas.height/600;
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