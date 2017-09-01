// 添加引用
var gulp=require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');

//这个可以让express启动
gulp.task("node", function() {
    nodemon({
        script: './bin/www',
        ext: 'js html',
        env: {
            'NODE_ENV': 'development'
        }
    })
});


gulp.task('server', ["node"], function() {
    var files = [
        'views/**/*.html',
        'views/**/*.ejs',
        'views/**/*.jade',
        'public/**/*.*'
    ];

    //gulp.run(["node"]);
    browserSync.init(files, {
        proxy: 'http://localhost:3000',
        browser: 'chrome',
        notify: false,
        port: 4001 //这个是browserSync对http://localhost:3000实现的代理端口
    });

    gulp.watch(files).on("change", reload);
});

/*
作者：该帐号已被查封
链接：http://www.jianshu.com/p/2f923c8782c8
    來源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。*/
