class JSGP {

    //get request with response.
    getrequest(URL, parameters) {
        xhttp.open("GET", `demo_get2.asp?${parameters}`);

        xhttp.onload = function() {

            return this;
        }
        xhttp.send();
    }

    //get json response with parsed data.
    getjson(URI, parameters) {
        fetch(URI).then(function(response) {
            return response.json();
        }).then(function(data) {
            return data;
        }).catch(function(error) {
            return error;
        });
    }
}