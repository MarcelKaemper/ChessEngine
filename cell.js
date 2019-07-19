class Cell {
	constructor(x,y,p=null,firstMove=1,color=0){
		this.x = x;
		this.y = y;
		this.actualX = this.x * cellSize
		this.actualY = this.y * cellSize
		this.p = p;
		this.firstMove = firstMove;
		//0;1;2
		//none;white;black
		this.color = color;
	}

	show = () => {
		return new Promise((resolve, reject) => {
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
			rect(this.actualX+32, this.actualY, cellSize, cellSize);
			resolve();
		})
	}
}
