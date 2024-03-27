gulp.task('test', () => {
  'use strict';
  return gulp.src('test/**/*.spec.js')
    .pipe(jasmine());
});

gulp.task('lint', ()=> {
  'use strict';
  return gulp.src(['src/**/*.js', 'test/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});



  var cartesianProduct = (function () {
    var result;

    function cartesianProduct(sets, index, current) {
      if (index === sets.length) {
        return result.push(current.slice());
      }
      for (var i = 0; i < sets[index].length; i += 1) {
        current[index] = sets[index][i];
        cartesianProduct(sets, index + 1, current);
      }
    }
