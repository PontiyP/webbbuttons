const FileIcon = ({ color = 'currentColor', size = '33px', className=''}) => (
    <svg width={size} height={size} className={className} viewBox="0 0 30 36" fill="none"
         xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 0.5H23.1978L29.1539 5.22824L29.4943 35.5H0.5V0.5Z" stroke={color}/>
        <path d="M20.2325 21.4162L24.2572 26.7059L16.2079 26.7059L20.2325 21.4162Z" fill={color} stroke={color}
              strokeWidth="2"/>
        <path d="M11.8605 16.5189L19.559 27.0588H4.16198L11.8605 16.5189Z" fill={color} stroke={color}
              strokeWidth="2"/>
        <ellipse cx="21.2791" cy="10.2353" rx="1.74419" ry="1.76471" fill={color}/>
        <path d="M23.5233 4.79412V1.03931L28.224 4.79412H23.5233Z" stroke={color}/>
    </svg>
);

export default FileIcon;
