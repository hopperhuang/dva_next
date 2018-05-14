const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

gulp.task('css', () => {
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
      replace: false,
      mediaQuery: false,
      minPixelValue: 2,
    }),
  ];
  return gulp.src(['styles/*.css'])
  // 暂时不做压缩，用非压缩版本
    .pipe(postcss(processors))
    .pipe(gulp.dest('./static/stylesheet'));
});
gulp.task('default', ['css']);
