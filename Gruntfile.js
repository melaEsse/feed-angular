'use strict';


module.exports = function(grunt) { 

	grunt.initConfig({ 

		pkg : grunt.file.readJSON('package.json'),

		watch : {

			options: {

		     	livereload: true,
		     	spawn: false

		    },

		    sass : {

		    	files : ['scss/**/*.scss'],
		    	tasks  : ['sass:dev'] 

		    },

			livereload : {

				files : ['css/*.css', 'js/*js'],
    			options : { 

    				livereload: true,
    				spawn: false

    			}

			}

		},

		sass : {

			dev : {

				options : { style : ['compact'] },

				files : { 'css/style.css' : 'scss/style.scss' }


			},

			pro : {

				options : { style : ['compressed'] },

				files : { 'css/style.css' : 'scss/style.scss' }

			}


	    }


	});

	// Load the plugin
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');

	// Default task.
  	grunt.registerTask('dev', ['sass:dev', 'watch']);
  	grunt.registerTask('pro', ['sass:pro']);


};