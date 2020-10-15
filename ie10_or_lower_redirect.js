(function($) {

	if (navigator.userAgent.indexOf("MSIE") >= 0) {
		//document.write("You are using an unsupported version of Internet Explorer. Please upgrade to Internet Explorer 11 or use a different web browser.");
		//console.log("You are using an unsupported version of Internet Explorer. Please upgrade to Internet Explorer 11 or use a different web browser.");
		window.location.href = "/_fallback/";
	}

})( jQuery );