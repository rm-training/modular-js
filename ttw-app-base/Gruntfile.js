module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      options: {
        esversion: 6
      },
      src: ["Gruntfile.js", "public/scripts/*.js"]
    },
    babel: {
      options: {
        sourceMaps: "inline"
      },
      generated: {
        files: [
          {
            expand: true, // enables most dyn. stuff
            cwd: "public/scripts/", // must be a string!
            src: ["*.js"],
            dest: "generated/scripts"
          }
        ]
      }
    },
    copy: {
      generated: {
        files: [
          {
            expand: true,
            cwd: "public/",
            src: ["**/*", "!scripts/*"],
            dest: "generated/"
          }
        ]
      }
    },
    clean: {
      generated: ["generated"]
    },
    watch: {
      files: ["public/scripts/*.js"],
      tasks: ["generate"],
      options: {
        livereload: 35729,
        spawn: false // faster but error-prone
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("generate", ["jshint", "babel", "copy"]);
  grunt.registerTask("working", ["generate", "watch"]);

  grunt.registerTask("default", ["generate"]);
};
