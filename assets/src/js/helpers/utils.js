(function(T){

	var createArrayMatrix = function(rows, cols){
		var matrix = [];
		for(var i = 0; i < rows; i++){
			matrix.push(new Array(cols));
		}
		return matrix;
	};

	var printMatrix = function(matrix){
		var result = "";
		var rowString = "";

		for(var row = 0; row < matrix.length; row++){
			rowString = "";
			for(var col = 0; col < matrix[row].length; col++){
				rowString += "[" + matrix[row][col] + "]";
			}
			rowString += "\n";
			result += rowString;
		}
		console.log(result);
	};

	var rotateMatrix = function(oldMatrix){
		var newMatrix = createArrayMatrix(oldMatrix[0].length, oldMatrix.length);
		var newColumn,
		newRow = 0;

		for(var oldColumn = oldMatrix[0].length - 1; oldColumn >= 0; oldColumn--){
			newColumn = 0;
			for(var oldRow = 0; oldRow < oldMatrix.length; oldRow++){
				newMatrix[newRow][newColumn] = oldMatrix[oldRow][oldColumn];
				newColumn++;
			}
			newRow++;
		}
		return newMatrix;
	};

	T.helpers = {
		createArrayMatrix : createArrayMatrix,
		printMatrix       : printMatrix,
		rotateMatrix      : rotateMatrix
	};

})(window.tetris = window.tetris || {});