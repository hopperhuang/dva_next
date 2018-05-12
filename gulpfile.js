var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var pxtorem = require('postcss-pxtorem');

gulp.task('css', function () {
    var processors = [
        autoprefixer({
            browsers: [
                "> 1%",
                "last 2 versions"
            ]
        }),
        pxtorem({
            "rootValue": 100,
            "unitPrecision": 5,
            "propList": [
              "*"
            ],
            "selectorBlackList": [],
            "replace": false,
            "mediaQuery": false,
            "minPixelValue": 2
        })
    ];
    return gulp.src(['node_modules/antd-mobile/dist/antd-mobile.css'])
        .pipe(postcss(processors))
        .pipe(gulp.dest('./static/stylesheet'));
});
gulp.task('default', ['css']);