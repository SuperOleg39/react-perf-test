import React from 'react';
import { createList } from 'data/list';
import { Item } from './Item';

class List extends React.Component {
    state = {
        list: createList(),
        orderByDesc: false,
        inputValue: ''
    }

    toggleListOrder = () => {
        this.setState((prevState) => ({ orderByDesc: !prevState.orderByDesc }));
    }

    handleItemClick = (value) => {
        this.setState(({ list }) => {
            let index;
 
            for (let i = 0; i < list.length; i++) {
                if (list[i].value === value) {
                    index = i;
                    break;
                }
            }

            list.splice(index, 1);

            return {
                list: [...list]
            };
        });
    }

    handleInputChange = (e) => {
        this.setState({ inputValue: e.target.value });
    }

    render() {
        const { orderByDesc, inputValue } = this.state;
        let { list } = this.state;

        if (orderByDesc) {
            list = list.slice().sort((a, b) => b.value - a.value);
        }

        return (
            <div className="row">
                <div className="col">
                    <h1>List</h1>
                    <div>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={this.toggleListOrder}
                        >
                            {orderByDesc ? 'asc'  : 'desc'}
                        </button>
                    </div>
                    <ul>
                        {list.map(({name, value}) => (
                            <Item
                                key={value}
                                name={name}
                                value={value}
                                onClick={this.handleItemClick}
                                inputValue={inputValue}
                                onChange={this.handleInputChange}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export { List }; 
