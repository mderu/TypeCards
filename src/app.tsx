import { DeckManager } from 'controllers/deckManager';
import React, { Component } from 'react';
import { render } from 'react-dom';
import '../css/app.css'

export default class App extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
            file_data: null
        };
    }

    handleFileSelect(evt: any) {
        var files = evt.target.files; // FileList object

        // files is a FileList of File objects. List some properties.
        var output = [];
        for (var i = 0, f; f = files[i]; i++) {
            var reader = new FileReader();

            // Closure to capture the file information.
            reader.onload = (function (theFile) {
                // TODO: I have no idea how to determin the type of the variable `e` here.
                //       Yes, I copy pasta'd. I tried using the following to determine the
                //       type and it failed: 
                // console.log(e.constructor.name);
                return function (e: ProgressEvent | any) {
                    console.log('e readAsText = ', e);
                    console.log('e readAsText target = ', e.target);
                    try {
                        var json = JSON.parse(e.target.result);
                        localStorage.setItem('config', e.target.result);
                        alert('json global var has been set to parsed json of this file here it is unevaled = \n' + JSON.stringify(json));
                    } catch (ex) {
                        alert('ex when trying to parse json = ' + ex);
                    }
                }
            })(f);
            reader.readAsText(f);
        }
    }

    render() {
        return (
            <div>
                <input type="file" onChange={this.handleFileSelect} />
            </div>
        );
    }
}
render(<App />, document.getElementById('root'));
