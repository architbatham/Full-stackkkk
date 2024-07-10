function demo(a, cb) {

    return cb(a);
}

var a = "hello world";
var result = demo(a, (str) => {
    return str.toUpperCase();
});

console.log(result);
