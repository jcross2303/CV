function alertCall(){
    alert("Bazinga! nigga...");
    location.href="secondPage.html"
}
function openMyselfTab(evt, stages) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent"+"Tabs_HeaderContent" and hide them
    /*
    tabcontent = document.getElementsByClassName("tabcontent");
    Tabs_HeaderContent= document.getElementsByClassName("Tabs_HeaderContent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
      Tabs_HeaderContent[i].style.display = "none"
    }*/
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(stages).style.display = "block";
    document.getElementById("H_"+stages).style.display = "block";
    evt.currentTarget.className += " active";
  }
