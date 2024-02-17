function cellCheck(cellId) {
	var cell = document.getElementById(cellId);
	if (cell.innerHTML == ".") {
		return 0;
	}
  
	var row = cellId.charAt(0);
	var col = cellId.charAt(2);

  	//Left
	if (col > 1) {
		var leftCellId = row + 'x' + (parseInt(col) - 1);
		var leftCell = document.getElementById(leftCellId);
		if (leftCell.innerHTML == '.') {
			switchValues(cell, leftCell);
		}
	}

	//Right
	if (col < 4) {
		var rightCellId = row + 'x' + (parseInt(col) + 1);
		var rightCell = document.getElementById(rightCellId);
		if (rightCell.innerHTML == '.') {
			switchValues(cell, rightCell);
		}
	}

	//Above
	if (row > 1) {
		var aboveCellId = String.fromCharCode(row.charCodeAt(0) - 1) + 'x' + col;
		var aboveCell = document.getElementById(aboveCellId);
		if (aboveCell.innerHTML == '.') {
			switchValues(cell, aboveCell);
		}
	}

	//Below
	if (row < 4) {
		var belowCellId = String.fromCharCode(row.charCodeAt(0) + 1) + 'x' + col;
		var belowCell = document.getElementById(belowCellId);
		if (belowCell.innerHTML == '.') {
			switchValues(cell, belowCell);
		}
	}

	if (isSolved()) {
		document.getElementById("container").style.backgroundColor = "#00ff2a";
	}
	else {
		document.getElementById("container").style.backgroundColor = "#c7c7c7";
	}
}

function switchValues(cell1, cell2) {
	var tempValue = cell1.innerHTML;
	cell1.innerHTML = cell2.innerHTML;
	cell2.innerHTML = tempValue;
}

function reset() {
	document.getElementById("1x1").innerHTML = 1;
	document.getElementById("1x2").innerHTML = 2;
	document.getElementById("1x3").innerHTML = 3;
	document.getElementById("1x4").innerHTML = 4;
	document.getElementById("2x1").innerHTML = 5;
	document.getElementById("2x2").innerHTML = 6;
	document.getElementById("2x3").innerHTML = 7;
	document.getElementById("2x4").innerHTML = 8;
	document.getElementById("3x1").innerHTML = 9;
	document.getElementById("3x2").innerHTML = 10;
	document.getElementById("3x3").innerHTML = 11;
	document.getElementById("3x4").innerHTML = 12;
	document.getElementById("4x1").innerHTML = 13;
	document.getElementById("4x2").innerHTML = 14;
	document.getElementById("4x3").innerHTML = 15;
	document.getElementById("4x4").innerHTML = '.';
}

function scramble() {
	let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, '.'];
	for (let i = numbers.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[numbers[i], numbers[j]] = [numbers[j], numbers[i]];
	}

	document.getElementById("1x1").innerHTML = numbers[0];
	document.getElementById("1x2").innerHTML = numbers[1];
	document.getElementById("1x3").innerHTML = numbers[2];
	document.getElementById("1x4").innerHTML = numbers[3];
	document.getElementById("2x1").innerHTML = numbers[4];
	document.getElementById("2x2").innerHTML = numbers[5];
	document.getElementById("2x3").innerHTML = numbers[6];
	document.getElementById("2x4").innerHTML = numbers[7];
	document.getElementById("3x1").innerHTML = numbers[8];
	document.getElementById("3x2").innerHTML = numbers[9];
	document.getElementById("3x3").innerHTML = numbers[10];
	document.getElementById("3x4").innerHTML = numbers[11];
	document.getElementById("4x1").innerHTML = numbers[12];
	document.getElementById("4x2").innerHTML = numbers[13];
	document.getElementById("4x3").innerHTML = numbers[14];
	document.getElementById("4x4").innerHTML = numbers[15];
}

function isSolved() {
	let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, '.'];
	let array = [document.getElementById("1x1").innerHTML,
		document.getElementById("1x2").innerHTML,
		document.getElementById("1x3").innerHTML,
		document.getElementById("1x4").innerHTML,
		document.getElementById("2x1").innerHTML,
		document.getElementById("2x2").innerHTML,
		document.getElementById("2x3").innerHTML,
		document.getElementById("2x4").innerHTML,
		document.getElementById("3x1").innerHTML,
		document.getElementById("3x2").innerHTML,
		document.getElementById("3x3").innerHTML,
		document.getElementById("3x4").innerHTML,
		document.getElementById("4x1").innerHTML,
		document.getElementById("4x2").innerHTML,
		document.getElementById("4x3").innerHTML,
		document.getElementById("4x4").innerHTML];
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] != array[i]) {
			return false;
		}
	}
	return true;
}