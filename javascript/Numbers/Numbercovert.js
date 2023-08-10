var x=15
var n=3.564789
var s=x.toString()
var e=x.toExponential(5)
var f=n.toFixed(4)
var p=n.toPrecision(3)
var a=Number(p)
var b=parseInt(s)
var c=parseFloat(f)
var d=parseInt(e)
console.log("The typeof a: "+typeof(a)+" and the value of a: "+a)
console.log("The typeof b: "+typeof(b)+" and the value of b: "+b)
console.log("The typeof c: "+typeof(c)+" and the value of c: "+c)
console.log("The typeof d: "+typeof(d)+" and the value of d: "+d)