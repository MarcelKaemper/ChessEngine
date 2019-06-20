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
	king = loadImage(JSON.parse(pieces).K);
	queen = loadImage(JSON.parse(pieces).Q);
	pawn = loadImage(JSON.parse(pieces).P);
	bishop = loadImage(JSON.parse(pieces).B);
	knight = loadImage(JSON.parse(pieces).N);
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
	if(mouseY > 800 || mouseY < 0 || mouseX > 800 || mouseX < 0){
		return;
	}
	let row = Math.floor(mouseY/cellSize);
	let col = Math.floor(mouseX/cellSize);
	moveT = [row,col];
}

mouseReleased = () => {
	if(mouseY > 800 || mouseY < 0 || mouseX > 800 || mouseX < 0){
		return;
	}

	let row = Math.floor(mouseY/cellSize);
	let col = Math.floor(mouseX/cellSize);
	moveD = [row, col];

	let toMove = cells[moveT[0]][moveT[1]];
	let moveTo = cells[moveD[0]][moveD[1]];
	let moveDistance = [moveT[0]-moveD[0],moveT[1]-moveD[1]];

	if(toMove.p != null){
		if(toMove.p == "P"){
			if(moveTo.p == null){
				console.log(moveDistance);
				console.log(toMove);
				if((moveDistance[0] == 1 && toMove.color == 1 && moveDistance[1] == 0)
					|| moveDistance[0] == -1 && toMove.color == 2 && moveDistance[1] == 0){
					cells[moveD[0]][moveD[1]].p = toMove.p;
					cells[moveT[0]][moveT[1]].p = null;

					cells[moveD[0]][moveD[1]].color = toMove.color;
					cells[moveT[0]][moveT[0]].color = 0;
				}
			// }else{
			// 	console.log("else");
			// 	console.log(moveDistance);
			// 	if(moveDistance[1] == -1 || moveDistance[1] == 1){
			// 		console.log("Yeet");
			// 	}
			}
		}
	}

	refresh();
}

stdPos = () => {
	let firstRow = ["R","N","B","Q","K","B","N","R"];
	let secondRow = ["P","P","P","P","P","P","P","P"];
	for(let i = 0; i<8; i++){
		for(let j = 0; j<8; j++){
			if(i==0){
				cells[i][j].p = firstRow[j];
				cells[i][j].color = 2;
			}else if(i==1){
				cells[i][j].p = secondRow[j];
				cells[i][j].color = 2;
			}else if(i==6){
				cells[i][j].p = secondRow[j];
				cells[i][j].color = 1;
			}else if(i==7){
				cells[i][j].p = firstRow[j];
				cells[i][j].color = 1;
			}else{
				cells[i][j].p = null;
				cells[i][j].color = 0;
			}
		}
	}
	refresh();
}
