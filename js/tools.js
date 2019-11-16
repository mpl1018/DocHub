varian_api = "https://junction-planreview.azurewebsites.net/api/"
dochub_api = "http://18.224.179.145:8000/"

function request_api(url, data, method){
    var json = null
    $.ajax({
        "async": false,
        "crossDomain": true,
        "url": url,
        "method": method,
        "headers": {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        "data": data,
        success: function(data){
            json = data
         }
      });
      return json
}

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
  });
  return vars;
}
