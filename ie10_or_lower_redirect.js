(function ($) {
  if (navigator.userAgent.indexOf("MSIE") >= 0) {
    //document.write("You are using an unsupported version of Internet Explorer. Please upgrade to Internet Explorer 11 or use a different web browser.");
    //console.log("You are using an unsupported version of Internet Explorer. Please upgrade to Internet Explorer 11 or use a different web browser.");
    window.location.href = "/_fallback/";
  }
})(jQuery);

/*Redirect if old IE browser (IE11 or older)*/
var agentHeader = navigator.userAgent;
var browserName = navigator.appName;

if (window.location.href !== "https://andersenfox.co.uk/upgrade-browser/") {
  if (
    browserName.indexOf("Microsoft Internet Explorer") !== -1 ||
    agentHeader.indexOf("Trident/7.") !== -1
  ) {
    window.location.href = "https://andersenfox.co.uk/upgrade-browser/";
  } else {
    console.log("You are on a compatible browser");
  }
} else {
}
