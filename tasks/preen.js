/*
 * grunt-preen
 * https://github.com/braddenver/grunt-preen
 *
 * Copyright (c) 2013 Brad Denver
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  var preen = require('preen');

  grunt.registerTask('preen', 'Preen bower packages according to preen property of bower.json.', function(preview) {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      preview: false,
      verbose: false,
      directory: grunt.option('directory')
    });

    // merge flags with default options
    for (var attrname in this.flags) { options[attrname] = this.flags[attrname]; }

    // If --debug was specified
    //if (grunt.option('debug'))
      //options.debug = true;

    var done = this.async();
    preen.preen(options, function(){
      grunt.log.writeln('Preen Complete.');
      done();
    });

  });

};
