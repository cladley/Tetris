(function(T){

	var windowWidth = window.innerWidth;
	var windowHeight = window.innerHeight;
	var midX = windowWidth / 2;
	var midY = windowHeight / 2;



	var svgCanvas = document.getElementById("svgCanvas");
	svgCanvas.setAttribute('height', windowHeight);
	svgCanvas.setAttribute('width', windowWidth);

	var snapController = Snap(svgCanvas);

	var piece = T.piece_factory.create({
		snapController : snapController
	});

	piece.render();

})(window.tetris = window.tetris || {});