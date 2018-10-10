/* globals module */

((() => {
  const themeDir = './';
  const paths = {
    js: `${themeDir}/components/_patterns/00-base/global/*.js`,
    styleguide_js: [
      `${themeDir}/js/**/*.js`,
      `${themeDir}/components/_patterns/**/*.js`,
    ],
    dist_js: `${themeDir}/dist`,
    sass: themeDir,
    img: `${themeDir}/images`,
    dist_css: `${themeDir}/dist/css`,
    dist_img: `${themeDir}/dist/img`,
    pattern_lab: `${themeDir}/pattern-lab/public`,
  };

  module.exports = {
    cssConfig: {
      includePaths: [
        'node_modules/breakpoint-sass/stylesheets/',
        'node_modules/singularitygs/stylesheets/',
        'node_modules/modularscale-sass/stylesheets',
        'node_modules/sass-tools/lib',
        // 'node_modules/singularity-extras/stylesheets/',
        'node_modules/compass-mixins/lib/',
        './node_modules'
      ]
    },
  };
}))();
/* globals require, process */
