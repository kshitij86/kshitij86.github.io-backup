function changeMode() {
  var modeToggle = document.getElementById("sw");
  var fas = document.getElementsByClassName("fa");
  var headers = document.getElementsByClassName("header");
  var iconBox = document.getElementById("icons");

  if (modeToggle.checked === true) {
    console.log("Dark Mode on");
    iconBox.style = "color: white";
    document.getElementsByTagName("body")[0].style = "color: white";
    for (var i = 0; i < fas.length; i++) {
      fas[i].style = "color: white";
    }
    for (var i = 0; i < headers.length; i++) {
      headers[i].style = "color: white";
    }
  } else {
    console.log("Light Mode on");
    iconBox.style =
      "  width: 139px;padding: 10px; border: 2px solid white;border-radius: 5px;border-right - width: 25px;";
    document.getElementsByTagName("body")[0].style = "background-color: white";
    for (var i = 0; i < fas.length; i++) {
      fas[i].style = "color:  black";
    }

    for (var i = 0; i < headers.length; i++) {
      headers[i].style = "color: black";
    }
  }
}