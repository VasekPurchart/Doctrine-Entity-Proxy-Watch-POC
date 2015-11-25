function osPath(path) {
	return (process.platform === 'win32') ? path.replace(/\//g, '\\') : path;
}

module.exports = function (grunt) {
	grunt.config.set('path.symfony.console.executable', osPath('app/console'));

	grunt.initConfig({
		shell: {
			'php-cache-warmup': {
				command: grunt.config.get('path.symfony.console.executable') + ' cache:warmup',
			},
		},
		watch: {
			'doctrine-entity': {
				files: [
					'src/*Bundle/Entity/*.php',
				],
				tasks: [
					'shell:php-cache-warmup',
				],
			},
		},
	});

	require('load-grunt-tasks')(grunt);

};
