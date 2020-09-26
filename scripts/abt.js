var sw = document.getElementById("sw");
sw.checked = true;

function changeMode() {
  var modeToggle = document.getElementById("sw");
  var headers = document.getElementsByClassName("header");

  if (modeToggle.checked === true) {
    // console.log("Dark Mode on");
    document.getElementsByTagName("body")[0].style = "color: white";
    for (var i = 0; i < headers.length; i++) {
      headers[i].style = "color: white";
    }
  } else {
    // console.log("Light Mode on");
    document.getElementsByTagName("body")[0].style = "background-color: white";

    for (var i = 0; i < headers.length; i++) {
      headers[i].style = "color: black";
    }
  }
}
