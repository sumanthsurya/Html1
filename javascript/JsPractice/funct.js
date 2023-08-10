function add(){
    var a=10
    var b=20
    var c=30
    sum=a+b+c
    console.log(sum)
}
add()
console.log("FUNCTION WITH PARAMETERS")
function add1(aa,bb){
    console.log(aa+bb)
}
add1(10,20)
add1(50)
add1()
console.log("FUNCTION WITH PARAMETERS AND DEFAULT VALUES")
function add2(a1=30,b1=90){
    console.log(a1+b1)
}
add2(100,20)
add2(50)
add2(0,90)
console.log("FUNCTION WITH PARAMETERS AND RESULT")
function add3(c1,c4){
    return c1+c4;
}
let x1=add3(10,20)
console.log(x1)
let x2=add3(20760,37700)
console.log(x2)


