const FieldArea = (props) => {
    return (
        <>
            <textarea id={props.id} name={props.name} type="text" readOnly={props.readOnly} autoComplete={props.name} rows={props.rows ?? 10} required className="border border-primary-dark px-3 py-2 w-full focus:outline-none" placeholder={props.placeholder} value={props.value ?? ''} onChange={(event) => { props.onChange && props.onChange(event.target.value) }}>{props.value}</textarea>
            {props.error && <div className="-mt-2"><small className="text-danger-dark pl-1">{props.error}</small></div>}
        </>
    );
}

export default FieldArea;