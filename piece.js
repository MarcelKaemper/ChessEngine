class Piece{
	constructor(x,y,image){
		this.x = x;
		this.y = y;
		this.image = image;
		cells[x][y].p = this;
	}

	show = () => {
		image(this.image, this.x*cellSize,this.y*cellSize, cellSize, cellSize)
	}

	move = (targetX, targetY) => {
		cells[this.x][this.y].p = null;
		this.x = targetX;
		this.y = targetY;
		cells[this.x][this.y].p = this;
		redrawAll();
	}
}
