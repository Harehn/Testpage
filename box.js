class Box{
	constructor(x,y,width,height){
		this.highlighted=false;
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		this.highlight();
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
		context.fillStyle="black";
		context.rect(this.x,this.y,this.width,this.height);
		context.stroke();
	}
}