import {OverlayPanel} from "/js/Composite/Dashboardpage/OverlayPanel.jsx"
import { EditorSpace } from "/js/Composite/Dashboardpage/EditorSpace.jsx"


export class Pagecontent extends React.Component {
    constructor(props) {
        super(props)
        let self = this
        this.state = {showDashboard:"display: grid;", showEditor:"display: none;"}

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

    render() {

        let EditorSpaceRef = this.state.showEditor != "display: none;" ? <EditorSpace /> : null

        return <div id="Pagecontent">
            <style key={JSON.stringify(this.state)}>
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

                .textcontent {"{"}
                    padding-top: 100px;
                    padding: 100px 50px;
                }
            </style>
            <div></div>
            <OverlayPanel />
            {EditorSpaceRef}
        </div>
    }
}