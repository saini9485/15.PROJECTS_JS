let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("btn"));

buttons.map((btn) => {
  btn.addEventListener("click", (event) => {
    console.log(event);
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
       let nums = display.innerText
        let f = 1;
        for(i = 2; i <= n; i++)
            f = f*i;
        display.innerText = f;
    
    } else if (key == "x2") {
      display.innerText = display.innerText ** 2;
    } else if (key == "log") {
      display.innerText = Math.log(display.innerText);
    } else if (key == "sin"){
      display.innerText= Math.sin(display.innerText)
    }else if (key == "tan"){
      display.innerText = Math.tan(display.innerText)
    }else if (key =="cos"){
      display.innerText = Math.cos(display.innerText)
    }else if (key =="e"){
      display.innerText = 2.71(display.innerText)
  }else if (key == "X^"){
    display.innerText += "^"
  }
    else {
      display.innerText += key;
    }
  });
});
