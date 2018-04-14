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
    host: 'http://127.0.0.1:8888/',
    themeDir,
    paths,
    sassOptions: {
      outputStyle: 'expanded',
      eyeglass: {
        enableImportOnce: false,
      },
    },
    cssConfig: {
      enabled: true,
      src: `${themeDir}/components/_patterns/**/*.scss`,
      dest: `${themeDir}/dist/`,
      flattenDestOutput: true,
      lint: {
        enabled: false,
        failOnError: true,
      },
      sourceComments: false,
      sourceMapEmbed: false,
      outputStyle: 'expanded',
      autoPrefixerBrowsers: [
        'last 2 versions',
        'IE >= 10',
      ],
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
    iconConfig: {
      shape: {
        dimension: {
          maxWidth: 15,
          maxHeight: 15,
        },
        spacing: {
          padding: 10,
        },
      },
      mode: {
        css: {
          bust: false,
          dest: '../../dist',
          prefix: '@mixin sprite-%s',
          render: {
            scss: {
              dest: '../components/_patterns/01-atoms/04-images/icons/_icon_sprite.scss',
              template: 'node_modules/emulsify-gulp/gulp-tasks/svg-icons/sprite.scss.handlebars',
            },
          },
        },
      },
    },
    patternLab: {
      enabled: true,
      configFile: `${themeDir}pattern-lab/config/config.yml`,
      watchedExtensions: (['twig', 'json', 'yaml', 'yml', 'md', 'jpg', 'jpeg', 'png']),
      scssToYAML: [
        {
          src: `${themeDir}/components/_patterns/00-base/global/01-colors/_color-vars.scss`,
          dest: `${themeDir}/components/_patterns/00-base/global/01-colors/colors.yml`,
          lineStartsWith: '$',
          allowVarValues: false,
        },
      ],
    },
    browserSync: {
      enabled: true,
      baseDir: '../../../',
      startPath: 'themes/custom/umami_pl/pattern-lab/public/',
      // Uncomment below if using a specific local url
      domain: 'umami-pattern-lab.lndo.site:8000',
      notify: false,
      openBrowserAtStart: true,
      reloadOnRestart: true,
      ui: false,
    },
    wpt: {
      // WebPageTest API key https://www.webpagetest.org/getkey.php
      // key:
    },
  };
}))();
/* globals require, process */
