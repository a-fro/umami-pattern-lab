/* globals require */

(function () {
  'use strict';

  var gulp = require('gulp-help')(require('gulp'));

  var localConfig = {
    cssConfig: {
      includePaths: [
        'node_modules/breakpoint-sass/stylesheets/',
        'node_modules/singularitygs/stylesheets/',
        'node_modules/modularscale-sass/stylesheets',
        'node_modules/sass-tools/lib',
        // 'node_modules/singularity-extras/stylesheets/',
        'node_modules/compass-mixins/lib/',
        'node_modules/float-label-css/scss/',
        './node_modules'
      ]
    },
    browserSync: {
      // We want the local static server for Pattern Lab to serve from the same place as Drupal does: the `./web` folder in the base of the repo (which is `../../../` from here). This allows us to load JS libraries like drupal.js & jQuery.js from the `/core` directory).
      startPath: 'themes/custom/umami_pl/pattern-lab/public/',
      baseDir: '../../../',
      openBrowserAtStart: true
    }
  };

  require('emulsify-gulp')(gulp, localConfig);

})();
