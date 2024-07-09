console.log("Before");

function demo(cd){
    console.log("Demo function invoke");
    setTimeout(cd,2000)
}
demo(()=>{
    console.log("Call back function");
});

console.log("After");