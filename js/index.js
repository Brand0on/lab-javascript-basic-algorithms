// Iteration 1: Names and Input
let hacker1 = "Brandon";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Google Chrome";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters`
  );
}
// Iteration 3: Loops
//3.1
drivers_name = "";
for (i = 0; i < hacker1.length; i++) {
  drivers_name += hacker1[i].toLocaleUpperCase();
  drivers_name += " ";
}

console.log(drivers_name);

//3.2
navigators_name = [];
for (i = 0; i < hacker2.length; i++) {
  navigators_name += hacker2[i];
}

console.log(navigators_name.split("").reverse().join(""));

//3.3

check_order = hacker1.localeCompare(hacker2);
if (check_order === -1) {
  console.log("The driver's name goes first.");
} else if (check_order === 1) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

//BONUS TIME!

//BONUS 1

text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed justo luctus nisi porta vehicula. Etiam molestie vehicula viverra. Donec sagittis tellus vitae tellus malesuada efficitur. Ut tempus a ante vitae ultricies. Nulla eget arcu enim. Cras sagittis lacinia arcu, sit amet tempus felis faucibus sit amet. Fusce sagittis massa sit amet quam eleifend, vel hendrerit nisi finibus. Curabitur at nisl accumsan, varius nibh euismod, consectetur mauris. Sed nec leo lobortis, luctus sapien faucibus, venenatis mauris. Pellentesque maximus tellus ac augue posuere egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut a tellus quis lectus lobortis eleifend. Phasellus cursus felis eros, vel rhoncus ligula molestie nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu tempus ligula. Praesent sit amet augue quis est consequat mollis et eget elit. Aliquam gravida sed mi sed volutpat. Curabitur interdum viverra nulla scelerisque commodo. Nunc varius, sem eget dignissim aliquet, sem lectus dapibus est, vitae imperdiet est dui eget ipsum. Maecenas efficitur vel lectus vitae hendrerit. Sed volutpat, ipsum id viverra maximus, ex orci tristique ante, et hendrerit dui erat vitae lacus. Phasellus nec laoreet turpis, et gravida leo. Fusce nulla massa, dictum a maximus eget, porttitor vel sapien. In tempus commodo risus quis volutpat. In quis ante vel dolor maximus bibendum quis at metus. Aliquam eget magna eros. Curabitur tincidunt, elit vel blandit efficitur, dui dolor imperdiet mi, sit amet euismod nulla metus vitae dolor. Donec in sollicitudin elit, in mattis ipsum. Nullam in enim quis tellus tempor sodales pellentesque a justo. Aenean suscipit nulla ut eros venenatis consequat.";

//To make the program count the number of words in the string:
counter = 0;
//i will do a for iteration to iterate in any character of the string
for (i = 0; i < text.length; i++) {
  if (text[i] === " ") {
    //any space in the string, means there is a word, at the end we just need to add +1 to be complete.
    counter += 1;
    //for each space, the variable counter increase 1, it is counting.
  }
}
counter += 1; //we add the one that is missing at the beginning of the string.
console.log(counter);

let etWordCounter = 0;

for (i = 0; i < text.length; i += 1) {
  if (`${text[i]}${text[i + 1]}` === "et") {
    // im using ${text[i]}${text[i+1]} to get two letters iteration from the text
    etWordCounter += 1;
  }
}
console.log(etWordCounter);
