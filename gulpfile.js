/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are split into several files in the gulp directory
 *  because putting it all here was too long
 */

'use strict';

var fs = require('fs');
var gulp = require('gulp');

var $ = require('gulp-load-plugins')();
var packageJson = require('./package.json');
var swPrecache = require('sw-precache');
var path = require('path');


/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */



fs.readdirSync('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});



/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['clean'], function () {
  gulp.start('build');
});

gulp.task('generate-service-worker', function(callback) {
  generateServiceWorkerFileContents('./src', true, function(error, serviceWorkerFileContents) {
    if (error) {
      return callback(error);
    }
    fs.writeFile(path.join('service-worker.js'), serviceWorkerFileContents, callback);
  });
});


function callback(error){
  console.log("got an error : " +error);
}

function generateServiceWorkerFileContents(rootDir, handleFetch, callback) {
  var config = {
    cacheId: packageJson.name,
    handleFetch: handleFetch,
    logger: console.log,
    staticFileGlobs: [rootDir + '/**/*.{js,html,css,png,jpeg,gif,svg,eot,ttf,woff}'],
    stripPrefix: rootDir
  };

  swPrecache(config, callback);
}

