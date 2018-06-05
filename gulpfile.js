const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');

// css 预处理
gulp.task('postCss', () => {
  const processors = [
    autoprefixer({
      browsers: [
        '> 1%',
        'last 2 versions',
      ],
    }),
    pxtorem({
      rootValue: 100,
      unitPrecision: 5,
      propList: [
        '*',
      ],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 2,
    }),
  ];
  return gulp.src(['styles/*.css'])
  // 暂时不做压缩，用非压缩版本
    .pipe(postcss(processors))
    .pipe(gulp.dest('./static/stylesheet/dev'));
});

// css 压缩
gulp.task('compressCss', () => {
  return gulp.src(['static/stylesheet/dev/*.css'])
    .pipe(cleanCSS({ }))
    .pipe(gulp.dest('./static/stylesheet/min'));
});

gulp.task('compressJs', () => {
  return gulp.src(['static/js/*.js'])
    .pipe(minify({
      ext: {
        min: '.min.js',
      },
      noSource: true,
      // ignoreFiles: [/\.min\.js$/],
    }))
    .pipe(gulp.dest('./static/js/min'));
});

gulp.task('develop', ['postCss']);
gulp.task('build', ['postCss', 'compressCss']);
