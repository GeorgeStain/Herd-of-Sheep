var appId = 'GeorgeGe-Finditem-PRD-b8bba84e8-b1981402';
var devId = '912228cd-c9dd-4272-90cc-7ec161aa9764';
var certId = 'SBX-8bb87cdfc802-c316-4480-ac33-1d6e';
/*
var searchValue = document.getElementById('site-search').value;
var url = "http://svcs.ebay.com/services/search/FindingService/v1";
    url += "?OPERATION-NAME=findItemsByKeywords";
    url += "&SERVICE-VERSION=1.0.0";
    url += "&SECURITY-APPNAME=" + appId;
    url += "&GLOBAL-ID=EBAY-US";
    url += "&RESPONSE-DATA-FORMAT=JSON";
    url += "&callback=_cb_findItemsByKeywords";
    url += "&REST-PAYLOAD";
    url += "&keywords="+searchValue;
    url += "&paginationInput.entriesPerPage=3";
    */
// Submit the request
function submitRequest(){
    searchValue = document.getElementById('site-search').value;
    var url = "http://svcs.ebay.com/services/search/FindingService/v1";
     url += "?OPERATION-NAME=findItemsByKeywords";
     url += "&SERVICE-VERSION=1.0.0";
     url += "&SECURITY-APPNAME=" + appId;
     url += "&GLOBAL-ID=EBAY-US";
     url += "&RESPONSE-DATA-FORMAT=JSON";
     url += "&callback=_cb_findItemsByKeywords";
     url += "&REST-PAYLOAD";
     url += "&keywords="+searchValue;
     url += "&paginationInput.entriesPerPage=3";
    console.log(url)
    s=document.createElement('script'); // create script element
    s.src= url;
    document.body.appendChild(s);
    
};

//console.log(url);
function submitValue(){
    searchValue=document.getElementById('search').value
    console.log(searchValue)
    document.getElementById('search').value=''
};


function findItemByKeword(kewword){
    ``
}

// Parse the response and build an HTML table to display search results
function _cb_findItemsByKeywords(root) {
  // End _cb_findItemsByKeywords() function
var items = root.findItemsByKeywordsResponse[0].searchResult[0].item || [];
  var html = [];
  html.push('<table width="100%" border="0" cellspacing="0" cellpadding="3"><tbody>');
  for (var i = 0; i < items.length; ++i) {
    var item     = items[i];
    var title    = item.title;
    var pic      = item.galleryURL;
    var viewitem = item.viewItemURL;
    if (null != title && null != viewitem) {
      html.push('<tr><td>' + '<img src="' + pic + '" border="0">' + '</td>' +
      '<td><a href="' + viewitem + '" target="_blank">' + title + '</a></td></tr>');
    }
  }
  html.push('</tbody></table>');
  document.getElementById("results").innerHTML = html.join("")
};