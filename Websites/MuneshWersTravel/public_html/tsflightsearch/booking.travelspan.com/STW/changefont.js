/*
var FONT_COOKIE_NAME = "Font";
var FONT_COOKIE_PATH = "/";
var FONT_COOKIE_DOMAIN = "https://res.com";
var FONT_COOKIE = WM_readCookie( 'Font' );
var CSS_TITLE = FONT_COOKIE ? FONT_COOKIE : null;
*/

var CSS_TITLE = null;

function setActiveStyleSheet(CSS_TITLE) {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
      a.disabled = true;
      if(a.getAttribute("title") == CSS_TITLE) a.disabled = false;
    }
  }
}

function getActiveStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
  }
  return null;
}

/*
window.onunload = function(e) {
  if (getActiveStyleSheet() != null) {
  	if (getActiveStyleSheet() != FONT_COOKIE) {
	  	WM_setCookie( FONT_COOKIE_NAME, getActiveStyleSheet(), 24*31, FONT_COOKIE_PATH, FONT_COOKIE_DOMAIN, '');
	}
  } else {
  	WM_killCookie( FONT_COOKIE_NAME, FONT_COOKIE_PATH, FONT_COOKIE_DOMAIN );
  }
}
*/

window.onload = function() {
	if (typeof stripeAlertsTable == "function") {
		stripeAlertsTable();
	}
	if (typeof HandleCSIs == "function") {
		HandleCSIs();
	}
}

setActiveStyleSheet(CSS_TITLE);
