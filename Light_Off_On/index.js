function light(value) {
  var pic;
  if (value == 0) {
    pic = "light off.jpeg";
  } else {
    pic = "light on.jpeg";
  }
  document.getElementById("bulb").src = pic;
}
