import {OverlayPanel} from "/js/Composite/Dashboardpage/OverlayPanel.jsx"
import { EditorSpace } from "/js/Composite/Dashboardpage/EditorSpace.jsx"
import { AssetPanel } from "/js/Composite/Dashboardpage/AssetPanel.jsx"


export class Pagecontent extends React.Component {
    constructor(props) {
        super(props)
        let self = this
        this.state = {showDashboard:"display: grid;", showEditor:"display: none;"}

        this.SwipeElements = (dir) => {
            var container = document.getElementById("DashboardContainer");
            container.scrollTop = -dir * container.scrollHeight;
        }

        this.OverlaysNav = <div className="nav" onClick={() => { self.SwipeElements(0) }}><div>Overlays</div><i className="fas fa-pencil-ruler"></i></div>

        this.AssetNav = <div className="nav" onClick={() => { self.SwipeElements(-1) }}><div>Assets</div><i className="fas fa-boxes"></i></div>
        //this.OtherNav = <div>Other</div>

        EventPass.GetSignal("SwitchToEditor")
        EventPass.Signals.SwitchToEditor.Add((showEditor) => {
            if (showEditor) {

                self.setState({ ...self.state, showDashboard: "display: none;", showEditor: "display: grid" })
            }else
            if (!showEditor) {
                self.setState({ ...self.state, showDashboard: "display: grid;", showEditor: "display: none;" })
            }
        })
    }

    GetEditorSpaceStyle() {
        return <style key={JSON.stringify(this.state)}>
            #EditorSpace {"{"}
                    position: relative;
                    height: 100%;
                    width: 100%;
                    background-color: gray;
                    {this.state.showEditor}
                    grid-template-columns: 200px auto;
                    overflow: hidden;
                }
                #OverlayPanel {"{"}
                    {this.state.showDashboard}
                }
                #Pagecontent {"{"}
                    position: relative;
                    height: 100%;
                    width: 100%;
                    background-color: gray;
                    display: grid;
                    grid-template-columns: 200px auto;
                    overflow: hidden;
                }
                #Pagecontent #DashboardContainer {"{"}
                    position: relative;
                    top: 0px;
                    height: 100%;
                    width: 100%;
                    overflow-y: scroll;
                }
                #Pagecontent #DashboardContainer {">"} .div {"{"}
                    height: 100% !important;
                }
                #Pagecontent .sidebar {"{"}
                    width: 100%;
                    margin-top: 100px;
                }
                #Pagecontent .sidebar {">"} .nav {"{"}
                    padding: 20px;
                    text-decoration: underline;
                    display: flex;
                    flex-direction: row;
                    align-items: center; 
                    justify-content: space-evenly;
                }
                .textcontent {"{"}
                    padding-top: 100px;
                    padding: 100px 50px;
                }
            </style>
    }

    render() {
        let EditorSpaceRef = this.state.showEditor != "display: none;" ? <EditorSpace /> : null

        return <div id="Pagecontent">
            {this.GetEditorSpaceStyle()}
            <div className="sidebar">
                {this.OverlaysNav}
                {this.AssetNav}
            </div>
            <div id="DashboardContainer">
                <OverlayPanel />
                {EditorSpaceRef}
                <AssetPanel />
            </div>
        </div>
    }
}