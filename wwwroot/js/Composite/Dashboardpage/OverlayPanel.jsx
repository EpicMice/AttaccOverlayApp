//TODO OverlayPanel.OnAddOverlayButtonClick
//Register new overlay with endpoint

class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = { contents:[]}

        if (this.props.Register) {
            this.props.Register(this)
        }
    }

    render() {
        return <div className="container">{this.state.contents}</div>
    }

}

class OverlayPiece extends React.Component {
    constructor(props) {
        super(props)
        //rename
        // delete
        //edit       
        //share/export

        //TODO Do not enable editor/publish link button if the overlay hasn't been named yet.
        //Naming an overlay means registering a new overlay on the backend.
        //A modified unsaved overlay has a yellow status bar.
        //An unmodified saved overlay has a green status bar.

        //backend should store a history of names for the overlay in case the user wants to undo.

        let self = this;

        this.Actions = {}
        this.Actions.Rename = "Rename"
        this.statuses = {}
        this.statuses.modified = "yellow"
        this.statuses.saved = "green"
        this.pendingUpdate = false;

        this.CurrentLabel = "untitled"

        this.state = { label: "untitled", status: this.statuses.modified }

        this.ShareOverlay = (e) => {
            //TODO get published link
            console.log("TODO")
        }

        this.SaveOverlayChange = () => {
            //TODO
            console.log("TODO")
            //HttpRequest for updating the dashboard backend here.
        }

        this.DeleteOverlay = (e) => {
            //TODO
            //submit to endpoint
            console.log("TODO")
            if (self.props.OnDelete) {
                if (confirm("Delete the overlay: " + self.state.label + "?")) {
                    self.props.OnDelete(self.props.ItemID)
                }
            }
        }

        this.DoRename = () => {
            if (self.CurrentLabel != "untitled") {
                self.setState({ ...self.state, label: self.CurrentLabel, status: self.statuses.saved })
                self.pendingUpdate = true;
                self.SaveOverlayChange(self.Actions.Rename)
            } else {
                alert("Please enter a name for the overlay.")
            }
        }

        this.OverlayNameInputChange = (e) => {
            self.CurrentLabel = e.target.value
            self.setState({ ...self.state, status: self.statuses.modified })
        }


        this.EditButton = (e) => {
            if (this.state.status == self.statuses.saved) {
                //TODO track current overlay
                //TODO store recently opened overlays in sidebar history
                EventPass.Signals.SwitchToEditor.Dispatch(true)
            } else {
                alert("Please name the overlay.")
            }
        }

        this.OnSubmitName = (e) => {
            self.DoRename()
        }

        this.RenameOverlay = (e) => {
            if (e.key == "Enter" && e.target.value) {
                self.DoRename()
            }
        }

        this.EditButton = <div id="edit" className="button" onClick={this.EditButton}><i className="fas fa-pencil-ruler"></i></div>
        this.ShareButton = <div id="share" className="button" onClick={this.ShareOverlay}><i className="fas fa-external-link-alt"></i></div>
        this.DeleteButton = <div id="delete" className="button" onClick={this.DeleteOverlay}><i className="fas fa-times"></i></div>
    }

    GetInput() {
        return <div className="namesection"><input className="namefield" key={this.state.label} onKeyUp={this.RenameOverlay} onChange={this.OverlayNameInputChange} placeholder={this.state.label}></input><div className="button"><i className="fas fa-check" onClick={this.OnSubmitName}></i></div></div>
    }

    render() {
        return <div id="OverlayPiece" >
            <style>
                #OverlayPiece {"{"}
                    display: grid;
                    grid-template-rows: 8px 1fr min-content auto;
                    grid-template-areas:
                    'h h h'
                    '1 1 1'
                    'a b c'
                    'd d d';
                    background-color: #808080;
                    gap: 20px;
                    border-radius: 4px;
                    overflow: hidden;
                }

                #status {"{"}
                    grid-column: h;
                    width: 100%;
                    height: 100%;
                }

                #OverlayPiece .button:hover {"{"}
                    filter: grayscale(1) invert(1);
                    border: 2px solid black;
                    box-sizing: border-box;
                    border-radius: 4px;
                }
                #OverlayPiece .button {"{"}
                    border: 2px solid transparent;
                    box-sizing: border-box;
                }

                #OverlayPiece #share {"{"}
                    padding: 10px;
                    grid-area: a;
                    line-height: 0;
                    background-color: white;
                    justify-self: start;
                }

                #OverlayPiece #edit {"{"}
                    padding: 10px 8px;
                    grid-area: b;
                    line-height: 0;
                    background-color: white;
                    justify-self: center;
                }

                #OverlayPiece #delete {"{"}
                    padding: 10px;
                    justify-self: end;
                    grid-area: c;
                    line-height: 0;
                    background-color: white;
                }

                #OverlayPiece .namesection {"{"}
                    grid-area: d;
                    height: min-content;
                    align-self: end;
                    margin-bottom: 20px;
                    width: calc(100% - 60px);
                    display: flex;  
                    flex-direction: row;
                    justify-content: space-evenly;
                    width: auto;
                }

                #OverlayPiece .namesection .button {"{"}                
                    background-color: white;
                    border-radius: 4px;
                    padding: 0px 4px;
                }
                #OverlayPiece .namesection .namefield {"{"}
                    padding: 4px;
                    border: 0px solid black;
                    outline: none;
                    font-size: 14pt;
                    border-radius: 4px;
                }

            </style>
            <div id="status" key={this.state.status} style={{ backgroundColor: this.state.status }}></div>
            {this.EditButton}
            {this.ShareButton}
            {this.DeleteButton}
            {this.GetInput()}
        </div>
    }

}

export class OverlayPanel extends React.Component {
    constructor(props) {
        super(props)
        let self = this      
        this.ItemKeys = []
        this.ItemList = []

        this.OnDelete = (itemID) => {
            //TODO are you sure???;
            let index = self.ItemKeys.indexOf(itemID);
            self.ItemKeys.splice(index, 1)
            self.ItemList.splice(index, 1)

            self.Container.setState({
                contents: self.ItemList
            })            
        }

        this.OnAddOverlayButtonClick = () => {
            //register new overlay with endpoint
            //TODO

            let itemID = Math.random() + "";
            self.ItemKeys.push(itemID)
            self.ItemList.push(<OverlayPiece key={itemID} OnDelete={self.OnDelete} ItemID={itemID}/>)
            //callback here v
            if (self.Container) {
                self.Container.setState({
                    contents: self.ItemList
                });
            }
        }

        this.RegisterContainer = (container) => {
            this.Container = container;
        }

        this.AddOverlayButton = <div className="flat interactive" onClick={this.OnAddOverlayButtonClick}>
            <div className="label">New Overlay</div><div className="icon"><i className="fa fa-plus" aria-hidden="true"></i></div>
        </div>

        this.Content = <div id="OverlayPanel">
            <style>
                #OverlayPanel {"{"}
                    position: relative;
                    width: 100%;
                    height: 100%;
                    grid-template-rows: 75px auto;
                    overflow: hidden;
                }
                #OverlayPanel {">"} .bar {"{"}
                    position: relative;
                    height: 100%;
                    width: 100%;
                    box-sizing: border-box;
                    border: 2px solid black;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    padding: 0px 10px;
                }

                #OverlayPanel {">"} .container {"{"}
                    position: relative;
                    background-color: black;
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(250px, auto));
                    grid-auto-rows: 250px;
                    gap: 15px;
                    overflow-y: scroll;
                    padding: 10px;
                }

                #OverlayPanel {">"} .container::-webkit-scrollbar {"{"}
                    background-color: rgb(63 63 63);
                    z-index: -8;
                    width: 8px;
                }

                #OverlayPanel {">"} .container::-webkit-scrollbar-thumb {"{"}
                    background-color: white;
                    height: 50%;
                    transition: background-color 1s linear;
                }

                #OverlayPanel .bar .icon {"{"}
                    position: relative;
                    background-color: green;
                    width: fit-content;
                    height: fit-content;
                    padding: 10px 15px;
                    color: black;
                    align-self: center;
                    color: white;
                }
                
                #OverlayPanel .bar .label {"{"}
                    padding: 10px 15px;
                    align-self: center;
                }
                
                .flat {"{"}
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                }

                #OverlayPanel .bar .interactive {"{"}
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    height: fit-content;
                    border: 2px solid green;
                    box-sizing: border-box;
                    align-self: center;
                    border-radius: 8px;
                }

                #OverlayPanel .bar .interactive:hover {"{"}
                    filter: brightness(0.5) grayscale(1) invert(1);
                }
            </style>
            <div className="bar">
                {this.AddOverlayButton}
            </div>
            <Container Register={this.RegisterContainer} />
        </div>

    }

    render() {
        return this.Content;
    }
}