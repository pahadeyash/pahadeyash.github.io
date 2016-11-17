
//function changes the background image according to the time of the day
$(document).ready(function(){
	var d = new Date();
	var n = d.getHours();
	if (n > 5 && n < 9)
	  // If the time is between 5AM - 9AM morning theme to 'body'
	  document.body.className = "morning";
	else if (n >= 8 && n <= 12)
	  // If time is between 9AM – 12PM lateMorning theme to ‘body’
	   document.body.className = "lateMorning";
	else if (n >= 12 && n <= 15)
	  // If time is between 12PM – 3PM afternoon theme to ‘body’
	   document.body.className = "afternoon";
	else if (n >= 15 && n <= 16)
	  // If time is between 3PM – 4PM lateAfternoon theme to ‘body’
	   document.body.className = "lateAfternoon";
	else if (n >= 16 && n <= 17)
	  // If time is between 4PM – 5PM evening theme to ‘body’
	  document.body.className = "evening";
	else if (n >= 17 && n <= 19)
	  // If time is between 5PM – 7PM lateEvening theme to ‘body’
	   document.body.className = "lateEvening";
	else if (n => 19 && n <= 23)
	  // If time is between 7PM – 11PM afternoon theme to ‘body’
	  document.body.className = "night";
	else
	  // If time is between 11PM - 5AM lateNight theme to 'body'
	  document.body.className = "lateNight";
});