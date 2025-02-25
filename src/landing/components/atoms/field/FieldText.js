import React from "react";

const FieldText = React.forwardRef((props, ref) => {
    return (
        <div className="leading-3 w-full">
            <input ref={ref} id={props.id} name={props.name} type="text" readOnly={props.readOnly} autoComplete={props.name} required className={`border border-primary-dark px-3 py-2 w-full focus:outline-none ${props.className}`} placeholder={props.placeholder} value={props.value ?? ''} onChange={(event) => { props.onChange && props.onChange(event.target.value) }} />
            {props.error && <small className="text-danger-dark pl-1 inline-block">{props.error}</small>}
        </div>
    );
})

export default FieldText;