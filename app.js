let canvasSize = 800;
let cellSize = canvasSize/8;
let cells = [];

let rook;

preload = () => {
	rook = loadImage("https://cdn4.iconfinder.com/data/icons/business-and-office-1-10/48/39-512.png");
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
	cells[0].p = "R";
	cells[0].show();
}

draw = () => {

}
