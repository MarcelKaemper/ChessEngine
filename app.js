let canvasSize = 800;
let cellSize = canvasSize/8;

let cells = [[],[],[],[],[],[],[],[]];

let pawnImg;

preload = () => {
		pawnImg = loadImage("https://upload.wikimedia.org/wikipedia/commons/c/cd/Chess_pdt60.png");
}


setup = () => {
	createCanvas(canvasSize, canvasSize);

	for(let i = 0; i<8; i++){
		for(let j = 0; j<8; j++){
			let cell = new Cell(j,i);
			cell.show();
			cells[i][j] = cell;
		}
	}

	let p = new Pawn(0,1);
}

draw = () => {
}

mousePressed = () => {
	if(mouseY > 800 || mouseY < 0 || mouseX > 800 || mouseX < 0){
		return;
	}
	let row = Math.floor(mouseY/cellSize);
	let col = Math.floor(mouseX/cellSize);
}

mouseReleased = () => {
	if(mouseY > 800 || mouseY < 0 || mouseX > 800 || mouseX < 0){
		return;
	}

	let row = Math.floor(mouseY/cellSize);
	let col = Math.floor(mouseX/cellSize);
}
