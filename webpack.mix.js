const mix = require('laravel-mix');

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
mix.browserSync('checko.loc');
mix.js('resources/js/main.js', 'public/js')
    .sass('resources/sass/backend/app.scss', 'public/css/backend')

    .js('resources/js/app.js', 'public/js')
    .sass('resources/sass/frontend/app.scss', 'public/css');

