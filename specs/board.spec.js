describe("Board", function(){
	
	var tetris = window.tetris;

	it("create a new board", function(){
		var board = new tetris.Board();
		expect(board).toBeDefined();
	});

	it("create a 2d array", function(){
		var board = new tetris.Board();
		expect(board.matrix).toBeDefined();
		expect(board.shadow_matrix).toBeDefined();
	});

	it("create a 2d array of default size = rows: 20, cols: 9", function(){
		var board = new tetris.Board();
		expect(board.matrix.length).toEqual(20);
		expect(board.matrix[0].length).toEqual(9);
	});

	it("create a 2d array of size rows: 6, cols: 9", function(){
		var board = new tetris.Board(6, 9);
		expect(board.matrix.length).toEqual(6);
		expect(board.matrix[0].length).toEqual(9);
	});
});