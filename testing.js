// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Unic - Delay EventListener 
// Issued by: Unic AG
// Contact: analytics@unic.com
// version: 1.0.0, 2018-08-03
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

var targetElement;
var ctrlPressed = false;
var shiftPressed = false;
var cmdPressed = false;

// 1.1.3 Create Delay Tracker
delayTracker = function(thisLink) {
    UnicTMSHelper.console("Delay click 80ms...");
    // check if the element has enrichments
		var timeOut;
		var hrefValue;
		hrefValue = targetElement.href;
		timeOut = setTimeout(function(){ 
		location.href = hrefValue;}, 80);
                UnicTMSHelper.console('Delayed');
		return false;
 }


// select data-linktracking' elements on the site
UnicTMSHelper.console("===================>[Delay Listener] START");
var eventType = 'mousedown';
var div = document.querySelectorAll('[data-linktracking]'),
	result;
        // loop through every element
        for (var i = 0; i < div.length; i++) {
			result = div[i];
            // add EventListener
			result.addEventListener(eventType, function(event) {
			  if (event.ctrlKey) {
			    ctrlPressed = true;
			  }
			  if(event.shiftKey){
			    shiftPressed = true;
			  }
			  if(event.metaKey){
			    cmdPressed = true;
			  }
			// get clicked element
			targetElement = event.target || event.srcElement || event.currentTarget;
			// set href if undefined
	      if(targetElement.href == undefined){
		targetElement = event.currentTarget;
	      }
		    var thisLink = this;
            UnicTMSHelper.console("Mousedown detected");
		if(targetElement.getAttribute("data-linktracking") == 'active' && ctrlPressed == false && shiftPressed == false && cmdPressed == false ){
                    delayTracker(thisLink);
		}
		 });
	}
UnicTMSHelper.console("===================>[Event Listener] END");
UnicTMSHelper.console("===================>[Tealium Profile Version] " + utag.cfg.v);
