$(document).ready(function () {
	$("#accordion").on("click", "h2", function() {
		$(this).toggleClass("minus");
		if ($(this).attr("class") != "minus") {
		   	$(this).next().hide();
	   	}
	   	else {
	        $(this).next().show();
	   	}
	}); // end click

	$("div").mouseover(function () {
	    if ($(this).parent().is("h1")) {
	        $(this).unwrap();
	    } else {
	        $(this).wrap("<h1></h1>");
	    }
	}); 
    
    $("#add").click(function() {
    	var html = "";
    	html += "<h2><a href='#'>" + $("#name").val() + "</a></h2>";
    	html += "<div><h3>" + $("#position").val() + "</h3>";
    	html += "<p>" + $("#description").val() + "</p></div>";

    	//$("div:eq(0)").after(html);
    	$("div").first().after(html);

    	$("#name").val("");
    	$("#position").val("");
    	$("#description").val("");
    }); // end click
}); // end ready