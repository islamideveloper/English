const { series, src, dest } = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-sass")(require("sass"));

// My Views Task is Pug js Html preprocessors
exports.views = () => {
    return src("./src/views/*.pug")
        .pipe(
            pug({
                // Your options in here
            })
        )
        .pipe(dest("./dist"));
};

exports.buildStyles = () => {
    return gulp
        .src("./src/sass/**/*.sass")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./css"));
};

exports.watch = () => {
    gulp.watch = () => {
        gulp.watch("./src/sass/**/*.sass", ["sass"]);
    };
};
