const LP = function (period) {

let year = 4; let leap = 100; let unless = 400;

if(typeof (period)==="number"){

if (period % 4 === 0 ) {

if (period % leap === 0)  {

if (period % unless === 0) {
    
return "It is a leep year";}

else {return "It is not a leep year"; }}

else {return "It is a leep year";}}

else {return "It is not a leep year";}}

else {return "Enter a year EX:1995";}}

LP();




const LPD = function (period) {

let year = 4; let leap = 100; let unless = 400;
    
if(typeof (period) === "number" ){}    
    
else {return "Enter a year EX:1995"}

if ((period % 4 === 0 && period%leap !== 0) || period % 4 === 0 && period%leap === 0 && period % unless === 0) {

return "It is a leep year";}

else {return "It is not a leep year";}

}
LPD();