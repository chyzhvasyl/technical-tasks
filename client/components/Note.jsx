import React, { Component } from 'react';

import './Note.less';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import Toolbar from './Toolbar.jsx'

class Note extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false,

        };

    }
    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
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
                <div  >
                    <div>
                        Рік:{this.props.year }
                        <div >
                            <Button id="Popover1" className="btn btn-default" onClick={this.toggle}>
                                Деталі
                            </Button>
                            <Popover placement="top"  isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle} >
                                <div className='container'>
                                <PopoverHeader>{this.props.name}</PopoverHeader>
                                <PopoverBody> Рік:{this.props.year }<br/>
                                    Формат:{this.props.format }<br/>
                                    Актори:{this.props.actors }</PopoverBody>

                                </div>
                            </Popover>
                        </div>

                    </div>


                </div>

            </div>
        );
    }
}

export default Note;