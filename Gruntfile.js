/*
 * grunt-preen
 * https://github.com/braddenver/grunt-preen
 *
 * Copyright (c) 2013 Brad Denver
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Configuration to be run (and then tested).
    preen: {
      options: {
        preview: false
      },
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['preen']);

};
