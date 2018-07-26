class Arrow{
	constructor(_x,_y,_width,_height){
	this.x=_x
	this.y=_y;
	this.width=_width;
	this.height=_height;
	context.strokeStyle="black";
	this.drawArrow(_x,_y,_width,_height);
	}
	
	drawArrow(xOffset,yOffset,width,height){
		let unitX=width/8;
		let unitY=height/4;
		context.lineWidth=3;

		context.beginPath()
		context.moveTo(0      +xOffset,1*unitY+yOffset);
		context.lineTo(4*unitX+xOffset,1*unitY+yOffset);
		context.lineTo(4*unitX+xOffset,0      +yOffset);
		context.lineTo(8*unitX+xOffset,2*unitY+yOffset);
		context.lineTo(4*unitX+xOffset,4*unitY+yOffset);
		context.lineTo(4*unitX+xOffset,3*unitY+yOffset);
		context.lineTo(0      +xOffset,3*unitY+yOffset);
		context.lineTo(0      +xOffset,1*unitY+yOffset);
		context.stroke();
	}
	
	hightlight(){
		context.strokeStyle="yellow";
		this.drawArrow(this.x,this.y,this.width,this.height);
	}
}