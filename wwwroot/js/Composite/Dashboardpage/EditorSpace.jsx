export class EditorSpace extends React.Component {
    constructor(props) {
        super(props)
        //Use refs to refer to the docks and tab elements.


        this.ShowDashboard = <div id="showdash" className="flat interactive" onClick={() => {
            EventPass.Signals.SwitchToEditor.Dispatch(false)
            //TODO check if the editor is allowed to change before prompting save.
            console.log("TODO")
        }}>
            <div className="label"><i className="fas fa-caret-down"></i></div>
        </div>

        this.DoSidebarAction = <div className="flat interactive" onClick={() => {
            //TODO 
            //use signal to expand/contract the sidebar
            console.log("TODO")
        }}>
            <div className="label"><i className="fas fa-arrow-circle-left"></i></div>
        </div>

    }

    GetOverlayPanelStyle() {
        return <style>
            #EditorSpace {"{"}
                    position: relative;
                    width: 100%;
                    height: 100%;
                    grid-template-rows: 34px auto;
                    overflow: hidden;
                    background-color: lightblue;
                    display: grid;
                }
                #EditorSpace {">"} .bar {"{"}
                    position: relative;
                    height: 100%;
                    width: 100%;
                    box-sizing: border-box;
                    border: 2px solid black;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    padding: 0px 0px;
                }
                #EditorSpace {">"} iframe {"{"}
                    width: 100%;
                    height: 100%;
                }
                #EditorSpace .bar .icon {"{"}
                    position: relative;
                    background-color: green;
                    width: fit-content;
                    height: fit-content;
                    padding: 10px 15px;
                    color: black;
                    align-self: center;
                    color: white;
                }

                #showdash {"{"}
                    margin: 0px auto;
                    width: 100px;
                }

                #EditorSpace .bar .label {"{"}
                }

                .flat {"{"}
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                }
                #EditorSpace .bar .interactive {"{"}
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    height: fit-content;
                    border: 2px solid green;
                    box-sizing: border-box;
                    align-self: center;
                    border-radius: 8px; 
                    padding: 0px 10px;    
                    color: #000000;
                    background-color: #fff;
                    justify-content: center;
                }
                #EditorSpace .bar .interactive:hover {"{"}
                    filter: brightness(0.5) grayscale(1) invert(1);
                }
            </style>
    }


    render() {
        return <div id="EditorSpace" className="">
            {this.GetOverlayPanelStyle()}
            <div className="bar">
                {this.DoSidebarAction}
                {this.ShowDashboard}
            </div>
            <iframe src="/dashboard/editor/space"></iframe>
        </div>
    }
}