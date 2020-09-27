var sw = document.getElementById("sw");
sw.checked = true;

function changeMode() {
  var modeToggle = document.getElementById("sw");
  var fas = document.getElementsByClassName("fa");
  var headers = document.getElementsByClassName("header");
  var iconBox = document.getElementById("icons");

  if (modeToggle.checked === true) {
    // console.log("Dark Mode on");
    iconBox.style = "color: white";
    document.getElementsByTagName("body")[0].style = "color: white";
    for (var i = 0; i < fas.length; i++) {
      fas[i].style = "color: white";
    }
    for (var i = 0; i < headers.length; i++) {
      headers[i].style = "color: white";
    }
    document.getElementById("dark-toast").innerHTML = ``;
  } else {
    // console.log("Light Mode on");
    iconBox.style = "border: 2px solid black;border-right-width: 25px;";
    document.getElementsByTagName("body")[0].style = "background-color: white";

    for (var i = 0; i < fas.length; i++) {
      fas[i].style = "color:  black";
    }

    for (var i = 0; i < headers.length; i++) {
      headers[i].style = "color: black";
    }
    document.getElementById(
      "dark-toast"
    ).innerHTML = `<div style="background-color: blue; border-radius: 5px; display: inline-block; padding:10px; align-content: center"><h1 style="text-align: center; color:"white">"With the lights out, it's less dangerous"</h1></div>`;
    setTimeout(() => {
      document.getElementById("dark-toast").innerHTML = ``;
      console.log("Nirvana reference removed");
    }, 3000);
  }
}
