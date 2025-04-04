const AlignBottomIcon = ({ color = 'currentColor', size = '34px', className=''}) => (
    <svg width={size} height={size} className={className} viewBox="0 0 40 40" fill="none"
         xmlns="http://www.w3.org/2000/svg">
        <rect y="40" width="40" height="40" rx="2" transform="rotate(-90 0 40)" fill="#D9D9D936"/>
        <rect x="5" y="33.75" width="30" height="1.25" rx="0.625" fill={color}/>
        <rect x="15" y="7.5" width="25" height="5" rx="0.5" transform="rotate(90 15 7.5)" fill={color}/>
        <rect x="27.5" y="17.5" width="15" height="5" rx="0.5" transform="rotate(90 27.5 17.5)" fill={color}/>
    </svg>
);

export default AlignBottomIcon;
