(function(T){

	var globals = T.globals;
	var helpers = T.helpers;

	var SQUARE_MATRIX = [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]
    ];

    var T_MATRIX = [
    	[0,1,0],
    	[1,1,1],
    	[0,0,0]
    ];

    var LINE_MATRIX = [
    	[1,1,1,1]
    ];

    var L_MATRIX = [
    	[1, 0, 0],
    	[1, 1, 1]
    ];

    var Z_MATRIX = [
    	[1, 1, 0],
    	[0, 1, 1]
    ];


    var piece = {
    	create : function(matrix, startX, startY, snapController){
    		var pce = Object.create(this);
    		pce.matrix = matrix;
    		pce.xPos = startX || 0;
    		pce.yPos = startY || 0;
    		pce.centerX = pce.xPos + ((pce.matrix.length * globals.block_width) / 2);
    		pce.centerY = pce.yPos + ((pce.matrix[0].length * globals.block_height) / 2);	
    	
    		pce.snapController = snapController;
    		pce.blockGroup = pce.snapController.g();

    		return pce;
    	},
    	render : function(){
    		for(var row = 0; row < this.matrix.length; row++){
				var currentY = (globals.block_height * row) + this.yPos;
				for(var col = 0; col < this.matrix[row].length; col++){
					var currentX = (globals.block_width * col) + this.xPos;
					if(this.matrix[row][col] != 0){
						var b = T.block.create('green');
						this.renderBlock(currentX, currentY, b);
					}else{
						this.renderBlock(currentX,currentY, T.BLANK_BLOCK);
					}
				}
			}
    	},
    	renderBlock : function(xPos, yPos, block){
			var _this = this;
			var b = this.snapController.rect(xPos, yPos, block.width, block.height);
			b.attr({
				stroke : 'black',
				fill : block.colour
			});

			b.click(function(){
				_this.rotate();
			});

			this.blockGroup.add(b);
		},
		rotate : function(){
			this.matrix = helpers.rotateMatrix(this.matrix);
			this.rotateBlockGroup();
		},
		rotateBlockGroup: function(){
			var matrixObj = this.blockGroup.transform().localMatrix.split();
			var angle = matrixObj.rotate + 90;
			var transformString = 'R' + angle;
			this.blockGroup.transform(transformString);
		}
    };





    // Create a random piece if it is not specified
    // Picker a random colour. 
    // Loop through matrix and create a new block with colour
    // for a "fill" positon and add the BLOCK_BLANK for an 
    // "empty" position
    var factory = {
    	create : function(options){
    		if(options.type){
    			return piece.create(this.getType(type), options.snapController)
    		}
    		//if(type) return piece.create(this.getType(type));
    		return piece.create(this.getType(this.getRandom()),200,200, options.snapController);
    	},
    	getType : function(type){
    		var matrix = this.piecetypes[type];
    		if(matrix === undefined){
    			throw new Error('Unknown type');
    		}
    		
    		return matrix;
    	},
    	getRandom : function(){
    		debugger;
            var result;
            var count = 0;
            for (var prop in this.piecetypes){
                if (Math.random() < 1/++count)
                    result = prop;
            }
            console.log(result);
        	return result;      
        },
    	piecetypes : {
    		'square' : SQUARE_MATRIX,
    		'line'   : LINE_MATRIX,
    		't'      : T_MATRIX,
    		'z'      : Z_MATRIX,
    		'l'      : L_MATRIX  
    	}
    };


    T.piece_factory = factory;


})(window.tetris = window.tetris || {});