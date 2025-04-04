const AlignCenterIcon = ({ color = 'currentColor', size = '34px', className=''}) => (
        <svg width={size} height={size} className={className}  viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="2" transform="matrix(0 1 1 0 0 0)" fill="#D9D9D936" />
            <rect width="30" height="1.25" rx="0.625" transform="matrix(1 0 0 -1 5 20.625)" fill={color}/>
            <rect width="25" height="5" rx="0.5" transform="matrix(0 -1 -1 0 15 32.5)" fill={color}/>
            <rect width="15" height="5" rx="0.5" transform="matrix(0 -1 -1 0 26.25 27.5)" fill={color}/>
        </svg>
        );

export default AlignCenterIcon;
