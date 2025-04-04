//
// import '../../styles/SelectStyle.css';
//
// const Select = ({
//                     value,
//                     options,
//                     onChange,
//                     icon,
//                     iconColor,
//                     iconSize,
//                     disable
//                 }) => {
//     const Icon = icon;
//     return (
//         <div className="select-container">
//             {icon && <Icon color={iconColor} size ={iconSize} className="input-icon"/>}
//             <select className="select-component" value={value} onChange={onChange} disabled={disable}>
//                 <option value="clamp(10px, 3vw, 72px)">Auto</option>
//                 <option value="36px">Small</option>
//                 <option value="48px">Medium</option>
//                 <option value="60px">High</option>
//                 <option value="72px">Max</option>
//             </select>
//         </div>
//     );
// };
//
// export default Select;

import '../../styles/SelectStyle.css';

const Select = ({
                    value,
                    options,
                    onChange,
                    icon,
                    iconColor,
                    iconSize,
                    disable,
                    ...props
                }) => {
    const Icon = icon;
    return (
        <div className="select-container">
            {icon && <Icon color={iconColor} size={iconSize} className="input-icon"/>}
            <select
                className="border-none outline-none bg-transparent"
                value={value}
                onChange={onChange}
                disabled={disable}
                {...props}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
