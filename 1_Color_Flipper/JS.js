const color_code = document.getElementById("color-code");
const button = document.getElementById("btn");
const getColor = () => {
  // Hex color Code
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomNumber.toString(16);
//console.log(randomNumber,randomCode)
//color will show on display otherwise it will print in console
  document.body.style.backgroundColor = randomCode;
  //for genrates random Hex Code 
 color_code.innerText = randomCode;
// for automatic copy the value
 // navigator.clipboard.writeText(randomCode);
};
button.addEventListener("click", getColor);
// it will be call first and print random color before clicking
getColor();
