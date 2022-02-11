import React from 'react';

class Checkbox extends React.Component {

    render() {
        return (
            <label>
                <input type="checkbox" checked={this.props.value} onChange={this.props.onChange} />
                {this.props.label}
            </label>
        );
    }
}

export default Checkbox