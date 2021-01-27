<!-- TEMPLATE PATH: E:\Clients\TravelSpan\STWeb\TSPAN\Input_ShopForm_Iframe.htm START -->
<html>
<header>
    <title>www.travelspangt.com</title>
    <link href="https://booking.travelspan.com/STW/TSPAN/Styles.css" rel="stylesheet" type="text/css" />
    <link href="https://booking.travelspan.com/STW/TSPAN/StylesLargeFont.css" rel="alternate stylesheet" type="text/css" title="LargeFont" />
    <link href="https://booking.travelspan.com/STW/TSPAN/StylesTOC.css" rel="stylesheet" type="text/css" media="all" />

    <script src="https://booking.travelspan.com/STW/utils.js" type="text/javascript"></script>
    <script src="https://booking.travelspan.com/res/Calendar/jscalendar.js" type="text/javascript"></script>
    <script src="https://booking.travelspan.com/STW/changefont.js" type="text/javascript"></script>
    <script src="https://booking.travelspan.com/STW/TSPAN/jquery.min.js" type="text/javascript"></script>
    <link href="https://booking.travelspan.com/STW/TSPAN/TSPANNew.css" rel="stylesheet" type="text/css" />
</header>
<body>
<form name="main_form" id="main_form" action="https://booking.travelspan.com/res/STWMain.aspx?Action=SEQLIST&Theme=TSPAN" method="POST" target="_parent">
<!-- 
<ShowSortAirOption>Y</ShowSortAirOption>
-->
<style>
    body
    {
        background:transparent;
    }

    #airflightonly, #airflighthotel, #htlhotelonly, #htlhotelflight
    {
        display: none;
        width:100%;
        height:100%;
    }

        #airflightonly + label, #airflighthotel + label, #htlhotelonly + label, #htlhotelflight + label
        {
            display: inline-block;
            margin: -2px;
            padding: 4px 12px;
            margin-bottom: 0;
            font-size: 14px;
            line-height: 20px;
            color: #333;
            text-align: center;
            text-shadow: 0 1px 1px rgba(255,255,255,0.75);
            vertical-align: middle;
            cursor: pointer;
            background-color: #f5f5f5;
            background-image: -moz-linear-gradient(top,#fff,#e6e6e6);
            background-image: -webkit-gradient(linear,0 0,0 100%,from(#fff),to(#e6e6e6));
            background-image: -webkit-linear-gradient(top,#fff,#e6e6e6);
            background-image: -o-linear-gradient(top,#fff,#e6e6e6);
            background-image: linear-gradient(to bottom,#fff,#e6e6e6);
            background-repeat: repeat-x;
            border: 1px solid #ccc;
            border-color: #e6e6e6 #e6e6e6 #bfbfbf;
            border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
            border-bottom-color: #b3b3b3;
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff',endColorstr='#ffe6e6e6',GradientType=0);
            filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
            -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);
            -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);
            box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);
        }

        #airflightonly:checked + label, #airflighthotel:checked + label, #htlhotelonly:checked + label, #htlhotelflight:checked + label
        {
            background-image: none;
            outline: 0;
            -webkit-box-shadow: inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);
            -moz-box-shadow: inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);
            box-shadow: inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);
            background-color: #e0e0e0;
        }

    .shopformblue
    {
        width: 100%;
        height:auto;
        padding: 2px 2px 2px 2px;
        border: 2px solid #1F3098;
        background-color:#F6F6F6;
        /*background-color: white;*/
        /*background-color: #154b85;*/
        /*background-image: url(TSPAN/Pics/shopform-bg.gif);*/ 
        background-repeat: repeat;
        /*color: white;*/
        color: black;
    }

        .shopformblue .activetab
        {
            background-color: transparent; /*old color #9CAFFB;*/
            /*color: white;*/
            color: black;
            text-align: center;
            font-size: 14px;
            font-weight: 900;
            line-height: 26px;
            height: 26px;
            border-bottom-color: #8AFA8A;
            cursor: default;
        }

        .shopformblue td
        {
            /*color: white;*/
            color: black;
        }
        .shopformblue input
        {
            /*color: white;*/
            background-color:#FFFFFF;
        }
        .shopformblue .inactivetab
        {
            background-color: #e0e0e0;
            /*background-color: grey;*/
            background-repeat: repeat;
            /*background: #0a1f9c;*/
            /*background: grey;*/
            background-color: #004990;
            font-size: 14px;
            font-weight: 900;
            text-decoration: none;
            text-align: center;
            color: #fff;
            line-height: 26px;
            height: 26px;
            cursor: hand;
            border-right: 1px solid #154b85;
            border-bottom: hidden;
        }

    .seachnow, .trackflight
    {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 11px;
        font-weight: 600;
        /*border: 1px solid #8D92A9;*/
        /*border: 1px solid #1F3098;*/
        /*background-image: url(Pics/btnbg.gif);*/
        color: !important #ffffff; /*#13490E;*/
        /*background-color: black;*/ /*#9CAFFB;*/
        background-color: #e6e6e6;
        cursor: hand;
    }

    .fullheight
    {
        height:100%;
    }
    
    #fltstattab, #frmfltstat, #frmchktab, #chkintab
    {
        width:100%;
        height:100%;
    }
    #frmfltstat, #chkintab
    {
        /*-webkit-overflow-scrolling:auto;*/
        overflow-y:auto;
    }
</style>
<script type="text/javascript">
    var pcodes = new Array();
    var origcities = new Array();
    var destcities = new Array();
    /*this function show dropdown boxes for user to enter children age
        1. if any child is select then show box for user to enter their age
    */
    function showchildrenage() {
        var adtpax, chdpax, i;
        chdpax = parseInt(document.getElementById('numchds').value);
        adtpax = parseInt(document.getElementById('numadts').value);
        if ((adtpax + chdpax) > 9) {
            alert('Please note: A maximum of only 9 passengers is allowed');
        }
        if (chdpax == 0)//hide child info table
        { document.getElementById('childreninforow').style.display = 'none'; }
        else//show child info table
        { document.getElementById('childreninforow').style.display = ''; }
        for (i = 1; i < 9; i++) {
            if (i <= chdpax) //show it.
            { document.getElementById('chd' + i + 'age').parentNode.style.display = ''; }
            else//hide it.
            { document.getElementById('chd' + i + 'age').parentNode.style.display = 'none'; }
        }
    }

    //This function verifies user input before submitting the form
    function checkInput() {
        //alert('Checking input.');
        //alert('Country: ' + document.getElementById('cbCountryHotelReq').value);
        //alert('Product Code: ' + document.getElementById('cbProductCodeHotelReq').value);
        //alert('cbCountryHotelReq: ' + document.getElementById('cbCountryHotelReq').value);
        //alert('cbProductCodeHotelReq: ' + document.getElementById('cbProductCodeHotelReq').value);

        var maxDate = new Date();
        var depDate = new Date();
        var retDate = new Date();
        var strAirports, i, j;

        maxDate.setDate(maxDate.getDate() + 330);
        //get departure date
        depDate = new Date(document.getElementById('tbCheckInHotelReq').value);
        if (document.getElementById('chkAir').checked && new Date(depDate.toString()) > new Date(maxDate.toString())) {
            alert('');
            return false;
        }
        //    
        //    //make sure that if the advanced options are hidden, the values are clear so that we don't shop the hidden options
        //    //alert('Avdanced View:  ' + document.getElementById('adv').style.display);
        //    if(document.getElementById('adv') && document.getElementById('adv').style.display == 'none')
        //    {
        //        //alert('Advanced Hidden!');
        //      if(document.getElementById('txthotelpref')){document.getElementById('txthotelpref').value='';}
        //      if(document.getElementById('aircarrier')){document.getElementById('aircarrier').selectedIndex=0;}
        //      if(document.getElementById('aircabinclass')){document.getElementById('aircabinclass').selectedIndex=0;}
        //      if(document.getElementById('airfaretype')){document.getElementById('airfaretype').selectedIndex=0;}
        //      if(document.getElementById('airpreference')){document.getElementById('airpreference').selectedIndex=0;}
        //      //if(document.getElementById('flexdates')){document.getElementById('flexdates').selectedIndex=0;}
        //    }
        //    
        //Build the mask
        if (!buildMask())
        { return; }

        //if we search again from the result page then update the sorting criteria.
        if (document.getElementsByName('airoptionsort') && document.getElementsByName('inputairoptionsort')) {
            //if the sort by criteria on the shopping form is checked then checked the same on on result page.
            for (i = 0; i < document.getElementsByName('inputairoptionsort').length; i++) {
                if (document.getElementsByName('inputairoptionsort').item(i).checked == true) {
                    //find this same sorting option on the result and check it.
                    for (j = 0; j < document.getElementsByName('airoptionsort').length; j++) {
                        if (document.getElementsByName('inputairoptionsort').item(i).value.toUpperCase() == document.getElementsByName('airoptionsort').item(j).value.toUpperCase()) {
                            document.getElementsByName('airoptionsort').item(j).checked = true;
                        }
                    }
                }
            }
        }

        if (!validatedestination())
            return;

        document.getElementById('airdateout').value = document.getElementById('tbCheckInHotelReq').value;
        document.getElementById('airdateret').value = document.getElementById('tbCheckOutHotelReq').value;

        var depdate = new Date(document.getElementById('tbCheckInHotelReq').value);
        //check dep date.
        if (isNaN(depdate)) {
            alert('Departure date is invalid.  Please fix to continue.');
            return;
        }
        if (depdate < new Date(FormatDate(new Date())) && ('[R064]' !== 'true')) {
            alert('You cannot book past dates');
            return false;
        }
		if ($("[name=radairtype]:checked").val().toUpperCase() != 'O')
		{
			//check return date.
			var retdate = new Date(document.getElementById('tbCheckOutHotelReq').value);
			if (isNaN(retdate)) {
				alert('Return date is invalid.  Please fix to continue.');
				return;
			}
			if (retdate <= depdate) {
				alert('Return date must be after departure date.  Please fix to continue.');
				return;
			}
		}
		
        //origination airport
        if (document.getElementById('airfromcity').value != '')
        { SetCookie('cookie_airfromcity', document.getElementById('airfromcity').value, 30, '/', '', ''); }
        //return from city (for open jaw shop)
        if (document.getElementById('airretfromcity').value != '')
        { SetCookie('cookie_airretfromcity', document.getElementById('airretfromcity').value, 30, '/', '', ''); }
        //remember shop parameters by cookie.
        SetCookie('cookie_tbCheckInHotelReq', document.getElementById('tbCheckInHotelReq').value, 30, '/', '', '');
        SetCookie('cookie_tbCheckOutHotelReq', document.getElementById('tbCheckOutHotelReq').value, 30, '/', '', '');
        SetCookie('cookie_airdateout', document.getElementById('airdateout').value, 30, '/', '', '');
        SetCookie('cookie_airdateret', document.getElementById('airdateret').value, 30, '/', '', '');
        SetCookie('cookie_cbairtocity', document.getElementById('cbairtocity').value, 30, '/', '', '');
        SetCookie('cookie_airrettocity', document.getElementById('airrettocity').value, 30, '/', '', '');
        SetCookie('cookie_productcodedisplay', document.getElementById('productcodedisplay').value, 30, '/', '', '');
        SetCookie('cookie_shoptype', document.getElementById('shopType').value, 30, '/', '', '');
        SetCookie('cookie_productcode', document.getElementById('productcode').value, 30, '/', '', '');

        SetCookie('cookie_aircarrier', document.getElementById('aircarrier').value, 30, '/', '', '');
        SetCookie('cookie_aircabinclass', document.getElementById('aircabinclass').value, 30, '/', '', '');
        SetCookie('cookie_selNumRooms', document.getElementById('selNumRooms').value, 30, '/', '', '');

        //air type selection (Round Trip, Oneway, Openjaw
        for (i = 0; i < document.getElementsByName('radairtype').length; i++) {
            if (document.getElementsByName('radairtype')[i].checked == true) {
                SetCookie('cookie_radairtype', document.getElementsByName('radairtype')[i].value, 30, '/', '', '');
                break;
            }
        }

        //sorting options.
        //for (i = 0; i < document.getElementsByName('inputairoptionsort').length; i++) {
        //    if (document.getElementsByName('inputairoptionsort')[i].checked == true) {
        //        if (document.getElementsByName('inputairoptionsort')[i].value == 'NONSTOP')
        //        { document.getElementById('airpreference').value = 'BESTROUTING'; }
        //        else { document.getElementById('airpreference').value = 'BESTPRICE'; }

        //        SetCookie('cookie_inputairoptionsort', document.getElementsByName('inputairoptionsort')[i].value, 30, '/', '', '');
        //        break;
        //    }
        //}
        if ($("[name=inputairoptionsort]:checked").length > 0) {
            if ($("[name=inputairoptionsort]:checked").val() === 'NONSTOP') {
                $('#airpreference').val('NONSTOP');
            } else { $('#airpreference').val('BESTPRICE'); }
            SetCookie('cookie_airtabsuboption', $("[name=inputairoptionsort]:checked").val(), 30, '/', '', '');
        } else {
            $("[name=inputairoptionsort]").val(["PRICE"]);
            $('#airpreference').val('BESTPRICE'); 
            SetCookie('cookie_airtabsuboption', $("[name=inputairoptionsort]:checked").val(), 30, '/', '', '');
        }

        //air tab suboption
        for (i = 0; i < document.getElementsByName('airtabsuboption').length; i++) {
            if (document.getElementsByName('airtabsuboption')[i].checked == true) {
                SetCookie('cookie_airtabsuboption', document.getElementsByName('airtabsuboption')[i].value, 30, '/', '', '');
                break;
            }
        }
        //hotel tab suboption
        for (i = 0; i < document.getElementsByName('htltabsuboption').length; i++) {
            if (document.getElementsByName('htltabsuboption')[i].checked == true) {
                SetCookie('cookie_htltabsuboption', document.getElementsByName('htltabsuboption')[i].value, 30, '/', '', '');
                break;
            }
        }
        //package tab suboption
        for (i = 0; i < document.getElementsByName('pkgtabsuboption').length; i++) {
            if (document.getElementsByName('pkgtabsuboption')[i].checked == true) {
                SetCookie('cookie_pkgtabsuboption', document.getElementsByName('pkgtabsuboption')[i].value, 30, '/', '', '');
                break;
            }
        }
        //popular destination
        for (i = 0; i < document.getElementsByName('populardest').length; i++) {
            if (document.getElementsByName('populardest')[i].checked == true) {
                SetCookie('cookie_populardest', document.getElementsByName('populardest')[i].value, 30, '/', '', '');
                break;
            }
        }
        //make sure subaction is not set to showlastresult
        if (document.getElementById('subaction'))
        { document.getElementById('subaction').value = ''; }

        //save number of pax in each room.
        var paxinroom;
        paxinroom = '';
        if (document.getElementsByName('numadts')) {
            for (i = 0; i < document.getElementsByName('numadts').length; i++) {
                if (paxinroom == '') {
                    paxinroom += document.getElementsByName('numadts').item(i).value;
                } else {
                    paxinroom += ',' + document.getElementsByName('numadts').item(i).value;
                }
            }
        }
        SetCookie('cookie_adtineachroom', paxinroom, 30, '/', '', '');
        paxinroom = '';
        if (document.getElementsByName('numchds')) {
            for (i = 0; i < document.getElementsByName('numchds').length; i++) {
                if (paxinroom == '') {
                    paxinroom += document.getElementsByName('numchds').item(i).value;
                } else {
                    paxinroom += ',' + document.getElementsByName('numchds').item(i).value;
                }
            }
        }
        SetCookie('cookie_chdineachroom', paxinroom, 30, '/', '', '');
        //now to children age.....4 rooms....max 3 child each room.
        //3 children max each room.
        for (i = 1; i < 6; i++) {
            paxinroom = '';
            for (j = 0; j < document.getElementsByName('chd' + i + 'age').length; j++) {
                if (paxinroom == '') {
                    paxinroom += document.getElementsByName('chd' + i + 'age').item(j).value;
                } else {
                    paxinroom += ',' + document.getElementsByName('chd' + i + 'age').item(j).value;
                }
            }
            SetCookie('cookie_chd' + i + 'ages', paxinroom, 30, '/', '', '');
        }

        //No problem
        document.main_form.newsearch.value = 1;

        if (document.getElementById('shopType').value == 'AIR' && document.getElementsByName('airtabsuboption')[0].checked == true) {
            //alert('Air Only');
            updateAction('AirList');
            //clear out any productcode (we are doing air only here!)
            if (document.getElementById('productcode')) { document.getElementById('productcode').value = ''; }
        }
        else {
            //alert('Air/land or Land');
            updateAction('SeqList');
        }
        
        //this is a search....so clear out whatever seq was selected, if any
        if (document.getElementById('SelectedSeq')) { document.getElementById('SelectedSeq').value = ''; }
        if (document.getElementById('selectedseq')) { document.getElementById('selectedseq').value = ''; }
        enableAll();
        updateFormTarget('_parent');
        updateFormAction('https://booking.travelspan.com/res/STWMain.aspx?SessID=E45B1409-85FC-4BAD-83DF-698BC5297A7C&Theme=TSPAN');

        document.main_form.submit();
    }

    /*this function does:
        1. make sure user is not trying to go from PHL to PHL
        2. they have enter a valid city/airport code
        3. when requesting hotel....they have enter a city/airport in which we DO HAVE hotels
           a. also set the productcode with the productcode value associated with that city/airport code.
    */
    function trim(strvalue) {
        strvalue = strvalue.toUpperCase().replace(/^\s+|\s+$/g, "");
        return strvalue;
    }
    function validatedestination() {
        var shoptype, fromcity, toaircity, tohotelcity, domDOC, xmlstr, i, prodcode, citycode, airselection;
        shoptype = document.getElementById('shopType').value.toUpperCase();
        if (shoptype == '' || shoptype == 'undefined' || !shoptype)
        { shoptype = 'AIR'; }
        prodcode = '';
        airselection = document.getElementsByName('radairtype');
        fromcity = trim(document.getElementById('airfromcity').value);
        toaircity = trim(document.getElementById('cbairtocity').value);
        tohotelcity = trim(document.getElementById('productcodedisplay').value.toUpperCase());

        switch (shoptype) {
            case 'AIR':
                if (document.getElementsByName('airtabsuboption')[0].checked) {//flight only
                    //make sure fromDest <> toDest
                    xmlstr = xmlhttpResponse('TOCITYCODE');
                    //alert('xmlstr: ' + xmlstr);
                    citycode = getcitycode(xmlstr, toaircity);
                    if (citycode == '') {
                        alert('Destination city is invalid.  Please fix your destination to continue.');
                        return false;
                    }
                    xmlstr = xmlhttpResponse('FROMCITYCODE');
                    fromcity = getcitycode(xmlstr, fromcity);
                    if (fromcity == '') {
                        alert('Departure city is invalid. Please fix to continue.');
                        return false;
                    }
                    if (fromcity == citycode) {
                        alert('You cannot go from ' + fromcity + ' to ' + toaircity + '. Please change your destination to continue.');
                        return false;
                    }
                    if (document.getElementById('airtocity'))
                        document.getElementById('airtocity').value = citycode;

                    //fields applicable to multicities search
                    for (i = 0; i < airselection.length; i++) {
                        if (airselection[i].value == 'R' && airselection[i].checked == true) {//round trip....do nothing already checked up top                       
                        }
                        else if (airselection[i].value == 'O' && airselection[i].checked == true) {//one way......do nothing already checked up top
                        }
                        else if (airselection[i].value == 'J' && airselection[i].checked == true) {//multi cities...make sure the second set of cities is good.
                            if (getcitycode(xmlstr, trim(document.getElementById('airretfromcity').value)) == '') {
                                alert('Your second \'From:\' city is invalid.  Please fix to continue');
                                return false;
                            }
                            if (getcitycode(xmlstr, trim(document.getElementById('airrettocity').value)) == '') {
                                alert('Your second \'To:\' city is invalid.  Please fix to continue');
                                return false;
                            }
                            if (trim(document.getElementById('airretfromcity').value) == trim(document.getElementById('airrettocity').value)) {
                                alert('You cannot go from ' + trim(document.getElementById('airretfromcity').value) + ' to ' + trim(document.getElementById('airrettocity').value) + '. Please change your destination to continue.');
                                return false;
                            }
                        }
                    }

                }
                else {//flight + hotel
                    //make sure fromDest <> toDest 
                    //toDest is a dest in which we have hotel....and set the productcode.
                    xmlstr = xmlhttpResponse('FROMCITYCODE');
                    citycode = getcitycode(xmlstr, fromcity);
                    if (fromcity != citycode || fromcity == '') {
                        alert('Departure city is invalid. Please fix to continue.');
                        return false;
                    }
                    xmlstr = xmlhttpResponse('TOCITYCODE');
                    citycode = getcitycode(xmlstr, tohotelcity);
                    if (citycode == '') {
                        alert('Destination city is invalid. Please fix to continue.');
                        return false;
                    }
                    if (fromcity == citycode) {
                        alert('You cannot go from ' + fromcity + ' to ' + toaircity + '. Please change your destination to continue.');
                        return false;
                    }
                    //check if valid tohotelcity here.
                    xmlstr = xmlhttpResponse('PRODUCTCODE');
                    prodcode = getproductcode(xmlstr, tohotelcity);
                    if (prodcode == '') {
                        alert('We do not have hotels in ' + tohotelcity + '.  Please pick another city to continue.');
                        return false;
                    }
                    //set product code here.
                    document.getElementById('productcode').value = prodcode;
                    if (document.getElementById('airtocity'))
                        document.getElementById('airtocity').value = citycode;
                }
                break;
            case 'PKG':
                if (document.getElementsByName('pkgtabsuboption')[0].checked == true) {
                    //make sure fromDest <> toDest 
                    //toDest is a dest in which we have hotel....and set the productcode.
                    xmlstr = xmlhttpResponse('FROMCITYCODE');
                    citycode = getcitycode(xmlstr, fromcity);
                    if (fromcity != citycode || fromcity == '') {
                        alert('Departure city is invalid. Please fix to continue.');
                        return false;
                    }
                    xmlstr = xmlhttpResponse('TOCITYCODE');
                    citycode = getcitycode(xmlstr, tohotelcity);
                    if (citycode == '') {
                        alert('Destination city is invalid. Please fix to continue.');
                        return false;
                    }
                    if (fromcity == citycode) {
                        alert('You cannot go from ' + fromcity + ' to ' + toaircity + '. Please change your destination to continue.');
                        return false;
                    }
                    //check if valid tohotelcity here.
                    xmlstr = xmlhttpResponse('PRODUCTCODE');
                    prodcode = getproductcode(xmlstr, tohotelcity);
                    if (prodcode == '') {
                        alert('We do not have hotels in ' + tohotelcity + '.  Please pick another city to continue.');
                        return false;
                    }
                    //set product code here.
                    document.getElementById('productcode').value = prodcode;
                    if (document.getElementById('airtocity'))
                        document.getElementById('airtocity').value = citycode;
                }
                else {
                    //there's only 1 option (land + air) for package
                }
                break;
            case 'HTL':
                if (document.getElementsByName('htltabsuboption')[0].checked == true) {//hotel only
                    xmlstr = xmlhttpResponse('PRODUCTCODE');
                    prodcode = getproductcode(xmlstr, tohotelcity);
                    if (prodcode == '') {
                        alert('We do not have hotels in ' + tohotelcity + '.  Please pick another city to continue.');
                        return false;
                    }
                    //set product code here.
                    document.getElementById('productcode').value = prodcode;
                }
                else {//hotel + flight
                    //make sure fromDest <> toDest 
                    //toDest is a dest in which we have hotel....and set the productcode.
                    if (fromcity == tohotelcity) {
                        alert('You cannot go from ' + fromcity + ' to ' + toaircity + '. Please change your destination to continue.');
                        return false;
                    }

                    xmlstr = xmlhttpResponse('FROMCITYCODE');
                    citycode = getcitycode(xmlstr, fromcity);
                    if (fromcity != citycode || fromcity == '') {
                        alert('Departure city is invalid. Please fix to continue.');
                        return false;
                    }
                    xmlstr = xmlhttpResponse('TOCITYCODE');
                    citycode = getcitycode(xmlstr, tohotelcity);
                    if (citycode == '') {
                        alert('Destination city is invalid. Please fix to continue.');
                        return false;
                    }

                    //check if valid tohotelcity here.
                    xmlstr = xmlhttpResponse('PRODUCTCODE');
                    prodcode = getproductcode(xmlstr, tohotelcity);
                    if (prodcode == '') {
                        alert('We do not have hotels in ' + tohotelcity + '.  Please pick another city to continue.');
                        return false;
                    }
                    //set product code here.
                    document.getElementById('productcode').value = prodcode;
                    if (document.getElementById('airtocity'))
                        document.getElementById('airtocity').value = citycode;
                }
                break;
            case 'CRU':
                break;
        }
        return true;
    }

    function getcitycode(xmlstr, citycode) {
        if (xmlstr.toUpperCase().indexOf('**' + citycode.toUpperCase() + '|') > -1) {
            return citycode;
        }
        return '';
    }
    function getproductcode(xmlstr, citycode) {
        var pos, lpos, rpos, strtemp;
        //xmlstr = citycode|productName|cityname,countryname|productcode

        pos = xmlstr.toUpperCase().indexOf('**' + citycode.toUpperCase() + '|')
        if (pos < 0) {
            return '';
        }
        else {
            pos += 2;
            lpos = xmlstr.lastIndexOf('**', pos)
            rpos = xmlstr.indexOf('**', pos);
            if (lpos > -1 && rpos > lpos) {
                lpos += 2
                strtemp = xmlstr.substr(lpos, (rpos - lpos));
                //alert('pos: ' + pos + ' lpos: ' + lpos + ' rpos: ' + rpos + ' code: ' + strtemp + '\nsource: ' + xmlstr);            
                if (strtemp.split('|').length == 4) {
                    return strtemp.split('|')[3];
                }
            }
        }
        return '';
    }

    function buildMask() {
        var myMask, tempMask;
        var i, j;

        myMask = "";
        for (i = 0; i < document.getElementById('selNumRooms').value; i++)//document.main_form.numadts.length; i++)
        {
            tempMask = "";
            //Get adults
            for (j = 1; j <= document.main_form.numadts[i].value; j++) {
                tempMask = tempMask + "A";
            }
            //Get children
            for (j = 1; j <= document.main_form.numchds[i].value; j++) {
                //Check that at least one adult was selected for this room
                if (document.main_form.numadts[i].value == 0) {
                    if (document.getElementsByName('airtabsuboption')[0].checked && document.getElementById('shopType').value.toUpperCase() == 'AIR') {
                        //air only......child only booking is allowed.
                    }
                    else {
                        alert("Please select at least one adult for room #" + (i + 1));
                        return false;
                    }
                }
                tempMask = tempMask + "C";
                if (j == 1) {
                    //First child
                    /*if (document.main_form.chd1age[i].value == "0")
                    {
                    alert("Please select child 1 age for room #" + (i + 1));
                    return false;
                    }*/
                    tempMask = tempMask + document.main_form.chd1age[i].value;
                }
                else if (j == 2) {
                    //Second child
                    /*if (document.main_form.chd2age[i].value == "0")
                    {
                    alert("Please select child 2 age for room #" + (i + 1));
                    return false;
                    }*/
                    tempMask = tempMask + document.main_form.chd2age[i].value;
                }
                else if (j == 3) {
                    //Third child
                    /*if (document.main_form.chd3age[i].value == "0")
                    {
                    alert("Please select child 3 age for room #" + (i + 1));
                    return false;
                    }*/
                    tempMask = tempMask + document.main_form.chd3age[i].value;
                }
                else if (j == 4) {
                    tempMask = tempMask + document.main_form.chd4age[i].value;
                }
                else if (j == 5) {
                    tempMask = tempMask + document.main_form.chd5age[i].value;
                }
            }
            if (tempMask != "") {
                if (i > 0)
                    myMask = myMask + "/" + tempMask;
                else
                    myMask = tempMask;
            }
        }
        //alert("Mask: " + myMask);
        document.main_form.searchmask.value = myMask;
        document.getElementById('numairadts').value = (myMask.length - myMask.replace(/A/g, '').length);
        document.getElementById('numairchds').value = (myMask.length - myMask.replace(/C/g, '').length);
        //Done
        return true;
    }

    //This function shows and hides the room forms based on the number of rooms selected
    function updateRooms() {
        try {
            //Hide all the rooms
            hide('room1-4', document.getElementById('selNumRooms'), '', '');

            if ($("[name=airtabsuboption]")[0].checked) {
                if ($("#numchds").val() > 0) {
                    $("#chdagesheader").show();
                    $("#chdageheader1").show();
                    $("#room1").show();
                    hideAllChdAges();
                    if (document.main_form.numchds[0].value > 0) {
                        show('chdheader1', document.getElementById('numchds'), '', '');
                        show('chd1age1', document.getElementById('numchds'), '', '');
                        $("#chd1age1").parent().show();
                    } else {
                        hide('chdheader1', document.getElementById('numchds'), '', '');
                        hide('chd1age1', document.getElementById('numchds'), '', '');
                        $("#chd1age1").parent().hide();
                    }
                    if (document.main_form.numchds[0].value > 1) {
                        show('chdheader2', document.getElementById('numchds'), '', '');
                        show('chd2age1', document.getElementById('numchds'), '', '');
                        $("#chd2age1").parent().show();
                    } else {
                        hide('chdheader2', document.getElementById('numchds'), '', '');
                        hide('chd2age1', document.getElementById('numchds'), '', '');
                        $("#chd2age1").parent().hide();
                    }
                    if (document.main_form.numchds[0].value > 2) {
                        show('chdheader3', document.getElementById('numchds'), '', '');
                        show('chd3age1', document.getElementById('numchds'), '', '');
                        $("#chd3age1").parent().show();
                    } else {
                        hide('chdheader3', document.getElementById('numchds'), '', '');
                        hide('chd3age1', document.getElementById('numchds'), '', '');
                        $("#chd3age1").parent().hide();
                    }
                    if (document.main_form.numchds[0].value > 3) {
                        show('chdheader4', document.getElementById('numchds'), '', '');
                        show('chd4age1', document.getElementById('numchds'), '', '');
                        $("#chd4age1").parent().show();
                    } else {
                        hide('chdheader4', document.getElementById('numchds'), '', '');
                        hide('chd4age1', document.getElementById('numchds'), '', '');
                        $("#chd4age1").parent().hide();
                    }
                    if (document.main_form.numchds[0].value > 4) {
                        show('chdheader5', document.getElementById('numchds'), '', '');
                        show('chd5age1', document.getElementById('numchds'), '', '');
                        $("#chd5age1").parent().show();
                    } else {
                        hide('chdheader5', document.getElementById('numchds'), '', '');
                        hide('chd5age1', document.getElementById('numchds'), '', '');
                        $("#chd5age1").parent().hide();
                    }
                } else {
                    //$("#chdagesheader").hide();
                    $("#chdageheader1").hide();
                    $("#room1").show();
                    hideAllChdAges();
                }
            } else {
                $("#chdagesheader").show();
                hide('chdage1-4', document.getElementById('selNumRooms'), '', '');
                //hide('chdageheader1-2', document.getElementById('selNumRooms'), '', '');
                //Show the rooms that should be shown
                show('room1-' + document.getElementById('selNumRooms').value, document.getElementById('selNumRooms'), '', '');
                hideAllChdAges();
                //if (document.getElementById('selNumRooms').value > 0 && document.main_form.numchds[0].value > 0) {
                //    $.each($("[id^=chdheader]"), function (i, v) {
                //        $(v).show();
                //    });
                //}
                if (document.getElementById('selNumRooms').value > 0 && document.main_form.numchds[0].value > 0) {
                    if (document.main_form.numchds[0].value > 0) {
                        show('chdage1', document.getElementById('selNumRooms'), '', '');
                    }
                    //show('chdageheader1-2', document.getElementById('selNumRooms'), '', '');

                    if (document.main_form.numchds[0].value > 0)
                        show('chd1age1', document.getElementById('selNumRooms'), '', '');
                    if (document.main_form.numchds[0].value > 1)
                        show('chd2age1', document.getElementById('selNumRooms'), '', '');
                    if (document.main_form.numchds[0].value > 2)
                        show('chd3age1', document.getElementById('selNumRooms'), '', '');
                    if (document.main_form.numchds[0].value > 3)
                        show('chd4age1', document.getElementById('selNumRooms'), '', '');
                    if (document.main_form.numchds[0].value > 4)
                        show('chd5age1', document.getElementById('selNumRooms'), '', '');
                }
                if (document.getElementById('selNumRooms').value > 1 && document.main_form.numchds[1].value > 0) {
                    show('chdage2', document.getElementById('selNumRooms'), '', '');
                    //show('chdageheader1-2', document.getElementById('selNumRooms'), '', '');

                    if (document.main_form.numchds[1].value > 0)
                        show('chd1age2', document.getElementById('selNumRooms'), '', '');
                    if (document.main_form.numchds[1].value > 1)
                        show('chd2age2', document.getElementById('selNumRooms'), '', '');
                    if (document.main_form.numchds[1].value > 2)
                        show('chd3age2', document.getElementById('selNumRooms'), '', '');
                    if (document.main_form.numchds[1].value > 3)
                        show('chd4age2', document.getElementById('selNumRooms'), '', '');
                    if (document.main_form.numchds[1].value > 4)
                        show('chd5age2', document.getElementById('selNumRooms'), '', '');
                }
                if (document.getElementById('selNumRooms').value > 2 && document.main_form.numchds[2].value > 0) {
                    show('chdage3', document.getElementById('selNumRooms'), '', '');
                    //show('chdageheader1-2', document.getElementById('selNumRooms'), '', '');

                    if (document.main_form.numchds[2].value > 0)
                        show('chd1age3', document.getElementById('selNumRooms'), '', '');
                    if (document.main_form.numchds[2].value > 1)
                        show('chd2age3', document.getElementById('selNumRooms'), '', '');
                    if (document.main_form.numchds[2].value > 2)
                        show('chd3age3', document.getElementById('selNumRooms'), '', '');
                    if (document.main_form.numchds[2].value > 3)
                        show('chd4age3', document.getElementById('selNumRooms'), '', '');
                    if (document.main_form.numchds[2].value > 4)
                        show('chd5age3', document.getElementById('selNumRooms'), '', '');
                }
                if (document.getElementById('selNumRooms').value > 3 && document.main_form.numchds[3].value > 0) {
                    show('chdage4', document.getElementById('selNumRooms'), '', '');
                    //show('chdageheader1-2', document.getElementById('selNumRooms'), '', '');


                    if (document.main_form.numchds[3].value > 0)
                        show('chd1age4', document.getElementById('selNumRooms'), '', '');
                    if (document.main_form.numchds[3].value > 1)
                        show('chd2age4', document.getElementById('selNumRooms'), '', '');
                    if (document.main_form.numchds[3].value > 2)
                        show('chd3age4', document.getElementById('selNumRooms'), '', '');
                    if (document.main_form.numchds[3].value > 3)
                        show('chd4age4', document.getElementById('selNumRooms'), '', '');
                    if (document.main_form.numchds[3].value > 4)
                        show('chd5age4', document.getElementById('selNumRooms'), '', '');
                }
            }
        }
        catch (ex) {
            //There was an error
            alert("updateRooms Failed: \n" + ex.Message);
        }
    }

    function hideAllChdAges() {
        var i = 0;
        $.each($("[id^=chdheader]"), function (i, v) {
            if (i > 0) { $(v).hide(); }
            i++;
        });

        var mostnumchd = 0;

        i = 0
        $.each($("[name=numchds]"), function (i, v) {
            $(v).show();
            if ($(v).val() > mostnumchd && $(v).css("display") !== "none") {
                mostnumchd = parseInt($(v).val());
            }
        });
        $("#chdheader").show();
        for (i = 1; i <= mostnumchd; i++) {
            $("#chdheader" + i).show();
        }
        if (mostnumchd > 0) { $("#chdageheader1").show(); }


        hide('chd1age1', document.getElementById('selNumRooms'), '', '');
        hide('chd2age1', document.getElementById('selNumRooms'), '', '');
        hide('chd3age1', document.getElementById('selNumRooms'), '', '');
        hide('chd4age1', document.getElementById('selNumRooms'), '', '');
        hide('chd5age1', document.getElementById('selNumRooms'), '', '');
        hide('chd1age2', document.getElementById('selNumRooms'), '', '');
        hide('chd2age2', document.getElementById('selNumRooms'), '', '');
        hide('chd3age2', document.getElementById('selNumRooms'), '', '');
        hide('chd4age2', document.getElementById('selNumRooms'), '', '');
        hide('chd5age2', document.getElementById('selNumRooms'), '', '');
        hide('chd1age3', document.getElementById('selNumRooms'), '', '');
        hide('chd2age3', document.getElementById('selNumRooms'), '', '');
        hide('chd3age3', document.getElementById('selNumRooms'), '', '');
        hide('chd4age3', document.getElementById('selNumRooms'), '', '');
        hide('chd5age3', document.getElementById('selNumRooms'), '', '');
        hide('chd1age4', document.getElementById('selNumRooms'), '', '');
        hide('chd2age4', document.getElementById('selNumRooms'), '', '');
        hide('chd3age4', document.getElementById('selNumRooms'), '', '');
        hide('chd4age4', document.getElementById('selNumRooms'), '', '');
        hide('chd5age4', document.getElementById('selNumRooms'), '', '');
    }

    //This function sets the Return Date to 3 days after the input Depart Date
    function setReturnDate(dep, ret) {
        setTimeout(function () {
            var checkoutElement = $("#tbCheckOutHotelReq")[0];
            var value = $("#tbCheckOutHotelReq").val();
            if (isNaN(Date.parse(value))) {
                ShowPopupCalendar(checkoutElement, 'tbCheckOutHotelReq', 'dd MMM yyyy', 2, new Date(), $("#tbCheckInHotelReq").val(), 'NO');
            } else {
                //ShowPopupCalendar(checkoutElement, 'tbCheckOutHotelReq', 'dd MMM yyyy', 2, new Date(), value, 'NO');
            }
        }, 100);
        return true;
    }

    function setOutboundDate(ret, dep) {
        try {
            var outdate, retdate;
            outdate = new Date(dep.value);
            retdate = new Date(ret.value);

            if (isNaN(retdate) == true) { return; /*invalid return date*/ }

            //if outdate < retdate or retdate is a valid date....then don't do anything.
            if ((outdate < retdate) && isNaN(retdate) == false)
            { return; }

            retdate.setTime(retdate.getTime() - (7 * 24 * 60 * 60 * 1000));
            dep.value = FormatDate(retdate);
            return true;
        }
        catch (ex) {
            //There was an error
            alert('Error: ' + ex.message);
        }
    }

    function setNumNights(ret, dep) {
        try {
            var ddate, rdate, timediff;

            ddate = new Date(dep.value);
            rdate = new Date(ret.value);

            timediff = (rdate.getTime() - ddate.getTime());

            document.getElementById('numnights1').value = timediff / (24 * 60 * 60 * 1000);

            return true;
        }
        catch (ex) {
            //There was an error
            alert('Error: ' + ex.message);
        }
    }

    // Sets the Shop Type and changes the se4arch display based on the Shop Type Chosen
    function setShopType(type) {
        var tempairports, cookievalue;
        tempairports = '';
        cookievalue = '';
        type = type.toUpperCase();
        //try
        //{
        //        if (type == 'PKG')
        //        {    cookievalue = GetCookie('cookie_cbDepart'); }
        //        else if(type == 'AIR')
        //        {
        //            cookievalue = GetCookie('cookie_cbDepartAIRONLY');
        //        }

        //first show non-cru tabs...
        show('noncrutab');
        //now hide cruise
        hide('crutab');

        //Hide Check-in and Flt-Status
        hide('chkintab');
        hide('fltstattab');

        $(".shopformblue").removeClass("fullheight")

        cookievalue = GetCookie('cookie_airfromcity');
        if (type == 'PKG') {
            hide('noncrutab');
            hide('crutab');
            show('pkgtab');
            document.getElementById('typepkg').className = 'activetab';
            document.getElementById('typeair').className = 'inactivetab';
            document.getElementById('typehtl').className = 'inactivetab';
            document.getElementById('typecru').className = 'inactivetab';
            document.getElementById('typechkin').className = 'inactivetab';
            document.getElementById('typefltstat').className = 'inactivetab';
            //            //Air and Land
            //            document.getElementById('chkAir').value = 'Y';
            //            document.getElementById('typepkg').className = 'activetab';
            //            document.getElementById('typeair').className = 'inactivetab';
            //            document.getElementById('typehtl').className = 'inactivetab';
            //            document.getElementById('typecru').className = 'inactivetab';
            //            document.getElementById('dtime1').style.display = '';
            //            document.getElementById('dtime2').style.display = '';
            //            // show Air & Room Options
            //            //show('trair1-2', null, '', '');
            //            show('roomOpts', null, '', '');
            //            //show('numnights1-2', null, '', '');
            //            //hide air destination selection.
            //            show('destairports');
            //            //show product selection
            //            show('productcoderow');
            //            show('aircarrierdisplay');
            //            show('faretypedisplay');
            //            //show Advanced options - right now pretain to Air only
            //            //show('advoptions');     
            //            // set the SHOP TYPE variable
            //            document.getElementById('shopType').value = 'PKG';
            //            
            //            hide('flightsubopt');
            //            hide('hotelsubopt');
            //            show('packagesubopt')
            //            
            //            //show the popular destinations row.
            //            show('populardestrow');
            //            
            //            //show roomheader1-4 and the dropdown to select actually number of rooms
            //            show('roomheader1-4');
            //            show('roomselection1');
            //            
            //            //Air and Land
            //            if (cookievalue && cookievalue != '')
            //            {
            //                document.getElementById('airfromcity').value = cookievalue;
            //            }
        }
        else if (type == 'AIR') {
            show('noncrutab');
            hide('crutab');
            hide('pkgtab');
            //Air-Only
            document.getElementById('chkAir').value = 'Y';
            document.getElementById('typepkg').className = 'inactivetab';
            document.getElementById('typeair').className = 'activetab';
            document.getElementById('typehtl').className = 'inactivetab';
            document.getElementById('typecru').className = 'inactivetab';
            document.getElementById('typechkin').className = 'inactivetab';
            document.getElementById('typefltstat').className = 'inactivetab';
            document.getElementById('dtime1').style.display = '';
            document.getElementById('dtime2').style.display = '';
            //document.getElementById('placeholderbox').style.display = '';
            //Show Air Opts & Hide Room Opts
            show('trair1-2', null, '', '');
            show('roomOpts', null, '', '');
            //show('numnights1-2', null, '', '');
            //show air destination selection.
            show('destairports');
            show('aircarrierdisplay');
            show('faretypedisplay');

            show('flightsubopt');
            hide('hotelsubopt');
            hide('packagesubopt')

            //hide product selection            
            hide('productcoderow');
            //show Advanced options - right now pretain to Air only
            //show('advoptions');  
            // set the SHOP TYPE varialbe
            document.getElementById('shopType').value = 'AIR';

            //don't show the popular destinations row.
            hide('populardestrow');
            //hide roomheader1-4 and the dropdown to select actually number of rooms
            hide('roomheader1-4');
            hide('roomselection1');
            //also update room selection to 1 and call updateRooms() to hide everything but show 1 single room.
            document.getElementById('selNumRooms').value = 1;
            $("#trackflight").show();

            updateRooms();


            //Air-Only
            if (cookievalue && cookievalue != '') {
                document.getElementById('airfromcity').value = cookievalue;
            }
        }
        else if (type == 'HTL') {
            show('noncrutab');
            hide('crutab');
            hide('pkgtab');
            //Land-Only
            document.getElementById('chkAir').value = 'N';
            document.getElementById('typepkg').className = 'inactivetab';
            document.getElementById('typeair').className = 'inactivetab';
            document.getElementById('typehtl').className = 'activetab';
            document.getElementById('typecru').className = 'inactivetab';
            document.getElementById('typechkin').className = 'inactivetab';
            document.getElementById('typefltstat').className = 'inactivetab';
            document.getElementById('dtime1').style.display = 'none';
            document.getElementById('dtime2').style.display = 'none';
            //document.getElementById('placeholderbox').style.display = 'none';
            //Hide Air Opts & Show Room OPts
            show('trair1-2', null, '', '');
            show('roomOpts', null, '', '');
            //show('numnights1-2', null, '', '');            
            //hide air destination selection.
            show('destairports');
            hide('aircarrierdisplay');
            hide('faretypedisplay');

            hide('flightsubopt');
            show('hotelsubopt');
            hide('packagesubopt')

            $("#trackflight").hide();

            //show product selection
            show('productcoderow');
            //hide Advanced options - right now pretain to Air only
            // hide('advoptions');            
            // set the SHOP TYPE varialbe
            document.getElementById('shopType').value = 'HTL';

            //show the popular destinations row.
            show('populardestrow');
            //show roomheader1-4 and the dropdown to select actually number of rooms
            $("#roomheader1");
            show('roomselection1');
        }
        else if (type == 'CRU') {
            //hide non-cru tabs....(fights, hotels, packages)
            hide('noncrutab');
            hide('pkgtab');
            show('crutab');
            document.getElementById('typepkg').className = 'inactivetab';
            document.getElementById('typeair').className = 'inactivetab';
            document.getElementById('typehtl').className = 'inactivetab';
            document.getElementById('typecru').className = 'activetab';
            document.getElementById('typechkin').className = 'inactivetab';
            document.getElementById('typefltstat').className = 'inactivetab';
        } else if (type == 'CIN') {
            hide('noncrutab');
            hide('pkgtab');
            hide('crutab');
            show('chkintab');
            document.getElementById('typepkg').className = 'inactivetab';
            document.getElementById('typeair').className = 'inactivetab';
            document.getElementById('typehtl').className = 'inactivetab';
            document.getElementById('typecru').className = 'inactivetab';
            document.getElementById('typechkin').className = 'activetab';
            document.getElementById('typefltstat').className = 'inactivetab';

            document.getElementById('shopType').value = 'CIN';
            $(".shopformblue").addClass("fullheight");
        } else if (type == 'FST') {
            hide('noncrutab');
            hide('pkgtab');
            hide('crutab');
            show('fltstattab');
            document.getElementById('typepkg').className = 'inactivetab';
            document.getElementById('typeair').className = 'inactivetab';
            document.getElementById('typehtl').className = 'inactivetab';
            document.getElementById('typecru').className = 'inactivetab';
            document.getElementById('typechkin').className = 'inactivetab';
            document.getElementById('typefltstat').className = 'activetab';

            document.getElementById('shopType').value = 'FST';
            $(".shopformblue").addClass("fullheight");
        }

        //Re-set the Adv Options in case its open
        //setAdvancedOptions();

        setsuboptions();

        //}
        //catch(ex)
        //{
        //There was an error
        //    alert('SetShopType() Failed: ' + ex.Message);
        //}


    }
    //This function show and hide the from: to: and other info depending on the select sub options of each tabs. (air only, air + hotel....)
    function setsuboptions() {
        var shoptype, i, airselection;
        shoptype = document.getElementById('shopType').value.toUpperCase();
        if (shoptype == '' || shoptype == 'undefined' || !shoptype)
        { shoptype = 'AIR'; }

        airselection = document.getElementsByName('radairtype');
        $("#roomheader1").hide();
        $("#selNumRooms").hide();
        document.getElementById('fromdatedesc').innerHTML = 'Depart:';
        document.getElementById('todatedesc').innerHTML = 'Return:';
        //document.getElementById('todescrow').innerHTML = 'To:';

        //always hide air trip type selection unless aironly mode.
        hide('airtriptype');
        hide('openjawreturn1-2');
        //show the return date, return time row
        show('returndaterow');
        switch (shoptype) {
            case 'AIR':
                if (document.getElementsByName('airtabsuboption')[0].checked) {//flight only
                    hide('populardestrow');
                    hide('productcoderow');
                    show('fromdescrow');
                    show('todescrow');
                    show('fromairports');
                    show('toairports');
                    //the advance options
                    show('advAirline');
                    show('advClass');
                    show('advFareType');
                    hide('advhotelpref');
                    //has air?
                    document.getElementById('chkAir').value = 'Y';
                    //show roomheader1-4 and the dropdown to select actually number of rooms
                    hide('roomheader1-4');
                    hide('roomselection1');
                    hide('chdage1header1');
                    show('airsortrow');
                    //also update room selection to 1 and call updateRooms() to hide everything but show 1 single room.
                    document.getElementById('selNumRooms').value = 1;
                    updateRooms();
                    //show air trip type selection
                    show('airtriptype');
                    /*show hide certain fields applicable to air only:
                                                                - RoundTrip
                                                                - Oneway
                                                                - Multi Cities   */
                    for (i = 0; i < airselection.length; i++) {
                        if (airselection[i].value == 'R' && airselection[i].checked == true) {//round trip
                            //show('todescrow');
                            show('toairports');
                            hide('openjawreturn1-2');
                            //return from city = tocity
                            document.getElementById('airretfromcity').value = document.getElementById('cbairtocity').value;
                            document.getElementById('airrettocity').value = document.getElementById('airfromcity').value;
                        }
                        else if (airselection[i].value == 'O' && airselection[i].checked == true) {//one way
                            //show('todescrow');
                            show('toairports');
                            hide('openjawreturn1-2');
                            //return from city = tocity
                            document.getElementById('airretfromcity').value = '';
                            document.getElementById('airrettocity').value = '';
                            //one way....hide the reuturn date, return time row.
                            hide('returndaterow');
                        }
                        else if (airselection[i].value == 'J' && airselection[i].checked == true) {//multi cities
                            //show('todescrow');
                            show('toairports');
                            show('openjawreturn1-2');
                            if (document.getElementById('cbairtocity').value != '' && document.getElementById('airretfromcity').value == '') {
                                document.getElementById('airretfromcity').value = document.getElementById('cbairtocity').value;
                            }
                        }
                    }

                }
                else {//flight + hotel
                    $("#chdagesheader").show();
                    $("#roomheader1").show();
                    $("#selNumRooms").show();
                    show('populardestrow');
                    show('productcoderow');
                    show('fromdescrow');
                    show('todescrow');
                    show('fromairports');
                    hide('toairports');
                    //the advance options
                    show('advAirline');
                    show('advClass');
                    show('advFareType');
                    show('advhotelpref');
                    //has air?
                    document.getElementById('chkAir').value = 'Y';
                    //show roomheader1 and the dropdown to select actually number of rooms
                    show('roomheader1');
                    show('roomselection1');
                    show('airsortrow');
                    //air trip type is RoundTrip
                    for (i = 0; i < airselection.length; i++) {
                        if (airselection[i].value == 'R') {//must be round trip
                            airselection[i].checked = true;
                            hide('openjawreturn1-2');
                            document.getElementById('airretfromcity').value = '';
                            document.getElementById('airrettocity').value = '';
                        }
                    }

                    //show room and labels
                    $("#adtheader").show();
                    $("#chdheader").show();
                    //$.each($("[name=numadts]"), function () {
                    //        var parent = $(this).parent();
                    //        $(this).show();
                    //        parent.show()
                    //});
                    //$.each($("[name=numchds]"), function () {
                    //        var parent = $(this).parent();
                    //        $(this).show();
                    //        parent.show();
                    //});
                    updateRooms();
                }
                break;
            case 'PKG':
                if (document.getElementsByName('pkgtabsuboption')[0].checked == true) {
                    show('populardestrow');
                    show('productcoderow');
                    show('fromdescrow');
                    show('todescrow');
                    show('fromairports');
                    hide('toairports');
                    //the advance options
                    show('advAirline');
                    show('advClass');
                    show('advFareType');
                    show('advhotelpref');
                    //has air?
                    document.getElementById('chkAir').value = 'Y';
                    show('airsortrow');
                    //air trip type is RoundTrip
                    document.getElementsByName('radairtype')[0].checked = true;
                    //air trip type is RoundTrip
                    for (i = 0; i < airselection.length; i++) {
                        if (airselection[i].value == 'R') {//must be round trip
                            airselection[i].checked = true;
                            hide('openjawreturn1-2');
                            document.getElementById('airretfromcity').value = '';
                            document.getElementById('airrettocity').value = '';
                        }
                    }
                }
                else {
                    //there's only 1 option (land + air) for package
                }
                break;
            case 'HTL':
                if (document.getElementsByName('htltabsuboption')[0].checked == true) {//hotel only
                    show('populardestrow');
                    show('productcoderow');
                    hide('fromdescrow');
                    show('todescrow');
                    hide('fromairports');
                    hide('toairports');
                    //the advance options
                    hide('advAirline');
                    hide('advClass');
                    hide('advFareType');
                    show('advhotelpref');
                    hide('airsortrow');
                    //has air?
                    document.getElementById('chkAir').value = 'N';
                    //date description?
                    document.getElementById('fromdatedesc').innerHTML = 'Check-in:';
                    document.getElementById('todatedesc').innerHTML = 'Check-out:';
                    //document.getElementById('todescrow').innerHTML = 'Destination or Airport Code:';
                    $("#trackflight").hide();
                    $("#roomheader1").show();
                    $("#selNumRooms").show();
                }
                else {//hotel + flight
                    show('populardestrow');
                    show('productcoderow');
                    show('fromdescrow');
                    show('todescrow');
                    show('fromairports');
                    hide('toairports');
                    //the advance options
                    show('advAirline');
                    show('advClass');
                    show('advFareType');
                    show('advhotelpref');
                    show('airsortrow');
                    //has air?
                    document.getElementById('chkAir').value = 'Y';
                    //air trip type is RoundTrip
                    for (i = 0; i < airselection.length; i++) {
                        if (airselection[i].value == 'R') {//must be round trip
                            airselection[i].checked = true;
                            hide('openjawreturn1-2');
                            document.getElementById('airretfromcity').value = '';
                            document.getElementById('airrettocity').value = '';
                        }
                    }
                    $("#trackflight").show();
                    $("#roomheader1").show();
                    $("#selNumRooms").show();
                }
                break;
            case 'CRU':
                break;
            case 'CIN':
                if (!$("#frmchktab").attr("src")) { $("#frmchktab").attr("src", "http://www.travelspan.com/Webcheckin.htm"); }
                break;
            case 'FST':
                if (!$("#frmfltstat").attr("src")) { $("#frmfltstat").attr("src", "http://www.flightview.com"); }
                break;
        }
    }

    function ShowPopupCalendar(thisid, txtid, format, intmonth, startvalue, datetype, verticalmonth) {
        var usertype = document.getElementById('usertype').value;
        var shoptype = document.getElementById('shopType').value;

        if ('[R064]' === 'true') {
            startvalue = '1 jan 2000';
        }

        ShowCalendar(thisid, txtid, format, intmonth, startvalue, null, null, verticalmonth);
        /*
        function ShowCalendar(strsourceid, strtargetid, strformat, intmonths, datmin, datmax, strdefault, verticalmonth)
        Input:
            //evt             The event (used for mouse positioning)
            strsourceid		The id of the object that requested the calendar (usually a datepicker icon)
            strtargetid     The id of the object in which to put the selected date
            strformat       The formatting string to use for date display - Also the format in which the date will be entered in the target element (Default = cal_defaultformat)
            intmonths       The number of months to show on the calendar (Default = 1)
            datmin          The minimum valid date (Default = 1 Jan 1900)
            datmax          The maximum valid date (Default = 1 Jan 2050)
            strdefault      The default selected date (Default = Today's Date
            verticalmonth   The param controlling side-by-side month or one on top of another.  (yes = on top of each other, no = side-by-side) (for displaying more than 1 months)
            )
        */

        if (txtid === "tbCheckOutHotelReq") {
            fnAdjustCalPos();
        }
    }

</script>
<script type="text/javascript" src="https://booking.travelspan.com/STW/TSPAN/ajaxscript.js"></script>
<input type="hidden" name="Action" id="Action" value="" />
<input type="hidden" name="numairadts" id="numairadts" value="0" />
<input type="hidden" name="numairchds" id="numairchds" value="0" />
<input type="hidden" name="airfaretype" id="airfaretype" value="BOTH" />
<input type="hidden" name="productcode" id="productcode" value="" />
<input type="hidden" name="subaction" id="subaction" value="" />
<input type="hidden" name="shopType" id="shopType" value="" />
<input type="hidden" name="chkAir" id="chkAir" value="Y" />
<input type="hidden" name="cbcabin" id="cbcabin" value="E" />
<input type="hidden" name="searchmask" id="searchmask" value="[searchmask]" />
<input type="hidden" name="producttype" id="producttype" value="L" />
<input type="hidden" name="airtocity" id="airtocity" value="" />
<input type="hidden" name="airdateout" id="airdateout" value="" />
<input type="hidden" name="airdateret" id="airdateret" value="" />
<input type="hidden" name="usertype" id="usertype" value="DIRECT" />
<input type="hidden" name="airpreference" id="airpreference" value="BESTROUTING" />

<!--input type="hidden" name="directaironlyairports" id="directaironlyairports" value="[directaironlyairports nolonguse]" /-->
<!--input type="hidden" name="allfromairports" id="allfromairports" value="[allfromairports nolonguse]" /-->
<input type="hidden" name="blockonly" id="blockonly" value="" />

<table cellspacing="0" cellpadding="0" class="shopformblue" onkeyup="if (checkEnterKey(event)) {checkInput();}">
    <tr>
        <td colspan="2" width="100%">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" >
                <tr>
                    <td id="typeair" style="text-align:center;white-space:nowrap" onclick="setShopType('AIR');" >
                        Flights<br /><!--<img src="Pics/airplane.png" style="height:15px;width:15px"/>-->
                    </td>
                    <td id="typehtl" style="text-align:center;white-space:nowrap" onclick="setShopType('HTL');" >
                        Hotels
                    </td>
                    <td id="typepkg" style="text-align:center;white-space:nowrap" onclick="setShopType('PKG');" >
                        Packages
                    </td>
                    <td id="typecru" style="text-align:center;white-space:nowrap;display:none" onclick="setShopType('CRU');" >
                        Cruise
                    </td>
                    <!--<td id="typechkin" onclick="setShopType('CIN');" style="text-align:center;white-space:nowrap;">-->
                    <td id="typechkin" onclick="window.open('http://www.travelspan.com/Webcheckin.htm', '', '')" style="text-align: center; white-space: nowrap;">Check In
                    </td>
                    <!--<td id="typefltstat" onclick="setShopType('FST');" style="text-align:center;white-space:nowrap;">-->
                    <td id="typefltstat" onclick="window.open('http://www.flightview.com', '', '')" style="text-align: center; white-space: nowrap;">Flight Status
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td id="noncrutab">
            <table cellspacing="0" cellpadding="0" border="0" style="width:100%">
                <tr><td>&nbsp;</td></tr>
                <tr>
                <!-- Flight Tab: sub options-->
                    <td id="flightsubopt" style="text-align:center;">
                        <input type="radio" id="airflightonly" name="airtabsuboption" value="flightonly" checked onclick="setsuboptions();"/><label for="airflightonly">Flight Only</label>&nbsp;&nbsp;
                        <input type="radio" id="airflighthotel" name="airtabsuboption" value="flighthotel" onclick="setsuboptions();"/><label for="airflighthotel">Flight + Hotel</label>
                    </td>
                    <td id="hotelsubopt" style="display:none;text-align:center">
                        <input type="radio" name="htltabsuboption" id="htlhotelonly" value="hotelonly" checked onclick="setsuboptions();"/><label for="htlhotelonly">Hotel Only</label>&nbsp;&nbsp;
                        <input type="radio" name="htltabsuboption" id="htlhotelflight" value="hotelflight" onclick="setsuboptions();"/><label for="htlhotelflight">Hotel + Flight</label>
                    </td>
                    <td id="packagesubopt" style="display:none;">
                        <input type="radio" name="pkgtabsuboption" value="flighthotel" checked onclick="setsuboptions();"/>Flight + Hotel
                    </td>
                </tr>
                <!-- select type select RoundTrip, OpenJaw, Oneway-->
                <tr>
                    <td id="airtriptype" colspan="3" style="white-space:nowrap;width:100%;text-align:center" >
                        <strong>
                        <input type="radio" name="radairtype" value="R" onclick="setsuboptions();" checked />Round Trip
                        <input type="radio" name="radairtype" value="O" onclick="setsuboptions();" />One Way
                        <input type="radio" name="radairtype" value="J" onclick="setsuboptions();" />Multi Cities
                        </strong>
                    </td>
                </tr>
                <tr>
                    <td style="text-align: center;vertical-align:top">
                        <input type="hidden" name="newsearch" value="0" />
                        <table cellspacing="0" style="text-align: center;width:100%">
                            <tr  style="height: 30px;vertical-align:bottom" >
                                <td colspan="2" id="fromdescrow" style="width:50%;text-align:left">
                                    From:
                                </td>
                                <td colspan="2" id="todescrow" style="width:50%;text-align:left">
                                    To:
                                </td>                    
                            </tr>
                            <tr>
                                <!-- departing from -->
                                <td colspan="2" id="fromairports" style="width:50%;text-align:left;">
                                    <input type="text" name="airfromcity" id="airfromcity" value="" class="formbox" autocomplete="off" onkeyup="attachcitycodehelper(this, 'FROMCITYCODE');" onkeydown="checkArrowDown(event);" style="width:100%"/>
                                </td>
                                <!-- arriving at -->
                                <td colspan="2" id="toairports" style="width:50%;text-align:left">
                                    <input type="text" name="cbairtocity" id="cbairtocity" value="" class="formbox" style="width:100%;" autocomplete="off" onkeyup="attachcitycodehelper(this, 'TOCITYCODE');" onkeydown="checkArrowDown(event);" />
                                </td>
                                <!-- return product city -->
                                <td colspan="2" id="productcoderow" style="width:50%;text-align:left">
                                    <input type="text" name="productcodedisplay" id="productcodedisplay" value="" class="formbox" style="width:100%;" autocomplete="off" onkeyup="attachcitycodehelper(this,'PRODUCTCODE');" onkeydown="checkArrowDown(event);" />
                                </td>                    
                            </tr>
                            <!--<tr id="openjawreturn2">
                                <td colspan="2" style="width:50%;text-align:left">
                                    From:
                                </td>
                                <td colspan="2" style="width:50%;text-align:left">
                                    To:
                                </td>                    
                            </tr>-->
                            <tr id="openjawreturn1">
                                <td colspan="2" style="width:50%;text-align:left">
                                    <input type="text" name="airretfromcity" id="airretfromcity" value="" class="formbox" style="width:100%;" autocomplete="off" onkeyup="attachcitycodehelper(this,'TOCITYCODE');" onkeydown="checkArrowDown(event);"/>
                                </td>
                                <td colspan="2" style="width:50%;text-align:left">
                                    <input type="text" name="airrettocity" id="airrettocity" value="" class="formbox" style="width:100%;" autocomplete="off" onkeyup="attachcitycodehelper(this,'TOCITYCODE');" onkeydown="checkArrowDown(event);"/>
                                </td>                    
                            </tr>
                        </table>
                    </td>
                </tr>
                <!-- popular destination rows -->
                <!--tr style="display: none;>
                    <td width="100%" id="populardestrow">
						<div style="display: none;">
							Popular Destinations:<br />
							<table width="100%" cellpadding="0" cellspacing="0">
								<tr>
									<td align="left" width="50%;">
										<input type="radio" name="populardest" value="SDQ" onclick="document.getElementById('productcodedisplay').value = this.value;" />Santo Domingo<br />
										<input type="radio" name="populardest" value="POP" onclick="document.getElementById('productcodedisplay').value = this.value;" />Puerto Plata<br />
										<input type="radio" name="populardest" value="PUJ" onclick="document.getElementById('productcodedisplay').value = this.value;" />Punta Cana<br />
										<input type="radio" name="populardest" value="BGI" onclick="document.getElementById('productcodedisplay').value = this.value;" />Barbados<br />
										<input type="radio" name="populardest" value="" onclick="document.getElementById('productcodedisplay').value = this.value;" />Grenada<br />
										<input type="radio" name="populardest" value="SLU" onclick="document.getElementById('productcodedisplay').value = this.value;" />St. Lucia<br />
									</td>
									<td align="left" width="50%;">
										<input type="radio" name="populardest" value="TAB" onclick="document.getElementById('productcodedisplay').value = this.value;" />Tobago<br />
										<input type="radio" name="populardest" value="SJU" onclick="document.getElementById('productcodedisplay').value = this.value;" />San Juan (P.R.)<br />
										<input type="radio" name="populardest" value="CUN" onclick="document.getElementById('productcodedisplay').value = this.value;" />Cancun<br />
										<input type="radio" name="populardest" value="MCO" onclick="document.getElementById('productcodedisplay').value = this.value;" />Orlando<br />
										<input type="radio" name="populardest" value="MIA" onclick="document.getElementById('productcodedisplay').value = this.value;" />Miami<br />
										<input type="radio" name="populardest" value="NYC" onclick="document.getElementById('productcodedisplay').value = this.value;" />New York<br />
									</td>
								</tr>
							</table>
						</div>
                    </td>
                </tr-->
                <tr >
                    <td style="width:100%">
                        <table style="width:100%" cellpadding="0" cellspacing="0">
                            <tr>
                                <td style="width: 50%; white-space: nowrap;">
                                    <table cellpadding="0" cellspacing="0">
                                        <tr style="height: 30px" valign="bottom">
                                            <td style="width: 50%; text-align: right; white-space: nowrap">
                                                <table style="width: 100%" cellpadding="0" cellspacing="0">
                                                    <tr>
                                                        <td id="fromdatedesc" style="white-space: nowrap">Depart:</td>
                                                    </tr>
                                                    <tr>
                                                        <td style="text-align: right;">
                                                            <input type="text" name="tbCheckInHotelReq" id="tbCheckInHotelReq" value="mm/dd/yyyy" style="vertical-align: bottom; text-align: right;" maxlength="11" size="10" class="formbox" onclick="ShowPopupCalendar(this, 'tbCheckInHotelReq', 'dd MMM yyyy', 2, new Date(), 'RET', 'NO');" onchange="if ($(&quot;[name=radairtype]:checked&quot;).val() != 'O'){setReturnDate(this, document.getElementById('tbCheckOutHotelReq'));}" />
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td style="width: 50%; text-align: left;">
                                                <select id="dtime1" name="dtime1" class="formbox" style="width: 100px; vertical-align: bottom;">
                                                    <option value="" selected>Any time</option>
                                                    <option value="0659">Morning (5am-9am)</option>
                                                    <option value="1059">Late Morning (9am-1pm)</option>
                                                    <option value="1459">Afternoon (1pm-5pm)</option>
                                                    <option value="1859">Evening (5pm-9pm)</option>
                                                    <option value="2259">Night (9pm-1am)</option>
                                                    <option value="0259">Late Night (1am-5am)</option>
                                                </select>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                                <td style="width:50%;white-space:nowrap;" id="returndaterow">
                                    <table style="width:100%;" cellpadding="0" cellspacing="0">
                                        <tr style="height: 30px;vertical-align:bottom" valign="bottom">
                                            <td style="width:50%;text-align:left;white-space:nowrap">
                                                <table style="width:100%;" cellpadding="0" cellspacing="0">
                                                    <tr>
                                                        <td id="todatedesc" style="white-space:nowrap">Return:</td>
                                                    </tr>                                                    
                                                    <tr>
                                                        <td style="text-align:right;">
                                                            <input type="text" name="tbCheckOutHotelReq" id="tbCheckOutHotelReq" value="mm/dd/yyyy" style="vertical-align: bottom;text-align:right;" maxlength="11" size="10" class="formbox" onclick="if (isNaN(Date.parse(this.value)) == true) { ShowPopupCalendar(this, 'tbCheckOutHotelReq', 'dd MMM yyyy', 2, new Date(), document.getElementById('tbCheckInHotelReq').value, 'NO'); } else { ShowPopupCalendar(this, 'tbCheckOutHotelReq', 'dd MMM yyyy', 2, new Date(), this.value, 'NO'); }" onchange="setOutboundDate(this, document.getElementById('tbCheckInHotelReq'))";/>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td style="width:50%;text-align:left;">
                                                <select id="dtime2" name="dtime2" class="formbox" style="width: 100px; vertical-align: bottom;">
                                                    <option value="" selected>Any time</option>
                                                    <option value="0659">Morning (5am-9am)</option>
                                                    <option value="1059">Late Morning (9am-1pm)</option>
                                                    <option value="1459">Afternoon (1pm-5pm)</option>
                                                    <option value="1859">Evening (5pm-9pm)</option>
                                                    <option value="2259">Night (9pm-1am)</option>
                                                    <option value="0259">Late Night (1am-5am)</option>
                                                </select>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr id="roomOpts">
                    <td style="vertical-align:top">
                        <table cellpadding="0" cellspacing="0"  style="vertical-align:top;width:100%;" >
                            <!-- HEADERS -->
                            <tr style="vertical-align:bottom">
                                <td colspan="2" style="width:50%;">
                                    <table border="0" cellpadding="0" cellspacing="0"  id="roomheader1">
                                        <tr><td>Rooms</td></tr>
                                    </table>
                                </td>
                                <!--<td>
                                    <small>Adults</small>
                                </td>
                                <td>
                                    <small>Children</small>
                                </td>-->
                            </tr>
                            <tr>
                                <td colspan="2" style="width: 50%;">
                                    <select class="formbox" name="selNumRooms" id="selNumRooms" onchange="updateRooms();" style="width:50%">
                                        <option value="1" selected>1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </td>
                                <td>
                                    <!--<select class="formbox" name="numadts" id="numadts" style="width:100%">
                                        <option value="0">0</option>
                                        <option value="1" selected>1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                    </select>
                                </td>
                                <td>
                                    <select class="formbox" name="numchds" id="numchds" onchange="updateRooms();" style="width:100%">
                                        <option value="0" selected>0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </td>-->
                            </tr>
                            <tr id="chdagesheader">
                                <td colspan="4">
                                    <table style="width:100%;">
                                        <tr name="chdageheader1" id="chdageheader1" style="display: none;text-align:right">
                                            <td id="Td1" ></td>
                                            <td id="Td2" ></td>
                                            <td >&nbsp;</td>
                                            <td colspan="5" style="text-align:center" >Indicate age of children at time of travel
                                            </td>
                                        </tr>
                                        <tr>
                                            <td id="adtheader" >Adults</td>
                                            <td id="chdheader" >Children</td>
                                            <td >&nbsp;</td>
                                            <td id="chdheader1" >Chd 1</td>
                                            <td id="chdheader2" >Chd 2</td>
                                            <td id="chdheader3" >Chd 3</td>
                                            <td id="chdheader4" >Chd 4</td>
                                            <td id="chdheader5" >Chd 5</td>
                                        </tr>
                                        <!-- ROOM1 -->
                                        <tr id="room1">
                                            <td>
                                                <select class="formbox" name="numadts" id="numadts" style="width: 100%">
                                                    <option value="0">0</option>
                                                    <option value="1" selected>1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select class="formbox" name="numchds" id="numchds"  onchange="updateRooms();" style="width: 100%">
                                                    <option value="0" selected>0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select>
                                            </td>
                                            <td>&nbsp;</td>
                                            <td>
                                                <select class="formbox" name="chd1age" id="chd1age1" style="width: 47px">
                                                    <option value="0" selected>0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select class="formbox" name="chd2age" id="chd2age1" style="width: 47px">
                                                    <option value="0" selected>0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select class="formbox" name="chd3age" id="chd3age1" style="width: 47px">
                                                    <option value="0" selected>0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select class="formbox" name="chd4age" id="chd4age1" style="width: 47px">
                                                    <option value="0" selected>0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select class="formbox" name="chd5age" id="chd5age1" style="width: 47px">
                                                    <option value="0" selected>0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <!-- ROOM2 -->
                                        <tr id="room2" style="display: none;">
                                            <td>
                                                <select class="formbox" name="numadts" style="width: 100%">
                                                    <option value="0">0</option>
                                                    <option value="1" selected>1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select class="formbox" name="numchds" onchange="updateRooms();" style="width: 100%">
                                                    <option value="0" selected>0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select>
                                            </td>
                                            <td>&nbsp;</td>
                                            <td>
                                                <select class="formbox" name="chd1age" id="chd1age2" style="width: 47px">
                                                    <option value="0" selected>0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select class="formbox" name="chd2age" id="chd2age2" style="width: 47px">
                                                    <option value="0" selected>0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select class="formbox" name="chd3age" id="chd3age2" style="width: 47px">
                                                    <option value="0" selected>0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select class="formbox" name="chd4age" id="chd4age2" style="width: 47px">
                                                    <option value="0" selected>0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select class="formbox" name="chd5age" id="chd5age2" style="width: 47px">
                                                    <option value="0" selected>0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <!-- ROOM3 -->
                                        <tr id="room3" style="display: none;">
                                            <td>
                                                <select class="formbox" name="numadts" style="width: 100%">
                                                    <option value="0">0</option>
                                                    <option value="1" selected>1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select class="formbox" name="numchds" onchange="updateRooms();" style="width: 100%">
                                                    <option value="0" selected>0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select>
                                            </td>
                                            <td>&nbsp;</td>
                                            <td>
                                                <select class="formbox" name="chd1age" id="chd1age3" style="width: 47px">
                                                    <option value="0" selected>0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select class="formbox" name="chd2age" id="chd2age3" style="width: 47px">
                                                    <option value="0" selected>0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select class="formbox" name="chd3age" id="chd3age3" style="width: 47px">
                                                    <option value="0" selected>0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select class="formbox" name="chd4age" id="chd4age3" style="width: 47px">
                                                    <option value="0" selected>0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select class="formbox" name="chd5age" id="chd5age3" style="width: 47px">
                                                    <option value="0" selected>0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <!-- ROOM4 -->
                                        <tr id="room4" style="display: none;">
                                            <td>
                                                <select class="formbox" name="numadts" style="width: 100%">
                                                    <option value="0">0</option>
                                                    <option value="1" selected>1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select class="formbox" name="numchds" onchange="updateRooms();" style="width: 100%">
                                                    <option value="0" selected>0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select>
                                            </td>
                                            <td>&nbsp;</td>
                                            <td>
                                                <select class="formbox" name="chd1age" id="chd1age4" style="width: 47px">
                                                    <option value="0" selected>0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select class="formbox" name="chd2age" id="chd2age4" style="width: 47px">
                                                    <option value="0" selected>0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select class="formbox" name="chd3age" id="chd3age4" style="width: 47px">
                                                    <option value="0" selected>0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select class="formbox" name="chd4age" id="chd4age4" style="width: 47px">
                                                    <option value="0" selected>0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select class="formbox" name="chd5age" id="chd5age4" style="width: 47px">
                                                    <option value="0" selected>0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                </select>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>&nbsp;<!-- empty tr,td just to space out the TRs --></td>
                </tr>
                <tr>
                    <td>
                        <table style="width:100%" cellpadding="0" cellspacing="0">
                            <tr id="advhotelpref" style="display: none;">
                                <td colspan="2" style="width:100%">
                                    <table style="width:100%">
                                        <tr>
                                            <td style="width:10%"></td>
                                            <td style="text-align: right;white-space:nowrap">Hotel Name&nbsp;
                                            </td>
                                            <td style="white-space:nowrap">
                                                <input type="text" name="txthotelpref" id="txthotelpref" value="" style="width:200px"/><span style="font-size:smaller">(Optional)</span>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <!-- carrier and airfare type section -->
                            <tr id="advFareType">
                                <td>
                                    <table style="width:100%">
                                        <tr>
                                            <td style="text-align: left; width: 50%">Airline &nbsp;
                                            </td>
                                            <td style="text-align: left; width: 50%">Class &nbsp;
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: !important 50%;">
                                                <select name="aircarrier" id="aircarrier" class="formbox">
                                                    <option value="">- Select Airline -</option>
                                                    <option value="" selected>All Airlines</option>
                                                    <option value="V2">TraveSpan operated by Vision Airlines</option>
                                                    <option value="EI">Aer Lingus</option>
<option value="SU">Aeroflot Russian Airlines</option>
<option value="AR">Aerolineas Argentinas</option>
<option value="BQ">Aeromar</option>
<option value="AM">Aeromexico</option>
<option value="VH">Aeropostal Airlines</option>
<option value="VV">Aerosvit Airlines</option>
<option value="Q9">Afrinat International Airlines</option>
<option value="LM">Air Alm</option>
<option value="AB">Air Berlin</option>
<option value="AC">Air Canada</option>
<option value="TX">Air Caraibes</option>
<option value="CA">Air China International</option>
<option value="H9">Air D'ayiti</option>
<option value="UX">Air Europa</option>
<option value="AF">Air France</option>
<option value="AI">Air India</option>
<option value="IJ">Air Liberte/Aom</option>
<option value="KM">Air Malta</option>
<option value="NZ">Air New Zealand</option>
<option value="AP">Air One Airlines</option>
<option value="FJ">Air Pacific</option>
<option value="EX">Air Santo Domingo</option>
<option value="TN">Air Tahiti Nui</option>
<option value="TS">Air Transat</option>
<option value="AS">Alaska Airlines</option>
<option value="AZ">Alitalia Airlines</option>
<option value="NH">All Nippon Airways</option>
<option value="AQ">Aloha Airlines</option>
<option value="AA">American Airlines</option>
<option value="TZ">American Trans Air</option>
<option value="AG">Aruba Airlines</option>
<option value="OZ">Asiana Airlines</option>
<option value="OS">Austrian Airlines</option>
<option value="6A">Aviacsa</option>
<option value="AV">Avianca</option>
<option value="ZE">Azteca Airlines</option>
<option value="UP">Bahamasair</option>
<option value="GQ">Big Sky Airlines</option>
<option value="BA">British Airways</option>
<option value="BD">British Midland Airways</option>
<option value="BW">Caribbean Airlines</option>
<option value="ZQ">Caribbean Sun Airlines</option>
<option value="CX">Cathay Pacific Airways</option>
<option value="KX">Cayman Airways</option>
<option value="YY">Charter Air</option>
<option value="CI">China Airlines</option>
<option value="MU">China Eastern Airlines</option>
<option value="CZ">China Southern Airlines</option>
<option value="DE">Condor</option>
<option value="CO">Continental Airlines</option>
<option value="CM">Copa Airlines</option>
<option value="OU">Croatia Airlines</option>
<option value="LX">Crossair Dba Swiss</option>
<option value="OK">Csa Czech Airlines</option>
<option value="CU">Cubana</option>
<option value="DL">Delta Airlines</option>
<option value="DW">Dominican Wings</option>
<option value="K8">Dutch Caribbean Airlines</option>
<option value="2D">Eastern Airlines</option>
<option value="MS">Egyptair</option>
<option value="LY">El Al Israel Airlines</option>
<option value="EK">Emirates</option>
<option value="ET">Ethiopian Airlines</option>
<option value="EY">Etihad Airways</option>
<option value="BR">Eva Airways</option>
<option value="AY">Finnair Oy</option>
<option value="OJ">Fly Jamaica</option>
<option value="F9">Frontier Airlines</option>
<option value="GA">Garuda Indonesian Airways</option>
<option value="GH">Ghana Airways</option>
<option value="G3">GOL Linhas Aereas</option>
<option value="ZK">Great Lakes Aviation</option>
<option value="ZO">Great Plains Airlines</option>
<option value="GF">Gulf Air</option>
<option value="HR">Hahn Air</option>
<option value="HA">Hawaiian Airlines</option>
<option value="IB">Iberia</option>
<option value="FI">Icelandair</option>
<option value="I9">Indigo Airlines</option>
<option value="7I">Insel Air International</option>
<option value="4O">Interjet Airlines</option>
<option value="JL">Japan Air Lines</option>
<option value="9W">Jet Airways</option>
<option value="B6">JetBlue Airways</option>
<option value="S2">JetLite</option>
<option value="IT">Kingfisher Airlines</option>
<option value="KL">KLM Royal Dutch Airlines</option>
<option value="KE">Korean Air</option>
<option value="KU">Kuwait Airways</option>
<option value="LR">Lacsa Airlines</option>
<option value="4M">Lan Argentina</option>
<option value="LA">Lan Chile Airlines</option>
<option value="XL">Lanecuador</option>
<option value="LP">Lanperu</option>
<option value="MJ">Lapa Lin Aer Privadas</option>
<option value="LI">Liat (1974)</option>
<option value="LB">Lloyd Aereo Boliviano</option>
<option value="LO">Lot Polish Airlines</option>
<option value="LT">Ltu International Airways</option>
<option value="LH">Lufthansa Airlines</option>
<option value="MH">Malaysia Airlines System</option>
<option value="MA">Malev Hungarian Airlines</option>
<option value="MP">Martinair Holland</option>
<option value="IG">Meridiana</option>
<option value="YV">Mesa Air Lines</option>
<option value="MX">Mexicana Airlines</option>
<option value="ME">Middle East Airlines</option>
<option value="YX">Midwest Express Airlines</option>
<option value="N7">National Airlines</option>
<option value="OA">Olympic Airways</option>
<option value="PK">Pakistan Intl Airlines</option>
<option value="KS">Penair</option>
<option value="PR">Philippine Airlines</option>
<option value="PU">Pluna Lineas</option>
<option value="PH">Polynesian Airlines</option>
<option value="QF">Qantas Airways</option>
<option value="AT">Royal Air Maroc</option>
<option value="RJ">Royal Jordanian Airlines</option>
<option value="5R">Rutaca Airlines</option>
<option value="SV">Saudi Arabian Airlines</option>
<option value="SK">Scandinavian Airlines</option>
<option value="SQ">Singapore Airlines</option>
<option value="NE">SkyEurope Airlines</option>
<option value="5G">Skyservice Airlines</option>
<option value="SN">Sn Brussels Airlines</option>
<option value="4S">Solair</option>
<option value="SA">South African Airways</option>
<option value="A4">Southern Winds</option>
<option value="JK">Spanair</option>
<option value="SY">Sun Country Airlines</option>
<option value="PY">Surinam Airways</option>
<option value="WQ">Swift Air</option>
<option value="RQ">Swisswings Ag</option>
<option value="TA">Taca International Airlines</option>
<option value="JJ">Tam Airlines</option>
<option value="PZ">Tam Mercosur</option>
<option value="TP">Tap Air Portugal</option>
<option value="RO">Tarom Romanian Air Transport</option>
<option value="TG">Thai Airways</option>
<option value="TK">Turkish Airlines</option>
<option value="T9">Turpial Airlines</option>
<option value="PS">Ukraine International Airlines</option>
<option value="UA">United Airlines</option>
<option value="UW">Universal Airlines</option>
<option value="US">US Airways</option>
<option value="U5">USA 3000</option>
<option value="RG">Varig Airlines</option>
<option value="VP">Vasp Brazilian Airlines</option>
<option value="VS">Virgin Atlantic Airways</option>
<option value="DJ">Virgin Blue</option>
<option value="TV">Virgin Express</option>
<option value="UK">Vistara</option>
<option value="WS">West Jet</option>
<option value="XP">Xtra Airways</option>

                                                </select>
                                            </td>
                                            <td style="width: 50%">
                                                <select name="aircabinclass" id="aircabinclass" class="formbox">
                                                    <option value="" selected>Economy/Coach Class</option>
                                                    <option value="B">First/Business Class</option>
                                                </select>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>&nbsp;<!-- empty tr,td just to space out the TRs --></td>
                </tr>
                <tr>
                    <td>
                        <table border="0" cellpadding="0" cellspacing="0" style="width:100%">
                            <tr>
                                <td colspan="2" id="airsortrow">
                                    <input type="radio" name="inputairoptionsort" value="PRICE" [INPUTPRICE]/>Price 
                                    <input type="radio" name="inputairoptionsort" value="NONSTOP" [INPUTNONSTOP]/>Non Stop Or Direct
                                </td>
                                <td style="vertical-align:bottom;text-align:right">
                                    <input type="button" class="seachnow" value="Search Now" title="Search Now!" onclick="if (document.getElementById('seqlistoverridestyle')) { document.getElementById('seqlistoverridestyle').value = ''; } checkInput();" />
                                </td>
                                <td style="vertical-align:bottom" id="trackflight" >
                                    <input type="button" class="trackflight" value="Track Flight" onclick="window.open('http://www.flightview.com', '', '')" />
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr><td colspan="4" style="height:4px;"></td></tr>
                <tr>
                    
                </tr>
            </table>
        </td>
        <td id="pkgtab" style="display:none;">
            <table>
                
            </table>            
        </td>
        <td id="chkintab" style="display:none;">
            <iframe id="frmchktab" style=";border:none;margin:0px" src=""></iframe>
        </td>
        <td id="fltstattab" style="display:none;">
            <iframe id="frmfltstat" style="border:none;margin:0px" src=""></iframe>
        </td>
        
        <!---CRUISE TAB INFO --><!---CRUISE TAB INFO --><!---CRUISE TAB INFO --><!---CRUISE TAB INFO --><!---CRUISE TAB INFO -->
        <td id="crutab" style="display:none;">
            <iframe id="frmloader" width="320" height="240" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src=""></iframe>
        </td>
    </tr>
</table>
<!--
<PKGTabRow>
    <tr><td><a href="https://booking.travelspan.com/STW/STWProduct.aspx?ProductCode=[productcode]" target="_top">[productname]</a></td></tr>
    <tr><td class="text1" style="padding-left:10px;" align="right">from $[price] per person</td></tr>
</PKGTabRow>-->
<!-- /form -->
<script type="text/javascript">

    //setReturnDate(document.getElementById('tbCheckInHotelReq'), document.getElementById('tbCheckOutHotelReq'));
    var i, cookievalue;
    //reset page with values from cookie
    //set which subtab option was selected
    cookievalue = GetCookie('cookie_airtabsuboption');
    if (QueryString('airtabsuboption') != '') { cookievalue = QueryString('airtabsuboption').replace(/-/g, '/'); }
    if (cookievalue && cookievalue != '' && QueryString('airtabsuboption') == '') {
        for (i = 0; i < document.getElementsByName('airtabsuboption').length; i++) {
            if (cookievalue.toUpperCase() == document.getElementsByName('airtabsuboption')[i].value.toUpperCase()) {
                document.getElementsByName('airtabsuboption')[i].checked = true;
                break;
            }
        }
    }
    //hotels tabs
    cookievalue = GetCookie('cookie_htltabsuboption');
    if (QueryString('htltabsuboption') != '') { cookievalue = QueryString('htltabsuboption').replace(/-/g, '/'); }
    if (cookievalue && cookievalue != '') {
        for (i = 0; i < document.getElementsByName('htltabsuboption').length; i++) {
            if (cookievalue.toUpperCase() == document.getElementsByName('htltabsuboption')[i].value.toUpperCase()) {
                document.getElementsByName('htltabsuboption')[i].checked = true;
                break;
            }
        }
    }
    //package tab
    cookievalue = GetCookie('cookie_pkgtabsuboption');
    if (QueryString('pkgtabsuboption') != '') { cookievalue = QueryString('pkgtabsuboption').replace(/-/g, '/'); }
    if (cookievalue && cookievalue != '') {
        for (i = 0; i < document.getElementsByName('pkgtabsuboption').length; i++) {
            if (cookievalue.toUpperCase() == document.getElementsByName('pkgtabsuboption')[i].value.toUpperCase()) {
                document.getElementsByName('pkgtabsuboption')[i].checked = true;
                break;
            }
        }
    }
    //popular destination.
    cookievalue = GetCookie('cookie_populardest');
    if (cookievalue && cookievalue != '') {
        for (i = 0; i < document.getElementsByName('populardest').length; i++) {
            if (cookievalue.toUpperCase() == document.getElementsByName('populardest')[i].value.toUpperCase()) {
                document.getElementsByName('populardest')[i].checked = true;
                break;
            }
        }
    }
    //show trip air type selection  (Roundtrip, Oneway, Openjaw)
    cookievalue = GetCookie('cookie_radairtype');
    if (QueryString('radairtype') != '') { cookievalue = QueryString('radairtype').replace(/-/g, '/'); }
    if (cookievalue != null && cookievalue && cookievalue != '')
    { } else { cookievalue = 'R'; }
    for (i = 0; i < document.getElementsByName('radairtype').length; i++) {
        if (document.getElementsByName('radairtype')[i].value.toUpperCase() == cookievalue.toUpperCase()) {
            document.getElementsByName('radairtype')[i].checked = true;
            //alert('radairtype: ' + cookievalue + ' i: ' + i);
            break;
        }
    }

    cookievalue = GetCookie('cookie_shoptype');
    if (QueryString('shopType') != '') { cookievalue = QueryString('shopType').replace(/-/g, '/'); }
    if (!cookievalue || cookievalue == '' || cookievalue == 'undefined') {
        cookievalue = 'AIR';//If no cookie found......set flight as the default options.
    }
    setShopType(cookievalue);

    //hotel check in
    cookievalue = GetCookie('cookie_tbCheckInHotelReq');
    if (QueryString('tbCheckInHotelReq') != '') { cookievalue = QueryString('tbCheckInHotelReq').replace(/-/g, '/'); }
    if (cookievalue && cookievalue != '') {
        document.getElementById('tbCheckInHotelReq').value = FormatDate(cookievalue);
    }
    //hotel checkout
    cookievalue = GetCookie('cookie_tbCheckOutHotelReq');
    if (QueryString('tbCheckOutHotelReq') != '') { cookievalue = QueryString('tbCheckOutHotelReq').replace(/-/g, '/'); }
    if (cookievalue && cookievalue != '') {
        document.getElementById('tbCheckOutHotelReq').value = FormatDate(cookievalue);
    }
    cookievalue = GetCookie('cookie_airdateout');
    if (QueryString('airdateout') != '') { cookievalue = QueryString('airdateout').replace(/-/g, '/'); }
    if (cookievalue && cookievalue != '') {
        document.getElementById('airdateout').value = cookievalue;
    }
    cookievalue = GetCookie('cookie_airdateret');
    if (QueryString('airdateret') != '') { cookievalue = QueryString('airdateret').replace(/-/g, '/'); }
    if (cookievalue && cookievalue != '') {
        document.getElementById('airdateret').value = cookievalue;
    }
    //aironly to city.
    cookievalue = GetCookie('cookie_cbairtocity');
    if (QueryString('cbairtocity') != '') { cookievalue = QueryString('cbairtocity').replace(/-/g, '/'); }
    if (cookievalue && cookievalue != '') {
        document.getElementById('cbairtocity').value = cookievalue;
    }
    //air dep city
    cookievalue = GetCookie('cookie_airfromcity');
    if (QueryString('airfromcity') != '') { cookievalue = QueryString('airfromcity').replace(/-/g, '/'); }
    if (cookievalue && cookievalue != '') {
        document.getElementById('airfromcity').value = cookievalue;
        if (document.getElementsByName('airfromcity')) {
            for (i = 0; i < document.getElementsByName('airfromcity').length; i++) {
                document.getElementsByName('airfromcity')[i].value = cookievalue;
            }
        }
    }
    //air return from city (for openjaw/multicities shop)
    cookievalue = GetCookie('cookie_airretfromcity');
    if (QueryString('airretfromcity') != '') { cookievalue = QueryString('airretfromcity').replace(/-/g, '/'); }
    if (cookievalue && cookievalue != '') {
        document.getElementById('airretfromcity').value = cookievalue;

    }
    //return to city    
    cookievalue = GetCookie('cookie_airrettocity');
    if (QueryString('airrettocity') != '') { cookievalue = QueryString('airrettocity').replace(/-/g, '/'); }
    if (cookievalue && cookievalue != '') {
        document.getElementById('airrettocity').value = cookievalue;
    }
    //land city
    cookievalue = GetCookie('cookie_productcodedisplay');
    if (QueryString('productcodedisplay') != '') { cookievalue = QueryString('productcodedisplay').replace(/-/g, '/'); }
    if (cookievalue && cookievalue != '') {
        document.getElementById('productcodedisplay').value = cookievalue;
    }

    cookievalue = GetCookie('cookie_productcode');
    if (QueryString('productcode') != '') { cookievalue = QueryString('productcode'); }
    if (cookievalue && cookievalue != '') {
        document.getElementById('productcode').value = cookievalue;
    }

    cookievalue = GetCookie('cookie_aircarrier');
    if (QueryString('aircarrier') != '') { cookievalue = QueryString('aircarrier').replace(/-/g, '/'); }
    if (cookievalue && cookievalue != '') {
        document.getElementById('aircarrier').value = cookievalue;
    }
    cookievalue = GetCookie('cookie_aircabinclass');
    if (QueryString('aircabinclass') != '') { cookievalue = QueryString('aircabinclass').replace(/-/g, '/'); }
    if (cookievalue && cookievalue != '') {
        document.getElementById('aircabinclass').value = cookievalue;
    }

    cookievalue = GetCookie('cookie_txthotelpref');
    if (cookievalue && cookievalue != '') {
        document.getElementById('txthotelpref').value = cookievalue;
    }

    //put back the number of passengers in each room.
    cookievalue = GetCookie('cookie_adtineachroom');
    if (cookievalue && cookievalue != '') {
        for (j = 0; j < cookievalue.split(',').length; j++) {
            if (document.getElementsByName('numadts') && document.getElementsByName('numadts').length > j) {
                document.getElementsByName('numadts').item(j).value = cookievalue.split(',')[j];
            }
        }
    }
    //put back the number of passengers in each room.
    cookievalue = GetCookie('cookie_chdineachroom');
    if (cookievalue && cookievalue != '') {
        for (j = 0; j < cookievalue.split(',').length; j++) {
            if (document.getElementsByName('numchds') && document.getElementsByName('numchds').length > j) {
                document.getElementsByName('numchds').item(j).value = cookievalue.split(',')[j];
            }
        }
    }
    //set the children ages.    
    k = 0;
    j = 0; //max of 3 children each room.
    for (k = 1; k < 6; k++) {
        cookievalue = GetCookie('cookie_chd' + k + 'ages');
        if (cookievalue != null && cookievalue && cookievalue != '') {
            for (j = 0; j < cookievalue.split(',').length; j++) {
                if (document.getElementsByName('chd' + k + 'age') && document.getElementsByName('chd' + k + 'age').length > j) {
                    document.getElementsByName('chd' + k + 'age').item(j).value = cookievalue.split(',')[j];
                }
            }
        }
    }

    cookievalue = GetCookie('cookie_selNumRooms');
    if (cookievalue && cookievalue != '') {
        document.getElementById('selNumRooms').value = cookievalue;
    }

    cookievalue = GetCookie('cookie_inputairoptionsort');
    if (cookievalue && cookievalue != '') {
        $("[name=inputairoptionsort]").val([cookievalue]);
    } else { $("[name=inputairoptionsort]").val(["PRICE"]); }

    //room info....to show the correct rooming info
    //updateRooms();

    var fnAdjustCalPos = function () {
        setTimeout(function () {
            $("#mycal").css("left", ($("#tbCheckOutHotelReq").position().left - 126));
            $(".cal_month a").on("mouseup",
                function () {
                    fnAdjustCalPos();
                });
        }, 5);
    }
</script>

<!---javascript from kumar for cruise tab-->
<script type="text/javascript">
 
    //////       function PageQuery(q) {
    //////           if (q.length > 1) this.q = q.substring(1, q.length); else this.q = null; this.keyValuePairs = new Array(); if (q) { for (var i = 0; i < this.q.split("&").length; i++) { this.keyValuePairs[i] = this.q.split("&")[i]; } }
    //////           this.getKeyValuePairs = function () { return this.keyValuePairs; }
    //////           this.getValue = function (s) {
    //////               for (var j = 0; j < this.keyValuePairs.length; j++) {
    //////                   if (this.keyValuePairs[j].split("=")[0] == s)
    //////                       return this.keyValuePairs[j].split("=")[1];
    //////               }
    //////               return false;
    //////           }
    //////           this.getParameters = function () {
    //////               var a = new Array(this.getLength()); for (var j = 0; j < this.keyValuePairs.length; j++) { a[j] = this.keyValuePairs[j].split("=")[0]; }
    //////               return a;
    //////           }
    //////           this.getLength = function () { return this.keyValuePairs.length; }
    //////       }
    //////       function queryString(key) { if (window.location.search.length > 2) { var page = new PageQuery(window.location.search); return unescape(page.getValue(key)); } return "false"; }
    //////       this.q = queryString("reload"); this.qs = "";
    //////       
    //////       this.siid = "42217";//siid
    //////       
    //////       /***code-ForSID1***/
		//////       
    //////       var sid1 = "";
    //////       var newsidqs = "";
    //////       //this.sid1 = (queryString("sid1")!="" && queryString("sid1")!= false && queryString("sid1")!= "false" && queryString("sid1")!="undefined")?(queryString("sid1")):("");
    //////       //this.sid2 = (queryString("sid2")!="" && queryString("sid2")!= false && queryString("sid2")!= "false" && queryString("sid2")!="undefined")?(queryString("sid2")):("");
    //////       this.newsidqs = "&sid1=" + this.sid1 + "&sid2=" + this.sid2;
    //////       /***code-end***/
    //////       
    //////       if (this.q != "false" && this.siid == "false" && this.siid != "undefined") { this.qs = "?reload=true"; }
    //////       else if (this.q != "false" && this.siid != "false") { if (this.siid != "undefined") { this.qs = "?reload=true&siid=" + this.siid; } else { this.qs = "?reload=true"; } }
    //////       else if (this.q == "false" && this.siid != "false") { if (this.siid != "undefined") { this.qs = "?siid=" + this.siid; } }
    //////       this.meta = (this.qs.indexOf('?') != -1) ? ("&meta") : ("?meta");
    //////       var objiframe = document.getElementById("frmloader");
    //////       objiframe.src = "https://cruise.travelspan.com/content/searchforms/cruisesearch.html" + this.qs + this.newsidqs + this.meta + "=";
 
</script>
<script type="text/javascript">
    $(document).ready(function () {
        updateRooms();
    });
</script>
</form>
</body>
</html>
<!-- TEMPLATE PATH: E:\Clients\TravelSpan\STWeb\TSPAN\Input_ShopForm_Iframe.htm END -->



<!-- STWProduct.aspx Request Processed in 0.3750 seconds -->


<!-- PerfTracker: 
+- Main                          
| +- Initialize clsSession                    0.016 s 
| | +- SetPage                                  0.000 s 
| | | +- [Missing Seconds]                        0.000 s 
| | +- ClearCart                                0.000 s 
| | | +- [Missing Seconds]                        0.000 s 
| | +- ClearVars                                0.000 s 
| | | +- [Missing Seconds]                        0.000 s 
| | +- SetFormData                              0.000 s 
| | | +- SetFormData()                            0.000 s 
| | | | +- [Missing Seconds]                        0.000 s 
| | | +- [Missing Seconds]                        0.000 s 
| | +- InitComm                                 0.000 s 
| | | +- [Missing Seconds]                        0.000 s 
| | +- SetDefaultTheme                          0.000 s 
| | | +- [Missing Seconds]                        0.000 s 
| | +- CheckDomainTheme                         0.000 s 
| | | +- [Missing Seconds]                        0.000 s 
| | +- SetLogDefaultPath                        0.000 s 
| | | +- [Missing Seconds]                        0.000 s 
| | +- ClearTemplateCache                       0.000 s 
| | | +- [Missing Seconds]                        0.000 s 
| | +- GetDisplayHourFormat                     0.016 s 
| | | +- [COMM] GETDEFAULT                        0.016 s (2 @ 0.008 - m: 0.000 - M: 0.016)
| | | | +- [Missing Seconds]                        0.000 s 
| | | +- [Missing Seconds]                        0.000 s 
| | +- GetUserInfo                              0.000 s 
| | | +- [COMM] USERINFO                          0.000 s 
| | | | +- [Missing Seconds]                        0.000 s 
| | | +- [Missing Seconds]                        0.000 s 
| | +- [Missing Seconds]                        0.000 s 
| +- CheckSession()                           0.078 s 
| | +- [COMM] NEWSESSION                        0.063 s 
| | | +- [Missing Seconds]                        0.000 s 
| | +- [COMM] NEWRES                            0.000 s 
| | | +- [Missing Seconds]                        0.000 s 
| | +- [COMM] USERINFO                          0.016 s 
| | | +- [Missing Seconds]                        0.000 s 
| | +- [Missing Seconds]                        0.000 s 
| +- CheckCustom()                            0.000 s 
| | +- [COMM] SETCUSTOM                         0.000 s 
| | | +- [Missing Seconds]                        0.000 s 
| | +- [Missing Seconds]                        0.000 s 
| +- ReqWebSession                            0.000 s 
| | +- [Missing Seconds]                        0.000 s 
| +- SelectCase                               0.281 s 
| | +- [COMM] GENERICSEARCHSQL                  0.219 s (4 @ 0.055 - m: 0.000 - M: 0.203)
| | | +- [Missing Seconds]                        0.000 s 
| | +- GetCart()                                0.000 s 
| | | +- SendRequest                              0.000 s 
| | | | +- [COMM] CART                              0.000 s 
| | | | | +- [Missing Seconds]                        0.000 s 
| | | | +- [Missing Seconds]                        0.000 s 
| | | +- LoadRes                                  0.000 s 
| | | | +- [Missing Seconds]                        0.000 s 
| | | +- [Missing Seconds]                        0.000 s 
| | +- [COMM] LOOKUP                            0.000 s 
| | | +- [Missing Seconds]                        0.000 s 
| | +- [Missing Seconds]                        0.063 s 
| +- [Missing Seconds]                        0.000 s 

-->


<!-- Last Request: https://booking.travelspan.com/stw/stwproduct.aspx?Action=IFRAMESHOPFORM&amp;Theme=TSPAN -->

<input type="hidden" name="clientip" id="clientip" value="181.41.86.244">
