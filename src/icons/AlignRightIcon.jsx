const AlignRightIcon = ({ color = 'currentColor', size = '40px', className=''}) => (
    <svg width={size} height={size} className={className} viewBox="0 0 40 40" fill="none"
         xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="2" transform="matrix(-1 0 0 1 40 0)" fill="#D9D9D936"/>
        <rect width="30" height="1.25" rx="0.625" transform="matrix(0 1 1 0 33.75 5)" fill={color}/>
        <rect width="25" height="5" rx="0.5" transform="matrix(1 0 0 -1 7.5 15)" fill={color}/>
        <rect width="15" height="5" rx="0.5" transform="matrix(1 0 0 -1 17.5 27.5)" fill={color}/>
    </svg>
);

export default AlignRightIcon;
