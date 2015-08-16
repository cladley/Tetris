(function(T){

	var createArrayMatrix = function(rows, cols){
		var matrix = [];
		for(var i = 0; i < rows; i++){
			matrix.push(new Array(cols));
		}
		return matrix;
	}



	T.helpers = {
		createArrayMatrix : createArrayMatrix
	};

})(window.tetris = window.tetris || {});