class centreBox{
	constructor(){
	this.right=true;
	this.rightBox=new Box((canvas.width/2)-transformX(90),0,transformX(180),transformY(60),right);
	this.leftBox=new Box((canvas.width/2)-transformX(90),60,transformX(180),transformY(60),!right);
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
		if(this.right=!this.right){
			this.rightBox.highlight();
			this.leftBox.unhighlight();
		}else{
			this.rightBox.unhighlight();
			this.leftBox.highlight();
		}
		this.write();
	}
	checkIfRight(){
		return this.right;
	}
}
function transformX(num){
		return num*canvas.width/1200;
	}
function transformY(num){
		return num*canvas.height/600;
	}
