import React, { Component } from 'react';
export default class Toolbar extends Component {

    constructor(props) {
        super(props);
        this.sorted = { name: true};
    }


    sort(type) {
        const { update, data } = this.props;

        const isSorted = this.sorted[type];

        let direction = isSorted ? 1 : -1;

        const sorted =  data.slice().sort((a, b) => {

            if (a[type] === b[type]) { return 0; }

            return a[type] > b[type] ? direction : direction * -1;

        });


        this.sorted[type] = !isSorted;

        update({
            data: sorted,
            active: 0
        });
    }
    reset() {
        this.props.update({
            data: this.props.name,
            term: '',
            active: 0
        });
    }


    render() {

        return (
             <div>

            <div className="toolbar">
                <button className="btn btn-default" onClick={() => this.sort('name')}>
                     Sort by name

                </button>

                <button className="btn btn-danger" onClick={this.reset.bind(this)}>
                       Reset
                </button>
            </div>
             </div>
        );
    }
}

export default Toolbar;