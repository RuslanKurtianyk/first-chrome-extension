chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      $(document.body).css("background","#000000");
      console.log($(document.body));
    }
  }
);