let canvasSize = 832;
let cellSize = (canvasSize-32)/8;

let cells = [[],[],[],[],[],[],[],[]];

let p;
let p1;

let toMove;


preload = () => {
}


setup = () => {
	// plus 32 on y axis to create room for the letters
	createCanvas(canvasSize, canvasSize+32);

	for(let i = 0; i<8; i++){
		for(let j = 0; j<8; j++){
			let cell = new Cell(j,i);
			cell.show();
			cells[i][j] = cell;
		}
	}
	
	p = new Pawn(0,0);
	p1 = new Pawn(1,0);

	background(255);
	redrawAll();
}

redrawAll = () => {
	background(255);
	for(let i = 0; i<8; i++){
		for(let j = 0; j<8; j++){
			cells[i][j].show().then(() => {
				if(cells[i][j].p != null){
					cells[i][j].p.show();
				}
			});
		}
	}
	let x = ["a","b","c","d","e","f","g","h"];
	fill(0);
	textSize(32);
	for(let i = 7; i>=0; i--){
		text((i+1).toString(),0,100*(8-i)-32);
		text(x[7-i],100*(8-i)-32, 832);
	}
}

draw = () => {
}

mousePressed = () => {
	if(mouseY > 800 || mouseY < 0 || mouseX > 800 || mouseX < 0){
		return;
	}
	let col = Math.floor(mouseX/cellSize);
	let row = Math.floor(mouseY/cellSize);

	toMove = [col,row];
}

mouseReleased = () => {
	if(mouseY > 800 || mouseY < 0 || mouseX > 800 || mouseX < 0){
		return;
	}

	let row = Math.floor(mouseY/cellSize);
	let col = Math.floor(mouseX/cellSize);

	cells[toMove[0]][toMove[1]].p.move(col,row);
	toMove = [];
}
