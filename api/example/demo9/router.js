function route(pathname) {
    console.log("我监听到了" + pathname);
    if(pathname=='/123'){
        console.log('找到了')
    }
}
exports.route=route;