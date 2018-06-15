import React, { Component } from 'react';
export default class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.sorted = { name: true };
    }





    sort(type) {
        // с помощью реструктуризации создаём две переменные
        const { update, data } = this.props;
        // получаем порядок сортировки
        const isSorted = this.sorted[type];

        let direction = isSorted ? 1 : -1;

        // создаём новый массив из данных, чтобы не перезаписывать
        // состояние и сортируем его
        const sorted =  [].slice.call(data).sort((a, b) => {
            // чтобы сортировка всегда была одинаковой учтём все условия
            // функция может вернуть 0, 1 или -1, в зависимости от возвращаемого
            // значения метод массивов sort сделает свой выбор

            if (a[type] === b[type]) { return 0; }

            return a[type] > b[type] ? direction : direction * -1;

        });

        // меняем порядок сортировки
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
                <button className="btn btn-default" onClick={() => this.sort('age')}>
                       Sort by age
                </button>
                <button className="btn btn-danger" onClick={this.reset.bind(this)}>
                       Reset
                </button>
            </div>
             </div>
        );
    }
}