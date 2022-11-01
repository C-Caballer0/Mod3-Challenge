// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  function exit(){ 
    return;
  }

  function numbersOnly(num){
    return /^[0-9]+$/.test(num); //checks if input only contains numbers
  }
  
  function getPassLength(){
    let passLength = prompt("Input the desired length of your password in characters, between 8 and 128:");

  if (passLength < 8 && passLength !== "" && passLength !== null) { //checks if value is at least 8, reprompts if not
    alert("Sorry, the password must be at least 8 characters.");
    getPassLength();
  } else if (passLength > 128) { //checks if value is not more than 128, reprompts if not
    alert("Sorry, the password cannot exceed 128 characters.");
    getPassLength();
  } else if (passLength == "" || (numbersOnly(passLength) === false && passLength !== null)) { 
    alert("Please input a valid number in numeric format.");
    getPassLength();
  } else if (passLength === null){ //terminates program if cancel is pressed 
    writePassword.exit();
  } else {
    alert("Your password will be " + passLength + " characters long.");
    parseInt(passLength);
    return passLength;
  }
  }

passLength = getPassLength();
console.log("Password length: " + passLength + " characters");

function getContainNum() { //Checks if password should contain numbers
  let getNum = prompt("Should your password contain numbers? (Y/N)");
  if (getNum === "n" || getNum === "N") {
    containNum = false;
  } else if (getNum === "y" || getNum === "Y") {
    containNum = true;
  } else {
    alert("Please input a valid response.");
    getContainNum();
  }
  return containNum;
}
containsNum = getContainNum();
console.log("Must contain numbers: " + containsNum);

function getContainCaps() { //Checks if password should contain capital letters
  let getCaps = prompt("Should your password contain capitals? (Y/N)");
  if (getCaps === "n" || getCaps === "N") {
    containCaps = false;
  } else if (getCaps === "y" || getCaps === "Y") {
    containCaps = true;
  } else {
    alert("Please input a valid response.");
    getContainCaps();
  }
  return containCaps;
}
containCaps = getContainCaps();
console.log("Must contain capitals: " + containCaps);

function getContainSymb() { //Checks if password should contain symbols
  let getSymb = prompt("Should your password contain special characters? (Y/N)");
  if (getSymb === "n" || getSymb === "N") {
    containSymb = false;
  } else if (getSymb === "y" || getSymb === "Y") {
    containSymb = true;
  } else {
    alert("Please input a valid response.");
    getContainSymb();
  }
  return containNum;
}
containsSymb = getContainSymb();
console.log("Must contain special characters: " + containsSymb);

function generatePass(){
  let charOpt = "abcdefghijklmnopqrstuvwxyz";
  let charCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let charNum = "1234567890";
  let charSymb = "!@#$%^&*()";
  let password = "";

  if (containCaps === true) {//if specified, adds capital letters to list of valid characters
    charOpt = charOpt + charCap;
  }

  if (containNum === true) { //if specified, adds numbers to list of valid characters
    charOpt = charOpt + charNum;
  }

  if (containsSymb === true) { //if specified, adds symbols to list of valid characters
    charOpt = charOpt + charSymb;
  }

  console.log("Current pool of valid characters: " + charOpt);

  let charOptions = charOpt.length;
  console.log("Number of valid character options: " + charOptions);

  const charArray = charOpt.split("");
  
  console.log(charArray);
  
  for ( i = 0; i <= passLength; i++) {
    charKey = Math.floor(Math.random() * charOptions + 1);
    char = charArray[charKey];
    password = password + char;
  }
  console.log("Password is: " + password);

  alert("Your password is " + password);
}

generatePass();


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
