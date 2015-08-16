describe('util helpers', function(){
	var helpers = window.tetris.helpers;

	it('create a 2d array', function(){
		var matrix = helpers.createArrayMatrix(2,2);
		expect(matrix).toBeDefined();
	});

	it('create a 2d array of 5 rows and 6 cols', function(){
		var matrix = helpers.createArrayMatrix(5,6);
		expect(matrix.length).toEqual(5);
		expect(matrix[0].length).toEqual(6);
	});

	
});