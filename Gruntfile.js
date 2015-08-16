module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    babel: {
      es6: {
        files: [{
          expand: true,
          src: ['**/*.es6'],
          ext: '.js'
        }]
      },
      options: {
        optional: 'runtime'
      }
    },
    watch: {
      babel: {
        files: ['**/*.es6'],
        tasks: ['babel']
      }
    }

  });

  grunt.registerTask('default', ['babel']);

  grunt.loadNpmTasks('grunt-contrib-watch');
};
