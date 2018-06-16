import React, { Component } from 'react';

const Row = ({name}) => (
    <div className="row">
        <div>{name}</div>

    </div>
);

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: 403, title: 'Task 403', priority: 'High', type: 'Improvement', complete: 100},
                {id: 532, title: 'Task 532', priority: 'Medium', type: 'Improvement', complete: 30},
                {id: 240, title: 'Task 240', priority: 'High', type: 'Story', complete: 66},
            ],
        };
        this.compareBy.bind(this);
        this.sortBy.bind(this);
    }

    compareBy(key) {
        return function (a, b) {
            if (a[key] < b[key]) return -1;
            if (a[key] > b[key]) return 1;
            return 0;
        };
    }

    sortBy(key) {
        let arrayCopy = [...this.state.data];
        arrayCopy.sort(this.compareBy(key));
        this.setState({data: arrayCopy});
    }

    render() {
      /*  const rows = this.state.data.map( (rowData) =>
            <{...rowData} />);*/

        return (
            <div className="table">
                <div className="header">
                    <div onClick={() => this.sortBy('id')} >ID</div>
                    <div onClick={() => this.sortBy('title')}>Title</div>
                    <div onClick={() => this.sortBy('priority')}>Priority</div>
                    <div onClick={() => this.sortBy('type')}>Issue Type</div>
                    <div onClick={() => this.sortBy('complete')}>% Complete</div>
                </div>
                <div className="body">
                    {rows}
                </div>
            </div>
        );
    }
}
export default Table