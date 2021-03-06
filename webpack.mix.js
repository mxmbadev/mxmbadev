const mix = require('laravel-mix');
require('laravel-mix-purgecss');



/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/site.js', 'public/js')
  .sass('resources/scss/mxmbadev.scss', 'public/css/mxmbadev.css')
  .sass('resources/scss/bootstrap.scss', 'public/css/bootstrap.css');


// mix.postCss('resources/css/tailwind.css', 'public/css', [
//   require('postcss-import'),
//   require('tailwindcss'),
//   require('postcss-nested'),
//   require('postcss-preset-env')({stage: 0})
// ])

// if (mix.inProduction()) {
//   mix.version();
//   mix.purgeCss({
//     enabled: true,
//     whitelistPatternsChildren: [/^content$/],
//   });
// }
