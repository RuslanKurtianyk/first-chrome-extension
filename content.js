chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
    	chrome.storage.local.get('bgcolor', function (result) {
        	$(document.body).css("background",result.bgcolor);
        	console.log(result.bgcolor);
   		});
    }
  }
);