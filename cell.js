class Cell {
	constructor(x,y,p=null){
		this.x = x;
		this.y = y;
		this.actualX = this.x * cellSize
		this.actualY = this.y * cellSize
		this.p = p;
	}

	show = () => {
		noStroke();
		if(this.y % 2 == 0){
			if(this.x % 2 == 0){
				fill(255);
			}else{
				fill(100);
			}
		}else{
			if(this.x % 2 == 0){
				fill(100);
			}else{
				fill(255);
			}
		}
		rect(this.actualX, this.actualY, cellSize, cellSize);
		if(this.p != null){
			image(rook, this.actualX,this.actualY, cellSize, cellSize);
		}
	}
}
