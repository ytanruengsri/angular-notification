module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('compress', ['build', 'concat:js', 'uglify:js']);
    grunt.registerTask('build', ['html2js']);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        src: {
            js: ['*.js'],
            html: ['template/*.html']
        },
        concat: {
            js : {
                src : [
                    'angular-*.js'
                ],
                dest : 'angular-notification.min.js'
            }
        },
        uglify : {
            js: {
                files: {
                    'angular-notification.min.js' : ['angular-notification.min.js']
                }
            }
        },
        html2js: {
            app: {
                options: {
                    base: 'app'
                },
                src: ['<%= src.html %>'],
                dest: 'angular-notification-template.js',
                module: 'yNotificationTemplateModule'
            }
        }
    });
};
