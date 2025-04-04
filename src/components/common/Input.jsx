import '../../styles/InputStyle.css';
import FileIcon from "../../icons/FileIcon.jsx";
const Input = (
    {
        label,
        icon,
        iconColor,
        iconSize,
        type,
        id, //required for file type and border color picker
        value,
        placeholder = "",
        onChange,
        className = "",
        error = "",
        disable,
        ...props
               }) => {
    const Icon = icon;
    return (
        <div className={`input-container ${className}`}>
            {icon && <Icon color={iconColor} size ={iconSize} className="input-icon"/>}
            {label && <label className="input-label">{label}</label>}
            <input
                type={type}
                value={value}
                id={id}
                onChange={onChange}
                placeholder={placeholder}
                className={`
                    w-full border-none outline-0 bg-transparent
                    ${error ? "input-error" : ""}
                    ${type === "number" ? "input-number" : ""}
                    ${type === "color" ? "input-color" : ""}
                    ${type === "file" ? "input-file" : ""}
                `}
                disabled={disable}
                {...props}
            />
            {error && <p className="error-text">{error}</p>}
            {type=== "file"&&<label htmlFor={id}><FileIcon size={iconSize} className="input-icon"/></label>}
            {/*{label==="brdr"&&<label htmlFor={id} className= "brdr"></label>}*/}
        </div>
    );
};

export default Input;
