/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are split into several files in the gulp directory
 *  because putting it all here was too long
 */

'use strict';

var fs = require('fs');
var gulp = require('gulp');
/****************/
var packageJson = require('./package.json');
var path = require('path');
var swPrecache = require('sw-precache');
/****************/

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


/***************/
function generateServiceWorkerFileContents(rootDir, handleFetch, callback) {
  var config = {
    cacheId: packageJson.name,
    handleFetch: handleFetch,
    logger: console.log,
    dynamicUrlToDependencies: {
      './': [path.join(rootDir, 'views', 'index.ejs')],
    },
    staticFileGlobs: [
      rootDir + '/stylesheets/**.css',
      rootDir + '/views/**.html',
      rootDir + '/images/**.*',
      rootDir + '/bower_components/**/**.js',
      rootDir + '/libs/.js',
      rootDir + '/**.js'
    ],
    stripPrefix: path.join(rootDir, path.sep)
  };

  swPrecache(config, callback);
}

gulp.task('build', function(callback) {
  generateServiceWorkerFileContents('./app', true, function(error, serviceWorkerFileContents) {
    if (error) {
      return callback(error);
    }
    fs.writeFile(path.join('service-worker.js'), serviceWorkerFileContents, callback);
  });
});
