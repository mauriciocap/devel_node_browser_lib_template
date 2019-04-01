// Config file for running Rollup in "normal" mode (non-watch)

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
//A: load from node_modules;

import babel from 'rollup-plugin-babel';
import sourcemaps from 'rollup-plugin-sourcemaps';
//A: for older browsers, keep sourcemaps for coverage

import rollupGitVersion from 'rollup-plugin-git-version'
import json from 'rollup-plugin-json'
import gitRev from 'git-rev-sync'
import pkg from '../package.json'

import fs from 'fs';

let {version} = pkg;
let buildType;

// Skip the git branch+rev in the banner when doing a release build
buildType= process.env.NODE_ENV;
if (buildType!="release") {
	var branch= 'NO_GIT';
	var rev= 'NO_GIT';
	if (fs.existsSync('.git/packed-refs')) {	
		branch = gitRev.branch();
		rev = gitRev.short();
	}
	version += '+' + branch + '.' + rev;
}

const banner = `/* @preserve
 / Esto aparece al principio de todos los archivos en dist/
 / Se configura en build_conf/rollup-config.js
 */
`;

const outro = `
	window.${pkg.name}= exports;
	/* 
	/ Esto aparece al final de todos los archivos en dist/
	/ Se configura en build_conf/rollup-config.js
	/ Puede ser un buen lugar para definir cosas publicas con
	/ window.MINOMBRE = exports;
	*/`;

console.log("Construyendo segun package.json main:", pkg.name);

export default {
	input: 'src/index.js',
	output: [
		{
			file: pkg.main,
			format: 'umd',
			name: pkg.name,
			banner: banner,
			outro: outro,
			sourcemap: 'file'
		},
		{
			file: 'dist/'+pkg.name.toLowerCase()+'-src.esm.js',
			format: 'es',
			banner: banner,
			sourcemap: 'file'
		}
	],
	legacy: true, // Needed to create files loadable by IE8
	plugins: [
	  babel({
      exclude: 'node_modules/**'
    }), 
		sourcemaps(),
		resolve({
			browser: true,
		}),
    commonjs(),
		json(),
		rollupGitVersion()
	]
};
