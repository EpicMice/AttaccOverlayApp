export class Topbar extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return <div id="Topbar">
            <style>
                #Topbar {"{"}
                    position: relative;
                    height: 75px;
                    display: grid;
                    grid-template-columns:  auto max-content;
                    
                    padding: 0px 20px;
                    min-width: max-content;
                }

                #Topbar .container {"{"}
                    grid-row: 1;
                    z-index: 1;
                    display: grid;
                    grid-template-columns:  repeat(auto-fill, 150px);
                    gap: 20px;
                }

                #Topbar .item {"{"}
                    place-self: center;
                    background-color: #191919;
                    color: white;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    white-space: nowrap;
                    z-index: 1;
                    padding: 10px;
                    border-radius: 8px;
                    grid-row: 1;                    
                }

                #Topbar .background{"{"}
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    width: 100%;
                    height: 100%;
                    z-index: 0;
                    background: #4b3420;
                }                   

                #Topbar .button{"{"}
                    border: 2px solid #ff0;
                }

                #Topbar .button:hover{"{"}
                    border: 2px solid black;
                    filter: brightness(200%);
                }

            </style>
            <div className="container">
                <div className="logo item">OVERLAY3D</div>
                <div className="item">HOME</div>
            </div>

            <div onClick={() => {
                NavigatePage("login");
            }} className="item button">LOGIN</div>
            <div className="background">
            </div>
        </div>
    }
}