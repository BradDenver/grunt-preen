# grunt-preen [![Analytics](https://ga-beacon.appspot.com/UA-40041520-3/grunt-preen/readme)](https://github.com/igrigorik/ga-beacon)

> a grunt task plugin to run preen

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-preen --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-preen');
```

## The "preen" task

### Overview
Configuration is done by adding a preen property to your projects `bower.json` file as explained [here](https://github.com/BradDenver/Preen#configuration). You can also add arguments via the data object passed into `grunt.initConfig()`.


### Usage Examples

#### Default Options
In this example, preen is added to the default task in `Gruntfile.js`.

```js
grunt.registerTask('default', ['myTask', 'preen']);
```
or it can be runn via cli

```shell
grunt preen
```

#### Custom Targets
The only targets currently provided by preen are the `preen:preview` target that logs what actions would have been taken if preen was run

```shell
grunt preen:preview
```

and `preen:verbose` that logs all actions as they are run

```shell
grunt preen:verbose
```

#### Custom Options
The only option currently provided by preen is the `directory` option. This allows you to override bower's default directory (or the one set in .bowerrc). This can be useful when using preen as part of your build pipeline. This can be added via the data object passed to `grunt.initConfig()`

```javascript

options: {
	directory: '.tmp/public/bower/files'
}

```

or it can be passed via the cli

```shell
grunt preen --directory ./tmp/public/bower/files
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
* Aug 9, 2013 v1.0.0
  preen and grunt-preen are ready to roll
* Nov 11, 2014 v1.1.0
  * updated to accept both preview and verbose options
* Jan 30, 2015 v1.2.0
  * updated to accept new directory option
