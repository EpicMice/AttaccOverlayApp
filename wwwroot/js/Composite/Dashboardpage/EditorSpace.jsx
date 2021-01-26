export class EditorSpace extends React.Component {
    constructor(props) {
        super(props)
        //Use refs to refer to the docks and tab elements.


    }

    render() {
        return <div id="EditorSpace" className="">
            <style>
                #EditorSpace {"{"}
                    position: relative;
                    width: 100%;
                    height: 100%;
                    grid-template-rows: 75px auto;
                    overflow: hidden;
                    background-color: lightblue;
                }
                #EditorSpace {">"} iframe {"{"}
                    width: 100%;
                    height: 100%;
                }
            </style>
            <iframe src="/dashboard/editor/space"></iframe>
        </div>
    }
}