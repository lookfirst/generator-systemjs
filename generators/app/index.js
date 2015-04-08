'use strict';

var yeoman = require('yeoman-generator');
var path = require('path');
var _s = require('underscore.string');

module.exports = yeoman.generators.Base.extend({
	initializing: function() {
		this.sourceRoot(path.join(__dirname, '../../templates/app'));

		this.argument('appname', {type: String, required: false});
		this.appname = this.appname || path.basename(process.cwd());
		this.appname = _s.camelize(_s.slugify(
			_s.humanize(this.appname)));
	},
	writing: {
		files: function() {
			this.template('_editorconfig', '.editorconfig');
			this.template('_gitignore', '.gitignore');
			this.template('_jshintrc', '.jshintrc');
			this.template('_travis.yml', '.travis.yml');
			this.template('gulpfile.js');
			this.template('karma.conf.js');
			this.template('package.json');
			this.template('protractor.conf.js');
			this.template('README.md');
			this.template('system.config.js');
		},
		directories: function() {
			this.directory('src');
			this.directory('test-e2e');
			this.directory('test-unit');
		}
	},
	install: function() {
		this.installDependencies({
			bower: false,
			npm: true,
			skipInstall: this.options['skip-install']
		});
	}
});
