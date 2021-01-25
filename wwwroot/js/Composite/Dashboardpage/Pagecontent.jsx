import {OverlayPanel} from "/js/Composite/Dashboardpage/OverlayPanel.jsx"


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
            <OverlayPanel/>
        </div>
    }
}