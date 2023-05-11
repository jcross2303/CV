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