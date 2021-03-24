const gulp = require('gulp');
const concat = require('gulp-concat');
const del = require('delete');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
var minifyjs = require('gulp-js-minify');
const cleanCSS = require('gulp-clean-css');



function buildCSS() {
    return gulp.src('src/scss/*.scss')

        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist'))
}

function buildHTML() {
    return gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'))
}

function buildJS() {
    return gulp.src('src/js/*.js')
        .pipe(minifyjs())
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
}

function buildImages() {
    return gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
}

function clean() {
    return del('dist/**', { force: true });
}

function build() {
    return gulp.series([
        clean,
        gulp.parallel([
            buildImages,
            buildCSS,
            buildHTML,
            buildJS
        ])
    ])
}

function start() {
    gulp.watch('src/**/*', build())
}

exports.buildHTML = buildHTML;
exports.buildCSS = buildCSS;
exports.buildJS = buildJS;
exports.buildImages = buildImages;
exports.clean = clean;
exports.start = start;
exports.default = build();