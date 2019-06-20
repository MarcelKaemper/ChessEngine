class Cell {
	constructor(x,y,p=null,color=0){
		this.x = x;
		this.y = y;
		this.actualX = this.x * cellSize
		this.actualY = this.y * cellSize
		this.p = p;
		//0;1;2
		//none;white;black
		this.color = color;
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
			switch(this.p){
				case "R":
					image(rook, this.actualX,this.actualY, cellSize, cellSize);
					break;
				case "K":
					image(king, this.actualX,this.actualY, cellSize, cellSize);
					break;
				case "P":
					image(pawn, this.actualX,this.actualY, cellSize, cellSize);
					break;
				case "N":
					image(knight, this.actualX,this.actualY, cellSize, cellSize);
					break;
				case "B":
					image(bishop, this.actualX,this.actualY, cellSize, cellSize);
					break;
				case "Q":
					image(queen, this.actualX,this.actualY, cellSize, cellSize);
					break;
			}
		}
	}
}
