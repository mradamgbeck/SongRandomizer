import React from 'react';

function Checkbox(props) {

    const [checked, setChecked] = React.useState(true);

    return (
        <label>
            <input type="checkbox"
                   defaultChecked={props.default}
                   onChange={() => {
                       props.onChange(!checked, props.parameter)
                       setChecked(!checked);
                   }}
            />
            {props.label}
        </label>
    );
}

export default Checkbox