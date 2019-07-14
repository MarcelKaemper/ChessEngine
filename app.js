let canvasSize = 800;
let cellSize = canvasSize/8;

let cells = [[],[],[],[],[],[],[],[]];

let p;
let p1;


preload = () => {
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
	
	p = new Pawn(0,0);
	p1 = new Pawn(1,0);

	background(255);
	redrawAll();
}

redrawAll = () => {
	background(255);
	for(let i = 0; i<8; i++){
		for(let j = 0; j<8; j++){
			cells[i][j].show();
			if(cells[i][j].p != null){
				cells[i][j].p.show();
			}
		}
	}
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
