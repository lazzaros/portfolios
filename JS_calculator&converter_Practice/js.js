

//function division,multiplication,plus,minus,dot.
function number(num){
   document.frm.result.value += num.name;
}

// no repeat operator, no first caracter operator
function norepeat(d){
  var niz = ["+","-","*","/",".",""];
  var a = document.frm.result.value;
  var b = a.slice(-1);
      var count = 0;
  for(var i = 0; i < niz.length; i++){
    if(b == niz[i]){
      count ++;
    }
  }
  if(count == 0 ){
    document.frm.result.value += d.name;
  }
}
//button C
function buttonCe(){
 document.frm.result.value ="";
}

function buttonDel(){
 var a = document.frm.result.value;
var b = a.slice(0,-1);
document.frm.result.value = b;
}

//funkcija 
function calculatoreval(){
  var sub = eval(document.frm.result.value)
  document.frm.result.value = sub;
}

// Converter
function  DropDown(){
  var x = document.getElementById("converter-click");
  // /backgraund form 2
  document.getElementById("bcg").style.backgroundImage = "url('img/convertor-bcg.jpg')";
  document.getElementById("converter").style.display="block";//block img
  document.getElementById("calculator").style.display="none";//
  document.getElementById("ipcalculator-img").style.display="none";//
}

// Calculator
function  Calculator(){
  var x = document.getElementById("calculator");
 document.getElementById("bcg").style.backgroundImage = "url('img/calculator.jpg')";
 document.getElementById("converter").style.display="none";//block img
  document.getElementById("calculator").style.display="block";//
  document.getElementById("ipcalculator-img").style.display="none";
}

function CalculatorIP(){
  var x = document.getElementById("ipcalculator-img");
  document.getElementById("bcg").style.backgroundImage = "url('img/ip-bcg.jpeg')";
  document.getElementById("converter").style.display="none";//block img
  document.getElementById("calculator").style.display="none";//
    document.getElementById("ipcalculator-img").style.display="block";
}


// Converter
function euroConverter(){
  document.converter.dollar.value = document.converter.euro.value * 1.470
  document.converter.pound.value = document.converter.euro.value * 0.717
  document.converter.yen.value = document.converter.euro.value * 165.192
  document.converter.dinar.value = document.converter.euro.value * 122.74
}

function dollarConverter(){
  document.converter.euro.value = document.converter.dollar.value * 0.680
  document.converter.pound.value = document.converter.dollar.value * 0.488
  document.converter.yen.value = document.converter.dollar.value * 112.36
  document.converter.dinar.value = document.converter.dollar.value * 110.28
}

function poundConverter(){
  document.converter.dollar.value = document.converter.pound.value * 2.049
  document.converter.euro.value = document.converter.pound.value * 1.394
  document.converter.yen.value = document.converter.pound.value * 230.27
  document.converter.dinar.value = document.converter.pound.value * 141.26
}
function yenConverter(){
  document.converter.dollar.value = document.converter.yen.value * 0.0089
  document.converter.pound.value = document.converter.yen.value * 0.00434
  document.converter.euro.value = document.converter.yen.value * 0.00605
  document.converter.dinar.value = document.converter.yen.value * 99.145
}
function dinarConverter(){
  document.converter.dollar.value = document.converter.dinar.value * 0.0090
  document.converter.pound.value = document.converter.dinar.value * 0.00707
  document.converter.euro.value = document.converter.dinar.value * 0.00814
  document.converter.yen.value = document.converter.dinar.value * 0.01008
}

function Clear(){
 document.converter.dollar.value = document.converter.yen.value =" ";
  document.converter.pound.value = document.converter.yen.value = " ";
  document.converter.euro.value = document.converter.yen.value = " ";
  document.converter.dinar.value = document.converter.yen.value = " ";
}

//Current date and time
(function () {
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }

    function startTime() {
        var today = new Date(),
        hour = checkTime(today.getHours()),
        minut = checkTime(today.getMinutes()),
        sec = checkTime(today.getSeconds());
        document.getElementById('time').innerHTML = hour + ":" + minut + ":" + sec;
        t = setTimeout(function () {
        startTime()
        }, 500);
    }
    startTime();
    document.getElementById("time").value;
})();//end time


//Ip calculator
function ipCalculator(){
  // alert('Please enter');

var q1 = document.getElementById('q1').value;
var q2 = document.getElementById('q2').value;
var q3 = document.getElementById('q3').value;
var q4 = document.getElementById('q4').value;
var cidr = document.getElementById('cidr').value;

if(
(q1 >= 0 && q1 <= 255) &&
(q2 >= 0 && q2 <= 255) && 
(q3 >= 0 && q3 <= 255) && 
(q4 >= 0 && q4 <= 255) && 
(cidr >= 0 && cidr <= 255)
){
// //display ip address
  document.getElementById('resIP').innerHTML =  q1 + "." + q2 + "." + q3 + "." + q4;
 }
// //get IP address binares
var ipBin={};
ipBin[1] = String("00000000" + parseInt(q1,10).toString(2)).slice(-8);
ipBin[2] = String("00000000" + parseInt(q2,10).toString(2)).slice(-8);
ipBin[3] = String("00000000" + parseInt(q3,10).toString(2)).slice(-8);
ipBin[4] = String("00000000" + parseInt(q4,10).toString(2)).slice(-8);

// decide standard class

var standard = "";
if(q1 <= 126){
  standard = "A";
}else if (q1 == 127) {
  standard = "back IP"
}else if(q1 >= 128 && q1 <= 191){
  standard = "B";
}else if(q1>=192 && q1<=223){
  standard = "C";
}else if(q1>=224 && q1<=239){
  standard = "D (Multicast address)";
}else if(q1>=240 && q1<=225){
  standard = "E (Experimental)";
}else{
  standard = "Out range";
}

//netmask

var mask = cidr;
var importantBlock = Math.ceil(mask/8);
var importantBlockBinary = ipBin[importantBlock];
var maskBinaryBlockCount = mask % 8;
var maskBinaryBlock = "";
var maskBlock = "";

for (var i = 1; i <= 8; i++){
  if(maskBinaryBlockCount >=1 ){
    maskBinaryBlock += "1";
  }else{
    maskBinaryBlock +="0";
  }
}
  maskBlock = parseInt(maskBinaryBlock,2);


//broadcast adress 
var netBlockBinary = "";
var bcBlockBinary = "";

for (var i = 1; i <= 8; i++){
  if(maskBinaryBlock.substr(i-1, 1 ) == "1"){
    netBlockBinary += importantBlockBinary.substr(i-1,1);
    bcBlockBinary += importantBlockBinary.substr(i-1,1);
  }else{
   netBlockBinary +="0";
    bcBlockBinary +="1";
  }
}

var netBlockBinary = "";
var bcBlockBinary = "";

for (var i = 1; i <= 8; i++){
  if(maskBinaryBlock.substr(i-1, 1 ) == "1"){
    netBlockBinary += importantBlockBinary.substr(i-1,1);
    bcBlockBinary += importantBlockBinary.substr(i-1,1);
  }else{
   netBlockBinary +="0";
    bcBlockBinary +="1";
  }
}


//sve zajedno,krei. string kontenjer za varijable
var mask = "";
var maskBinary = "";
var net = "";
var bc = "";
var netBinary = "";
var bcBinary  = "";
var rangeA = "";
var rangeB = "";

//string block zajedno
for(var i = 1; i <= 4; i++){
  if(importantBlock > i){
    mask += 255;
    maskBinary += "11111111";
    netBinary += parseInt(ipBin[i]);
    bcBinary += parseInt(ipBin[i]);
    net += parseInt(ipBin[i],2);
    bc += parseInt(ipBin[i],2);
    rangeA += parseInt(ipBin[i],2);
    rangeB += parseInt(ipBin[i],2);
  }else if(importantBlock == i){
    mask+= maskBlock;
    maskBinary += maskBinaryBlock;
    netBinary += netBlockBinary;
    bcBinary += bcBlockBinary;
    net += parseInt(netBlockBinary,2);
    bc += parseInt(bcBlockBinary,2);
    rangeA +=(parseInt(netBlockBinary,2)+1);
    rangeB +=(parseInt(bcBlockBinary,2) -1);
  }else{
    mask +=0;
    maskBinary +="00000000";
    netBinary += "00000000";
    bcBinary +="11111111";
    net +="0";
    bc +="255";
    rangeA += 0;
    rangeB +=255;
  }
if(i<4){
    mask +=".";
    maskBinary += ".";
    netBinary += ".";
    bcBinary += ".";
    net += ".";
    bc += ".";
    rangeA += ".";
    rangeB += ".";
   }
 }

document.getElementById("resMask").innerHTML = mask;
document.getElementById("resNet").innerHTML = net;
document.getElementById("resBC").innerHTML = bc;
document.getElementById("resRange").innerHTML = rangeA + " - " + rangeB;
document.getElementById("resBinIP").innerHTML = ipBin[1] + "." + ipBin[2] + "." + ipBin[3] + "." + ipBin[4];
document.getElementById("resBinMask").innerHTML = maskBinary;
document.getElementById("resBinNet").innerHTML = netBinary;
document.getElementById("resBinBC").innerHTML = bcBinary;
document.getElementById("resClass").innerHTML = standard;
}

function deletebtn(){
document.getElementById("resMask").innerHTML = "";
document.getElementById("resNet").innerHTML = "";
document.getElementById("resBC").innerHTML = "";
document.getElementById("resRange").innerHTML = "";
document.getElementById("resBinIP").innerHTML = "";
document.getElementById("resBinMask").innerHTML = ""
document.getElementById("resBinNet").innerHTML = "";
document.getElementById("resBinBC").innerHTML = "";
document.getElementById("resClass").innerHTML = "";
document.getElementById("resIP").innerHTML = "";
}