class Pawn extends Piece{
	constructor(x,y){
		super(x,y,loadImage(pieces.P,() => {
			this.show();
			console.log(this.x+" | "+this.y);	
		}));
	}

	move = (toX,toY) => {
		let diffY = this.y - toY;
		let diffX = this.x - toX;
		console.log(diffY,diffX);

		if(cells[toX][toY].p == null && abs(diffX) == 0){
			if(this.color == 1 && diffY<=0 || this.color == 0 && diffY>=0){
				if(abs(diffY) <= 1 || abs(diffY) == 2 && this.firstMove == 1){
					this.firstMove = 0;
					this.confMove(toX,toY);
				}
			}
		}else if(cells[toX][toY].p != null && abs(diffX)<=1){
			if(cells[toX][toY].p.color != this.color){
				if(this.color == 1 && diffY<=0 || this.color == 0 && diffY>=0){
					this.firstMove = 0;
					// destroy piece
					this.confMove(toX, toY);
				}
			}
		}
	}
}
