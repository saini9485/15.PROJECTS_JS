let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("btn"));

buttons.map((btn) => {
  btn.addEventListener("click", (event) => {
    // console.log(event);
    let key = event.target.innerText;
    if (key == "A/c") {
      display.innerText = "";
    } else if (key == "DEL") {
      if (display.innerText == "Infinity") {
        display.innerText = "";
      } else {
        display.innerText = display.innerText.slice(0, -1);
      }
    } else if (key == "=") {
      if (display.innerText) {
        display.innerText = eval(display.innerText);
      }
    } else if (key == "π") {
      display.innerText += 3.14;
    } else if (key == "√") {
      display.innerText = Math.sqrt(display.innerText);
    } else if (key == "X!") {
     let i = display.innerText
     let fact= 1
     while (i>0){
    fact = fact*i
    i--
     }
     display.innerText= fact
    } else if (key == "x2") {
      display.innerText = display.innerText ** 2;
    // } else if (key == "log") {
    //   display.innerText =`log${(display.innerText)}`
    //   display.innerText = Math.log(display.innerText);
     } 
    else if(key == "log"){
      let temp = display.innerText
      display.innerText = `log(${display.innerText})`
      if(display.innerText = `log(${display.innerText})`){
        display.innerText = Math.log(temp)
      }}
    else if (key == "sin") {
      display.innerText = Math.sin(display.innerText);
    } else if (key == "tan") {
      display.innerText = Math.tan(display.innerText);
    } else if (key == "cos") {
      display.innerText = Math.cos(display.innerText);
    } else if (key == "e") {
      display.innerText = 2.71(display.innerText);
    } else if (key == "X^") {
      display.innerText += "^";
    } else {
      display.innerText += key;
    }
  });
});

