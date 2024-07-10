function processData(input, callback){
    return callback(input);
}

function toUpperCase(str){
    return str.toUpperCase();
}

console.log(processData("hello world",toUpperCase));