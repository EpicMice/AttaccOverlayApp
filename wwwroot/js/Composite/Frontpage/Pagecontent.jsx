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

                .textcontent {"{"}
                    padding-top: 100px;
                    padding: 100px 50px;
                }
            </style>
            <div className="textcontent">
                Overlay3D is the overlay editor that runs on the Attacc* Platform!<br /><br />
                We will be constructing more features within this site.<br /><br />
                For the time being, this service is only available to those who<br /><br />
                have authorization to use it.<br /><br />

            </div>
        </div>
    }
}