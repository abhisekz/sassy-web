module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.initConfig({
        uglify : {
            my_target : {
                files : {
                    'assets/dist/js/script.js' : ['assets/components/js/*.js']
                }
            }
        },
        compass : {
            dev : {
                options : {
                    config : 'config.rb'
                }
            }
        },
        watch : {
            options : { livereload : true },
            scripts : {
                files : ['assets/components/js/*.js'],
                tasks : ['uglify']
            },
            sass : {
                files : ['assets/components/sass/*.scss'],
                tasks : ['compass:dev']
            },
            html : {
                files : ['*.html']
            }

        }
    });
    grunt.registerTask('default', 'watch');
}