# grunt-preen

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
There is no need to add preen to the data object passed into `grunt.initConfig()` as there are currrently no configurable options for grunt-preen. Instead configuration is done by adding a preen property to your projects `bower.json` file as explained [here](https://github.com/BradDenver/Preen#configuration).


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

#### Custom Options
The only option/target currently provided by preen is the `preen:preview` target that logs what actions would have been taken if preen was run.

```shell
grunt preen:preview
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
* Aug 9, 2013 v1.0.0
  preen and grunt-preen are ready to roll
