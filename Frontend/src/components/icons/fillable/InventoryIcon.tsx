// Props
import { FillableIconProps } from "../IconProps.ts";

const InventoryIcon: React.FC<FillableIconProps> = ({ isFilled, fill, stroke, strokeWidth, height, ...props }) => {
    return (
        <svg
            {...props}
            fill={isFilled ? '#589a81' : fill || "none"}
            stroke={stroke || "#589a81"}
            strokeWidth={isFilled ? 0 : strokeWidth || 2.5}
            height={height || "250px"}
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
            version="1.2"
            baseProfile="tiny"
            overflow="inherit"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M3 6h44v5h-44zm3 7v33h38v-33h-38zm26 9h-15v-3h15v3z"></path>
            </g>
        </svg>
    )
}

export default InventoryIcon;