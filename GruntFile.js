module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-html2js');
    grunt.registerTask('build', ['html2js']);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        src: {
            js: ['*.js'],
            html: ['template/*.html']
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
