const gulp = require('gulp'),
    clean = require('gulp-clean'),
    sass = require('gulp-sass'),
    cleanCss = require('gulp-clean-css'),
    babel = require('gulp-babel'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    uglify = require('gulp-uglify')

const path = {
    dev: {
        html: 'src/index.html',
        styles: 'src/styles/**/*.scss',
        scripts: 'src/scripts/**/*.js'
    },
    build: {
        root: 'dist',
        temp: 'temp',
        styles: 'dist/css',
        scripts: 'dist/js'
    }
}

gulp.task('clean:dist', () => (
    gulp.src(path.build.root, {allowEmpty: true})
        .pipe(clean())
))

gulp.task('clean:temp', () => (
    gulp.src(path.build.temp, {allowEmpty: true})
        .pipe(clean())
))

gulp.task('build:html', () => (
    gulp.src(path.dev.html)
        .pipe(gulp.dest(path.build.root))
))

gulp.task('build:css', () => (
    gulp.src(path.dev.styles)
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCss())
        .pipe(gulp.dest(path.build.styles))
))

gulp.task('precompile', () => (
    gulp.src(path.dev.scripts)
        .pipe(
            babel({
                presets: ["@babel/preset-env"]
            })
        )
        .pipe(gulp.dest(path.build.temp))
))

gulp.task('compile', () => (
    browserify([`${path.build.temp}/index.js`]).bundle()
        .pipe(source('index.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest(path.build.scripts))
))

gulp.task('build:js', gulp.series(
    'precompile',
    'compile',
    'clean:temp'
))

gulp.task('build', gulp.series(
    'build:html',
    'build:css',
    'build:js'
))

gulp.task('default', gulp.series(
    'clean:dist',
    'build'
))