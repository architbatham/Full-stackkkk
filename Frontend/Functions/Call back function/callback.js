console.log("Before");

function demo(a,b,cd){
    console.log("Demo function invoke");
    var c = a+b;
    cd(c);
}
var a,b;
a=10;
b=20;
demo(a,b,(ret)=>{
    console.log("Call back function"+"="+ret);
});

console.log("After");