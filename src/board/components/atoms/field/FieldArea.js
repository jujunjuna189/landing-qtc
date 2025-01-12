const FieldArea = (props) => {
    return (
        <>
            <textarea id={props.id} name={props.name} type="text" readOnly={props.readOnly} autoComplete={props.name} required className="border border-dark-muted rounded-md px-3 py-2 w-full focus:outline-none" placeholder={props.placeholder} value={props.value ?? ''} onChange={(event) => { props.onChange && props.onChange(event.target.value) }}>{props.value}</textarea>
            {props.error && <div className="-mt-2"><small className="text-red-800 pl-1">{props.error}</small></div>}
        </>
    );
}

export default FieldArea;