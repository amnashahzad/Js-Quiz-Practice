// // chapter 21
// var cityToCheck = prompt("Enter your city");
// cityToCheck = cityToCheck.toLowerCase();
// var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
// for (var i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         alert("It's one of the cleanest cities");
//     }
// }

// chapter 22
// var cityToCheck = prompt("Enter city name")
// cityToCheck = cityToCheck.toLowerCase();
// var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
// for (var i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         alert("It's one of the cleanest cities");
//     }
// }
// var firstChar = cityToCheck.slice(0,3);
// document.write(firstChar);
// var someChars = cityToCheck.slice(2, 5);
// var someChars = cityToCheck.slice(2);
// document.write(someChars);


// var firstChar = cityToCheck.slice(0, 1);
// var otherChars = cityToCheck.slice(1);
// firstChar = firstChar.toUpperCase();
// otherChars = otherChars.toLowerCase();
// var cappedCity = firstChar + otherChars;
// document.write(cappedCity);

// var month = prompt("Enter a month");
// var charsInMonth = month.length;
// if (charsInMonth > 3) {
//     monthAbbrev = month.slice(0, 3);
// }
// document.write(monthAbbrev)

// var str = prompt("Enter some text");
// var numChars = str.length;
// for (var i = 0; i < numChars; i++) {
//     if (str.slice(i, i + 2) === "") {
//         alert("No double spaces!");
//         break;

//     }
// }
// document.write(str);

// chapter 23
// var text = "It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy, which contains, with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard can understand the evil magi precisely because he is just enough like them to grasp their minds and motives in ways that they cannot grasp his."
// document.write(text);
// document.write("<br> <br> <br>")
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 12) === "World War II") {
//         text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//         document.write(text);
//     }
// }
// var firstChar = text.indexOf("World War II");
// if (firstChar !== -1) {
//     text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
// }


// chapter 24
// var firstName = "Amna";
// var firstChar = firstName.slice(0,1);
// var firstChar = firstName.charAt(3);
// var lastChar = firstName.charAt(firstName.length - 1);

// console.log(lastChar);
// var text = "The following code finds ! the last character ! in the string."
// for (var i = 0; i < text.length; i++) {
//     if (text.charAt(i) === "!") {
//         alert("Exclamation point found!");
//         // break;
//     }
// }

//chapter  25
// var text = "It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy, which contains, with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard can understand the evil magi precisely because he is just enough like them to grasp their minds and motives in ways that they cannot grasp his."
// document.write(text);
// document.write("<br> <br>");
// var newtext = text.replace("World War II", "the Second World War");
// document.write(newtext);

// var text = "It is startling to think that, World War II even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy, which contains, with the weird applicability available only to World War II poetry and myth, the essential notion that the good gray wizard can understand World War II the evil magi precisely because he is just enough like them to grasp their minds and motives in ways that they cannot grasp his."
// document.write(text);
// document.write("<br> <br>");
// // text = text.replace("World War II", "the Second World War");
// text = text.replace(/World War II/g, "the Second World War");

// document.write(text);

// chapter 26 
// var num = -1.5;
// var numofstar = Math.round(num);
// console.log(numofstar);

// var scoreAvg = Math.round(.0678437);
// var scoreAvg = Math.ceil(40.4);
// var scoreAvg = Math.floor(43.54534);

// console.log(scoreAvg);

// chapter 27
// var bigdecimal = Math.random();
// var improvedNum = (bigdecimal * 6) + 1;
// var numberOfStars = Math.floor(improvedNum);
// console.log(numberOfStars);
// var randomNumber = Math.floor(Math.random() * 10);
// console.log(randomNumber);

//chapter 28
// var currentAge = prompt("Enter your age.");
// var yearsEligibleToVote = currentAge / 2;
// console.log(yearsEligibleToVote);

// var profit = "200" - "150";
// var profit = "200" - "ducky";
// var profit = "200" - 150;
// console.log(profit);

//  var currentAge = prompt("Enter your age.");
//  var qualifyingAge = parseInt(currentAge) + 1;
// var myFractional = parseFloat("1.9999");
//  console.log(myFractional);


//chapter 29
// var integerString = "24";
// var num = Number(integerString);
// var numberAsNumber = 1234;
// var numberAsString = numberAsNumber.toString();
// console.log(numberAsString);


//chapter 30
// var price = 9.95;
// var taxRate = 0.065;
// var total = price + (price * taxRate);
// var prettyTotal = total.toFixed();
// console.log(prettyTotal);

// var num = 15.5;
// var str = num.toString(); // "15.5"
// if (str.charAt(str.length - 1) === "5") {
//     str = str.slice(0, str.length - 1) + "6";
// }
// num = Number(str);
// prettyNum = num.toFixed(2);
// console.log(prettyNum);

// var num1 = 1;
// var num2 = 3;
// var sum = num1 + num2;
// console.log(sum);

// Chapter 31
// var rightNow = new Date();
// rightNow = rightNow.toString();
// var day = rightNow.getDay();
// console.log(rightNow);
// console.log(day);



// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// console.log(nameOfToday);

// var d = new Date();
// var currentMonth = d.getMonth();
// var currYr = d.getFullYear();
// var currentHrs = d.getHours();
// var millsSince = d.getTime();
// console.log(millsSince);

// var date = new Date();
// var dateTell = date.getDate();
// console.log(dateTell);

// var month = new Date();
// var monthMe = month.getMonth();
// console.log(monthMe);

// var year = new Date();
// var yearFull = year.getFullYear();
// console.log(yearFull);

// var hours = new Date();
// var hoursTo = hours.getHours();
// console.log(hoursTo);

// var min = new Date();
// var minut = min.getMinutes();
// console.log(minut);

// var sec = new Date();
// var secon = sec.getSeconds();
// console.log(secon);


// let now = new Date();
// document.write(now);

// // let now = new Date();
// // document.write(now .toDateString());

// // let now = new Date();
// // document.write(now .getDate());

// // let now = new Date();
// // document.write(now .getFullYear());

// // let now = new Date();
// // document.write(now .getMonth());

// // let now = new Date("November 17 2011");
// // document.write(now .getDay());

// // let now = new Date("November 17 2011");
// // document.write(now .getFullYear());

// // let now = new Date("November 17 2011");
// // document.write(now .getDate());

// // let now = new Date("November 17 2011");
// // document.write(now .getMonth());

// // let now = new Date();
// // document.write(now .getDay());

// let now = new Date("November 17 2011");
// document.write(now.getDate());


// var d = new Date();
// d.setFullYear(2001);
// d.setMonth(11);
// d.setDate(15);
// d.setHours(13);
// console.log(d);


// var now = new Date();
// var theHr = now.getHours();
// var theMin = now.getMinutes();
// alert("time: " + theHr + ":" + theMin);

// function tellTime() {
//     var now = new Date();
//     var theHr = now.getHours();
//     var theMin = now.getMinutes();
//     alert("time: " + theHr + ":" + theMin);
// }

// tellTime();

function greetUser(greeting) {
    alert(greeting);
}
greetUser("Hello, There")