import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'


import js from './js.jsx'
import './NoteEditor.less';

const NoteEditor = React.createClass({
    getInitialState() {
        return {
            name: '',
            year: '',
            format: 'DVD ',
            actors: '',
            file: ''
        };
    },

    handleTextChange(event) {
        this.setState({ name: event.target.value });
    },

    handleTitleChange(event) {
        this.setState({ year: event.target.value });
    },
    handleTitleSelect(event) {
        this.setState({ format: event.target.value});
    },
    handleTitleText(event) {
        this.setState({ actors: event.target.value });
    },


    handleChange: function(event) {
        console.log('Selected file:', event.target.files[0]);
    },


    handleNoteAdd() {
        const newNote = {
            name: this.state.name,
            year: this.state.year,
            format: this.state.format,
            actors: this.state.actors,
            file: this.state.file
        };

        this.props.onNoteAdd(newNote);
        this.setState({
            name: '',
            year: '',
            format: 'DVD ',
            actors: '',
            file: ' '   });
    },
    readFile(object, callback) {
        let file = object.files[0];
        console.log(file);
        let reader = new FileReader();
        reader.onload = function() {
            callback(reader.result);
            console.log(reader)
        };
        reader.readAsText(file)
    },
    saveFile(data, name){
        let a=document.createElement("a");
        a.setAttribute("download", name||"file.txt");
        a.setAttribute("href", "data:application/octet-stream;base64,"+btoa(data||"undefined"));
        a.click()
    },
    read(){
        let file = document.getElementById("file").files[0];
        console.log("Loading \""+file.name+"\"... ("+Math.round(file.size/1024)+"kB)");
        if(file.size>=256*1024){
            if(!confirm("File size is "+Math.round(file.size/1024)+"kBytes! Really want to read it?")){
                console.log("Aborting loading file...");
                return
            }
        }
        let reader = new FileReader();
        reader.onload = function() {
            console.log("File readed!");
            document.getElementById("out").innerHTML=reader.result
        };
        console.log("Starting reading file...");
        reader.readAsText(file)
    },
    render() {
        return (
            <div>


            <Form className="container">

                <FormGroup>
                    <Label for="exampleEmail">Name</Label>
                    <Input type="text" name="name" id="exampleEmail" placeholder="Name" value ={this.state.name} onChange ={this.handleTextChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Year</Label>
                    <Input type="text" name="year" id="examplePassword" placeholder="Year"  value ={this.state.year} onChange ={this.handleTitleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Select</Label>
                    <Input type="select" name="select" id="exampleSelect" value ={this.state.format} onChange ={this.handleTitleSelect}>
                        <option  >VHS</option>
                        <option>DVD</option>
                        <option>Blu-Ray</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Text Area</Label>
                    <Input type="textarea" name="actors" id="exampleText"  value ={this.state.actors} onChange ={this.handleTitleText} />
                </FormGroup>
                <FormGroup>



                </FormGroup>

                <Button  disabled={!this.state.actors}  onClick={this.handleNoteAdd} color="danger">Додати фільм</Button>

            </Form>
                <br/>
                <input type="file" id="file" name="file"  />
                <br/>
                <button onClick={this.read} outline color="warning">
                    прочітать
                </button>
                <div id="out">

                </div>
                <br/>
                <br/>
                    <div>


                    </div>
            </div>
        );
    }
});

export default NoteEditor;
