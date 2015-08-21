
module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		config : {
			srcDir : './assets/src',
			distDir : './assets/dist',
			specDir : './specs',

			js : {
				fileList : [
					'<%=config.srcDir%>/js/helpers/utils.js',
					'<%=config.srcDir%>/js/global.js',
					'<%=config.srcDir%>/js/block.js',
					'<%=config.srcDir%>/js/board.js',
					'<%=config.srcDir%>/js/piece.js',
					'<%=config.srcDir%>/js/main.js'
				],

				distDir : '<%=config.distDir%>/js/',
				distFile : 'main.js'
			}
		},

		watch : {
			js : {
				files : ['<%=config.js.fileList%>', '<%=config.specDir%>/**/*.js'],
				tasks : ['jasmine','uglify']
			}
		},

		/**
	 	 * Uglify
		 * https://github.com/gruntjs/grunt-contrib-uglify
		 * Minifies and concatinates your JS
		 * Also creates source maps
		 */
		uglify: {
			options: {
				
				compress: { // set to false (replace this object) to turn off compression
					drop_console: false
				},

				beautify: true, // beautify: beautify your code for debugging/troubleshooting purposes
				// report: 'gzip', // report: Show file size report
				sourceMap: '<%=config.js.distDir%><%=config.js.distFile%>.map',
				sourceMappingURL: '/<%=config.js.distFile%>.map',
			},
			js: {
				nonull: true,
				src: '<%=config.js.fileList%>',
				dest: '<%=config.js.distDir%><%=config.js.distFile%>'
			}
		},

		jasmine : {
			src : '<%=config.js.fileList%>',
			options : {
				specs : '<%=config.specDir%>/**/*spec.js'
				
			}
		}
	});


	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('dev', ['watch']);
	grunt.registerTask('test', 'jasmine');
	grunt.registerTask('build', ['uglify']);
};