import React from 'react';

function Checkbox(props) {

    const [checked, setChecked] = React.useState(true);

    return (
        <label>
            {props.label}
            <input
                type="checkbox"
                defaultChecked={props.default}
                onChange={() => {
                    props.onChange(!checked, props.parameter)
                    setChecked(!checked);
                }}
            />
        </label>
    );
}

export default Checkbox