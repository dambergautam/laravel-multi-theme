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

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');
// mix for jivan theme
mix.copyDirectory('themes/default/assets/img', 'public/themes/default/img');
mix.copyDirectory('themes/default/assets/fonts', 'public/themes/default/fonts');
// js
mix.js(['themes/default/assets/js/app.js'], 'public/themes/default/js/app.min.js')
//sass
mix.sass('themes/default/assets/sass/app.scss', 'public/themes/default/css/app.min.css')
