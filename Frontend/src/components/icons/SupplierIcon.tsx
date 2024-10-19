const SupplierIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            {...props}
            fill={props.fill || "none"}
            height={props.height || "250px"}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="aspect-square"
            version="1.1"
        >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M17 17V5H2V17H17ZM17 17H23V11L20.5 10H17" stroke={props.stroke || "#589a81"} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                <circle cx="18" cy="19" r="2" stroke={props.stroke || "#589a81"} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                <circle cx="6" cy="19" r="2" stroke={props.stroke || "#589a81"} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                <circle cx="18" cy="19" r="2" stroke={props.stroke || "#589a81"} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                <circle cx="6" cy="19" r="2" stroke={props.stroke || "#589a81"} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
            </g>

        </svg>
    )
}

export default SupplierIcon;