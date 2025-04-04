const AlignLeftIcon = ({ color = 'currentColor', size = '40px', className=''}) => (
    <svg width={size} height={size} className={className} viewBox="0 0 40 40" fill="none"
         xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="2" fill="#D9D9D936"/>
        <rect x="6.25" y="5" width="30" height="1.25" rx="0.625" transform="rotate(90 6.25 5)" fill={color}/>
        <rect x="32.5" y="15" width="25" height="5" rx="0.5" transform="rotate(180 32.5 15)" fill={color}/>
        <rect x="22.5" y="27.5" width="15" height="5" rx="0.5" transform="rotate(180 22.5 27.5)" fill={color}/>
    </svg>
);

export default AlignLeftIcon;
