
function openPage(pageName,element,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  presslinks = document.getElementsByClassName(".press");
  for (i = 0; i < presslinks.length; i++) {
    presslinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  element.style.backgroundColor = color;
}

document.getElementById("defaultOpen").click();
