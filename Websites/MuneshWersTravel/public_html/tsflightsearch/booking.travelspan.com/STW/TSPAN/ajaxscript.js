var arrAJAXResponse = new Array();
var xmlhttpobject;
var citycodehelpercallby;//which ID last call the attachcitycodehelper()
var existingEvt;

//write the select to the page.
if (!document.getElementById('citycodehelper'))
{ document.write('<select name="citycodehelper" id="citycodehelper" style="display:none;overflow:hidden;" onchange="setcitycode();" onblur="setcitycode();" onkeydown="setselectedhelpercity(event);"></select>'); }


existingEvt = document.onclick;

function hidecitycodehelper() {
    console.log("Trying to hide citycodehelper");
    if (document.getElementById('citycodehelper'))
    { document.getElementById('citycodehelper').style.display = 'none'; }
    //setcitycode();
    if (existingEvt) { existingEvt(); }
}

function setcitycode() {
    if (citycodehelpercallby) {
        if (document.getElementById('citycodehelper').selectedIndex >= 0) {
            citycodehelpercallby.value = document.getElementById('citycodehelper').value;

            //Return focus to input that called citycodehelper
            citycodehelpercallby.focus();
        }
        //citycodehelpercallby.style.borderBottomWidth = '1px';
        hidecitycodehelper();
    }
}
function checkArrowDown(e) {
    var keyCode;
    if (e) {
        keyCode = e.keyCode;
    }
    else {
        keyCode = e.which;
    }
    if (keyCode == 40) {
        document.getElementById('citycodehelper').focus();
    }
}
function setselectedhelpercity(e) {
    var keyCode;
    if (e) { keyCode = e.keyCode; }
    else { keyCode = e.which; }
    if (keyCode == 9) {
        //select the current item.
        document.getElementById('citycodehelper').selectedIndex = document.getElementById('citycodehelper').options.selectedIndex;
        //turn the key into a enter key
        keyCode = 13;
    }
    if (keyCode == 13) {
        setcitycode();
        document.getElementById('citycodehelper').style.display = 'none';
    }
    else if (keyCode == 40 || keyCode == 38) {
        //do nothing...user just go up(40) and down(38)
    }
    else {
        //give control back to the current textbox
        citycodehelpercallby.focus();
    }
}
function attachcitycodehelper(tid, datatype) {

    var txtid, helpid, x, y, z, h, w, dom, strXML;
    citycodehelpercallby = tid
    x = getX(tid);
    y = getY(tid);
    h = tid.offsetHeight;
    w = tid.offsetWidth;
    helpid = document.getElementById('citycodehelper');
    dom = null;
    //get the xml

    strXML = xmlhttpResponse(datatype);

    var i, j, seektext, seeklen, city, code, country, total, maxcitylen, strtemp, pos, lpos, rpos, allcitiesarr;
    seektext = tid.value.toUpperCase();
    seeklen = seektext.length;
    total = 0;
    maxcitylen = 0;
    helpid.options.length = 0;
    helpid = document.getElementById('citycodehelper');
    begdate = new Date();
    pos = 0;
    lpos = 0;
    rpos = 0;

    ///SEARCHING WITH STRING
    pos = strXML.toUpperCase().indexOf('|' + seektext, pos);
    if (pos = -1) { pos = strXML.toUpperCase().indexOf('**' + seektext, pos); }
    if (pos = -1) { pos = strXML.toUpperCase().indexOf(seektext, pos); }

    while (pos > -1) {
        lpos = strXML.lastIndexOf('**', pos);
        rpos = strXML.indexOf('**', pos);

        if (lpos > -1 && rpos > lpos) {
            lpos = lpos + 2;
            strtemp = strXML.substr(lpos, (rpos - lpos));
            if (strtemp.split('|').length >= 3) {
                code = strtemp.split('|')[0];
                city = strtemp.split('|')[1].replace(/&amp;/g, '&');
                country = strtemp.split('|')[2].replace(/&amp;/g, '&');
                //match add to options.
                    var option = new Option(city, code);
                    option.onclick = function () {
                        hidecitycodehelper();
                    };
                    try
                    { helpid.add(option);}
                    catch(e)
                    { helpid.add(option, null)}
                total += 1;
                //if (city.length > maxcitylen){ maxcitylen = city.length }
            }
        }
        if (rpos > 0) {
            pos = strXML.toUpperCase().indexOf('|' + seektext, rpos);
            if (pos = -1) { pos = strXML.toUpperCase().indexOf('**' + seektext, rpos); }
            if (pos = -1) { pos = strXML.toUpperCase().indexOf(seektext, rpos); }
        } else {
            //exit while
            pos = -1
        }
    }

    if (total > 0) {
        helpid.style.display = '';
        helpid.selectedIndex = -1;
        helpid.setAttribute('size', 10);
        //tid.style.borderBottomWidth = '0px';
        //helpid.style.borderTopWidth = '0px';
        helpid.style.left = (x) + 'px';
        helpid.style.top = (y + h) + 'px';
        helpid.style.position = 'absolute';

        if (total === 1) {
            helpid.selectedIndex = 0;
        }
    }
}

function getX(tid) {
    var x, op;
    x = 0;
    while (tid.offsetParent) {
        op = tid.offsetParent;	// Get container parent
        x = x + op.offsetLeft;	// Add this element's offset x in pixels
        tid = tid.offsetParent;	// Update current container
    }
    return x;
}
function getY(tid) {
    var y, op;
    y = 0;
    while (tid.offsetParent) {
        op = tid.offsetParent;	// Get container parent
        y = y + op.offsetTop;		// Add this element's offset y in pixels
        tid = tid.offsetParent;	// Update current container
    }
    return y;
}


//AJAX stuff here.
function GetXMLHTTPObject() {
    var xmlHTTPobj;
    xmlHTTPobj = null;
    //if (xmlhttpobject && xmlhttpobject  == 'undefined')
    //{return;/*object already recreated.*/}

    if (window.XMLHttpRequest) {
        try { xmlHTTPobj = new XMLHttpRequest; }
        catch (d) { }
    }
    else if (window.ActiveXObject) {
        for (var i = 0, xmlp; xmlp = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"][i++];) {
            try { xmlHTTPobj = new ActiveXObject(xmlp); break }
            catch (d) { }
        }
    }
    return xmlHTTPobj;
}

function xmlhttpResponse(strRequestType) {
    var strResponse;
    strResponse = '';
    //check if we already the the response for this RequestType.
    strResponse = arrAJAXResponse[strRequestType];
    if (strResponse && strResponse != '' && strResponse != 'undefined') {
        //we already have it.
        return strResponse;
    }
    xmlhttpobject = GetXMLHTTPObject();
    //if (!xmlhttpobject || xmlhttpobject == 'undefined')
    //{ alert('failed to get xmlhttpobject');return '';  }

    switch (strRequestType.toUpperCase()) {
        case 'FROMCITYCODE':
            //alert('open and sending request');
            xmlhttpobject.open("POST", '/stw/AJAX.aspx', false);
            xmlhttpobject.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xmlhttpobject.send('Action=GETFROMCITYCODES');
            //xmlhttpobject.onreadystatechange = new function statechangehandler()
            //{
            if (xmlhttpobject.readyState == 4 && xmlhttpobject.status == 200) {
                //alert('data is ready');
                strResponse = xmlhttpobject.responseText;
                //call function to build dropdown.
                //attachcitycodehelper(citycodehelpercallby);

                //save the result for this call
                arrAJAXResponse[strRequestType] = xmlhttpobject.responseText;
            }
            //}
            break;
        case 'TOCITYCODE':
            //alert('open and sending request');
            xmlhttpobject.open("POST", '/stw/AJAX.aspx', false);
            xmlhttpobject.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xmlhttpobject.send('Action=GETTOCITYCODES');
            //xmlhttpobject.onreadystatechange = new function statechangehandler()
            //{
            if (xmlhttpobject.readyState == 4 && xmlhttpobject.status == 200) {
                //alert('data is ready');
                strResponse = xmlhttpobject.responseText;
                //call function to build dropdown.
                //attachcitycodehelper(citycodehelpercallby);

                //save the result for this call
                arrAJAXResponse[strRequestType] = xmlhttpobject.responseText;
            }
            //}
            break;
        case 'PRODUCTCODE':
            //alert('open and sending request');
            xmlhttpobject.open("POST", '/stw/AJAX.aspx?Theme=TSPAN', false);
            xmlhttpobject.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xmlhttpobject.send('Action=GETPRODUCTCODES');
            //xmlhttpobject.onreadystatechange = new function statechangehandler()
            //{
            if (xmlhttpobject.readyState == 4 && xmlhttpobject.status == 200) {
                //alert('data is ready');
                strResponse = xmlhttpobject.responseText;
                //call function to build dropdown.
                //attachcitycodehelper(citycodehelpercallby);
                //save the result for this call
                arrAJAXResponse[strRequestType] = xmlhttpobject.responseText;
            }
            //}
        default:
            //do nothing
            break;
    }
    //alert('returning data');
    return strResponse;
}
