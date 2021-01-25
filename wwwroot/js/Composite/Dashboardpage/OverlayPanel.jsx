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
        return <div key={JSON.stringify(this.state)} className="container">{this.state.contents}</div>
    }

}

class OverlayPiece extends React.Component {
    constructor(props) {
        super(props)
        //rename
        // delete
        //edit       
        //share/export

        let self = this;

        this.state = { label: "untitled" }

        this.RenameOverlay = (e) => {
            if (e.key == "Enter") {
                self.setState({ label: e.target.value })
                //submit to endpoint
            }
        }

        this.DeleteOverlay = (e) => {
            //submit to endpoint
            if (self.props.OnDelete) {
                self.props.OnDelete(self.props.ItemID)
            }
        }
        this.ShareOverlay = (e) => { }

        this.ShareButton = <div id="share" className="button" onClick={this.ShareOverlay}><i className="fas fa-external-link-alt"></i></div>
        this.DeleteButton = <div id="delete" className="button" onClick={this.DeleteOverlay}><i className="fas fa-times"></i></div>

    }

    GetInput() {
        return <input key={this.state.label} onKeyUp={this.RenameOverlay} placeholder={this.state.label} className="namefield"></input>
    }

    render() {
        return <div id="OverlayPiece">
            <style>
                #OverlayPiece {"{"}
                    display: grid;     
                    grid-template-rows: min-content auto;
                    grid-template-areas:
                    'a b'
                    'c c'
                    'd d';
                    background-color: #808080;
                    border-radius: 4px;
                    overflow: hidden;
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

                #OverlayPiece #delete {"{"}
                    padding: 10px;
                    justify-self: end;
                    grid-area: b;
                    line-height: 0;
                    background-color: white;
                }

                #OverlayPiece #share {"{"}
                    padding: 10px;
                    grid-area: a;
                    line-height: 0;
                    background-color: white;
                    justify-self: start;
                }
                #OverlayPiece .namefield {"{"}
                    padding: 4px;
                    border: 0px solid black;
                    outline: none;
                    font-size: 14pt;
                    border-radius: 4px;
                    grid-area: d;
                    height: min-content;
                    align-self: end;
                    margin-bottom: 20px;
                    margin-left: 10px;
                    width: calc(100% - 60px);
                }
            </style>
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

        this.OnDelete = (itemID) => {
            //TODO are you sure???;
            self.ItemKeys.splice(self.ItemKeys.indexOf(itemID), 1)
            self.Container.setState({
                contents: self.ItemKeys.map(e => <OverlayPiece key={e} OnDelete={self.OnDelete} ItemID={itemID} />)
            })            
        }

        this.OnAddOverlayButtonClick = () => {
            //register new overlay with endpoint
            //TODO

            let itemID = Math.random() + "";
            self.ItemKeys.push(itemID)
            //callback here v
            if (self.Container) {
                self.Container.setState({
                    contents: self.ItemKeys.map(e => <OverlayPiece key={e} OnDelete={self.OnDelete} ItemID={itemID} />)
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
                    display: grid;
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
    /*
     ////////////////////////////////////////////
     New Overlay

     Edit
     Export (Create instance for someone/Publish to market)
     Delete     

     */

    render() {
        return this.Content;
    }
}