/*
    JavaScript Calendar
    (c) 2008 Softrip LLC
    
    Shows a calendar in an absolutely-positioned div
*/

//Checks if the specified style is defined
function CheckStyle(strclass)
{
    try
    {
        var rules;

        if (typeof document.styleSheets != "undefined")
        {
            var cssSheets = document.styleSheets;
            
            for (var i = 0; i < cssSheets.length; i++)
            {
                //using IE or FireFox/Standards Compliant
                rules =  (typeof cssSheets[i].cssRules != "undefined") ? cssSheets[i].cssRules : cssSheets[i].rules;

                for (var j = 0; j < rules.length; j++)
                {
                    try
                    {
                        if (rules[j].selectorText != '' && rules[j].selectorText.toUpperCase() == strclass.toUpperCase())
                        {
                            return true;
                        }
                    }
                    catch (ex) {}
                }
            }
        }

        //Done
        return false;
    }
    catch (ex)
    {
        //There was an error
        //alert('CheckStyle(' + strclass + ') Failed: \n' + ex);
        return false;
    }
}

//Initialize calendar - Put generic calendar div
var calid = 'mycal';
var blnshow = false;
var defaultformat = 'dd MMM yyyy';
var ie = document.all;
//The calendar
document.write('<div id="' + calid + '" style="z-index: 100; width: 150px; padding: 2px 2px 2px 2px; display: none; position: absolute;" onclick="blnshow=true;"></div>');
//The tooltip
document.write('<div id="calinfo" class="cal_info" nowrap>&nbsp;</div>');

//Default calendar styles - Only build if not defined by some other styles
document.write('<style type="text/css">');
if(!CheckStyle('.cal_calendar'))        document.write('.cal_calendar     {cursor: default; background-color: #EEEEF0; border: 1px solid #000000; font-size: 11px; font-family: Arial, Helvetica, sans-serif;}')

if(!CheckStyle('.cal_weekday'))         document.write('.cal_weekday      {background-color: #AAAAAA; border-bottom: 1px solid #000000; text-align: center;}');

if(!CheckStyle('.cal_month'))
{
    document.write('.cal_month        {background-color: #9999FF; color: #FFFFFF; border-bottom: 1px solid #000000; text-align: left;}');
    document.write('.cal_month a      {background-color: #6666FF; padding: 0px 1px 0px 2px; color: #FFFFFF; font-weight: bold; text-decoration: none;}');
}

if(!CheckStyle('.cal_year'))
{
    document.write('.cal_year         {background-color: #9999FF; color: #FFFFFF; border-bottom: 1px solid #000000; text-align: right;}');
    document.write('.cal_year  a      {background-color: #6666FF; padding: 0px 1px 0px 2px; color: #FFFFFF; font-weight: bold; text-decoration: none;}');
}

if(!CheckStyle('.cal_nodate'))          document.write('.cal_nodate       {color: #AAAAAA; text-align: center; font-style: italic; text-decoration: line-through;}');
if(!CheckStyle('.cal_date'))            document.write('.cal_date         {cursor: pointer; text-align: center;}');
if(!CheckStyle('.cal_dateselected'))    document.write('.cal_dateselected {border: 1px solid #000000; cursor: pointer; text-align: center; font-weight: bold;}');

if(!CheckStyle('.cal_info')) document.write('.cal_info         {z-index: 200; background-color: #FFFF99; padding: 2px 2px 2px 2px; display: none; position: absolute; text-align: center; border: 1px solid #000000; font-size: 11px; font-family: Arial, Helvetica, sans-serif;}');
document.write('</style>');

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

//Add event handler to close the calendar when user clicks outside the calendar div
document.onclick = 
function hidecal2()
{
    if (!blnshow)
	    HideCalendar();
	blnshow = false;
}
/*
    ShowCalendar
    ------------
        Shows a calendar in an absolutely-positioned div on the screen
        Input:
            //evt             The event (used for mouse positioning)
            strsourceid		The id of the object that requested the calendar (usually a datepicker icon)
            strtargetid     The id of the object in which to put the selected date
            strformat       The formatting string to use for date display - Also the format in which the date will be entered in the target element (Default = defaultformat)
            intmonths       The number of months to show on the calendar (Default = 1)
            datmin          The minimum valid date (Default = 1 Jan 1900)
            datmax          The maximum valid date (Default = 1 Jan 2050)
            strdefault      The default selected date (Default = Today's Date)
*/

function ShowCalendar(strsourceid, strtargetid, strformat, intmonths, datmin, datmax, strdefault)
{
    try
    {
        //Variables
        var strval;
        var datstart = new Date();
        
        if (strsourceid && !document.getElementById(strsourceid))
        {
            strsourceid = strsourceid.id;
        }
        
        if (strtargetid && !document.getElementById(strtargetid))
        {
            strtargetid = strtargetid.id;
        }
        
        //Default variables and setup/initialization
        //Number of months to show
        if (!intmonths)
            intmonths = 2;
        if (!strformat || strformat == '')
        //Date format
            strformat = defaultformat;
        //Minimum selectable date
        if (datmin)
            datmin = new Date(datmin);
        else
            datmin = new Date('1 Jan 1900');
        //Maximum selectable date
        if (datmax)
            datmax = new Date(datmax);
        else
            datmax = new Date('1 Jan 3000');
        
        //Which month(s) to show?
        if (blnshow)
        {
            if (strdefault && strdefault != '')
            {
                //No date selected (in the target), use the default date
                datstart.setTime(Date.parse(strdefault));
            }
            else
            {
                //No date selected and no default, use today's date
                datstart = new Date();
            }
        }
        else
        {   
            if (!document.getElementById(strtargetid))
            {
                //alert('0');
                if (strdefault != '' && strdefault)
                {
                    //No date selected (in the target), use the default date
                    datstart.setTime(Date.parse(strdefault));
                }
                else
                {
                    //No date selected and no default, use today's date
                    datstart = new Date();
                }
            }
            else
            {
                //Start on the month of the currently selected date 
                datstart = new Date(document.getElementById(strtargetid).value);
                if (!datstart || isNaN(datstart))
                {
                    if (strdefault && strdefault != '')
                    {
                        //No date selected (in the target), use the default date
                        datstart.setTime(Date.parse(strdefault));
                        if (isNaN(datstart))
                        {
                            datstart = new Date();
                        }
                    }
                    else
                    {
                        //No date selected and no default, use today's date
                        datstart = new Date();
                    }
                }
            }
        }
        
        var strcal = '';
        var dat;
        
        //Build the calendar
        var i;
        //For each month requested
        for (i = 0; i < intmonths; i++)
        {
            dat = new Date();
            //Add i months to the original date
            datstart.setHours(0, 0, 0, 0);
            dat.setTime(datstart.getTime());
            dat.setDate(1);
            dat.setHours(0, 0, 0, 0);
            dat.setTime(dat.getTime() + (i * 32 * 24 * 3600 * 1000));
            
            if (i > 0)
            {
                if (i == (intmonths-1)) 
                {
                    //Last month, hide date controls, show close link.
                    strcal += BuildMonth(strtargetid, dat, datstart, strformat, datmin, datmax, false, strsourceid, intmonths, true);
                }
                else
                {
                    strcal += BuildMonth(strtargetid, dat, datstart, strformat, datmin, datmax, false, strsourceid, intmonths);
                }
                
            }
            else if (i == 0 && (i == intmonths-1))
            {
                //First and only month, show date controls and we only display one month
                strcal += BuildMonth(strtargetid, dat, datstart, strformat, datmin, datmax, true, strsourceid, intmonths, true);
            }
            else
            {
                //First month, show date controls and we only display multiple months
                strcal += BuildMonth(strtargetid, dat, datstart, strformat, datmin, datmax, true, strsourceid, intmonths);
            }
        }
        
        
        //Put the calendar in the div
        document.getElementById(calid).innerHTML = strcal;
        
        //Show the div
        var leftpos;
        var toppos;
        
        //Calculate position based on source object (usually a button or icon)
        var aTag = document.getElementById(strsourceid);
        
        leftpos = document.getElementById(strsourceid).offsetLeft;
        toppos  = document.getElementById(strsourceid).offsetTop + parseInt(document.getElementById(strsourceid).offsetHeight);
        
        //Loop through the DOM to get the absolute position
        do
        {
            aTag     = aTag.offsetParent;
            leftpos	+= aTag.offsetLeft;
            toppos  += aTag.offsetTop;
        } while (aTag.tagName != "BODY");
        
        //Put the div
        document.getElementById(calid).style.display  = 'block';
        document.getElementById(calid).style.position = 'absolute';
        document.getElementById(calid).style.left = (leftpos + 2) + 'px';
        document.getElementById(calid).style.top  = (toppos  + 2) + 'px';
        
        //Hide selects and applets (IE6 only)
        HideElement('SELECT');
        HideElement('APPLET');
        
        //Done
        blnshow = !blnshow;
    }
    catch (ex)
    {
        //There was an error
        alert('ShowCalendar() Error:\n' + ex.message);
    }
}

/*
    BuildMonth
    ----------
        Returns an HTML table representing a calendar
        Input:
            strtargetid         The id of the object in which to put the selected date
            datstart            The date for which to show a calendar (usually the first date in the current month)
            datsel              The currently-selected date
            strformat           The format in which to show all dates
            datmin              The minimum valid date
            datmax              The maximum valid date
            blnshowcontrols     Indicates whether to show date controls
            strsourceid			
            intmonths			
            blnshowcloselast	Indicates whether to show the Close button/link
*/
function BuildMonth(strtargetid, datstart, datsel, strformat, datmin, datmax, blnshowcontrols, strsourceid, intmonths, blnshowcloselast)
{
    try
    {
        var datcurr;
        var datnext;
        var datnext;
        var strout;
        var blnsamemonth;
        var i;
        
        //Initialization and setup
        strout = '';
        
        if (datsel)
        {
            datsel = new Date(datsel);
        }
        datstart = new Date(datstart);
        datmin   = new Date(datmin);
        datmax   = new Date(datmax);
        
        //Start at the first of the selected month
        datcurr = new Date();
        datstart.setHours(0, 0, 0, 0);
        datcurr.setTime(datstart.getTime());
        datcurr.setDate(1);
        
        if (blnshowcontrols)
        {
            //Previous month
            datprev = new Date();
            datcurr.setHours(0, 0, 0, 0);
            datprev.setTime(datcurr.getTime());
            datprev.setDate(1);
            datprev.setHours(0, 0, 0, 0);
            datprev.setTime(datprev.getTime() - (1000 * 3600 * 24 * ((31 * (intmonths - 1)) + 15)));
            datprev.setDate(1);
            datprev.setHours(0, 0, 0, 0);
            //Next month
            datnext = new Date();
            datcurr.setHours(0, 0, 0, 0);
            datnext.setTime(datcurr.getTime());
            datnext.setDate(1);
            datnext.setHours(0, 0, 0, 0);
            datnext.setTime(datnext.getTime() + (1000 * 3600 * 24 * ((31 * (intmonths - 1)) + 32)));
            datnext.setDate(1);
            datnext.setHours(0, 0, 0, 0);
        }
        
        //Open table
        strout += '<table cellpadding="0" cellspacing="0" border="0" class="cal_calendar" width="100%">';
        
        //Month header
        strout += '<tr><td colspan="7" width="100%"><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr>';
        if (blnshowcontrols)
        {
            strout += '<td class="cal_month">';
            strout += '<a href="javascript:{}" onclick="blnshow=true;ShowCalendar(\'' + strsourceid + '\', \'' + strtargetid + '\', \'' + strformat + '\', \'' + intmonths + '\', \'' + FormatDate(datmin,'dd MMM yyyy') + '\', \'' + FormatDate(datmax,'dd MMM yyyy') + '\', \'' + FormatDate(datprev, 'dd MMM yyyy') + '\');" onmouseout="CalInfo(\'\', event);" onmousemove="CalInfo(\'' + FormatDate(datprev, 'MMMM yyyy') + '\', event);" style="cursor: pointer;">&lt;</a>';
            strout += '</td>';
        }
        else
        {
            strout += '<td class="cal_month">&nbsp;</td>';
        }
        strout += '<td width="68" class="cal_month" style="text-align: center;">&nbsp;' + FormatDate(datcurr, 'MMMM') + '&nbsp;</td>';
        if (blnshowcontrols)
        {
            strout += '<td class="cal_month">';
            strout += '<a href="javascript:{}" onclick="blnshow=true;ShowCalendar(\'' + strsourceid + '\', \'' + strtargetid + '\', \'' + strformat + '\', \'' + intmonths + '\', \'' + FormatDate(datmin,'dd MMM yyyy') + '\', \'' + FormatDate(datmax,'dd MMM yyyy') + '\', \'' + FormatDate(datnext, 'dd MMM yyyy') + '\');" onmouseout="CalInfo(\'\', event);" onmousemove="CalInfo(\'' + FormatDate(datnext, 'MMMM yyyy') + '\', event);" style="cursor: pointer;">&gt;</a>';
            strout += '</td>'; 
        }
        else
        {
            strout += '<td class="cal_month">&nbsp;</td>';
        }
        
        if (blnshowcontrols)
        {
            //Previous year
            datprev = new Date();
            datprev.setDate(1);
            datprev.setHours(0, 0, 0, 0);
            datcurr.setHours(0, 0, 0, 0);
            datprev.setTime(datcurr.getTime() - (1000 * 3600 * 24 * 360));
            datprev.setDate(1);
            datprev.setHours(0, 0, 0, 0);
            //Next year
            datnext = new Date();
            datnext.setDate(1);
            datnext.setHours(0, 0, 0, 0);
            datnext.setTime(datcurr.getTime() + (1000 * 3600 * 24 * 370));
            datnext.setDate(1);
            datnext.setHours(0, 0, 0, 0);
        }
        
        //Year header
        strout += '<td class="cal_year">';
        if (blnshowcontrols)
        {
            strout += '<a href="javascript:{}" onclick="blnshow=true;ShowCalendar(\'' + strsourceid + '\', \'' + strtargetid + '\', \'' + strformat + '\', \'' + intmonths + '\', \'' + FormatDate(datmin,'dd MMM yyyy') + '\', \'' + FormatDate(datmax,'dd MMM yyyy') + '\', \'' + FormatDate(datprev, 'dd MMM yyyy') + '\');" onmouseout="CalInfo(\'\', event);" onmousemove="CalInfo(\'' + FormatDate(datprev, 'MMMM yyyy') + '\', event);" style="cursor: pointer;">&lt;</a>';
        }
        strout += '&nbsp;' + FormatDate(datcurr, 'yyyy') + '&nbsp;';
        if (blnshowcontrols)
        {
            strout += '<a href="javascript:{}" onclick="blnshow=true;ShowCalendar(\'' + strsourceid + '\', \'' + strtargetid + '\', \'' + strformat + '\', \'' + intmonths + '\', \'' + FormatDate(datmin,'dd MMM yyyy') + '\', \'' + FormatDate(datmax,'dd MMM yyyy') + '\', \'' + FormatDate(datnext, 'dd MMM yyyy') + '\');" onmouseout="CalInfo(\'\', event);" onmousemove="CalInfo(\'' + FormatDate(datnext, 'MMMM yyyy') + '\', event);" style="cursor: pointer;">&gt;</a>';
        }
        strout += '</td>';
        strout += '</tr></table></td></tr>';
        
        //Weekday header
        strout += '<tr><td class="cal_weekday">S</td><td class="cal_weekday">M</td><td class="cal_weekday">T</td><td class="cal_weekday">W</td><td class="cal_weekday">T</td><td class="cal_weekday">F</td><td class="cal_weekday">S</td></tr>'
        
        //Loop through the days of the week before the first day of the month to place the first of the month on the right weekday
        strout += '<tr>';
        i = 0;
        if (datcurr.getDay() != 0)
        {
            for (i = 0; i < datcurr.getDay(); i++)
            {
                strout += '<td>&nbsp;</td>';
            }
        }
        
        //For each date in the month
        blnsamemonth = true;
        while (blnsamemonth)
        {
            if (i % 7 == 0)
            {
                //Next row - New week
                strout += '</tr><tr>';
            }
            
            if (FormatDate(datcurr, "yyyy-MM-dd") > FormatDate(datmax, "yyyy-MM-dd") || FormatDate(datcurr, "yyyy-MM-dd") < FormatDate(datmin, "yyyy-MM-dd"))
            {
                //Date is outside the allowed bounds
                strout += '<td class="cal_nodate" width="14%" ' + ((FormatDate(datcurr, "yyyy-MM-dd") == FormatDate(new Date(), "yyyy-MM-dd"))?' style="color: red;" ':'') + '>' + datcurr.getDate() + '</td>';
            }
            else
            {
                //Date is within the allowed bounds
                if (datsel && FormatDate(datcurr, "yyyy-MM-dd") == FormatDate(datsel, "yyyy-MM-dd"))
                {
                    if (FormatDate(datcurr,'yyyy-MM-dd') == FormatDate(document.getElementById(strtargetid).value,'yyyy-MM-dd'))
                    {
                        //Selected date
                        strout += '<td class="cal_dateselected" width="14%" ' + ((FormatDate(datcurr, "yyyy-MM-dd") == FormatDate(new Date(), "yyyy-MM-dd"))?' style="color: red;" ':'') + ' onmouseout="CalInfo(\'\', event);" onmousemove="CalInfo(\'' + FormatDate(datcurr, strformat) + '\', event);" onclick="blnshow=true;document.getElementById(\'' + strtargetid + '\').value=\'' + FormatDate(datcurr, strformat) + '\';if (document.getElementById(\'' + strtargetid + '\').onblur) {document.getElementById(\'' + strtargetid + '\').onblur();} if (document.getElementById(\'' + strtargetid + '\').onchange) {document.getElementById(\'' + strtargetid + '\').onchange();} HideCalendar();">' + datcurr.getDate() + '</td>';
                    }
                    else
                    {
                        //Not selected date
                        strout += '<td class="cal_date" width="14%" ' + ((FormatDate(datcurr, "yyyy-MM-dd") == FormatDate(new Date(), "yyyy-MM-dd"))?' style="color: red;" ':'') + ' onmouseout="CalInfo(\'\', event);" onmousemove="CalInfo(\'' + FormatDate(datcurr, strformat) + '\', event);" onclick="blnshow=true;document.getElementById(\'' + strtargetid + '\').value=\'' + FormatDate(datcurr, strformat) + '\';if (document.getElementById(\'' + strtargetid + '\').onblur) {document.getElementById(\'' + strtargetid + '\').onblur();} if (document.getElementById(\'' + strtargetid + '\').onchange) {document.getElementById(\'' + strtargetid + '\').onchange();} HideCalendar();">' + datcurr.getDate() + '</td>';
                    }
                }
                else
                {
                    if (FormatDate(datcurr,'yyyy-MM-dd') == FormatDate(document.getElementById(strtargetid).value,'yyyy-MM-dd'))
                    {
                        //Selected date
                        strout += '<td class="cal_dateselected" width="14%" ' + ((FormatDate(datcurr, "yyyy-MM-dd") == FormatDate(new Date(), "yyyy-MM-dd"))?' style="color: red;" ':'') + ' onmouseout="CalInfo(\'\', event);" onmousemove="CalInfo(\'' + FormatDate(datcurr, strformat) + '\', event);" onclick="blnshow=true;document.getElementById(\'' + strtargetid + '\').value=\'' + FormatDate(datcurr, strformat) + '\';if (document.getElementById(\'' + strtargetid + '\').onblur) {document.getElementById(\'' + strtargetid + '\').onblur();} if (document.getElementById(\'' + strtargetid + '\').onchange) {document.getElementById(\'' + strtargetid + '\').onchange();} HideCalendar();">' + datcurr.getDate() + '</td>';
                    }
                    else
                    {
                        //Not selected date
                        strout += '<td class="cal_date" width="14%" ' + ((FormatDate(datcurr, "yyyy-MM-dd") == FormatDate(new Date(), "yyyy-MM-dd"))?' style="color: red;" ':'') + ' onmouseout="CalInfo(\'\', event);" onmousemove="CalInfo(\'' + FormatDate(datcurr, strformat) + '\', event);" onclick="blnshow=true;document.getElementById(\'' + strtargetid + '\').value=\'' + FormatDate(datcurr, strformat) + '\';if (document.getElementById(\'' + strtargetid + '\').onblur) {document.getElementById(\'' + strtargetid + '\').onblur();} if (document.getElementById(\'' + strtargetid + '\').onchange) {document.getElementById(\'' + strtargetid + '\').onchange();} HideCalendar();">' + datcurr.getDate() + '</td>';
                    }
                }
            }
            
            //Next day
            datnext = new Date();
            //we are adding 26 hours instead of 24 because of daylight saving time.
            //adding 26 hours help make sure we jump fully into the next day so that 
            //if daylight saving time, -+1 hours would still put us in the next day.   must reset to midnight below.
            datcurr.setHours(0, 0, 0, 0);
            datnext.setTime(datcurr.getTime() + (1000 * 3600 * 26));
            //reset to midnight.
            datnext.setHours(0, 0, 0, 0);
            //Is this date in the same month?
            if (datnext.getMonth() != datcurr.getMonth())
            {
                blnsamemonth = false;
            }
            //we are adding 26 hours instead of 24 because of daylight saving time.
            //adding 26 hours help make sure we jump fully into the next day so that 
            //if daylight saving time, -+1 hours would still put us in the next day.   must reset to midnight below.
            datcurr.setHours(0, 0, 0, 0);
            datcurr.setTime(datcurr.getTime() + (1000 * 3600 * 26));
            //reset to midnight.
            datcurr.setHours(0, 0, 0, 0);
            
            //Next Date in the month
            i++;
        }  
        //Close last row
        strout += '</tr>';
        
        //"Close" button
        if (blnshowcloselast)
        {
        //only show close button if blnshowcloselast is true.
            strout += '<tr><td colspan="7" align="center"><a href="javascript:{}" style="cursor: pointer;" onmousemove="CalInfo(\'Close Calendar\', event);" onmouseout="CalInfo(\'\', event);" onclick="HideCalendar();">[Close]</td></tr>';
        }
        //Close table
        strout += '</table>';
        
        //Done
        return strout;
    }
    catch (ex)
    {
        //There was an error
        if (ex.message)
            alert('BuildMonth() Error:\n' + ex.message);
        else
            alert('BuildMonth() Error:\n' + ex);
    }
}

/*
    HideElement:
    ------------
        Hides the specified element type if it is found under the calendar div.
        Required for IE6 (and lower) to hide Select objects
        Input:
            strElement        The tag of the elements to hide (Usually "SELECT" or "APPLET")
*/
function HideElement(strElement)
{
  if( ie )
  {
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

      while(objParent.tagName.toUpperCase() != "BODY")
      {
        objLeft  += objParent.offsetLeft;
        objTop   += objParent.offsetTop;
        objParent = objParent.offsetParent;
      }

      objHeight = obj.offsetHeight;
      objWidth  = obj.offsetWidth;

      if((document.getElementById(calid).offsetLeft + document.getElementById(calid).offsetWidth) <= objLeft);
      else if((document.getElementById(calid).offsetTop + document.getElementById(calid).offsetHeight) <= objTop);
      else if(document.getElementById(calid).offsetTop >= (objTop + objHeight));
      else if(document.getElementById(calid).offsetLeft >= (objLeft + objWidth));
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
  if(ie)
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

/*
    HideCalendar:
    -------------
        Hides the calendar and restores Selects and Applets to their original visibility
*/
function HideCalendar()
{
    document.getElementById(calid).style.display = 'none';
    CalInfo('', null);
    ShowElement('SELECT');
    ShowElement('APPLET');
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
                        dd   - 2-digit year

function FormatDate(dat, frm)
{
    var strout;
    
    if (!frm)
    {
        frm = 'dd MMM yyyy';
    }
    
    strout = frm;
    
    dat = new Date(dat);
    
    //Year
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
*/
/*
    GetMouseX
    ---------
        Returns the current X-Position of the mouse
*/
function GetMouseX(evt)
{
    try
    {
        if (ie)
        {
            if (!evt)
                evt = window.event;
            if (evt)
                return (ie ? (evt.clientX + document.body.scrollLeft)  : evt.pageX);
        }
        else
        {
            if (evt.pageX)
                return evt.pageX;
            else if (evt.clientX)
               return evt.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
            else
                return null;
        }
    }
    catch (ex)
    {
    }
}


/*
    GetMouseX
    ---------
        Returns the current X-Position of the mouse
*/
function GetMouseY(evt)
{
    try
    {
        if (ie)
        {
            if (!evt)
                evt = window.event;
            if (evt)
                return (ie ? (evt.clientY + document.body.scrollTop)  : evt.pageY);
        }
        else
        {
            if (evt.pageY)
                return evt.pageY;
            else if (evt.clientY)
               return evt.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
            else
                return null;
        }
    }
    catch (ex)
    {
    }
}


/*
    CalInfo
    ----------
        Sets the inner HTML of the calendar info div (= tooltip)
        Input:
            strmessage    The message to display - If blank, the tooltip will be hidden
*/
function CalInfo(strmessage, evt)
{
    if (strmessage == '')
    {
        //No message - Hide the tooltip
        document.getElementById('calinfo').style.display = 'none';
    }
    else
    {
        //There is a message - Show the tooltip
        document.getElementById('calinfo').innerHTML        = strmessage;
        document.getElementById('calinfo').style.position   = 'absolute';
        
        document.getElementById('calinfo').style.left = (GetMouseX(evt) + 12) + 'px';
        document.getElementById('calinfo').style.top  = (GetMouseY(evt) + 12) + 'px';
        
        document.getElementById('calinfo').style.display = 'block';
    }
    //Set the status message
    SetStatus(strmessage);
}


/*
   SetStatus
   ---------
    Sets the window status message
    Input:
        strmessage      The message to display
*/
function SetStatus(strmessage)
{
    window.status = strmessage;
}





/*
 
//      GET ABSOLUTE POSITION OF ELEMENT
//        else
//        {
//            //Calculate position based on source object (usually a button or icon)
//            var aTag = document.getElementById(strsourceid);
//            
//            leftpos = document.getElementById(strsourceid).offsetLeft;
//            toppos  = document.getElementById(strsourceid).offsetTop + parseInt(document.getElementById(strsourceid).offsetHeight);
//            
//            //Loop through the DOM to get the absolute position
//            do
//            {
//	            aTag     = aTag.offsetParent;
//	            leftpos	+= aTag.offsetLeft;
//	            toppos  += aTag.offsetTop;
//            } while (aTag.tagName != "BODY");
//        }

*/