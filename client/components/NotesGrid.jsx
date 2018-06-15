import React, { Component } from 'react';
import Note from './Note.jsx';
import SearchInput, {createFilter} from 'react-search-input'
import Masonry from 'react-masonry-component';
 import Toolbar from './Toolbar.jsx'
import Datasort from 'react-data-sort'
import './NotesGrid.less';

let ReactBsTable  = require('react-bootstrap-table');
let BootstrapTable = ReactBsTable.BootstrapTable;
let TableHeaderColumn = ReactBsTable.TableHeaderColumn;
    let order = 'desc';
class NotesGrid extends Component{
    constructor (props) {
        super(props);
        this.state = {
            search : ''
        };

    }



    /*ddddddddddddddddddddddddddddddddddddd*/




    /*ddddddddddddddddddddddddddddddddddddd*/




    updateSearch(event)
{

    this.setState({search: event.target.value.substr(0, 20)});
}

    render() {
let filterfilms= this.props.notes.filter((note)=>
{
    let arr= note.name+note.actors;
    return (arr.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1);

});

        const masonryOptions = {
            itemSelector: '.Note',
            columnWidth: 300,
            gutter: 15,
            isFitWidth: true
        };

        return (
            <div>
                <br/><br/>

             <div>

                    <div>Шукаєм</div>
                 <input type = "text" value={this.state.search}   onChange={this.updateSearch.bind(this)}/>

               <br/>
               <br/>
                 {console.log(this.props.name)}

           </div>
                <div className="row">
                    <div className="col-sm-12">

                    </div>
                </div>
            <Masonry
                className='NotesGrid'
                options={masonryOptions}>


                {
                    filterfilms.map((note) =>{
                        return <Note

                            key={note.id}
                            name ={note.name}
                            year={note.year}
                            format={note.format}
                            onDelete={this.props.onNoteDelete.bind(null, note)}
                            actors={note.actors}
                        >


                            <Toolbar  data={note.data}   />
                        </Note>

                        }
                    )
                }
            </Masonry>

            </div>
        );
    }
}

export default NotesGrid;
