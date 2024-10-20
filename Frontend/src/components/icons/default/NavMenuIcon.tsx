const NavMenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            {...props}
            fill={props.fill || "#589a81"}
            height={props.height || "250px"}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="aspect-square"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
            <g id="SVGRepo_iconCarrier">
                <path
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke={props.fill || "#589a81"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    )
}

export default NavMenuIcon;