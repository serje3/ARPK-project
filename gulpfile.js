const { src, dest, series, watch } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const csso = require('gulp-csso')
const include = require('gulp-file-include')
const htmlmin = require('gulp-htmlmin')
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer')
const minify = require('gulp-minify');
const sync = require('browser-sync').create()

function html() {
    return src('src/**.html')
        .pipe(include({
            prefix: '@@'
        }))
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(dest('dist'))
}

function scss() {
    return src('src/scss/**.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions']
        }))
        .pipe(csso())
        .pipe(concat('index.css'))
        .pipe(dest('dist'))
}

function fonts() {
    return src('src/fonts/**')
        .pipe(dest('dist/fonts'))
}

function imgs() {
    return src('src/img/**')
        .pipe(dest('dist/img'))
}

function minifyJS() {
    return src(['src/js/*.js'])
        .pipe(minify())
        .pipe(dest('dist/js'))
}

function serve() {
    sync.init({
        server: './dist'
    })

    watch('src/**.html', series(html)).on('change', sync.reload)
    watch('src/parts/**.html', series(html)).on('change', sync.reload)
    watch('src/js/**.js', series(minifyJS)).on('change', sync.reload)
    watch('src/scss/**.scss', series(scss)).on('change', sync.reload)
    watch('src/scss/pages/**.scss', series(scss)).on('change', sync.reload)
}

exports.serve = series(imgs, fonts, minifyJS, scss, html, serve)
exports.build = series(imgs, fonts, minifyJS, scss, html)