import '../../styles/RadioStyle.css';

const Radio = (
    {
        name,
        options,
        selectedValue,
        onChange,
        className = "",
        disable,
        ...props
                }) => {
    return (
        <div className={`radio-container ${className}`}>
            {options.map((option) => (
                <label key={option.value} className={`${selectedValue===option.value?"selected":""}`}>
                    <input
                        type="radio"
                        name={name}
                        value={option.value}
                        checked={selectedValue === option.value}
                        onChange={() => onChange(option.value)}
                        className="radio-input"
                        disabled={disable}
                        {...props}
                    />
                    <span>{option.icon}</span>
                </label>
            ))}
        </div>
    );
};

export default Radio;
