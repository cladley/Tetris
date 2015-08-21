(function(T){

    var globals = T.globals;

    T.block = {
        width : globals.block_width,
        height: globals.block_height,
        create : function(colour){
            var blk = Object.create(this);
            blk.colour = colour;
            return blk;
        }
    };

    T.BLANK_BLOCK = {
        width: globals.block_width,
        height: globals.block_height,
        colour : 'white'
    };
	
})(window.tetris = window.tetris || {});
