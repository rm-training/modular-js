module.exports = function(grunt) {
	var express = require('express');
	grunt.registerTask('server', 'static file dev server', function() {
		// tell grunt this task is asynchronous
		const done = this.async();

		const app = express();
		const port = grunt.config.get('server.port') || 8000;
		const webRoot = grunt.config.get('server.base') || 'dist';

		app.use(express.static('' + (process.cwd()) + '/' + webRoot));

		app.listen(port);

		grunt.log.writeln(
			`Starting express server in "${webRoot}" at http://localhost:${port}`
		);

		return app;
	});

}
