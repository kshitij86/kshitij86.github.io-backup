var sw = document.getElementById("sw");
sw.checked = true;

function changeMode() {
  var modeToggle = document.getElementById("sw");
  var headers = document.getElementsByClassName("header");
  var headerTitle = document.getElementsByClassName("header-title");

  if (modeToggle.checked === true) {
    // console.log("Dark Mode on");
    document.getElementsByTagName("body")[0].style = "color: white";
    document.getElementsByTagName("code")[0].style =
      "background-color: white; color: black";
    for (var i = 0; i < headers.length; i++) {
      headers[i].style =
        "color: white; font-size: 30px;-webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; ";
    }
    for (var i = 0; i < headers.length; i++) {
      headerTitle[i].style =
        "color: white;font-size: 50px;-webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; ";
    }
  } else {
    // console.log("Light Mode on");
    document.getElementsByTagName("body")[0].style = "background-color: white";
    document.getElementsByTagName("code")[0].style =
      "background-color: black; color: white";
    for (var i = 0; i < headers.length; i++) {
      headers[i].style =
        "color: black;font-size: 30px;-webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; ";
    }
    for (var i = 0; i < headers.length; i++) {
      headerTitle[i].style =
        "color: black;font-size: 50px;-webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; ";
    }
  }
}
