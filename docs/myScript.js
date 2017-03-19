function showCalendar() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          calendars = JSON.parse(this.responseText);
          displayCalendar(calendars)
      }
  };
  xmlhttp.open("GET", "calendars.json", true);
  xmlhttp.send();
}

function displayCalendar(calendars) {
    iframeBegin = '<iframe src="https://calendar.google.com/calendar/embed?title=Floss%20Galicia&amp;height=600&amp;wkst=2&amp;bgcolor=%23FFFFFF&amp;src=flossgalicia%40gmail.com&amp;color=%231B887A'
    calendarURL = ''
    iframeEnd = '&amp;ctz=Europe%2FMadrid" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>'
    for (calendar of calendars) {
      chunk = '&amp;src=' + calendar.src + '&amp;color=%' + calendar.color
      calendarURL += chunk
      // console.log("chunk: " + chunk);
    }
    iframe = iframeBegin + calendarURL +  iframeEnd
    // console.log("iframe: " + iframe);
    document.getElementById('googleCalendar').innerHTML = iframe
}
