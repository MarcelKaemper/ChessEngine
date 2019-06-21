class Piece{
	constructor(x,y,image){
		this.x = x;
		this.y = y;
		this.image = image;
	}

	show = () => {
		image(this.image, this.x*cellSize,this.y*cellSize, cellSize, cellSize);
	}
}
