'use strict';

var path = require('path');
var os = require('os');

var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('systemjs:app', function() {
	before(function(done) {
		helpers.run(path.join(__dirname, '../generators/app'))
			.inDir(path.join(os.tmpdir(), './tmp'))
			.withOptions({'skip-install': true})
			.on('end', done);
	});

	it('creates app files', function() {
		assert.file([
			'.editorconfig',
			'.gitignore',
			'.jshintrc',
			'.travis.yml',
			'.travis.chrome.sh',
			'gulpfile.js',
			'karma.conf.js',
			'package.json',
			'protractor.conf.js',
			'README.md'
		]);
	});

	it('creates src directory', function() {
		assert.file([
			'src/app/todo/controllers/todoCtrl.js',
			'src/app/todo/directives/todoEscape.js',
			'src/app/todo/directives/todoFocus.js',
			'src/app/todo/services/todoStorage.js',
			'src/app/todo/todo.js',
			'src/app/todo/todo.tpl.html',
			'src/app/todo/todoModule.js',
			'src/app/app.js',
			'src/app/routes.json',
			'src/index.tpl.html',
			'src/system.config.js'
		]);
	});

	it('creates test directories', function() {
		assert.file([
			'test-e2e/app/todo/todo.js',
			'test-unit/app/todo/controllers/todoCtrl.spec.js',
			'test-unit/app/todo/directives/todoEscape.spec.js',
			'test-unit/app/todo/directives/todoFocus.spec.js'
		]);
	});
});
