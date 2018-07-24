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
	context.font="30px Arial";
	context.fillText("left",(canvas.width/2)-transformX(20),transformY(40));
	context.font="30px Arial";
	context.fillText("right",(canvas.width/2)-transformX(30),transformY(100));
	}
	
	stress(){
		if(right){
			this.rightBox.highlighted=true;
			this.leftBox.highlighted=false;
			
			this.rightBox.highlight();
			this.leftBox.highlight();
		}else{
			this.rightBox.highlighted=false;
			this.leftBox.highlighted=true;
			
			this.rightBox.highlight();
			this.leftBox.highlight();
		}
		this.draw();
	}
	changeDirection(){
		this.right=!this.right;
	}
}

class Box{
	constructor(x,y,width,height){
		this.highlighted=false;
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		//this.highlight();
		context.fillStyle ="white";
		context.fillRect(this.x,this.y,this.width,this.height);
	}
	highlight(){
		context.fillStyle = this.highlighted? "white":"yellow"
		context.fillRect(this.x,this.y,this.width,this.height);
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