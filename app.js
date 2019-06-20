let canvasSize = 800;
let cellSize = canvasSize/8;
let cells = [[],[],[],[],[],[],[],[]];

let moveT;
let moveD;

let rook;
let king;
let queen;
let pawn;
let bishop;
let knight;

preload = () => {
	rook = loadImage(JSON.parse(pieces).R);
	king = loadImage(JSON.parse(pieces).E);
	queen = loadImage(JSON.parse(pieces).Q);
	pawn = loadImage(JSON.parse(pieces).P);
	bishop = loadImage(JSON.parse(pieces).B);
	knight = loadImage(JSON.parse(pieces).K);
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
	stdPos();
	for(let i = 0; i<cells.length;i++){
		for(let j = 0; j<cells[i].length; j++){
			cells[i][j].show();
		}
	}
}

draw = () => {
}

refresh = () => {
	for(let i = 0; i<cells.length;i++){
		for(let j = 0; j<cells[i].length; j++){
			cells[i][j].show();
		}
	}
}

mousePressed = () => {
	let row = Math.floor(mouseY/cellSize);
	let col = Math.floor(mouseX/cellSize);
	moveT = [row,col];
}

mouseReleased = () => {
	let row = Math.floor(mouseY/cellSize);
	let col = Math.floor(mouseX/cellSize);
	moveD = [row, col];

	let toMove = cells[moveT[0]][moveT[1]].p;
	let moveTo = cells[moveD[0]][moveD[1]].p;

	if(toMove != null){
		if(moveTo == null){
			if(toMove == "P"){
				if(moveT[0]-moveD[0] <= 1){
					cells[moveT[0]][moveT[1]].p = null;
					cells[moveD[0]][moveD[1]].p = toMove;
				}
			}
		}
	}

	refresh();
}

stdPos = () => {
	let firstRow = ["R","N","B","Q","K","B","N","R"];
	let secondRow = ["P","P","P","P","P","P","P","P"];
	for(let i = 0; i<8; i++){
		if(i==0){
			for(let j = 0; j<8; j++){
				cells[i][j].p = firstRow[j];
				cells[i][j].color = 2;
			}
		}else if(i==1){
			for(let j = 0; j<8; j++){
				cells[i][j].p = secondRow[j];
				cells[i][j].color = 2;
			}
		}else if(i==6){
			for(let j = 0; j<8; j++){
				cells[i][j].p = secondRow[j];
				cells[i][j].color = 1;
			}
		}else if(i==7){
			for(let j = 0; j<8; j++){
				cells[i][j].p = firstRow[j];
				cells[i][j].color = 1;
			}
		}
	}
}
