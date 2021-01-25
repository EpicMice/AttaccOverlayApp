
var ScopeData = {}

let DoPost = (url, payload, callback) => {
    var http = new XMLHttpRequest();
    var params = '';
    for (let p in payload) {
        if (params != '') {
            params += "&";
        }
        params += p + "=" + payload[p];
    }
    http.timeout = 0;
    http.open('POST', url, true);

    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function () {//Call a function when the state changes.
        if (http.readyState == 4 && http.status == 200) {
            console.log(http)
            callback(http.responseText);
        }
    }
    http.send(params);
}

class Signal {

    constructor() {
        this.values = [];
        this.Dispatch.bind(this);
        this.Add.bind(this);
    }

    Add(action) {
        this.values.push(action);
    }

    Dispatch() {
        let args = [];
        for (let i = 0; i < arguments.length; ++i) {
            args[i] = arguments[i];
        }
        for (let v of this.values) {
            if (v(...args) == "exit") {
                console.log("quit");
                break;
            }
        }
    }
}

class SignalEvents {
    constructor() {
        this.Signals = {};
    }

    AddSignal() {
        for (let i = 0; i < arguments.length; ++i) {
            if (!this.Signals[arguments[i]]) {
                this.Signals[arguments[i]] = new Signal();
            }
        }
    }

    GetSignal(sig) {
        if (this.Signals[sig] != undefined) {
            return true;
        } else {
            this.AddSignal(sig);
            return false;
        }
    }
}

var EventPass = new SignalEvents();

var NavigatePage = (to) => {
    window.location.href = "https://"+window.location.host + "/"+to;
}