module.exports = function(grunt) {

	grunt.initConfig({
		
		sass: {
            dist: {
                options: {
                    style: 'compressed',
                    sourcemap: 'none'
                },
                files: {
                    'files/css/style.css':'sass/style.scss'
                }
            }
        },

		watch: {
			sass: {
				files: ['sass/*.scss'],
				tasks: ['sass']
			}			
		},

		uglify: {
			my_target: {
			  files: {
				'files/js/scripts.js': ['files/js/scripts.js']
			  }
			}
		},

		concat: {
			options: {
			  separator: ';\n',
			},
			dist: {
			  src: ['bower_components/jquery/dist/jquery.min.js', 'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js'],
			  dest: 'files/js/scripts.js',
			},
		}
		
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['sass', 'concat', 'uglify']);

};