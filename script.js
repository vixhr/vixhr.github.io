// clock
function myClock() {           
    setTimeout(function() {   
      const date = new Date();
      const dateString = date.toLocaleTimeString('en-GB', {hour12: false});
      const split = dateString.split(":");
      const hour = parseInt(split[0]);
      const min = parseInt(split[1]);
      function standardHours(hour) {
      if (hour < 1) {hour = 12;}
      if (hour > 12) {hour = hour % 12;}
      return hour
      }
      function checkTime(min) {
      if (min < 10) {min = "0" + min};  // add zero in front of numbers < 10
      return min;
      }
      const period = hour < 12 ? 'AM' : 'PM';
      const timeOutput = standardHours(hour) + ':' + checkTime(min) + ' ' + period;
      document.getElementById("currentTime").innerHTML = timeOutput; 
      myClock();
    }, 0)
}

myClock();

// pages
function switchPage(page) {
    var selectBox = document.getElementById("pages");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  
    function showPage(one) {
      var newPage = document.getElementById(one)
      newPage.style.display = "block";
    }
    function hideAbout() {
      var aboutPage = document.getElementById("about")
      aboutPage.style.display = "none";
    }
    function hideInterests() {
      var aboutPage = document.getElementById("interests")
      aboutPage.style.display = "none";
    }
    function hideContact() {
      var aboutPage = document.getElementById("contact")
      aboutPage.style.display = "none";
    }

  showPage(selectedValue)
  if(document.getElementById('pages').value != "about") {
    hideAbout()
  }
  if(document.getElementById('pages').value != "interests") {
    hideInterests()
  }
  if(document.getElementById('pages').value != "contact") {
    hideContact()
  }
}
