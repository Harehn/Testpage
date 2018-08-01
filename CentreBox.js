class centreBox{
	constructor(){
	this.right=true;
	this.leftBox=new Box((canvas.width/2)-transformX(90),0,transformX(180),transformY(60),!this.right);
	this.rightBox=new Box((canvas.width/2)-transformX(90),60,transformX(180),transformY(60),this.right);
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
		this.right=!this.right;
		this.refresh();
	}
	refresh(){
		if(this.right){
			this.rightBox.highlight();
			this.leftBox.unhighlight();
		}else{
			this.rightBox.unhighlight();
			this.leftBox.highlight();
		}
		this.write();
	}
	showDir(){
		let direction=this.right?"right":"left";
		console.log("Direction is "+direction);
	}
}
function transformX(num){
		return num*canvas.width/1200;
	}
function transformY(num){
		return num*canvas.height/600;
	}
