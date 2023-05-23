function alertCall(){
    alert("Bazinga! nigga...");
    location.href="secondPage.html"
}
function connect(){
    var mysql = require('mysql');

    var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "johndada1208S"
    });

    con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    alert("connected!")
    });
}
function openMyselfTab(evt, stages) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(stages).style.display = "block";
    evt.currentTarget.className += " active";
  }
