let canvasSize = 800;
let cellSize = canvasSize/8;
let cells = [[],[],[],[],[],[],[],[]];

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

mousePressed = () => {
	console.log(mouseX,mouseY);
}

mouseReleased = () => {
	console.log(mouseX,mouseY);
}

stdPos = () => {
	let firstRow = ["R","K","B","Q","E","B","K","R"];
	let secondRow = ["P","P","P","P","P","P","P","P"];
	for(let i = 0; i<8; i++){
		if(i==0){
			for(let j = 0; j<8; j++){
				cells[i][j].p = firstRow[j];
			}
		}else if(i==1){
			for(let j = 0; j<8; j++){
				cells[i][j].p = secondRow[j];
			}
		}else if(i==6){
			for(let j = 0; j<8; j++){
				cells[i][j].p = secondRow[j];
			}
		}else if(i==7){
			for(let j = 0; j<8; j++){
				cells[i][j].p = firstRow[j];
			}
		}
	}
}
