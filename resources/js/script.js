$(function(){
	
	var note = $('#note'),
		ts = new Date(2019, 0, 1),
		newYear = true;
	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + 77*24*60*60*1000;
		newYear = false;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " DAY" + ( days==1 ? '':'S' ) + ", ";
			message += hours + " HOUR" + ( hours==1 ? '':'S' ) + ", ";
			message += minutes + " MINUTE" + ( minutes==1 ? '':'S' ) + " AND ";
			message += seconds + " SECOND" + ( seconds==1 ? '':'S' ) + " <br />";
			
			// if(newYear){
			// 	message += "left until the new year!";
			// }
			// else {
			// 	// message += "left to 10 days from now!";
			// }
			
			note.html(message);
		}
	});
	
});
