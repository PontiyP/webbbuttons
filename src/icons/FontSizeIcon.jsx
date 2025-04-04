const FontSizeIcon = ({ color = 'currentColor', size = '33px', className=''}) => (
    <svg width={size} height={size} className={className} viewBox="0 5 28 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.73864 11.6307V8.81818H21.375V11.6307H13.142V35H9.97159V11.6307H1.73864Z" fill={color}/>
        <path
            d="M25.2278 9L23.7845 11.5H26.6712L25.2278 9ZM25.2278 36L26.6712 33.5H23.7845L25.2278 36ZM24.9778 11.25L24.9778 33.75H25.4778L25.4778 11.25H24.9778Z"
            fill={color}/>
    </svg>
);

export default FontSizeIcon;
