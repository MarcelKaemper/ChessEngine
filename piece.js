class Piece{
	constructor(x,y,image){
		this.x = x;
		this.y = y;
		this.image = image;
		this.color = 1;
		this.firstMove = 1;
		cells[x][y].p = this;
	}

	show = () => {
		image(this.image, this.x*cellSize+32,this.y*cellSize, cellSize, cellSize)
	}

	confMove = (targetX, targetY) => {
		cells[this.x][this.y].p = null;
		this.x = targetX;
		this.y = targetY;
		cells[this.x][this.y].p = this;
		redrawAll();
	}
}
