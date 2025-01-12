const Button = (props) => {
    return (
        <div className={`font-semibold py-2 px-5 bg-primary-dark flex items-center gap-2 cursor-pointer rounded-md ${props.className}`} onClick={() => props.onClick && props.onClick()}>{props.children}</div>
    );
}

export default Button;