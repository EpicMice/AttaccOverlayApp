
var ScopeData = {}

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