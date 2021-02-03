export class AssetPanel extends React.Component {
    constructor(props) {
        super(props)
        let self = this;

        this.SelectionTypes = [
            "obj",
            "fbx",
            "code",
            "fonts",
            "scene",
            "images",
            "shaders",
            "texture",
        ]

        this.SelectionClick = (t) => {
            console.log(t)
            self.setState({ ...self.state, selection: t })
            //pull the data for the list.
        }

        this.state = { selection: "type" }

        this.OnUploadDrop = (e) => {
            
            //upload file here

            e.stopPropagation();
            e.preventDefault(); return false;
        }
        this.OnUploadDragover = (e) => {
            e.preventDefault(); e.stopPropagation(); return false;
        }

        this.OnUploadDragenter = (e) => {
            e.preventDefault(); e.stopPropagation(); return false;
        }
        this.OnUploadDragleave = (e) => {
            e.preventDefault();
            e.stopPropagation();

            return false;
        }

        this.OnUploadClick = (e) => { }
        this.OnUploadDragstart = (e) => { ev.dataTransfer.effectAllowed = "move"; e.preventDefault(); e.stopPropagation(); return false; }
        this.OnUploadDragend = (e) => {
            e.preventDefault(); e.stopPropagation(); return false;
        }

        this.AssetList = []
        for (let i = 0; i < 40; i++) {
            this.AssetList[i] = Math.random()
        }

    }

    GetAssetContent() {
        let self = this;
        return this.AssetContent = <div className="content">
            <div className="selector">
                <div key={this.state.selection} className="droplabel" >{this.state.selection}</div>
                {this.SelectionTypes.map(e => <div key={e} className="items" onClick={() => { self.SelectionClick(e) }}>{e}</div>)}
            </div>
            <div className="upload" onClick={this.OnUploadClick} onDragLeave={this.OnUploadDragleave} onDragEnter={this.OnUploadDragenter} onDragEnd={this.OnUploadDragend} onDrop={this.OnUploadDrop} onDragOver={this.OnUploadDragover}><div>Upload</div><i className="fas fa-upload"></i><div className="reveal">Click or drop content to upload</div></div>
            <div className="list">
                {this.AssetList.map(e => <div className="assetitem" key={e}>{e}</div>)}
            </div>
            <div></div>
        </div>
    }

    render() {
        return <div id="AssetPanel">
            <style>
                #AssetPanel {"{"}
                    height: 100%;
                    display: grid;
                    grid-template-rows: 75px auto;
                    grid-auto-columns: auto auto;
                }

                #AssetPanel .label {"{"}
                    display: grid;
                    grid-template-columns: min-content;
                    height: 75px;
                    border: 2px solid black;
                    box-sizing: border-box;
                }

                #AssetPanel .label .text {"{"}
                    place-self: center;
                    padding: 20px;
                }

                #AssetPanel {">"} .content {"{"}
                    display: grid;
                    grid-template-rows: min-content auto;
                    overflow: hidden;
                }

                #AssetPanel {">"} .content {">"} .selector {"{"}
                    position: absolute;
                    grid-row: 1;
                    background-color: lightblue;
                    width: 120px;
                    display: flex;
                    min-height: 36px;
                    flex-direction: column;
                    z-index: 5;
                    align-items: center;
                    box-sizing: border-box;
                    border: 2px solid black;
                }

                #AssetPanel {">"} .content {">"} .selector .droplabel {"{"}
                    flex-shrink: 0;
                    height: 100%;
                    box-sizing: border-box;
                }

                #AssetPanel {">"} .content {">"} .selector .items {"{"}
                    display: none;
                    width: 100%;
                    text-align: center;
                    background-color: gray;
                    box-sizing: border-box;
                    padding: 5px;
                    text-decoration: underline;
                }

                .selector .items:hover {"{"}
                    filter: invert(1) grayscale(1);
                    box-shadow: 0px 0px 5px gray;
                }

                #AssetPanel {">"} .content {">"} .selector:hover .items {"{"}
                    display: block;
                }

                #AssetPanel{">"} .content {">"}  .upload {"{"}
                    position: relative;
                    padding: 0px 5px;
                    width: fit-content;
                    height: 100%;
                    color: black;
                    grid-row: 1;
                    grid-column: 2;
                    z-index: 5;
                    border: 2px solid black;
                    background-color: lightblue;
                    box-sizing: border-box;
                    display: grid;
                    grid-template-columns: min-content min-content;
                    gap: 10px;
                    place-items: center;
                }

                #AssetPanel{">"} .content {">"}  .upload:hover {"{"}
                    filter: invert(1) grayscale(1);
                    z-index: 5;
                }

                #AssetPanel{">"} .content {">"}  .upload .reveal{"{"}
                    display: none;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    flex-shrink: 0;
                    white-space: nowrap;
                    position: absolute;
                    top: 0px;
                    margin-top: 32px;
                    background-color: gray;
                    z-index: 3;
                }

                #AssetPanel{">"} .content {">"}  .upload:hover .reveal{"{"}
                    display: flex;
                    filter: invert(1) grayscale(1);
                }

                #AssetPanel{">"} .content {">"}  .list {"{"}
                    z-index: 1;
                    grid-row: 2;
                    grid-column: 1 / span 3;
                    background-color: #2a2a2a;
                    overflow-y: scroll;
                    height: 100%;
                    display: grid;
                    grid-auto-flow: row;
                    grid-auto-rows: 40px;
                    grid-template-columns: repeat(auto-fill, 400px);
                    gap: 10px;
                }

                #AssetPanel {">"} .content {">"}  .list .assetitem {"{"}
                    padding: 10px;
                    background-color: lightgray;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }

                #AssetPanel {">"} .content {">"}  .list .assetitem:hover {"{"}
                    filter: brightness(0.5);
                }

            </style>
            <div className="label"><div className="text">Assets</div></div>
            {this.GetAssetContent()}
        </div>
    }

}