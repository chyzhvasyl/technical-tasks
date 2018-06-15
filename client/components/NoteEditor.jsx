import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'



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

    handleColorfile(event) {
        this.setState({ file: event.target.value });
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

    render() {
        return (
            <Form className="container">
                {console.log(this.props.name)}
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
                    <Input type="textarea" name="text" id="exampleText"  value ={this.state.actors} onChange ={this.handleTitleText} />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleFile">File</Label>

                    <Input   id="exampleFile" type="file" name="file"
                             accept=".txt "
                             placeholder="My Image"
                             className="inputClass"
                             onChange={this.handleChange} />
                    <FormText color="muted">
                        Завантажити фільм
                    </FormText>
                </FormGroup>

                <Button  disabled={!this.state.actors}  onClick={this.handleNoteAdd} color="danger">Додати фільм</Button>
            </Form>
        );
    }
});

export default NoteEditor;
