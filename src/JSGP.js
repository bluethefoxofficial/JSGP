class JSGP {

    //add load event to JSGP
    onload(func) {
        window.addEventListener('load', func);
    }


    output(data) {
        return this.output;
    }

    //get request with response.
    getrequest(URL, parameters = null) {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", `${URL}?${parameters}`);

        xhttp.onload = function() {
            return this;
        }
        xhttp.send();
    }

    //post request with response.
    postrequest(URL, parameters = null) {
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", URL);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xhttp.onload = function() {
            var event = new CustomEvent('json', {
                detail: data
            });
            return this;
        }
        xhttp.send(parameters);
    }

    //get json response with parsed data and with parameters with an output function.
    getjson(URL, parameters = null, output = null) {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", `${URL}?${parameters}`);

        xhttp.onload = function() {
            var data = JSON.parse(this.responseText);

            //create event named json when data is available
            var event = new CustomEvent('json', {
                detail: data
            });

            return data, event;
        }
        xhttp.send();
    }

    //get json response with parsed data and with parameters with an output function async.
    getjsonasync(URL, parameters = null, output = null) {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", `${URL}?${parameters}`);

        xhttp.onload = function() {
            var data = JSON.parse(this.responseText);
            var event = new CustomEvent('json', {
                detail: data
            });
            return data;
        }
        xhttp.send();
    }

    //function to add html to current document from a get request with parameters.
    addpage(URL, parameters = null) {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", `${URL}?${parameters}`);

        xhttp.onload = function() {
            document.body.innerHTML += this.responseText;
        }
        xhttp.send();
    }

    //function to remove element from current document.
    removeelement(element) {
        element.parentNode.removeChild(element);
    }

    //test command to display the jsgp version.
    version() {
        return "0.0.1";
    }

    //play sound from url.
    playsound(url) {
        var audio = new Audio(url);
        audio.play();
    }



    //catch events with jsgp.on('event', function(){}); and include functions with extra events with .add
    on(event, func) {
        document.addEventListener(event, func);
    }




}