var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"];
var female =["Akosua", "Adwaa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var male =["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

/*var days = function(){
  var day1 = Sunday;
  var day2 = Monday;
  var day3 = Tuesday;
  var day4 = Wednesday;
  var day5 = Thursday;
  var day6 = Friday;
  var day7 = Saturday;
}*/
/*document.getElementById("name1").value;
document.getElementById("name2").value;
document.getElementById("male").value;
document.getElementById("female").value;
document.getElementById("date").value;
*/
/*document.getElementById("form").value;


Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7


if (gender===male&&date!){

}*/
 var enter = document.getElementById("gender").value;{
 function calculation(){
  return calculation  = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7
}

if (gender===male&&calculation===0){
   document.write("Your Akan name is " + "Kwasi" );
}
elseif (gender===male&&calculation===1){
  document.write("Your Akan name is " + "Kwadwo" );
}
elseif (gender===male&&calculation===2){
  document.write("Your Akan name is " + "Kwabena"),
}
elseif (gender===male&&calculation===3){
  document.write("Your Akan name is " + "Kwaku");
}
elseif (gender===male&&calculation===4){
  document.write("Your Akan name is " + "Yaw");
}
elseif (gender===male&&calculation===5){
  document.write("Your Akan name is " + "Kofi");
}
elseif (gender===male&&calculation===6){
  document.write("Your Akan name is " + "Kwame");
}
else if (gender===female&&calculation===0){
  document.write("Your Akan name is " + "Akosuwa");
}
else if (gender===female&&calculation===1){
  document.write("Your Akan name is " + "Adwaa");
}else if (gender===female&&calculation===2){
  document.write("Your Akan name is " + "Abenaa");
}else if (gender===female&&calculation===3){
  document.write("Your Akan name is " + "Akua");
}else if (gender===female&&calculation===4){
  document.write("Your Akan name is " + "Yaa");
}else if (gender===female&&calculation===5){
  document.write("Your Akan name is " + "Afua");
}else if (gender===female&&calculation===6){
  document.write("Your Akan name is " + "Ama");
}
