const Rows = ({ color = 'currentColor', size = '33px', className=''}) => (
    <svg width={size} height={size} className={className} viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="4" width="33" height="1" rx="0.5" fill={color}/>
        <rect x="29.88" width="33" height="1" rx="0.5" transform="rotate(90 29.88 0)" fill={color}/>
        <rect y="20" width="33" height="1" rx="0.5" fill={color}/>
        <rect x="21.88" width="33" height="1" rx="0.5" transform="rotate(90 21.88 0)" fill={color}/>
        <rect y="28" width="33" height="1" rx="0.5" fill={color}/>
        <rect x="6" width="33" height="1" rx="0.5" transform="rotate(90 6 0)" fill={color}/>
        <rect y="11.92" width="33" height="1" rx="0.5" fill={color}/>
        <rect x="13.88" width="33" height="1" rx="0.5" transform="rotate(90 13.88 0)" fill={color}/>
        <rect y="15" width="3" height="3" rx="1.5" fill={color}/>
        <rect y="23" width="3" height="3" rx="1.5" fill={color}/>
        <rect y="7" width="3" height="3" rx="1.5" fill={color}/>
    </svg>
);

export default Rows;
