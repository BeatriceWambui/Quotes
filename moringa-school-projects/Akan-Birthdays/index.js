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
 var enter = document.getElementsByName("gender");

 function calculation(){
  return calculation  = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7
}
if (gender===male&&calculation===0){
   document.write("Your Akan name is " + "male[0]" );
}
elseif (gender===male&&calculation===1){
  document.write("Your Akan name is " + "male[1]" );
}
elseif (gender===male&&calculation===2){
  document.write("Your Akan name is " + "male[2]"),
}
elseif (gender===male&&calculation===3){
  document.write("Your Akan name is " + "male[3]");
}
elseif (gender===male&&calculation===4){
  document.write("Your Akan name is " + "male[4]");
}
elseif (gender===male&&calculation===5){
  document.write("Your Akan name is " + "male[5]");
}
elseif (gender===male&&calculation===6){
  document.write("Your Akan name is " + "male[6]");
}
else if (gender===female&&calculation===0){
  document.write("Your Akan name is " + "female[0]");
}
else if (gender===female&&calculation===1){
  document.write("Your Akan name is " + "female1");
}else if (gender===female&&calculation===2){
  document.write("Your Akan name is " + "female[2]");
}else if (gender===female&&calculation===3){
  document.write("Your Akan name is " + "female[3]");
}else if (gender===female&&calculation===4){
  document.write("Your Akan name is " + "female[4]");
}else if (gender===female&&calculation===5){
  document.write("Your Akan name is " + "female[5]");
}else if (gender===female&&calculation===6){
  document.write("Your Akan name is " + "female[6]");
}
