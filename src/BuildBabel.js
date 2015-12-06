'use strict';
import gulp from 'gulp';
import babel from 'gulp-babel';
import {log, colors} from 'gulp-util';

/**
 * Builds a directory of JavaScript files using Babel and places the files into destination
 * @param {string|string[]} sources The sources to build
 * @param {string} destination The directory to place built files
 * @returns {function} A gulp task function
 */
export default function (sources, destination) {
	return function buildBabel() {
		log(colors.blue('build: starting'));
		gulp.src(sources)
			.pipe(babel())
			.pipe(gulp.dest(destination))
		;
		log(colors.green('build: complete'));
	};
};
