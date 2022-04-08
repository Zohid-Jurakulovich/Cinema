// var userName = "Abror";
// var obj = {

//   write: writeLog , // Method
//   name :userName,

// }

// // Function Experation
// // var writeLog = function(something){
// //   console.log(something);
// // }

// //  Function Declaration
// function writeLog(something){
//   console.log(something);
// }

// obj.write("Hello World"); // Argument
// console.log( obj.name);


// var date = new Date();
// var year = date.getFullYear();
// var month = date.getMonth() + 1;
// // var day = date.getDay(); getDay hafta kuni
// var day = date.getDate();
// var hours = date.getHours();
// var minuts = date.getMinutes();
// var second = date.getSeconds();
// var milliseconds = date.getMilliseconds();


// console.log(date);

// var milliseconds =  new Date().getMilliseconds();

function formatDate(format){

  var date = new Date(format);
  var day = date.getDate();
  var month = String( date.getMonth() + 1).padStart(2,0);
  var year = date.getFullYear();

  return `${day}.${month}.${year}`;

}

// console.log(formatDate());

// console.log("7".padStart(3,7));
// console.log("olm".padEnd(4,"a"));
