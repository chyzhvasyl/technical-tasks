import React, { Component } from 'react';
import { UncontrolledCollapse, Button, CardBody, Card, Collapse, Modal, ModalHeader, ModalBody, ModalFooter, Popover, PopoverHeader, PopoverBody} from 'reactstrap';
import './Note.less';
import Toolbar from './Toolbar.jsx'
class Note extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false
        };
    }

    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    updateData(config) {
        this.setState(config);
    }
    render() {



        return (


            <div className='Note' >
                <h1>

                </h1>

                <span className='Note__del-icon' onClick={this.props.onDelete}> X </span>
                {
                    this.props.name
                        ?
                        <h4 className='Note__title'>{this.props.name}</h4>
                        :
                        null
                }
                <div className='Note__text'>
                    <div>
                        Рік:{this.props.year }


                    </div>

                    <div>
                        <Button id="Popover1" onClick={this.toggle}>
Деталі
                        </Button>
                        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                            <PopoverHeader>{this.props.name}</PopoverHeader>
                            <PopoverBody> Рік:{this.props.year }<br/>
                                Формат:{this.props.format }<br/>
                                Актори:{this.props.actors }</PopoverBody>
                        </Popover>
                    </div>
                </div>

            </div>
        );
    }
}

export default Note;