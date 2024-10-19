const InventoryIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            {...props}
            fill={props.fill || "none"}
            stroke={props.stroke || "#589a81"}
            strokeWidth={props.strokeWidth || 2.5}
            height={props.height || "250px"}
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
            version="1.2"
            baseProfile="tiny"
            overflow="inherit"
        >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M3 6h44v5h-44zm3 7v33h38v-33h-38zm26 9h-15v-3h15v3z"></path>
            </g>
        </svg>
    )
}

export default InventoryIcon;