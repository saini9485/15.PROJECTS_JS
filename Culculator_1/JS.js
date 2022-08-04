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
    } else if(key == "π"){
        display.innerText += 3.14
    }else if (key == "√"){
        display.innerText = Math.sqrt(display.innerText)
    }else if (key == "X!"){
        display.innerText= "false"
    } else if (key == "x2"){
        display.innerText= Math.pow(x2 ,2)
    }
    
    
    
    else {
      display.innerText += key;
    }
  });
});
