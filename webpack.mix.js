const mix = require('laravel-mix');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
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


// Set up the spritemap plugin
mix.webpackConfig({
    output: {
        chunkFilename: 'js/[name].bundle.js',
        publicPath: '/',
    },
    resolve: {
        alias: {
            Core: path.resolve(__dirname, 'resources/js/'),
            ComponentsF: path.resolve(__dirname, 'resources/js/components/Frontend')
        }
    },
    plugins: [
        new SVGSpritemapPlugin({
              src: path.resolve(__dirname, 'resources/assets/*.svg'),
              filename: 'sprites.svg',
              output: path.resolve(__dirname, 'public/images/'),
              path: path.resolve(__dirname, 'public/images/'),
              publicPath: path.resolve(__dirname, 'public/images/'),
        })
    ]
});

mix.browserSync('checko.loc');
mix.js('resources/js/main.js', 'public/js/backend')
    .sass('resources/sass/backend/app.scss', 'public/css/backend');

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/frontend/app.scss', 'public/css');

