function addValue(){
    // get the operands value
var a = document.getElementById("input_a").value;

var b = document.getElementById("input_b").value;

    // parse to integer. You can use: parseInt(input, 10);
   var c= parseInt(a, 10);

   var d= parseInt(b, 10);

    // perform operations
var total=c+d;

    // creating the text output
var tt =total.toString;

    // (if you want to check) print out in consoles
    console.log(tt);
    // change the text area
var text = a+"+"+b+"="+total;
    document.mycalculator.output.value = text;
}


function mulValue(){
    var a = document.getElementById("input_a").value;

var b = document.getElementById("input_b").value;

    // parse to integer. You can use: parseInt(input, 10);
   var c= parseInt(a, 10);

   var d= parseInt(b, 10);

    // perform operations
var total=c*d;

    // creating the text output
var tt =total.toString;
console.log(tt);
    // (if you want to check) print out in consoles

    // change the text area
var text = a+"x"+b+"="+total;
    document.mycalculator.output.value = text;

}

function divValue(){
    var a = document.getElementById("input_a").value;
var b = document.getElementById("input_b").value;
    // parse to integer. You can use: parseInt(input, 10);
   var c= parseInt(a, 10);
   var d= parseInt(b, 10);
    // perform operations
var total=c/d;
    // creating the text output
var tt =total.toString;
console.log(tt);
    // (if you want to check) print out in consoles

    // change the text area
var text = a+":"+b+"="+total;
    document.mycalculator.output.value = text;
}
