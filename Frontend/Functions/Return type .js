
console.log("Before");

function myapp(a,b){

    var a,b,c;
    a=10;
    b=20;
    c=a+b;
    return {"a":a,"b":b,"c":c}
    
}
var d = myapp();

console.log(d["c"]);



console.log("After");