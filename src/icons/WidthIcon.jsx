const WidthIcon = ({ color = 'currentColor', size = '33px', className=''}) => (
<svg width={size} height={size} className={className} viewBox="0 0 31 32" fill="none"
     xmlns="http://www.w3.org/2000/svg">
    <path d="M30 27L25 24.1132V29.8868L30 27ZM1 27L6 29.8868V24.1132L1 27ZM25.5 26.5L5.5 26.5V27.5L25.5 27.5V26.5Z" fill={color}/>
    <path d="M9.28409 23L4.51136 5.54545H6.65909L10.3068 19.7614H10.4773L14.1932 5.54545H16.5795L20.2955 19.7614H20.4659L24.1136 5.54545H26.2614L21.4886 23H19.3068L15.4545 9.09091H15.3182L11.4659 23H9.28409Z" fill={color}/>
    <rect x="0.5" y="1.5" width="30" height="30" rx="2.5" stroke={color}/>
</svg>

);

export default WidthIcon;
