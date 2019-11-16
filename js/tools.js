varian_api = "https://junction-planreview.azurewebsites.net/api/"
dochub_api = "http://18.224.179.145:8000/"

function request_api(url, data, method){
    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": method,
        "headers": {
          "Content-Type": "application/json",
          "User-Agent": "PostmanRuntime/7.19.0",
          "Accept": "application/json",
        },
        "data": data
      }).done(function (response) {
        console.log(response);
      });
}