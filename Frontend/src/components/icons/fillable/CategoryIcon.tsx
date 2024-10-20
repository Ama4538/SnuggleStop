// Props
import { FillableIconProps } from "../IconProps.ts";

const CategoryIcon: React.FC<FillableIconProps> = ({ isFilled, fill, stroke, strokeWidth, height, ...props }) => {
    return (
        <svg
            {...props}
            fill={isFilled ? '#589a81' : fill || "none"}
            height={height || "250px"}
            stroke={stroke || "#589a81"}
            strokeWidth={strokeWidth || 3}
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            className="aspect-square"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M41.6783,13.0436H24.77c-1.9628-.1072-5.9311-4.2372-8.1881-4.2372H6.6806V8.8046A2.1762,2.1762,0,0,0,4.5,10.9763v7.3063h39V14.8652A1.8217,1.8217,0,0,0,41.6783,13.0436Z"></path>
                <path d="M43.5,18.2826H4.5V37.0165a2.1762,2.1762,0,0,0,2.1735,2.1789H41.3194A2.1762,2.1762,0,0,0,43.5,37.0237V18.2826Z"></path>
            </g>
        </svg>
    )
}

export default CategoryIcon;