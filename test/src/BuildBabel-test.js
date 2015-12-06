'use strict';
import gulpStub from '@mitmaro/js-test-stubs/stubs/gulp';
import gulpUtilStub from '@mitmaro/js-test-stubs/stubs/gulp/util';
import gulpBabelStub from '@mitmaro/js-test-stubs/stubs/gulp/babel';

describe('BuildBabel', () => {
	let babel;
	let stubs;

	beforeEach(() => {
		stubs = {
			gulp: gulpStub(),
			gulpUtil: gulpUtilStub(),
			gulpBabel: gulpBabelStub()
		};

		babel = require('../../src/BuildBabel');

		babel.__Rewire__('gulp', stubs.gulp);
		babel.__Rewire__('babel', stubs.gulpBabel);
		babel.__Rewire__('log', stubs.gulpUtil.log);
		babel.__Rewire__('colors', stubs.gulpUtil.colors);
	});

	it('should read sources', () => {
		let task = babel('sources');
		task();
		expect(stubs.gulp.src).to.be.calledWith('sources');
	});

	it('should source using sources', () => {
		let task = babel(null, 'destinations');
		task();
		expect(stubs.gulp.dest).to.be.calledWith('destinations');
	});
});
