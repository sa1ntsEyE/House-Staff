import React, {Component} from 'react';

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Всё',
                },
                {
                    key: 'bed',
                    name: 'Кровать',
                },
                {
                    key: 'chair',
                    name: 'Стул',
                }
            ]
        }
    }
    render() {
        return (
            <div className="categories">
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.onChoose(el.key)}>{el.name}</div>
                ))}
            </div>
        );
    }
}

export default Categories;