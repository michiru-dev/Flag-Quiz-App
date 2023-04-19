function Button({ text, onClick, disabled, className }) {
    return <button className={`baseButton ${className}`}
        type='button' onClick={onClick} disabled={disabled}>{text}</button>
}


export default Button