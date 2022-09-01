
var Input = document.querySelector(".input");
var btn1 = document.querySelector(".btn");
let container = document.querySelector(".container");
//event Listeners
btn1.addEventListener("click", function (name) {
// container.style.display ="none"
// container.style.display ="block"
container.innerHTML = "";
  fetch(`https://picsum.photos/v2/list?${Input.value}&limit=100`) //fetching api data
    .then((response) => response.json()) //text --> json  
    .then((data) => {
        console.log(data)
        container.innerHTML = data;
      let result = `<div><h1>Number : ${data.number}</h1> 
            <h1>Temp = ${(data["author"])} </h1>
            <a href=${author["url"]}></a> `
            
            
      container.innerHTML = result;
      console.log(data);
    })
    .catch((err) => alert("invalid number")); 
});