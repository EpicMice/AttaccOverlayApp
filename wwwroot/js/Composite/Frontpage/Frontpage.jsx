import { Topbar } from "/js/Composite/Topbar.jsx"
import { Pagecontent } from "/js/Composite/Frontpage/Pagecontent.jsx"

class Indexpage extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return <div id="Indexpage">
            <style>
                :root {"{"}
                    --FontColorHigh: #00FFC2;
                    --FontColorLow: #00FFC2;
                    --FontColorLime: #8DFFA7;
                    --FontColorLimeLow: #00FF66;
                    --DividerColorA: gray;
                    --UIFont: normal normal bold 24px Segoe UI;
                    --UIFontNormal: normal normal normal 24px Segoe UI;
                    --BarHighlight: white;
                    --DarkCover1: #00000082;
                    --TealCoverLight: #00fff347;
                    --ListLabelBackgroundColor: #141414;
                    --ListElementBackgroundColor: #1d1d1d;
                }

                body {"{"}
                    margin: 0px;
                    width: 100%;
                    height: 100%;
                    font: var(--UIFont);
                    cursor: default;
                }

                #Indexpage {"{"}
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    display: grid;
                    grid-template-rows: min-content auto;
                }

            </style>
            <Topbar />
            <Pagecontent/>
        </div>
    }
}

ReactDOM.render(<Indexpage />, document.getElementById("source_dom_element"));