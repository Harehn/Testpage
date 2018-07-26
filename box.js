class Box{
	constructor(x,y,width,height,highlighted){
		this.highlighted=highlighted;
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		this.highlighted?this.highlight():this.unhighlight();
		this.show();
	}
	
	highlight(){
		this.highlighted=true;
		context.fillStyle = "yellow";
		this.show();
	}
	unhighlight(){
		this.highlighted=false;
		context.fillStyle = "white";
		this.show();
	}
	show(){
		context.fillRect(this.x,this.y,this.width,this.height);
		context.strokeStyle="black";
		context.lineWidth=1;
		context.beginPath();
		context.rect(this.x,this.y,this.width,this.height);
		context.stroke();
	}
}