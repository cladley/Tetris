(function(T){

	var helpers = T.helpers;

	function Board(rows, cols){
		this.rows = rows || 20;
		this.cols = cols || 9;
		this.matrix = helpers.createArrayMatrix(this.rows, this.cols);
		this.shadow_matrix = helpers.createArrayMatrix(this.rows, this.cols);
	}

	Board.prototype = {
		constructor: Board,
		rows : function(){
			return this.rows;
		},
		cols : function(){
			return this.cols;
		}
	};

	T.Board = Board;


})(window.tetris = window.tetris || {});