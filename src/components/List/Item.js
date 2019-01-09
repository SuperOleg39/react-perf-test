import React from 'react';

class Item extends React.PureComponent {
    handleClick = () => {
        const { value, onClick } = this.props;
        onClick(value);
    }

    componentDidMount() {
        // console.log('componentDidMount');
    }

    componentWillUnmount() {
        // console.log('componentWillUnmount');
    }

    componentDidUpdate(prevProps) {
        // console.log('componentDidUpdate', prevProps.value, this.props.value);
    }

    // shouldComponentUpdate(nextProps) {
    //     console.log('shouldComponentUpdate', this.props.name, nextProps.name);

    //     return this.props.name !== nextProps.name && this.props.value !== nextProps.value;
    // }

    render() {
        const { name, value, inputValue, onChange } = this.props;

        return (
            <div>
                <div>{name} <b onClick={this.handleClick}>remove</b></div>
                <div>{value * 1000}</div>
                <div>
                    <input value={inputValue} onChange={onChange} />
                </div>
            </div>
        );
    }
}

export { Item }; 
