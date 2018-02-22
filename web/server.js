const browserSync = require('browser-sync').create();
browserSync.watch('./public_html/**/*').on('change', browserSync.reload);
browserSync.init({
    'server': './public_html'
});