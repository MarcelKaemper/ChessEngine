class Pawn extends Piece{
	constructor(x,y){
		super(x,y,loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/1024px-Chess_pdt45.svg.png",() => {
			this.show();
			console.log(this.x+" | "+this.y);	
		}));
	}
}
