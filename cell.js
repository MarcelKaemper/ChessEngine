class Cell {
	constructor(x,y){
		this.x = x;
		this.y = y;
	}

	show = () => {
		noStroke();
		if(this.y % 2 == 0){
			if(this.x % 2 == 0){
				fill(255);
			}else{
				fill(0);
			}
		}else{
			if(this.x % 2 == 0){
				fill(0);
			}else{
				fill(255);
			}
		}
		rect(cellSize*this.x, cellSize*this.y, cellSize,cellSize);
	}
}
