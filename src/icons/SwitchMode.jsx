
const SwitchMode = ({ color = 'currentColor', size = '23px', className=''}) => (
<svg width={size} height={size} className={className} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="5" height="5" rx="1" fill={color}/>
    <rect x="3" y="9" width="5" height="5" rx="1" fill={color}/>
    <rect x="3" y="15" width="5" height="5" rx="1" fill={color}/>
    <rect x="9" y="3" width="5" height="5" rx="1" fill={color}/>
    <rect x="9" y="9" width="5" height="5" rx="1" fill={color}/>
    <rect x="9" y="15" width="5" height="5" rx="1" fill={color}/>
    <rect x="15" y="3" width="5" height="5" rx="1" fill={color}/>
    <rect x="15" y="9" width="5" height="5" rx="1" fill={color}/>
    <rect x="15" y="15" width="5" height="5" rx="1" fill={color}/>
    <rect x="1" y="1" width="21" height="21" rx="1" stroke={color}/>
</svg>
);

export default SwitchMode;
