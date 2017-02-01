



module.exports = function(grunt) {

	'use strict';

	grunt.loadNpmTasks('grunt-contrib-pug');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');


	

	grunt.initConfig({

		// jshint: {

		// }
		concat: {
	    	options: {
	      		separator: '\n\n',
	    	},
	    	dist: {
	      		src: [
	      			// Add all the state files here
	      			'src/states/main-state.js', 

	      			'src/main.js'
	      		],
	      		dest: 'dist/scripts.js',
	    	},
	  	},
		pug: {
			default: {
			    files: {
			      	'dist/index.html': 'src/index.pug'
			    }
		    }
		},
		connect: {
		    server: {
		      	options: {
		            hostname: '*',
		            // hostname: '<%= grunt.config.get("ip") %>',
		            port: 3000,
		            base: 'dist/',
		            appName: 'open',
		            open: true,
		            livereload: false,
		            keepalive: true
		        }
		    }
		}
	});

	grunt.registerTask('default', ['pug:default', 'concat', 'connect:server']);
};