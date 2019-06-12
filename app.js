let canvasSize = 600;
let cellSize = canvasSize/8;
let cells = [];

setup = () => {
	createCanvas(canvasSize, canvasSize);
}

draw = () => {
	for(let i = 0; i<8; i++){
		for(let j = 0; j<8; j++){
			let cell = new Cell(i,j);
			cell.show();
			cells.push(cell);
		}
	}
}
