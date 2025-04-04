const Columns = ({ color = 'currentColor', size = '33px', className=''}) => (
    <svg width={size} height={size} className={className} viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="29" width="33" height="1" rx="0.5" transform="rotate(90 29 0)" fill={color}/>
        <rect x="33" y="29.88" width="33" height="1" rx="0.5" transform="rotate(180 33 29.88)" fill={color}/>
        <rect x="13" width="33" height="1" rx="0.5" transform="rotate(90 13 0)" fill={color}/>
        <rect x="33" y="21.88" width="33" height="1" rx="0.5" transform="rotate(180 33 21.88)" fill={color}/>
        <rect x="5" width="33" height="1" rx="0.5" transform="rotate(90 5 0)" fill={color}/>
        <rect x="33" y="6" width="33" height="1" rx="0.5" transform="rotate(180 33 6)" fill={color}/>
        <rect x="21.08" width="33" height="1" rx="0.5" transform="rotate(90 21.08 0)" fill={color}/>
        <rect x="33" y="13.88" width="33" height="1" rx="0.5" transform="rotate(180 33 13.88)" fill={color}/>
        <rect x="18" width="3" height="3" rx="1.5" transform="rotate(90 18 0)" fill={color}/>
        <rect x="10" width="3" height="3" rx="1.5" transform="rotate(90 10 0)" fill={color}/>
        <rect x="26" width="3" height="3" rx="1.5" transform="rotate(90 26 0)" fill={color}/>
    </svg>

);

export default Columns;
