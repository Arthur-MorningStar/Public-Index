/*****************/
/* UPDATE ACTION */
/*****************/

// This function sets the action (used before a submit() call)
function updateAction(straction)
{
	//alert("Updating action to " + action);
	document.main_form.Action.value = straction;
	//alert("Updating target to ''");
	document.main_form.target = '';
}

// This function sets the form action
// The form action refers to the page this form will post to
function updateFormAction(straction)
{
    document.main_form.action = straction;
}

// This function sets the form target
// The form target refers to the page this form will post to
function updateFormTarget(strtarget)
{
    document.main_form.target = strtarget;
}

//This function returns a string representing a number in currency format (thousands separator, two decimal places)
function getMoneyFormat(num, thousandmarker, decimalmarker)
{
    num = num.toString().replace(/\$|\, /g,'');
    
    if (isNaN(num))
        num = "0";
       
    if (thousandmarker == null)
        thousandmarker = ',';
    if (decimalmarker == null)
        decimalmarker = '.';
    
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * 100 + 0.50000000001);
    cents = num % 100;
    num = Math.floor(num / 100).toString();
    
    if (cents < 10)
        cents = "0" + cents;
    
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
        num = num.substring(0, num.length - ((3 + thousandmarker.length) * i + 3)) + thousandmarker + num.substring(num.length - ((3 + thousandmarker.length) * i + 3));
    
    return (((sign) ? '' : '-') + num + decimalmarker + cents);
}


/*******************/
/* CHECK ENTER KEY */
/*******************/
// This function returns true if the key pressed is the enter key
function checkEnterKey(evt)
{
	if(!evt){var evt=window.event;}
    if(evt.keyCode == 13)
    {
        return true;
    }
    else
    {
        return false;
    }
}

/******************/
/* CENTER DISPLAY */
/******************/

// This function places the specified element in the center of the window
function CenterDisplay(tid)
{
    try
    {
        document.getElementById(tid).style.position = 'absolute';
        //Remember the old display style of the element
        var strdisp = document.getElementById(tid).style.display;
        //Make the element visisble. If the element is not visible, offsetHeight and width are zero.
        document.getElementById(tid).style.display = 'block';
        document.getElementById(tid).style.left = ((GetWindowWidth()  / 2) + GetScrollX() - (document.getElementById(tid).offsetWidth  / 2)) + 'px';
        document.getElementById(tid).style.top  = ((GetWindowHeight() / 2) + GetScrollY() - (document.getElementById(tid).offsetHeight / 2)) + 'px';
        document.getElementById(tid).style.display = strdisp;
    }
    catch (ex)
    {
        //alert('Could not center element ' + tid + ':\n' + ex.message);
    }
}

function GetWindowWidth()
{
    if (typeof(window.innerWidth) == 'number')
    {
        //Non-IE
        return window.innerWidth;
    }
    else if(document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight))
    {
        //IE 6+ in 'standards compliant mode'
        return document.documentElement.clientWidth;
    }
    else if (document.body && (document.body.clientWidth || document.body.clientHeight))
    {
        //IE 4 compatible
        return document.body.clientWidth;
    }
}

function GetWindowHeight()
{
    if (typeof(window.innerWidth) == 'number')
    {
        //Non-IE
        return window.innerHeight;
    }
    else if(document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight))
    {
        //IE 6+ in 'standards compliant mode'
        return document.documentElement.clientHeight;
    }
    else if (document.body && (document.body.clientWidth || document.body.clientHeight))
    {
        //IE 4 compatible
        return document.body.clientHeight;
    }
}

function GetScrollX()
{
    if (typeof(window.pageXOffset) == 'number')
    {
        //Netscape compliant
        return window.pageXOffset;
    }
    else if (document.body && (document.body.scrollLeft || document.body.scrollTop))
    {
        //DOM compliant
        return document.body.scrollLeft;
    }
    else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop))
    {
        //IE6 standards compliant mode
        return document.documentElement.scrollLeft;
    }
    else
    {
        return 0;
    }
}
function GetScrollY()
{
    if (typeof(window.pageYOffset) == 'number')
    {
        //Netscape compliant
        return window.pageYOffset;
    }
    else if (document.body && (document.body.scrollLeft || document.body.scrollTop))
    {
        //DOM compliant
        return document.body.scrollTop;
    }
    else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop))
    {
        //IE6 standards compliant mode
        return document.documentElement.scrollTop;
    }
    else
    {
        return 0;
    }
}

/******************/
/* TOGGLE DISPLAY */
/******************/

// This function hides or shows single or multiple items based on ID
// The inputs for tid this function handles are:
//	1 Element:		Element ID		"X2"
//	Multiple:		Element list	"X2,D4,J6"
//	Multiple:		Element range	"X3-15"

// Input:
//	-tid		The element ID to show or hide
//	-obj		The object that requested to show or hide tid (usually a picture or button)
//	-showtxt	The text (or image url) to place on obj when tid is hidden ("Show options")
//	-hidetxt	The text (or image url) to place on obj when tid is shown  ("Hide options")
function toggleDisplay(tid, obj, showtxt, hidetxt)
{
    /*
	if (showtxt == "")
		showtxt = "Show";
	if (hidetxt == "")
		hidetxt = "Hide";
	*/
	var i, s, e, b;
	var validChars = '0123456789';
	var x;

	if(tid.indexOf('-') > -1)
	{
		x = 0;
		s = '';					
		
		//This allows to name elements with a number in them, like td390_1 for example
		//Now we can do toggleDisplay('td390_1-10')
		if(tid.indexOf('_') > -1)
		{
			for(i = tid.indexOf('_'); i < tid.indexOf('-'); i++)
			{
				if(validChars.indexOf(tid.charAt(i)) > -1)
				{
					if(x == 0)
					{
						s = tid.substr(i , tid.indexOf('-') - i);
						b = tid.substr(0, i);
						x = 1;
					}
				}
			} 		
			e = tid.substr(tid.indexOf('-') + 1);
			//alert('Toggling ' + s + ' to ' + e);
			for(i = s; i <= e; i++)
			{
			    //alert('Trying to toggle ' + b + i);
				if(document.getElementById(b + i))
				{
					toggleOne(b + i, obj, showtxt, hidetxt);							
				}					
			}
		}
		else
		{
			for(i = 0; i < tid.indexOf('-'); i++)
			{
				if(validChars.indexOf(tid.charAt(i)) > -1)
				{
					if(x == 0)
					{
						s = tid.substr(i , tid.indexOf('-') - i);
						b = tid.substr(0, i);
						x = 1;
					}
				}
			} 		
			e = tid.substr(tid.indexOf('-') + 1);
			
			for(i = s; i <= e; i++)
			{
				if(document.getElementById(b + i))
				{
					//alert('Toggling ' + b + i);
					toggleOne(b + i, obj, showtxt, hidetxt);							
				}					
			}
		}
	}
	else if(tid.indexOf(',') > -1)
	{
		s = tid;
		while(s.indexOf(',') > -1)
		{
			x=s.indexOf(',');
			b=s.substr(0, x);
			s=s.substr(x + 1);
			if(document.getElementById(b))
			{
				toggleOne(b, obj, showtxt, hidetxt);
			}
		}
	}
	else
	{
		if(document.getElementById(tid))
		{
			toggleOne(tid, obj, showtxt, hidetxt);
		}
	}
}

// This function toggles the display of a single element based on ID
// This is used as a helper for toggleDisplay()
function toggleOne(oid, obj, showtxt, hidetxt)
{
    /*
	if (showtxt == "")
		showtxt = "Show";
	if (hidetxt == "")
		hidetxt = "Hide";
	*/
	if(document.getElementById(oid).style.display == 'none')
	{
		document.getElementById(oid).style.display = '';
		
		if (obj && hidetxt != "")
		{
			if (obj.type == "button")
				obj.value = hidetxt;
			else if (obj.type == "link")
			    obj.innerHTML = hidetxt;
			else
				obj.src = hidetxt;
		}
	}
	else
	{
		document.getElementById(oid).style.display = 'none';
		
		if (obj && showtxt != "")
		{
			if (obj.type == "button")
				obj.value = showtxt;
			else if (obj.type == "link")
			    obj.innerHTML = showtxt;
			else
				obj.src = showtxt;
		}
	}
}


/********/
/* SHOW */
/********/

// This function works like toggleDisplay except it will always show the items
//	1 Element:		Element ID		"X2"
//	Multiple:		Element list	"X2,D4,J6"
//	Multiple:		Element range	"X3-15"

// Input:
//	-tid		The element ID to show or hide
//	-obj		The object that requested to show or hide tid (usually a picture or button)
//	-showtxt	The text (or image url) to place on obj when tid is hidden ("Show options")
//	-hidetxt	The text (or image url) to place on obj when tid is shown ("Hide options")
function show(tid, obj, showtxt, hidetxt)
{
    /*
	if (showtxt == "")
		showtxt = "Show";
	if (hidetxt == "")
		hidetxt = "Hide";
	*/
	var i, s, e, b;
	var validChars = '0123456789';
	var x;

	if(tid.indexOf('-') > -1)
	{
		x = 0;
		s = '';					
		
		//This allows to name elements with a number in them, like td390_1 for example
		//Now we can do toggledisplay('td390_1-10')
		if(tid.indexOf('_') > -1)
		{
			for(i = tid.indexOf('_'); i < tid.indexOf('-'); i++)
			{
				if(validChars.indexOf(tid.charAt(i)) > -1)
				{
					if(x == 0)
					{
						s = tid.substr(i , tid.indexOf('-') - i);
						b = tid.substr(0, i);
						x = 1;
					}
				}
			} 		
			e = tid.substr(tid.indexOf('-') + 1);
			//alert('Toggling ' + s + ' to ' + e);
			for(i = s; i <= e; i++)
			{
			    //alert('Trying to toggle ' + b + i);
				if(document.getElementById(b + i))
				{
					showOne(b + i, obj, showtxt, hidetxt);							
				}					
			}
		}
		else
		{
			for(i = 0; i < tid.indexOf('-'); i++)
			{
				if(validChars.indexOf(tid.charAt(i)) > -1)
				{
					if(x == 0)
					{
						s = tid.substr(i , tid.indexOf('-') - i);
						b = tid.substr(0, i);
						x = 1;
					}
				}
			} 		
			e = tid.substr(tid.indexOf('-') + 1);
			
			for(i = s; i <= e; i++)
			{
				if(document.getElementById(b + i))
				{
					//alert('Toggling ' + b + i);
					showOne(b + i, obj, showtxt, hidetxt);							
				}					
			}
		}
	}
	else if(tid.indexOf(',') > -1)
	{
		s = tid;
		while(s.indexOf(',') > -1)
		{
			x=s.indexOf(',');
			b=s.substr(0, x);
			s=s.substr(x + 1);
			if(document.getElementById(b))
			{
				showOne(b, obj, showtxt, hidetxt);
			}
		}
	}
	else
	{
		if(document.getElementById(tid))
		{
			showOne(tid, obj, showtxt, hidetxt);
		}
	}
}

// This function shows a single element based on ID
// This is used as a helper for show()
function showOne(oid, obj, showtxt, hidetxt)
{
    /*
	if (showtxt == "")
		showtxt = "Show";
	if (hidetxt == "")
		hidetxt = "Hide";
	*/
	//document.getElementById(oid).style.display = 'block'; // must be changed to empty string ('') to work correctly with firefox
	document.getElementById(oid).style.display = '';
	
	if (obj && showtxt != "")
	{
		if (obj.type == "button")
			obj.value = showtxt;
		else
			obj.src = showtxt;
	}
}



/********/
/* HIDE */
/********/

// This function works like toggleDisplay except it will always hide the items
//	1 Element:		Element ID		"X2"
//	Multiple:		Element list	"X2,D4,J6"
//	Multiple:		Element range	"X3-15"

// Input:
//	-tid		The element ID to show or hide
//	-obj		The object that requested to show or hide tid (usually a picture or button)
//	-showtxt	The text (or image url) to place on obj when tid is hidden ("Show options")
//	-hidetxt	The text (or image url) to place on obj when tid is shown ("Hide options")
function hide(tid, obj, showtxt, hidetxt)
{
    /*
	if (showtxt == "")
		showtxt = "Show";
	if (hidetxt == "")
		hidetxt = "Hide";
	*/
	var i, s, e, b;
	var validChars = '0123456789';
	var x;

	if(tid.indexOf('-') > -1)
	{
		x = 0;
		s = '';					
		
		//This allows to name elements with a number in them, like td390_1 for example
		//Now we can do toggledisplay('td390_1-10')
		if(tid.indexOf('_') > -1)
		{
			for(i = tid.indexOf('_'); i < tid.indexOf('-'); i++)
			{
				if(validChars.indexOf(tid.charAt(i)) > -1)
				{
					if(x == 0)
					{
						s = tid.substr(i , tid.indexOf('-') - i);
						b = tid.substr(0, i);
						x = 1;
					}
				}
			} 		
			e = tid.substr(tid.indexOf('-') + 1);
			//alert('Toggling ' + s + ' to ' + e);
			for(i = s; i <= e; i++)
			{
			    //alert('Trying to toggle ' + b + i);
				if(document.getElementById(b + i))
				{
					hideOne(b + i, obj, showtxt, hidetxt);							
				}					
			}
		}
		else
		{
			for(i = 0; i < tid.indexOf('-'); i++)
			{
				if(validChars.indexOf(tid.charAt(i)) > -1)
				{
					if(x == 0)
					{
						s = tid.substr(i , tid.indexOf('-') - i);
						b = tid.substr(0, i);
						x = 1;
					}
				}
			} 		
			e = tid.substr(tid.indexOf('-') + 1);
			
			for(i = s; i <= e; i++)
			{
				if(document.getElementById(b + i))
				{
					//alert('Toggling ' + b + i);
					hideOne(b + i, obj, showtxt, hidetxt);							
				}					
			}
		}
	}
	else if(tid.indexOf(',') > -1)
	{
		s = tid;
		while(s.indexOf(',') > -1)
		{
			x=s.indexOf(',');
			b=s.substr(0, x);
			s=s.substr(x + 1);
			if(document.getElementById(b))
			{
				hideOne(b, obj, showtxt, hidetxt);
			}
		}
	}
	else
	{
		if(document.getElementById(tid))
		{
			hideOne(tid, obj, showtxt, hidetxt);
		}
	}
}

// This function hides a single element based on ID
// This is used as a helper for hide()
function hideOne(oid, obj, showtxt, hidetxt)
{
    /*
	if (showtxt == "")
		showtxt = "Show";
	if (hidetxt == "")
		hidetxt = "Hide";
	*/
	document.getElementById(oid).style.display = 'none';
	
	if (obj && hidetxt != "")
	{
		if (obj.type == "button")
			obj.value = hidetxt;
		else
			obj.src = hidetxt;
	}
}


//This function enables all fields to make sure they are submitted with the form
function enableAll()
{
	for(var i = 0; i < document.forms[0].elements.length; i++)
	{
		//alert('Enabling ' + document.forms[0].elements[i].id);
		document.forms[0].elements[i].disabled = false;
	}
}


// This fucntion will Turn On the ability to enter data into the given field
 function TurnOn(elmid)
    {
        if(document.getElementById(elmid))
        {
            document.getElementById(elmid).className = 'formbox';
            if(document.getElementById(elmid).type == 'radio')
            {
                document.getElementById(elmid).className = '';
            }
            document.getElementById(elmid).disabled  = false;
            document.getElementById(elmid).readOnly  = false;
        }
    }


/**************/
/* BUILD MASK */
/**************/

// This function builds a mask based on the requested rooms
// and sets the form variable "searchmask" with the computed value
// This function REQUIRES the following input elements:
//      numadts
//      numchds
//      chd1age
//      chd2age
// There MUST be the same number of elements of each name
// (4 numadts, 4 numchds, 4 chd1age, 4 chd2age)
// This function returns true if it manages to build a mask, false if it fails.
function buildMask()
{
    var myMask, tempMask;
    var i, j;
    
    myMask = "";
    for (i = 0; i < document.main_form.numadts.length; i++)
    {
        tempMask = "";
        for (j = 1; j <= document.main_form.numadts[i].value; j++)
        {
            tempMask = tempMask + "A";
        }
        for (j = 1; j <= document.main_form.numchds[i].value; j++)
        {
            //Check that at least one adult was selected for this room
            if (document.main_form.numadts[i].value == 0)
            {
                if (document.main_form.allowzeroadts)
                {
                    if (document.main_form.allowzeroadts.value != 'Y')
                    {
                        alert("Please select at least one adult for room #" + (i + 1));
                        return false;
                    }
                }
                else
                {
                    alert("Please select at least one adult for room #" + (i + 1));
                    return false;
                }
            }
            tempMask = tempMask + "C";
            if (j == 1)
            {
                //First child
                if (document.main_form.chd1age[i].value == "0")
                {
                    alert("Please select child 1 age for room #" + (i + 1));
                    return false;
                }
                tempMask = tempMask + document.main_form.chd1age[i].value;
            }
            else if (j == 2)
            {
                //Second child
                if (document.main_form.chd2age[i].value == "0")
                {
                    alert("Please select child 2 age for room #" + (i + 1));
                    return false;
                }
                tempMask = tempMask + document.main_form.chd2age[i].value;
            }
            else if (j == 3)
            {
                //Third child
                if (document.main_form.chd3age[i].value == "0")
                {
                    alert("Please select child 3 age for room #" + (i + 1));
                    return false;
                }
                tempMask = tempMask + document.main_form.chd3age[i].value;
            }
			else if (j == 4)
            {
                //Third child
                if (document.main_form.chd3age[i].value == "0")
                {
                    alert("Please select child 4 age for room #" + (i + 1));
                    return false;
                }
                tempMask = tempMask + document.main_form.chd4age[i].value;
            }
			else if (j == 5)
            {
                //Third child
                if (document.main_form.chd3age[i].value == "0")
                {
                    alert("Please select child 5 age for room #" + (i + 1));
                    return false;
                }
                tempMask = tempMask + document.main_form.chd5age[i].value;
            }
        }
        if (tempMask != "")
        {
            if (i > 0)
                myMask = myMask + "/" + tempMask;
            else
                myMask = tempMask;
        }
    }
    //alert("Mask: " + myMask);
    document.main_form.searchmask.value = myMask;
    if (document.getElementById('numairadts'))
    {
        document.getElementById('numairadts').value = (myMask.length - myMask.replace(/A/g, '').length);
    }
    if (document.getElementById('numairchds'))
    {
        document.getElementById('numairchds').value = (myMask.length - myMask.replace(/C/g, '').length);
    }
    return true;
}


/**************/
/* BUILD SPECIAL MASK */
/**************/

// This function builds a mask based on the requested rooms
// and sets the form variable "searchmask" with the computed value
// This function REQUIRES the following input elements:
//      numadts
//      numspec
// There MUST be the same number of elements of each name
// (4 numadts, 4 numspec)
// This function returns true if it manages to build a mask, false if it fails.
function buildSpecMask()
{
    var myMask, tempMask;
    var i, j;
    
    myMask = "";
    for (i = 0; i < document.main_form.numspec.length; i++)
    {
        tempMask = "";
        for (j = 1; j <= document.main_form.numspec[i].value; j++)
        {
            tempMask = tempMask + "D";
        }
        for (j = 1; j <= document.main_form.numadts[i].value; j++)
        {
            //Check that at least one adult was selected for this room
            if (document.main_form.numspec[i].value == 0)
            {
                alert("Please select at least one diver for room #" + (i + 1));
                return false;
            }
            tempMask = tempMask + "A";
        }
        if (tempMask != "")
        {
            if (i > 0)
                myMask = myMask + "/" + tempMask;
            else
                myMask = tempMask;
        }
    }
    //alert("Mask: " + myMask);
    document.main_form.searchmask.value = myMask;
    return true;
}



/******************/
/* IS VALID EMAIL */
/******************/

//This function checks the validity of an email address using a regular expression
//Returns false if the email is invalid or blank, true if the email is valid and not blank
function isValidEmail(strEmail)
{
    //Regex from http://www.aspfaqs.com/webtech/052899-1.shtml
    var emailReg = "^[\\w-_\.+]*[\\w-_\.]\@([\\w-_]+\\.)+[\\w-_]+[\\w-_]$";
    var regex = new RegExp(emailReg);
    return regex.test(strEmail) && strEmail != '';
}

function IsInteger(strIn)
{
    var i = 0;
    for (i = 0; i < strIn.length; i++)
    {
        if (strIn.charAt(i) < "0" || strIn.charAt(i) > "9")
            return false;
    }
    
    return true;
}

/****************************/
/* REMOVE AMOUNT FORMATTING */
/****************************/
// This function removes all formatiing except for a decimal from An "Amount" text box
function unformatAmount(strAmt)
{
    
    strAmt = strAmt.replace('$','');
    strAmt = strAmt.replace(',','');
    strAmt = strAmt.replace(' ','');
    strAmt = strAmt.replace('£','');
    strAmt = strAmt.replace(/,/g,''); // regular exp for replacing multiple , for millions
    strAmt = strAmt.replace(/ /g,''); // regular exp for replacing multiple spaces
          
    return strAmt;
}

function ParseFloat(strIn)
{
    return parseFloat(unformatAmount(strIn));
}

/****************************/
/*       PASSENGERS         */
/****************************/


 

/**** Function will build Passport Issue Date and return value to passportissue text box if all values are available  ****/
function buildPassIssueDate(strid, strPaxNum)
{


     // Set the optional parameter if needed
     if (strPaxNum === undefined ) 
    {      strPaxNum = '';      }

    //Expects form elements:  selPassIssueMonth, selPassIssueDay, txtPassIssueYear to be present
    if(    document.getElementById('selPassIssueMonth' + strPaxNum).value != '' &&     document.getElementById('selPassIssueDay' + strPaxNum).value != '' &&     document.getElementById('txtPassIssueYear' + strPaxNum).value.replace('Year','').replace('YEAR').replace('year') != ''   )
    { //have full passport issue date!             
        //set element
       document.getElementById(strid).value = (document.getElementById('txtPassIssueYear' + strPaxNum).value + '-' + document.getElementById('selPassIssueMonth' + strPaxNum).value + '-' + document.getElementById('selPassIssueDay' + strPaxNum).value);
    }
    else
    {
        //don't have all fields to build full passport issue date!  
        document.getElementById(strid).value = '';
    }
    //alert( document.getElementById(strid).value);
}

/**** Function will build birthdate and return value to birthdate text box if all values are available  ****/
function buildBirthDate(strid, strPaxNum)
{


     // Set the optional parameter if needed
     if (strPaxNum === undefined ) 
    {      strPaxNum = '';      }

    //Expects form elements:  selDOBMonth, selDOBDay, txtDOBYear to be present
    if(    document.getElementById('selDOBMonth' + strPaxNum).value != '' &&     document.getElementById('selDOBDay' + strPaxNum).value != '' &&     document.getElementById('txtDOBYear' + strPaxNum).value.replace('Year','').replace('YEAR').replace('year') != ''   )
    { //have full birthdate!             
        //set element
       document.getElementById(strid).value = (document.getElementById('txtDOBYear' + strPaxNum).value + '-' + document.getElementById('selDOBMonth' + strPaxNum).value + '-' + document.getElementById('selDOBDay' + strPaxNum).value);
    }
    else
    {
        //don't have all fields to build full birthdate!
        document.getElementById(strid).value = '';
    }
    //alert( document.getElementById(strid).value);
}

/**** Validates that the Date entered is in a correct format ****/
 function validateDate(dat, obj, min, max, strfieldName)
{
    
    var dat2 = new Date(dat);
    var dat3 = new Date(min);
    var dat4 = new Date(max); //want to make max today if unspecified
    
    if (strfieldName == '' || !strfieldName)
    {
        strfieldName = ''
    }
    else
    {
        strfieldName = ' for the ' + strfieldName
    }
    
    //get max date if empty
    if (dat4 == '' || !dat4 || dat4 == null || dat4 == 'NaN' || isNaN(dat4))
    {
        dat4 = new Date(); // Today
    }
    
    
    if (dat2 == '' || !dat2 || dat2 == null || dat2 == 'NaN' || isNaN(dat2))
    {
        alert('Invalid Date Format. Please enter in the format dd MMM yyyy' + strfieldName);
        obj.focus();
        return false;
    }
    
    if (dat2 < dat3)
    {
        alert('Minimum date allowed is ' + (dat3.getMonth() + 1) + '/' + dat3.getDate() + '/' + dat3.getFullYear() + strfieldName);
        obj.focus();
        return false;
    }
   
   if (dat4 < dat2)
    {
        alert('Maximum date allowed is ' + (dat4.getMonth() + 1) + '/' + dat4.getDate() + '/' + dat4.getFullYear()  + strfieldName);
        obj.focus();
        return false;
    }
    
    
        obj.value = FormatDate(dat, 'dd MMM yyyy');
        return true;
    
}

/*
    FormatDate
    ----------
        Returns a string representation of the specified date object
        Input:
            dat     The date to format
            frm     The formatting string
                        yyyy - 4-digit year
                        yy   - 2-digit year
                        MM   - 2-digit month
                        MMM  - Short month (Jan, Feb etc.)
                        MMMM - Full month (January, February etc.)
                        d    - Date (without padding/zeros)
                        dd   - 2-digit day
*/
//Full month names
var fullmonths  = new Array(12);
fullmonths[0]   = 'January';
fullmonths[1]   = 'February';
fullmonths[2]   = 'March';
fullmonths[3]   = 'April';
fullmonths[4]   = 'May';
fullmonths[5]   = 'June';
fullmonths[6]   = 'July';
fullmonths[7]   = 'August';
fullmonths[8]   = 'September';
fullmonths[9]   = 'October';
fullmonths[10]  = 'November';
fullmonths[11]  = 'December';

//Short month names
var shortmonths = new Array(12);
shortmonths[0]  = 'Jan';
shortmonths[1]  = 'Feb';
shortmonths[2]  = 'Mar';
shortmonths[3]  = 'Apr';
shortmonths[4]  = 'May';
shortmonths[5]  = 'Jun';
shortmonths[6]  = 'Jul';
shortmonths[7]  = 'Aug';
shortmonths[8]  = 'Sep';
shortmonths[9]  = 'Oct';
shortmonths[10] = 'Nov';
shortmonths[11] = 'Dec';

function FormatDate(dat, frm)
{
    try
    {
    
        var strout;   
        if (!frm || frm == '')
        {
            frm = 'dd MMM yyyy'
        }
        
        strout = frm;
        
        dat = new Date(dat);
        if (dat == '' || !dat || dat == null || dat == 'NaN' || isNaN(dat)) 
        {        
            return '';
        }
        //Year
        //If before 1910, it should be 2000's
        if (dat.getFullYear() < 1910)
            dat.setFullYear(dat.getFullYear() + 100);
        //yyyy
        strout = strout.replace(/yyyy/g, dat.getFullYear());
        //yy
        strout = strout.replace(/yy/g, ('' + dat.getFullYear()).substring(2, 4));
        
        //Day
        //dd
        if (dat.getDate() < 10)
        {
            strout = strout.replace(/dd/g, '0' + dat.getDate());
        }
        else
        {
            strout = strout.replace(/dd/g, dat.getDate());
        }
        //d
        strout = strout.replace(/d/g, dat.getDate());
        
        //Month
        //MMMM
        strout = strout.replace(/MMMM/g, fullmonths[dat.getMonth()]);
        //MMM
        strout = strout.replace(/MMM/g, shortmonths[dat.getMonth()]);
        //MM
        if ((dat.getMonth() + 1) < 10)
        {
            strout = strout.replace(/MM/g, '0' + (dat.getMonth() + 1));
        }
        else
        {
            strout = strout.replace(/MM/g, dat.getMonth() + 1);
        }
        
        //Done
        return strout;
    }
    catch (ex)
    {
        alert('FormatDate() Failed: ' + ex.message);
    }
}

/**************************************************************/
/* Car Rental Service Pickup/Dropoff time functions */
/**************************************************************/
//For Car Only, when a car service radio button is selected, save the service and check if its Per24Hrs.
function checkPer24(dest, svc, grace)
{
	document.getElementById('maincarpickuploc' + dest).disabled = false;
    document.getElementById('maincarpickuptime' + dest).disabled = false;
    document.getElementById('maincardropoffloc' + dest).disabled = false;
    document.getElementById('maincardropofftime' + dest).disabled = false;

	document.getElementById('selectedcarsvc' + dest).value = svc;

	if (document.getElementById('per24Hrs_' + svc).value == 'Y')
	{
		compareTimes(dest, grace);
	}
	else
	{
		document.getElementById('maincarwarning' + dest).style.display = 'none';
		document.getElementById('carover24hrs' + dest).value = 'N';
	}
}

//For Car Only, when pickup or dropoff times changes, see if the currently selected Car service is Per24Hrs.
function getSelectedCarSvc(dest, grace)
{
	var car = document.getElementById('selectedcarsvc' + dest).value;

	if (document.getElementById('per24Hrs_' + car).value == 'Y')
	{
		compareTimes(dest, grace);
	}
}
	
//This function compares the times selected in the pickup and dropoff lists on various screens
//For car rental services that need to charge an extra day fee (which is almost universal)
//If the difference between pickup and dropoff time is greater than 24 hrs + an optional predefined grace period (from DefaultID = CarGracePeriod)
//Then a warning message is displayed, and if booked, an extra day is added to the duration.
function compareTimes(dest, grace)
{
    var t1, t2, hr, min;
    var t1diff, t2diff, total, limit;

    t1 = document.getElementById('maincarpickuptime' + dest).value;
    t2 = document.getElementById('maincardropofftime' + dest).value;

    t1diff = new Number();
    t2diff = new Number();

    total = new Number();
    limit = new Number();

	//the limit is how much time, in minutes, the dropoff time can be from the pickup time without charging an extra day.
	//1440 = 24 hours * 60.
	//The second number comes from the default value CarGracePeriod - any extra time a company allows after 24 hours.
    limit = 1440 + grace;

    //Get the total number of minutes from t1 until midnight
    hr = new Number(t1.split(":")[0]);
    min = new Number(t1.split(":")[1]);
    t1diff = 1440 - ((hr * 60) + min)

    //Get the total number of minutes from midnight until t2
    hr = new Number(t2.split(":")[0]);
    min = new Number(t2.split(":")[1]);
    t2diff = (hr * 60) + min

    //Get the total number of minutes between the pickup and dropoff times
    total = t1diff + t2diff

    //Is the total greater than the allowed amount of time? If yes, then display a warning
    if (total > limit)
    {
		document.getElementById('maincarwarning' + dest).style.display = 'block';
		document.getElementById('carover24hrs' + dest).value = 'Y';
    }
    else
    {
    	document.getElementById('maincarwarning' + dest).style.display = 'none';
    	document.getElementById('carover24hrs' + dest).value = 'N';
    }
}

/******************/
/* IS NUMBER KEY */
/******************/

//This function checks phone numbers,fax numbers, and zip codes to make sure only numbers are entered
function isNumberKey(evt)
{
     var charCode = evt.keyCode;

    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;

    return true;
}

/*****************/
/*  CHANGE PHONE */
/*****************/
//This function changes the phone formats depending on if this Country is US/CA or not
function changePhone()
{
    if(document.getElementById('selcountry').value != 'US' && document.getElementById('selcountry').value != 'CA' && document.getElementById('selcountry').value != '')
    {
        if (document.getElementById('usphonetd'))
        {
            document.getElementById('usphonetd').style.display = 'none';
            document.getElementById('nonusphonetd').style.display = '';
        }
        if (document.getElementById('usmobilephonetd'))
        {
            document.getElementById('usmobilephonetd').style.display = 'none';
            document.getElementById('nonusmobilephonetd').style.display = '';
        }
        if (document.getElementById('usfaxtd'))
        {
            document.getElementById('usfaxtd').style.display = 'none';
            document.getElementById('nonusfaxtd').style.display = '';
        }
        if(document.getElementById('usemergencyphonetd'))
        {
           document.getElementById('usemergencyphonetd').style.display = 'none';
           document.getElementById('nonusemergencyphonetd').style.display = '';
        }
        
        /* Now do customers */
        if (document.getElementById('custusphonetd'))
        {
            document.getElementById('custusphonetd').style.display = 'none';
            document.getElementById('custnonusphonetd').style.display = '';
        }
        if (document.getElementById('custusmobilephonetd'))
        {
            document.getElementById('custusmobilephonetd').style.display = 'none';
            document.getElementById('custnonusmobilephonetd').style.display = '';
        }
        if (document.getElementById('custusfaxtd'))
        {
            document.getElementById('custusfaxtd').style.display = 'none';
            document.getElementById('custnonusfaxtd').style.display = '';
        }
        if(document.getElementById('custusemergencyphonetd'))
        {
           document.getElementById('custusemergencyphonetd').style.display = 'none';
           document.getElementById('custnonusemergencyphonetd').style.display = '';
        }
    }
    else
    {
        if (document.getElementById('usphonetd'))
        {
            document.getElementById('nonusphonetd').style.display = 'none';
            document.getElementById('usphonetd').style.display = '';
        }
        if (document.getElementById('usmobilephonetd'))
        {
            document.getElementById('nonusmobilephonetd').style.display = 'none';
            document.getElementById('usmobilephonetd').style.display = '';
        }
        if (document.getElementById('usfaxtd'))
        {
            document.getElementById('nonusfaxtd').style.display = 'none';
            document.getElementById('usfaxtd').style.display = '';
        }
        if(document.getElementById('usemergencyphonetd'))
        {
           document.getElementById('usemergencyphonetd').style.display = '';
           document.getElementById('nonusemergencyphonetd').style.display = 'none';
        }
        
        /* Now do customers */
        if (document.getElementById('custusphonetd'))
        {
            document.getElementById('custnonusphonetd').style.display = 'none';
            document.getElementById('custusphonetd').style.display = '';
        }
        if (document.getElementById('custusmobilephonetd'))
        {
            document.getElementById('custnonusmobilephonetd').style.display = 'none';
            document.getElementById('custusmobilephonetd').style.display = '';
        }
        if (document.getElementById('custusfaxtd'))
        {
            document.getElementById('custnonusfaxtd').style.display = 'none';
            document.getElementById('custusfaxtd').style.display = '';
        }
        if(document.getElementById('custusemergencyphonetd'))
        {
           document.getElementById('custusemergencyphonetd').style.display = '';
           document.getElementById('custnonusemergencyphonetd').style.display = 'none';
        }
    }
}

/*******************/
/*  COUNTRY CHANGE */
/*******************/
//Function changes the display of state/province textbox or dropdown based on US address or not
//input of paxnNum 
//input of AddrType (MAIL or BILL)
function countryChangeMailBill(paxNum, strAddrType)
{
    if (strAddrType.toUpperCase() =='BILL')
    {
        if (
                document.getElementById('selbillcountry' + paxNum).value != 'US' 
                && document.getElementById('selbillcountry' + paxNum).value != ''
            )
        {
            document.getElementById('txtbillstate' + paxNum).style.display='';
            document.getElementById('selbillstate' + paxNum).style.display='none';
        } 
        else //US - show dropdown, not textbox
        {
            document.getElementById('selbillstate' + paxNum).style.display='';
            document.getElementById('txtbillstate' + paxNum).style.display='none';
        }
    }
        
    if (strAddrType.toUpperCase() =='MAIL')
    {
        if (
                document.getElementById('selcountry' + paxNum).value != 'US' 
                && document.getElementById('selcountry' + paxNum).value != ''
            )
        {
            document.getElementById('txtstate' + paxNum).style.display='';
            document.getElementById('selstate' + paxNum).style.display='none';
        } 
        else //US - show dropdown, not textbox
        {
            document.getElementById('selstate' + paxNum).style.display='';
            document.getElementById('txtstate' + paxNum).style.display='none';
        }
    }        
}

//Function changes the display of state/province textbox or dropdown based on US address or not
//input of paxnNum
function countryChange(paxNum) 
{ 
    if (
        (document.getElementById('selbillcountry' + paxNum) && document.getElementById('selbillstate' + paxNum)) 
        || 
        (document.getElementById('txtbillcountry' + paxNum)  && document.getElementById('txtbillstate' + paxNum))
        )
        {
            if (
                    document.getElementById('selbillcountry' + paxNum).value != 'US' 
                    && document.getElementById('selbillcountry' + paxNum).value != ''
                )
            {
                document.getElementById('txtbillstate' + paxNum).style.display='';
                document.getElementById('selbillstate' + paxNum).style.display='none';
            } 
            else //US - show dropdown, not textbox
            {
                document.getElementById('selbillstate' + paxNum).style.display='';
                document.getElementById('txtbillstate' + paxNum).style.display='none';
            }
        }
    if (
        (document.getElementById('selcountry' + paxNum) && document.getElementById('selstate' + paxNum)) 
        || 
        (document.getElementById('txtcountry' + paxNum)  && document.getElementById('txtstate' + paxNum))
        )
        {
            if (
                    document.getElementById('selcountry' + paxNum).value != 'US' 
                    && document.getElementById('selcountry' + paxNum).value != ''
                )
            {
                document.getElementById('txtstate' + paxNum).style.display='';
                document.getElementById('selstate' + paxNum).style.display='none';
            } 
            else //US - show dropdown, not textbox
            {
                document.getElementById('selstate' + paxNum).style.display='';
                document.getElementById('txtstate' + paxNum).style.display='none';
            }
        }        
       
}

//Function changes the display of state/province textbox or dropdown based on US address or not
//no input
function countryChange()
{ 
    if (
        (document.getElementById('selbillcountry') && document.getElementById('selbillstate')) 
        || 
        (document.getElementById('txtbillcountry')  && document.getElementById('txtbillstate'))
        )
        {
            if (
                    document.getElementById('selbillcountry').value != 'US' 
                    && document.getElementById('selbillcountry').value != ''
                )
            {
                document.getElementById('txtbillstate').style.display='';
                document.getElementById('selbillstate').style.display='none';
            } 
            else //US - show dropdown, not textbox
            {
                document.getElementById('selbillstate').style.display='';
                document.getElementById('txtbillstate').style.display='none';
            }
        }
    if (
        (document.getElementById('selcountry') && document.getElementById('selstate')) 
        || 
        (document.getElementById('txtcountry')  && document.getElementById('txtstate'))
        )
        {
            if (
                    document.getElementById('selcountry').value != 'US' 
                    && document.getElementById('selcountry').value != ''
                )
            {
                document.getElementById('txtstate').style.display='';
                document.getElementById('selstate').style.display='none';
            } 
            else //US - show dropdown, not textbox
            {
                document.getElementById('selstate').style.display='';
                document.getElementById('txtstate').style.display='none';
            }
        }        
    
}

/********/
/* IIF */
/********/
function Iif(bln, trueval, falseval)
{
    if (bln == true)
    {
        return trueval;
    }
    else
    {
        return falseval;
    }
}

/**********************/
/* IS VALID CHARACTER */
/**********************/

//This function field to make sure no Invalid Character (listed below) are being typed in.
function isValidChar(evt)
{        
    
    var charCode = evt.keyCode;
   
    /*--------EXCLUDE THE FOLLOWING CHAR CODES--------------
        ! " # $ % &                   = 33 to 38
         ( ) * +                      = 40 to 43
          /                           = 47 
         0 1 2 3 4  5 6 7 8 9         = 48 to 57
         : ; < = > ? @                = 58 to 64   
         [ \ ] ^ _ `                  = 91 to 96
         { | } ~                      = 123 to 126
     -------------------------------------------------------*/      
     //alert(charCode);
   
        if ((charCode >= 33 && charCode <= 38) ||(charCode >= 40 && charCode <= 43) || (charCode == 47) || (charCode >= 48 && charCode <= 57) || (charCode >= 58 && charCode <= 64) || (charCode >= 91 && charCode <= 96) || (charCode >= 123 && charCode <= 126) )
        {
         
            return false;
        }
    return true;
}



//<!-- Coded by Larry & Tim 10/28/04 -->
function BGNew(obj, new_style, message)
{ 
    obj.className = new_style; 
    window.status = message; 
}

//reloads the window if Nav4 resized
function MM_reloadPage(init)
{
    if (init==true) with (navigator)
    {
        if ((appName=="Netscape")&&(parseInt(appVersion)==4))
        {
            document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage;
        }
    }
    else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH)
        location.reload();
}
MM_reloadPage(true);

//v4.01
function MM_findObj(n, d)
{
    var p, i, x; 
    if(!d)
        d = document;
    if((p = n.indexOf("?")) > 0 && parent.frames.length)
    {
        d = parent.frames[n.substring(p + 1)].document;
        n = n.substring(0, p);
    }
    if(!(x = d[n]) && d.all)
        x = d.all[n];
    
    for(i = 0; !x && i < d.forms.length; i++)
        x = d.forms[i][n];
    for(i = 0; !x && d.layers && i < d.layers.length; i++)
        x = MM_findObj(n, d.layers[i].document);
    if(!x && d.getElementById)
        x = d.getElementById(n);
    
    //Done
    return x;
}

//v6.0
function MM_showHideLayers()
{
    var i, p, v, obj, args = MM_showHideLayers.arguments;
    for (i = 0; i < (args.length - 2); i += 3)
    {
        if ((obj=MM_findObj(args[i]))!=null)
        {
            v = args[i + 2];
            if (obj.style)
            {
                obj = obj.style;
                v = (v == 'show') ? 'visible' : (v == 'hide') ? 'hidden' : v;
            }
            obj.visibility = v;
        }
    }
}

function timeout()
{
    setTimeout("MM_showHideLayers('europe-menu','','hide','asia-menu','','hide','americas-menu','','hide','med-menu','','hide','sp-menu','','hide','cruises-menu','','hide');", 15000);
}//-->


// Validate Credit Card Number
function ValidateCC(sCC)
{
	var i, t1, t2, t3, t4;
		
	if (sCC.charAt(sCC.length) == 'X') {
		return false;	
	}
	if (sCC.length < 13) {
		return false;	
	}
		
	t1 = parseInt(sCC.charAt(sCC.length - 1));
	t2 = 0;
	t3 = 0;
		
	for (i = sCC.length - 1; i >= 1; i--){
	    t2 = parseInt(t2) + 1;
	    t4 = sCC.charAt(i - 1);
	    if (t2 % 2 == 0)
	        t3 = parseInt(t3) + parseInt(t4)
	    else {
	        t4 = parseInt(t4) * 2;
	        if (parseInt(t4) > 9) 
				t3 = parseInt(t3) + 1 + (parseInt(t4) - 10);
	        if (t4 <= 9)
				t3 = parseInt(t3) + parseInt(t4);
	    }
	}
	t2 = parseInt(t3) + parseInt(t1);
	if (t2 % 10 > 0) return false;
	if (t2 == 0) return false;
	return true;	
}


// Validate the card type from the card number prefix and length
function ValidateCCType(sCC, sType)
{
	var prefix;
	
	switch(sType)
	{
		case "MC":
			prefix = parseInt(sCC.substr(0,2));
			if( sCC.length == 16 && prefix >= 51 && prefix <= 55 ) 
				return true;
			break
		case "VI":
			if ( (sCC.length == 16 || sCC.length == 13) && sCC.charAt(0) == '4' )
				return true;
			break
		case "AX":
		case "MX":
			prefix = sCC.substr(0,2);
			if( sCC.length == 15 && (prefix == '34' || prefix == '37' ) )
				return true;
			break
		case "DS":
			prefix = sCC.substr(0,4);
			if( sCC.length == 16 && prefix == '6011') 
				return true;
			break
		case "DI":
			prefix = parseInt(sCC.substr(0,3));
			if( sCC.length == 14 && ((prefix >= 300 && prefix <= 305) || sCC.substr(0,2) == '36' || sCC.substr(0,2) == '38') ) 
				return true;
			break
		case "LA":
			if( sCC.length == 19 )
				return true;
		default:
			return false;
	}
	return false;
}





//All used in PKGRates
function buildQS()
{
    var iPreDur, iPostDur;
    var QS;
    var datIn, datOut;
    QS = "";
    iPreDur = 0;
    iPostDur = 0;
    
    //Pre/Post options
    if (document.getElementById('chkAirY'))
    {
        if (document.getElementById('chkAirY').checked)
            QS = QS + '&chkAir=Y';
        else
        {
            if (document.getElementById('chkAirG'))
            {
                if (document.getElementById('chkAirG').checked)
                    QS = QS + '&chkAir=Y';
            }
            else
                QS = QS + '&chkAir=N';
        }
    }
      
    if (document.getElementById('airfromcity'))
        QS = QS + '&airfromcity=' + document.getElementById('airfromcity').value;
    if (document.getElementById('airtocity'))
        QS = QS + '&airtocity=' + document.getElementById('airtocity').value;
    if (document.getElementById('airdateout'))
        QS = QS + '&airdateout=' + document.getElementById('airdateout').value;
    if (document.getElementById('airdateret'))
        QS = QS + '&airdateret=' + document.getElementById('airdateret').value;
    if (document.getElementById('aircabinclass'))
        QS = QS + '&aircabinclass=' + document.getElementById('aircabinclass').value;
    if (document.getElementById('aircarrier'))
        QS = QS + '&aircarrier=' + document.getElementById('aircarrier').value;
    if (document.getElementById('airrettocity'))
        QS = QS + '&airrettocity=' + document.getElementById('airrettocity').value;
    if (document.getElementById('airretfromcity'))
        QS = QS + '&airretfromcity=' + document.getElementById('airretfromcity').value;
    if (document.getElementById('airoutstopcity'))
        QS = QS + '&airoutstopcity=' + document.getElementById('airoutstopcity').value;
    if (document.getElementById('blockonly'))
        QS = QS + '&blockonly=' + document.getElementById('blockonly').value;
        
	if (document.getElementById('airpreference') && document.getElementById('airpreference').checked == true)
	{
	        QS = QS + '&airpreference=' + document.getElementById('airpreference').value;
	}

    //see if we need to extend StopOver due to pre- and -post options.        
    if(document.getElementById('preacc'))
    {
        if(document.getElementById('preaccdur').value != '0' && document.getElementById('preaccdur').value != '' && document.getElementById('preacc').checked)
        {
            iPreDur = parseInt(document.getElementById('preaccdur').value);
        }
    }
    if(document.getElementById('postacc'))
    {
        if(document.getElementById('postaccdur').value != '0' && document.getElementById('postaccdur').value != '' && document.getElementById('postacc').checked)
        {
            iPostDur = parseInt(document.getElementById('postaccdur').value);
        }
    }
    if (document.getElementById('airoutstopduration'))
        QS = QS + '&airoutstopduration=' + (parseInt(document.getElementById('airoutstopduration').value) + iPreDur);
    if (document.getElementById('airretstopcity'))
        QS = QS + '&airretstopcity=' + document.getElementById('airretstopcity').value;
    if (document.getElementById('airretstopduration'))
        QS = QS + '&airretstopduration=' + (parseInt(document.getElementById('airretstopduration').value) + iPostDur);
    if (document.getElementById('dtime'))
        QS = QS + '&dtime=' + document.getElementById('dtime').value;
    if (document.getElementById('atime'))
        QS = QS + '&atime=' + document.getElementById('atime').value;
    if (document.getElementById('airoffset'))
        QS = QS + '&airoffset=' + document.getElementById('airoffset').value;
    if (document.getElementById('numairadts'))
        QS = QS + '&numairadts=' + document.getElementById('numairadts').value;
    if (document.getElementById('numairchds'))
        QS = QS + '&numairchds=' + document.getElementById('numairchds').value;
    if (document.getElementById('airfaretype'))
        QS = QS + '&airfaretype=' + document.getElementById('airfaretype').value;
    if (document.getElementById('aircontract'))
        QS = QS + '&aircontract=' + document.getElementById('aircontract').value;
    if (document.getElementById('airmarket'))
        QS = QS + '&airmarket=' + document.getElementById('airmarket').value;
    
    //see about inner air
    if (document.getElementById('chkInnerAir'))
    {
        if (document.getElementById('chkInnerAir').checked)
        {//mark that we have inner air so STRES will pull airInfo from ProductCode
            QS = QS + '&innerair=Y';
        }
    }
    //Everything else always gets sent
    QS = QS + '&productcode=' + document.getElementById('productcode').value;
    //send over the plan/selectedservicegroup/itemnumber
    if (document.getElementById('txtItemNumber'))
        QS = QS + '&ItemNumber=' + document.getElementById('txtItemNumber').value;
    datIn = new Date();
    datIn.setTime(Date.parse(document.getElementById('tbCheckIn').value));
    QS = QS + '&tbCheckIn=' + datIn.getFullYear() + '-' + (datIn.getMonth() + 1) + '-' + datIn.getDate();
    datOut = new Date();
    datOut.setTime(Date.parse(document.getElementById('tbCheckOut').value));
    QS = QS + '&tbCheckOut=' + datOut.getFullYear() + '-' + (datOut.getMonth() + 1) + '-' + datOut.getDate();
    QS = QS + '&searchmask=' + document.getElementById('searchmask').value;
    QS = QS + '&SelectedSeq=' + document.getElementById('SelectedSeq').value;
    
    //Pre/Post options
    if(document.getElementById('preacc'))
    {
        if(document.getElementById('preaccdur').value != '0' && document.getElementById('preaccdur').value != '' && document.getElementById('preacc').checked)
        {
            QS = QS + '&preacc=' + document.getElementById('preacc').value;
            QS = QS + '&preaccduration=' + document.getElementById('preaccdur').value;
        }
    }
    if(document.getElementById('postacc'))
    {
        if(document.getElementById('postaccdur').value != '0' && document.getElementById('postaccdur').value != '' && document.getElementById('postacc').checked)
        {
            QS = QS + '&postacc=' + document.getElementById('postacc').value;
            QS = QS + '&postaccduration=' + document.getElementById('postaccdur').value;
        }
    }
    
    //Custom Headers and Footers
    if(document.getElementById('custom'))
    {
        if(document.getElementById('custom').value != '')
        {
            QS = QS + '&custom=' + document.getElementById('custom').value;
            QS = QS + '&customCode=' + document.getElementById('customCode').value;
        }
    }
    //Quote Currency
    if(document.getElementById('QC'))
    {
        if(document.getElementById('QC').value != '')
        {
            QS = QS + '&QC=' + document.getElementById('QC').value;
        }
    }
    //Shares
    if (document.getElementById('allowShares') && document.getElementById('chksharey'))
    {
        if (document.getElementById('allowShares').value == 'Y' && document.getElementById('chksharey').checked)
        {
            if (document.getElementById('rdosharem').checked)
            {
                if (document.getElementById('rdoshared'))
                {
                    if (document.getElementById('rdoshared').checked)
                        QS = QS + '&Shares=' + document.getElementsByName('numspec').item(0).value + 'M';
                    else
                        QS = QS + '&Shares=' + document.getElementsByName('numadts').item(0).value + 'M';
                }
                else
                {
                    QS = QS + '&Shares=' + document.getElementsByName('numadts').item(0).value + 'M';
                }
            }
            else
            {
                if (document.getElementById('rdoshared'))
                {
                    if (document.getElementById('rdoshared').checked)
                        QS = QS + '&Shares=' + document.getElementsByName('numspec').item(0).value + 'F';
                    else
                        QS = QS + '&Shares=' + document.getElementsByName('numadts').item(0).value + 'F';
                }
                else
                {
                    QS = QS + '&Shares=' + document.getElementsByName('numadts').item(0).value + 'F';
                }
            }
        }
    }
    
    //Check if has PostFlex
    if (document.getElementById('haspostflex') && document.getElementById('origretdate'))
    {
        if (document.getElementById('haspostflex').value == 'Y')
        {
            var datorig = new Date(document.getElementById('origretdate').value);
            var datret = new Date(document.getElementById('airdateret').value);
            var oneday = 1000 * 60 * 60 * 24;
            
	        if (datret.getTime() > datorig.getTime())
	        {
	            //Set the post flex duration
	            QS = QS + '&PostFlexDuration=' + parseInt(((datret.getTime() - datorig.getTime()) / oneday));
	        }
	    }
	    
	}
    
    //Return the QueryString    
    return QS;
}
function BuildVacBuilder()
{
    var QS;
    var numAdts, numChds, numRooms;
    var date1, date2, date3, date4;
    var oneday;
    
    var Months;
    
    Months = new Array(12);
    Months[0]  = "Jan";
    Months[1]  = "Feb";
    Months[2]  = "Mar";
    Months[3]  = "Apr";
    Months[4]  = "May";
    Months[5]  = "Jun";
    Months[6]  = "Jul";
    Months[7]  = "Aug";
    Months[8]  = "Sep";
    Months[9]  = "Oct";
    Months[10] = "Nov";
    Months[11] = "Dec";
    
    QS = '';
    numAdts = 0;
    numChds = 0;
    numRooms = 0;
    
    //Theme
    //QS = QS + '&Theme=[Theme]';
    //Trip Type
    if (document.getElementById('chkAirY'))
    {
        if (document.getElementById('chkAirY').checked)
        {
            QS = QS + '&chkAir=Y';
            QS = QS + '&trip_type=AIRFHTL';
            
            //Set the air input fields if we have Air
	        if (document.getElementById('cbOrigCity'))
	            document.getElementById('airfromcity').value = document.getElementById('cbOrigCity').value;
	        if (document.getElementById('cbcabin'))
	            document.getElementById('aircabinclass').value = document.getElementById('cbcabin').value;
	        if (document.getElementById('cbcarrier'))
	            document.getElementById('aircarrier').value = document.getElementById('cbcarrier').value;
	        if(document.getElementById('cbairfaretype'))
	        {
	            document.getElementById('airfaretype').value = document.getElementById('cbairfaretype').value;
	        }
        }
        else
        {
            QS = QS + '&chkAir=N';
            QS = QS + '&trip_type=HTL';
        }
    }
    if (document.getElementById('airfromcity'))
        QS = QS + '&airfromcity=' + document.getElementById('airfromcity').value;
    QS = QS + '&airtocity=' + document.getElementById('datespeccitycode1').value;
    QS = QS + '&airretfromcity=' + document.getElementById('datespeccitycode' + document.getElementById('numitindest').value).value;
    if (document.getElementById('airdateout'))
        QS = QS + '&airdateout=' + document.getElementById('airdateout').value;
    if (document.getElementById('aircabinclass'))
        QS = QS + '&aircabinclass=' + document.getElementById('aircabinclass').value;
    if (document.getElementById('aircarrier'))
        QS = QS + '&aircarrier=' + document.getElementById('aircarrier').value;
    if (document.getElementById('airoffset'))
        QS = QS + '&airoffset=' + document.getElementById('airoffset').value;
    if (document.getElementById('numairadts'))
        QS = QS + '&numairadts=' + document.getElementById('numairadts').value;
    if (document.getElementById('numairchds'))
        QS = QS + '&numairchds=' + document.getElementById('numairchds').value;
    if (document.getElementById('airfaretype'))
        QS = QS + '&airfaretype=' + document.getElementById('airfaretype').value;
    //ProductCode
    QS = QS + '&productcode=' + document.getElementById('productcode').value;

    //Destinations
    QS = QS + '&totaldest=' + document.getElementById('numitindest').value;
    date1 = new Date();
    
    //Get Departure date
    date1 = Date.parse(document.getElementById('txtitindepdate').value + ' 01:00:00');
    oneday = 1000 * 60 * 60 * 24;
    for (var i = 1; i <= document.getElementById('numitindest').value; i++)
    {
        QS = QS + '&destination' + i + '=' + document.getElementById('datespeccitycode' + i).value;
        
        //Get the dates
        date2 = new Date();
        date4 = date1;
        date4 = date4 + (oneday * parseInt(document.getElementById('datespeconday' + i).value));
        date4 = date4 - oneday;
        date2.setTime(date4);
        
        date3 = new Date();
        date4 = date1;
        date4 = date4 + (oneday * parseInt(document.getElementById('datespeconday' + i).value)) + (oneday * parseInt(document.getElementById('datespecseldest' + i).value));
        date4 = date4 - oneday;
        date3.setTime(date4);
        
        QS = QS + '&checkin' + i + '=' + date2.getDate() + ' ' + Months[date2.getMonth()] + ' ' + date2.getFullYear();
        QS = QS + '&checkout' + i + '=' + date3.getDate() + ' ' + Months[date3.getMonth()] + ' ' + date3.getFullYear();
        
        if (i > 1)
        {
            if (document.getElementById('datespecintertype' + (i-1)).value == 'TRA')
                QS = QS + '&radiointer' + i + '=rail';
            else
                QS = QS + '&radiointer' + i + '=airf'
        }
        if (i == document.getElementById('numitindest').value)
        {
            QS = QS + '&airdateret=' + date3.getDate() + ' ' + Months[date3.getMonth()] + ' ' + date3.getFullYear();
        }
    }
    
    //Num Rooms/Adults/Children
    for (i = 0; i < document.main_form.numadts.length; i++)
    {
        if (document.main_form.numadts[i].value != 0)
        {
            numRooms = numRooms + 1;
            QS = QS + '&NumAdts' + (i + 1) + '=' + document.main_form.numadts[i].value;
            numAdts = numAdts + ParseFloat(document.main_form.numadts[i].value);
            
            QS = QS + '&NumChds' + (i + 1) + '=' + document.main_form.numchds[i].value;
            numChds = numChds + ParseFloat(document.main_form.numchds[i].value);
            for (j = 1; j <= document.main_form.numchds[i].value; j++)
            {
                //Check that at least one adult was selected for this room
                if (document.main_form.numadts[i].value == 0)
                {
                    alert("Please select at least one adult for room #" + (i + 1));
                    return false;
                }
                if (j == 1)
                {
                    //First child
                    if (document.main_form.chd1age[i].value == "0")
                    {
                        alert("Please select child 1 age for room #" + (i + 1));
                        return false;
                    }
                    QS = QS + '&Chd1Age' + (i + 1) + '=' + document.main_form.chd1age[i].value;
                }
                else if (j == 2)
                {
                    //Second child
                    if (document.main_form.chd2age[i].value == "0")
                    {
                        alert("Please select child 2 age for room #" + (i + 1));
                        return false;
                    }
                    QS = QS + '&Chd2Age' + (i + 1) + '=' + document.main_form.chd2age[i].value;
                }
                 else if (j == 3)
                {
                    //Third child
                    if (document.main_form.chd3age[i].value == "0")
                    {
                        alert("Please select child 3 age for room #" + (i + 1));
                        return false;
                    }
                    QS = QS + '&Chd3Age' + (i + 1) + '=' + document.main_form.chd3age[i].value;
                }
            }
        }
    }
    QS = QS + '&NumRooms=' + numRooms;
    //NumAdts/NumChds
    QS = QS + '&NumAdts=' + numAdts;
    QS = QS + '&NumChds=' + numChds;
    
    //Send the Request
    return QS;
    //document.location.href = '[ResPath]/STWMain.aspx?Action=FITSeqList' + QS;
}
function setAir(strChecked)
{
    if (strChecked == 'Y')
    {
        document.getElementById('Air').style.display = 'block';
        if (document.getElementById('itindepdateair'))
        {
            document.getElementById('itindepdateair').style.display = 'block';
            document.getElementById('itindepdatenoair').style.display = 'none';
        }
    }
    else
    {
        document.getElementById('Air').style.display = 'none';
        if (document.getElementById('itindepdateair'))
        {
            document.getElementById('itindepdateair').style.display = 'none';
            document.getElementById('itindepdatenoair').style.display = 'block';
        }
    }
}
function UpdateUpgrades(strDate, strUpgradeText, strRedText, strInclText)
{
    var i;
    var strSeq;
    
    if (document.getElementsByName('upgrade_' + strDate).length > 0)
    {
        for (i = 0; i < document.getElementsByName('upgrade_' + strDate).length; i++)
        {
            if (document.getElementsByName('upgrade_' + strDate).item(i).id.indexOf('_') > 0)
            {
                //Get the Seq for this item first
                strSeq = document.getElementsByName('upgrade_' + strDate).item(i).id.split('_')[2];
                
                if (document.getElementById('upgrade_' + strSeq))
                {
                    if (ParseFloat(document.getElementsByName('upgrade_' + strDate).item(i).value) > 0)
                    {
                        //Greater than 0, add the "+"
                        if (strUpgradeText == null)
                            document.getElementById('upgrade_' + strSeq).innerHTML = '<b class="upgradetext">Upgrade from +$' + ParseFloat(document.getElementsByName('upgrade_' + strDate).item(i).value.replace(',','')) + '</b>';
                        else
                            document.getElementById('upgrade_' + strSeq).innerHTML = strUpgradeText.replace('[Upgrade]', ParseFloat(document.getElementsByName('upgrade_' + strDate).item(i).value.replace(',','')));
                    }
                    else if(ParseFloat(document.getElementsByName('upgrade_' + strDate).item(i).value) < 0)
                    {
                        //Less than 0, add the "-"
                        if (strRedText == null)
                            document.getElementById('upgrade_' + strSeq).innerHTML = '<b class="upgradetext">Reduction from -$' + -ParseFloat(document.getElementsByName('upgrade_' + strDate).item(i).value.replace(',','')) + '</b>';
                        else
                            document.getElementById('upgrade_' + strSeq).innerHTML = strRedText.replace('[Reduction]', -ParseFloat(document.getElementsByName('upgrade_' + strDate).item(i).value.replace(',','')));
                    }
                    else
                    {
                        //0 means this is included
                        if (strInclText == null)
                            document.getElementById('upgrade_' + strSeq).innerHTML = '(included)';
                        else
                            document.getElementById('upgrade_' + strSeq).innerHTML = strInclText.replace('[Price]', ParseFloat(document.getElementsByName('upgrade_' + strDate).item(i).value.replace(',','')));
                    }
                    
                    //Update the date for this Upgrade
                    if (document.getElementById('upgrade_date_' + strSeq))
                    {
                        document.getElementById('upgrade_date_' + strSeq).value = strDate;
                    }
                }
            }
        }
    }
}
function UpdateOtherDate()
{
    try
    {
        var datIn;
                
        var Months;
        
        Months = new Array(12);
        
        Months[0]  = "Jan";
        Months[1]  = "Feb";
        Months[2]  = "Mar";
        Months[3]  = "Apr";
        Months[4]  = "May";
        Months[5]  = "Jun";
        Months[6]  = "Jul";
        Months[7]  = "Aug";
        Months[8]  = "Sep";
        Months[9]  = "Oct";
        Months[10] = "Nov";
        Months[11] = "Dec";
        
        datIn = new Date();
        
        datIn.setTime(Date.parse(document.getElementById('txtotherdate').value));
        //Set Other Date to correct format
        document.getElementById('txtotherdate').value = datIn.getDate() + ' ' + Months[datIn.getMonth()] + ' ' + datIn.getFullYear();
        //Set Check-In
        document.getElementById('tbCheckIn').value = Months[datIn.getMonth()] + ' ' + datIn.getDate() + ', ' + datIn.getFullYear();
        //Add the number of days to get the correct Check-Out Date
        datIn.setDate(datIn.getDate() + [ProductNumDays]);
        
        //Set Check-Out
        document.getElementById('tbCheckOut').value = Months[datIn.getMonth()] + ' ' + datIn.getDate() + ', ' + datIn.getFullYear();
        
        //alert('CheckIn: ' + document.getElementById('tbCheckIn').value);
        //alert('Checkout: ' + document.getElementById('tbCheckOut').value);
    }
    catch (ex)
    {
        //alert('Error: ' + ex.message);
    }
}
function UpdateReturnDate()
{
    if (document.getElementById('chkAirY'))
    {
        try
        {
            var dat1, dat2, oneday;
            //var dat3;
            
            var Months;
            
            Months = new Array(12);
            
            Months[0]  = "Jan";
            Months[1]  = "Feb";
            Months[2]  = "Mar";
            Months[3]  = "Apr";
            Months[4]  = "May";
            Months[5]  = "Jun";
            Months[6]  = "Jul";
            Months[7]  = "Aug";
            Months[8]  = "Sep";
            Months[9]  = "Oct";
            Months[10] = "Nov";
            Months[11] = "Dec";
            
            oneday = 1000 * 60 * 60 * 24;
            
            //alert('tbCheckOut: ' + document.getElementById('tbCheckOut').value);
            dat1 = Date.parse(document.getElementById('tbCheckOut').value + ' 01:00:00');
            
            /*
            dat3 = new Date();
            dat3.setTime(dat1 + oneday);
            
            alert('Checkout + oneday: ' + dat3.toDateString());
            */
                        
            if (document.getElementById('postacc') != null)
            {
                if (document.getElementById('postacc').getAttribute('checked') != '')
                {
                    //alert('Updating the date, adding ' + document.getElementById('postaccdur').value + ' days to the date.');
                    dat1 = dat1 + oneday * (parseInt(document.getElementById('postaccdur').value));
                }
            }
            //dat1 = dat1 - oneday;
            dat2 = new Date();
            dat2.setTime(dat1);
            
            //alert('Checkout - oneday: ' + dat2.toDateString());
            document.getElementById('airdateret').value = dat2.getDate() + ' ' + Months[dat2.getMonth()] + ' ' + dat2.getFullYear();
        }
        catch (ex)
        {
            //alert('Error: ' + ex.message);
        }
    }
}
function UpdateOutboundDate()
{
    if (document.getElementById('chkAirY'))
    {
        try
        {
            //alert('1');
            var dat1, dat2, oneday;
            //alert('2');
            var Months;
            //alert('3');
            Months = new Array(12);
            //alert('4');
            Months[0]  = "Jan";
            Months[1]  = "Feb";
            Months[2]  = "Mar";
            Months[3]  = "Apr";
            Months[4]  = "May";
            Months[5]  = "Jun";
            Months[6]  = "Jul";
            Months[7]  = "Aug";
            Months[8]  = "Sep";
            Months[9]  = "Oct";
            Months[10] = "Nov";
            Months[11] = "Dec";
            //alert('5');
            oneday = 1000 * 60 * 60 * 24;

            //alert('tbCheckin: ' + document.getElementById('tbCheckIn').value);
            dat1 = Date.parse(document.getElementById('tbCheckIn').value + ' 01:00:00');
            
            if (document.getElementById('preacc') != null)
            {
                if (document.getElementById('preacc').getAttribute('checked') != '')
                {
                    //alert('Updating the date, subtracting ' + document.getElementById('preaccdur').value + ' days to the date.');
                    dat1 = dat1 - (oneday * parseInt(document.getElementById('preaccdur').value));
                }
            }
            
            //Check if we need to subtract the air offset from the date
            if (document.getElementById('subtractairoffset'))
            {
                if (document.getElementById('subtractairoffset').value == 'Y' && document.getElementById('airoffset').value != '' && document.getElementById('airoffset').value != '0')
                    dat1 = dat1 - (oneday * parseInt(document.getElementById('airoffset').value));
            }
            
            dat2 = new Date();
            dat2.setTime(dat1);
            
            document.getElementById('airdateout').value = dat2.getDate() + ' ' + Months[dat2.getMonth()] + ' ' + dat2.getFullYear();
        }
        catch (ex)
        {
            //alert('Error: ' + ex.message);
        }
    }
}
function SetDefaultCarrier()
{
    var sdefaultcarrier;
    var sairportlist;
    var sairport;
    var i = 0;

    sdefaultcarrier = document.getElementById('defaultcarrier').value.toUpperCase();
    //alert('default carrier: ' + sdefaultcarrier);
    if (sdefaultcarrier == '')
    {
        return;
        //no default carrier, exit
    }
    sairport = document.getElementById('cbOrigCity').value.toUpperCase();
    //alert('selected airport: ' + sairport);
    if (sairport == '')
    {
        return;
        //no departure city selected.
    }
    sairportlist = document.getElementById('defaultcarriercities').value.toUpperCase();
    //alert('default carrier cities: ' + sairportlist);
    if (sairportlist.indexOf(sairport) >= 0)
    {
    //default the carrier and exit.
        //document.getElementById('cbcarrier').options.value = sairport;
        for (i = 0;i < document.getElementById('cbcarrier').options.length-1; i++)
        {
            if (document.getElementById('cbcarrier').options[i].value == sdefaultcarrier)
            {
                document.getElementById('cbcarrier').options.selectedIndex = i;
                return;
            }
        }        
        //alert('after setting airport: ' + document.getElementById('cbcarrier').value);
    }
    else
    {
        document.getElementById('cbcarrier').options.selectedIndex = 0;//any
    }
    //done!
}

function GetPageHeight()
{
    try
    {
        if (window.innerHeight && window.scrollMaxY) // Firefox
        {
            pageHeight = window.innerHeight + window.scrollMaxY;
        }
        else if (document.body.scrollHeight > document.body.offsetHeight) // all but Explorer Mac
        {
            pageHeight = document.body.scrollHeight;
        }
        else // works in Explorer 6 Strict, Mozilla (not FF) and Safari
        {
            pageHeight = document.body.offsetHeight + document.body.offsetTop;
        }
        
        //Done
        return pageHeight;
    }
    catch (ex)
    {
        //There was an error
        //alert('Error: \n' + ex.description);
    }
}
function GetPageWidth()
{
    try
    {
        if (window.innerHeight && window.scrollMaxY) // Firefox
        {
            pageWidth = window.innerWidth + window.scrollMaxX;
        }
        else if (document.body.scrollHeight > document.body.offsetHeight) // all but Explorer Mac
        {
            pageWidth = document.body.scrollWidth;
        }
        else // works in Explorer 6 Strict, Mozilla (not FF) and Safari
        {
            pageWidth = document.body.offsetWidth + document.body.offsetLeft;
        }
        
        //Done
        return pageWidth;
    }
    catch (ex)
    {
        //There was an error
        //alert('Error: \n' + ex.description);
    }
}

function ShowOverlay(tid)
{
    try
    {
        /*
            -Create the backdrop
            -Show the backdrop
            -Show the requested element
            -Center the requested element
        */
        
        if (!document.getElementById('divbackdrop'))
        {
            //Create a new backdrop div
            var t = document.createElement('div');
            t.id = 'divbackdrop';
            t.style.opacity = '.75';
            t.style.filter = 'alpha(opacity=75)';
            t.style.position = 'absolute';
            t.style.backgroundColor = '#FFFFFF';
            t.innerHTML = '&nbsp;';
            t.style.display = 'none';
            t.style.zIndex = 100;
            document.body.appendChild(t);
        }
        
        var b = document.getElementById('divbackdrop')
        b.style.display = 'block';
        b.style.width = GetPageWidth() + 'px';
        b.style.height = GetPageHeight() + 'px';
        b.style.left = 0;//GetScrollX();
        b.style.top = 0;//GetScrollY();
        
        CenterDisplay(tid);
        document.getElementById(tid).style.display = 'block';
        document.getElementById(tid).style.zIndex = 200;
        
        HideElement('APPLET', tid);
        HideElement('SELECT', tid);
    }
    catch (ex)
    {
        //There was an error
        //alert('Overlay(' + tid + ') Failed: \n' + ex.description);
    }
}

function HideOverlay(tid)
{
    try
    {
        document.getElementById('divbackdrop').style.display = 'none';
        document.getElementById(tid).style.display = 'none';
        
        ShowElement('APPLET');
        ShowElement('SELECT');
    }
    catch (ex)
    {
        //There was an error
        //alert('HideOverlay(' + tid + ') Failed: \n' + ex.description);
    }
}


/*
    HideElement:
    ------------
        Hides the specified element type if it is found under the calendar div.
        Required for IE6 (and lower) to hide Select objects
        Input:
            strElement        The tag of the elements to hide (Usually "SELECT" or "APPLET")
            strID             The ID of the elementthatis being shown above the strElement elements
        Example:
            HideElement('APPLET', 'calid')
*/
function HideElement(strElement, strId)
{
  if( ie )
  {
    if (strId == null)
        strId = calid;
    var e = document.getElementById(strId);
    for(i = 0; i < document.all.tags(strElement).length; i++)
    {
      obj = document.all.tags(strElement)[i];
      if(!obj || !obj.offsetParent)
      {
        continue;
      }

      //Find the element's offsetTop and offsetLeft relative to the BODY tag.
      objLeft   = obj.offsetLeft;
      objTop    = obj.offsetTop;
      objParent = obj.offsetParent;

      while(objParent.tagName.toUpperCase() != "BODY" && objParent.offsetParent)
      {
        objLeft  += objParent.offsetLeft;
        objTop   += objParent.offsetTop;
        objParent = objParent.offsetParent;
        //Check for the ID that is being shown above the strElement elements
        //If the strElement is part of the strId then don't hide it
        if (objParent.id == strId)
        {
            return;
        }
      }

      objHeight = obj.offsetHeight;
      objWidth  = obj.offsetWidth;

      if((e.offsetLeft + e.offsetWidth) <= objLeft);
      else if((e.offsetTop + e.offsetHeight) <= objTop);
      else if(e.offsetTop >= (objTop + objHeight));
      else if(e.offsetLeft >= (objLeft + objWidth));
      else
      {
        obj.style.visibility = "hidden";
      }
    }
  }
}

/*
    ShowElement:
    ------------
        Shows elements that were hidden using "HideElement".
        Input:
            strElement        The tag of the elements to show (Usually "SELECT" or "APPLET")
*/
function ShowElement(strElement)
{
  if(ie)// && document.getElementById(calid).style.display != 'none')
  {
    for(i = 0; i < document.all.tags(strElement).length; i++)
    {
      obj = document.all.tags(strElement)[i];

      if(!obj || !obj.offsetParent)
      {
        continue;
      }

      obj.style.visibility = "";
    }
  }
}



/****************************************************************************************************************8/
/*
Script Name: Javascript Cookie Script
Author: Public Domain, with some modifications
Script Source URI: http://techpatterns.com/downloads/javascript_cookies.php
Version 1.1.1
Last Update: 4 October 2007

Changes:
1.1.1 fixes a problem with Get_Cookie that did not correctly handle case
where cookie is initialized but it has no "=" and thus no value, the 
Get_Cookie function generates a NULL exception. This was pointed out by olivier, thanks

1.1.0 fixes a problem with Get_Cookie that did not correctly handle
cases where multiple cookies might test as the same, like: site1, site

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  
*/

// this fixes an issue with the old method, ambiguous values 
// with this test document.cookie.indexOf( name + "=" );

// To use, simple do: Get_Cookie('cookie_name'); 
// replace cookie_name with the real cookie name, '' are required
function GetCookie( check_name ) {
	// first we'll split this cookie up into name/value pairs
	// note: document.cookie only returns name=value, not the other components
	var a_all_cookies = document.cookie.split( ';' );
	var a_temp_cookie = '';
	var cookie_name = '';
	var cookie_value = '';
	var b_cookie_found = false; // set boolean t/f default f
	
	for ( i = 0; i < a_all_cookies.length; i++ )
	{
		// now we'll split apart each name=value pair
		a_temp_cookie = a_all_cookies[i].split( '=' );
		
		
		// and trim left/right whitespace while we're at it
		cookie_name = a_temp_cookie[0].replace(/^\s+|\s+$/g, '');
	
		// if the extracted name matches passed check_name
		if ( cookie_name == check_name )
		{
			b_cookie_found = true;
			// we need to handle case where cookie has no value but exists (no = sign, that is):
			if ( a_temp_cookie.length > 1 )
			{
				cookie_value = unescape( a_temp_cookie[1].replace(/^\s+|\s+$/g, '') );
			}
			// note that in cases where cookie is initialized but no value, null is returned
			return cookie_value;
			break;
		}
		a_temp_cookie = null;
		cookie_name = '';
	}
	if ( !b_cookie_found ) 
	{
		return null;
	}
}

/*
only the first 2 parameters are required, the cookie name, the cookie
value. Cookie time is in milliseconds, so the below expires will make the 
number you pass in the Set_Cookie function call the number of days the cookie
lasts, if you want it to be hours or minutes, just get rid of 24 and 60.

Generally you don't need to worry about domain, path or secure for most applications
so unless you need that, leave those parameters blank in the function call.
*/
function SetCookie( name, value, expires, path, domain, secure ) {
	// set time, it's in milliseconds
	var today = new Date();
	today.setTime( today.getTime() );
	// if the expires variable is set, make the correct expires time, the
	// current script below will set it for x number of days, to make it
	// for hours, delete * 24, for minutes, delete * 60 * 24
	if ( expires )
	{
		expires = expires * 1000 * 60 * 60 * 24;
	}
	//alert( 'today ' + today.toGMTString() );// this is for testing purpose only
	var expires_date = new Date( today.getTime() + (expires) );
	//alert('expires ' + expires_date.toGMTString());// this is for testing purposes only

	document.cookie = name + "=" +escape( value ) +
		( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) + //expires.toGMTString()
		( ( path ) ? ";path=" + path : "" ) + 
		( ( domain ) ? ";domain=" + domain : "" ) +
		( ( secure ) ? ";secure" : "" );
}

// this deletes the cookie when called
function DeleteCookie( name, path, domain ) {
	if ( GetCookie( name ) ) document.cookie = name + "=" +
			( ( path ) ? ";path=" + path : "") +
			( ( domain ) ? ";domain=" + domain : "" ) +
			";expires=Thu, 01-Jan-1970 00:00:01 GMT";
}


function QueryString(strKey){try{var qs=window.location.search.substring(1).split("&");
for(var i=0;i<qs.length;i++)if(qs[i].split("=")[0].toUpperCase()==strKey.toUpperCase())return qs[i].split("=")[1];return''}
catch(ex){return''}}


// includeURL() - Function to get the URL content using XMLHttpRequest.
//                This function will prevent the whole page to do round trip.
//          url - URL Path to request
//          req - Method Request (GET or POST)
//        param - Parameters (For POST method only) 
function includeURL(url,req,param)
{
	var urlRequest = false; //variable to hold ajax object
	if (!req){req='GET';}
	else {req=req.toUpperCase;}
	
	if (window.XMLHttpRequest) // if Mozilla, Safari etc
		urlRequest = new XMLHttpRequest()
	else if (window.ActiveXObject) // if IE
		{ 
		try {
			urlRequest = new ActiveXObject("Msxml2.XMLHTTP")
			} 
		catch (e)
			{
			try{
				urlRequest = new ActiveXObject("Microsoft.XMLHTTP")
				}
			catch (e){}
			}
		}
	else
		return false;
	if (!urlRequest && typeof XMLHttpRequest != 'undefined')
	   urlRequest = new XMLHttpRequest();

	if (urlRequest){ 
		if (req!='POST' || req=='')
		{
		   urlRequest.open('GET', url, false);  
		   urlRequest.send(null);
		}
		else
		{
		 urlRequest.open('POST', url, false);  
		 urlRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		}
	   return urlRequest;
	   }
}
//
function displayURL(request)
{
	if (request.readyState == 4 && (request.status==200 || window.location.href.indexOf("http")==-1))
        document.write(request.responseText);
}
//
function incURL_ID(url,id,mnu) //Syntax: incURL_ID(<url>,<id you want to display>,<container ID>)
{
    var nDiv=document.createElement('div');     // create dummy element
    nDiv.style.display ='none';                 // hide the element
    nDiv.setAttribute('id','idIncURL');         // set element attributes
    var s = includeURL(url,'GET','');                    // get the URL HTML content
    s=s.responseText;                           // get HTTPResponse in Text format
    nDiv.innerHTML = s;                         // get the inner HTML
    document.body.appendChild(nDiv);            // append to the body
    document.getElementById(mnu).innerHTML = document.getElementById(id).innerHTML;
    document.body.removeChild(nDiv); //remove the element
}

function removeHTMLTags(text){
 	if(text){
 		var txt = text;
 	 	txt = txt.replace(/&(lt|gt);/g, function (m, p1){
 		 	return (p1 == "lt")? "<" : ">";
 		});
 		var r = txt.replace(/<\/?[^>]+(>|$)/g, "");
 		return r;
 	}	
}

function strReplaceAll(text,r,n)
{
    return text.replace(new RegExp(r,'g'),n);
}

function trim(text)
{
	return text.replace(/^\s+|\s+$/g,'');
}

function alltrim(text)
{
	text=trim(text);
	text=text.replace(/  /g,' ');
	return text
}


function ltrim(text)
{
	return text.replace(/^\s+/,'');
}
function rtrim(text)
{
	return text.replace(/\s+$/,'');
}

function isEven(n){return !(n % 2);}
function isOdd(n) {return !isEven(n);}

function addDropListOption(id, text, value)
// Function to add OPTION element to dropdown list
{
	var eOption = document.createElement("OPTION");
	var obj=document.getElementById(id);
	eOption.text = text;
	eOption.value = value;
	obj.options.add(eOption);
}

function TravelMonths(id,num)
//Function to populate dropdown list
{
	var numMo=num;					//Number of Months
	var dat=new Date();			// Today
	var yr=dat.getFullYear();	// Current Year
	var mo=dat.getMonth();		// Current Month
	var mth=fullmonths[mo];		// Month Description
	var intStart = mo;
	var ktr=0;
	var ctr=0;
	var m=0;
	var y=0;

	for (var i=0; i < numMo;++i){
		m=ktr+intStart;
		mth=fullmonths[m];
		if (m==12){ctr=1; yr=yr+1;ktr=0;intStart=0;};
		var txt=mth + ' ' + yr;
		var val=m +'/1/'+yr;		
		addDropListOption(id, txt, val);
		++ktr;
	}

}

function Left(str, n){
	if (n <= 0)
	    return "";
	else if (n > String(str).length)
	    return str;
	else
	    return String(str).substring(0,n);
}

function Right(str, n){
    if (n <= 0)
       return "";
    else if (n > String(str).length)
       return str;
    else {
       var iLen = String(str).length;
       return String(str).substring(iLen, iLen - n);
    }
}

function RemoveAllChildNodes(id)
{
	var idHolder = document.getElementById(id); 
    while(idHolder.hasChildNodes()){idHolder.removeChild(idHolder.lastChild);}
}

function ShowOnCursor(strid, evt, strDirection)
{
    //Moves an element around as the mouse moves.  
    //Used to show a div pop-up on hover 
    //Pass "direction"  Right or Left to have the div open to the right or to the left
    show(strid);
    if (strDirection == 'left')
    {
       document.getElementById(strid).style.left = GetMouseX(evt) + 10;
       document.getElementById(strid).style.top = GetMouseY(evt) + 10;
    }
    else
    {
        document.getElementById(strid).style.left = GetMouseX(evt) + 10;
        document.getElementById(strid).style.top = GetMouseY(evt) + 10;
    }
}

/*
//	Embeds a media player at the location where the script is called.
//	Pass the URL to the media file to be embedded (audio or video)
*/
function embedPlayer(strMediaURL, strID, intWidth, intHeight)
{ 
    //Get Operating System 
    var isWin = navigator.userAgent.toLowerCase().indexOf("windows") != -1;
    var objTypeTag;
    
    if (isWin)
    {
		//Use MIME type application/x-mplayer2
        visitorOS = "Windows";
        //The MIME type to load the WMP plugin in non-IE browsers on Windows
		objTypeTag = "application/x-mplayer2"; 
    }
    else
    {
        //Use MIME type audio/mpeg, audio/x-wav, etc.
        visitorOS = "Other";
        //The MIME type for Macs and Linux 
        objTypeTag = "audio/mpeg"
    }
    
    //Set default height and width
    //Width 280 is the WMP minimum
    //Min Height (for audio) = 45 (WMP controls) + 24 (WMP status bar)
    if (!intWidth || intWidth < 280)
    {
		intWidth = 280;
    }
    if (!intHeight || intHeight < 69)
    {
		intHeight = 69;
    }
    
    //Set default ID
    if (!strID || strID == "")
    {
		strID = "divMediaPlayer";
    }

	//Write the embedded player in a div
    document.writeln("<div id='" + strID + "' name='" + strID + "'>");  
    document.writeln("<object width='" + intWidth + "' height='" + intHeight + "'>"); 
    document.writeln("<param name='type' value='" + objTypeTag + "'>");
    document.writeln("<param name='src' value='" + strMediaURL + "'>");
    document.writeln("<param name='autostart' value='0'>");
    document.writeln("<param name='showcontrols' value='1'>");
    document.writeln("<param name='showstatusbar' value='1'>");
    
    //Firefox and Opera for Windows require both autostart and autoplay
    //[TBD]
    document.writeln("<embed src ='" + strMediaURL + "' type='" + objTypeTag + "' autoplay='false' autostart='0' width='" + intWidth + "' height='" + intHeight + "' controller='1' showstatusbar='1' bgcolor='#ffffff'></embed>"); 

    document.writeln("</object>");
    document.writeln("</div>");
}

