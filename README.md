# MitMaro's Gulp Babel Build Task

A reusable gulp task for a Babel build.

## Usage

    var gulp = require('gulp');
    var buildBabel = require('@mitmaro/gulp-build-babel');
    
    gulp.task('build:babel', buildBabel('src/**/**.js', 'lib/'));

## License

This project is released under the ISC license. See [LICENSE](LICENSE).
