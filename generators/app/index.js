'use strict';

var yeoman = require('yeoman-generator');
var path = require('path');

module.exports = yeoman.generators.Base.extend({
	initializing: function() {
		this.sourceRoot(path.join(__dirname, '../../templates/app'));

		this.argument('appname', {type: String, required: false});
		this.appname = this.appname || path.basename(process.cwd());
		this.appname = this._.camelize(this._.slugify(
			this._.humanize(this.appname)));
	},
	writing: {
		files: function() {
			this.template('_editorconfig', '.editorconfig');
			this.template('_gitignore', '.gitignore');
			this.template('_jshintrc', '.jshintrc');
			this.template('_travis.yml');
			this.template('_travis.chrome.sh', '.travis.chrome.sh');
			this.template('gulpfile.js');
			this.template('karma.conf.js');
			this.template('package.json');
			this.template('protractor.conf.js');
			this.template('README.md');
		},
		directories: function() {
			this.directory('src');
			this.directory('test-e2e');
			this.directory('test-unit');
		}
	},
	install: function() {
		this.npmInstall();
	}
});
