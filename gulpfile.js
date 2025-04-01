const gulp = require("gulp");
const gap = require("gulp-append-prepend");

gulp.task("licenses", async function () {
  // this is to add Creative Tim licenses in the production mode for the minified js
  await gulp
    .src("build/static/js/*chunk.js", { base: "./" })
    .pipe(
      gap.prependText
      
    (`/*!

    =========================================================
    * Danta Infotech Pvt. Ltd. System React - v1.1.1
    =========================================================
    
    */`)

    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add Creative Tim licenses in the production mode for the minified html
  await gulp
    .src("build/index.html", { base: "./" })
    .pipe(
      gap.prependText
      
    (`<!--

    =========================================================
    * Danta Infotech Pvt. Ltd. System React - v1.1.1
    =========================================================

    -->`)

    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add Creative Tim licenses in the production mode for the minified css
  await gulp
    .src("build/static/css/*chunk.css", { base: "./" })
    .pipe(
      gap.prependText

    (`/*!

    =========================================================
    * Danta Infotech Pvt. Ltd. System React - v1.1.1
    =========================================================

    */`)

    )
    .pipe(gulp.dest("./", { overwrite: true }));
  return;
});
