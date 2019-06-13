let canvasSize = 800;
let cellSize = canvasSize/8;
let cells = [];

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
			cells.push(cell);
		}
	}
	standardPosition();
	for(let i = 0; i<cells.length; i++){
		cells[i].show();
	}
}

draw = () => {
}

standardPosition = () => {
	cells[0].p = "R"
	cells[1].p = "K"
	cells[2].p = "B"
	cells[3].p = "Q"
	cells[4].p = "E"
	cells[5].p = "B"
	cells[6].p = "K"
	cells[7].p = "R"
	cells[8].p = "P"
	cells[9].p = "P"
	cells[10].p = "P"
	cells[11].p = "P"
	cells[12].p = "P"
	cells[13].p = "P"
	cells[14].p = "P"
	cells[15].p = "P"
}
