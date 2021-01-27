var newwindow;
function poptastic(url)
{
	newwindow=window.open(url,'flight-search.html','height=400,width=200');
	if (window.focus) {newwindow.focus()}
}
