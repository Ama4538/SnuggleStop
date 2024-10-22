// Props
import { FillableIconProps } from "../IconProps.ts";

const SupplierIcon: React.FC<FillableIconProps> = ({ isFilled, fill, stroke, strokeWidth, height, ...props }) => {
    return (
        <svg
            {...props}
            fill={isFilled ? fill || '#589a81' : fill || "none"}
            height={height || "250px"}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="aspect-square"
            version="1.1"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M17 17V5H2V17H17ZM17 17H23V11L20.5 10H17" stroke={stroke || "#589a81"} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                <circle cx="18" cy="19" r="2" stroke={stroke || "#589a81"} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></circle>
                <circle cx="6" cy="19" r="2" stroke={stroke || "#589a81"} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></circle>
                <circle cx="18" cy="19" r="2" stroke={stroke || "#589a81"} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></circle>
                <circle cx="6" cy="19" r="2" stroke={stroke || "#589a81"} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></circle>
            </g>

        </svg>
    )
}

export default SupplierIcon;