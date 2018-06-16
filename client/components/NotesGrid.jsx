import React, { Component } from 'react';
import Note from './Note.jsx';
import SearchInput, {createFilter} from 'react-search-input'
import Masonry from 'react-masonry-component';
 import Toolbar from './Toolbar.jsx'
import Datasort from 'react-data-sort'
import './NotesGrid.less';
import Table from './sort.jsx'
let ReactBsTable  = require('react-bootstrap-table');
let BootstrapTable = ReactBsTable.BootstrapTable;
let TableHeaderColumn = ReactBsTable.TableHeaderColumn;





class NotesGrid extends Component{

    constructor (props) {
        super(props);
        this.state = {
            search : '',
            data: null,
            active: 0,
            term: ''
        };

    }


    updateData(config) {
        this.setState(config);
    }

    /*-------------------ДЛЯ вставочок----------------------------*/




    /*-----------------------------------------------------------*/



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

        let names= this.props.notes.map((note)=>
        {
            return  note.name;

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
                 <Toolbar notes={this.notes}   data ={names}     update={this.updateData.bind(this)} /><br/>

               <br/>
               <br/>

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
