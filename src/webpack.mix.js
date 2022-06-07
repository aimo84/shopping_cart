const mix = require('laravel-mix')
require('laravel-mix-alias')

const version = require('./public/version.json').version

mix.alias({
  '@components': 'resources/js/components',
  '@sections': 'resources/js/sections',
  '@store': 'resources/js/store',
  '@utils': 'resources/js/utils',
  '@pages': 'resources/js/pages'
})

mix.config.webpackConfig.output = {
  chunkFilename: 'v/' + version + '/scripts/[name].js',
  publicPath: '/'
}

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

mix.js('resources/js/app.js', 'public/v/' + version + '/js')
  .sass('resources/sass/app.scss', 'public/v/' + version + '/css')


