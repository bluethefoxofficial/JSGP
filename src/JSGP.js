class JSGP {

    //get request with response.
    getrequest(URI, parameters) {
        fetch(url).then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data);
        }).catch(function() {
            console.log("Booo");
        });
    }

    //get json response with parsed data.
    getjson(URI, parameters) {
        fetch(URI).then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data);
        }).catch(function(error) {
            return error;
        });
    }
}