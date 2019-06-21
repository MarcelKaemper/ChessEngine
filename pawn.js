class Pawn extends Piece{
	constructor(x,y){
		super(x,y,pawnImg);
		this.show();
		console.log(this.x+" | "+this.y);	
	}
}
