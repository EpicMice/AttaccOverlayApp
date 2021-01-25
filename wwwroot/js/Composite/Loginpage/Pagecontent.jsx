export class Pagecontent extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return <div id="Pagecontent">
            <style>
                #Pagecontent {"{"}
                    position: relative;     
                    height: 100%;
                    width: 100%;
                    background-color: gray;
                }

                .login {"{"}
                    padding-top: 100px;
                    padding: 100px 50px;
                    margin-left: auto;
                    width: fit-content;
                    background-color: gray;    
                }

                .login {">"} * {"{"}
                    padding: 10px;
                    border-radius: 8px;   
                    background-color: white;
                }

                input {"{"}
                    padding: 5px;
                    background-color: white;
                    outline: none;
                    border: 2px solid red;
                    margin: 2px;
                }

                .login-button{"{"}
                    width: min-content;
                    margin-left: auto;
                }
                .login-button:hover{"{"}
                    background-color: darkgray;
                }
            </style>
            <div className="login">
                <div>Username</div>
                <input id="username"></input>
                <div>Password</div>
                <input id="password" type="password"></input>
                <div onClick={() => { DoLogin() }} className="login-button">GO</div>
            </div>
        </div>
    }
}

function DoLogin() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    DoPost("/Actions/Login", { username: username, password: password }, (resp) => {
        console.log(resp);
        if (resp.indexOf("login successful") != -1) {
            window.location.href = "dashboard"
        }
    });

}