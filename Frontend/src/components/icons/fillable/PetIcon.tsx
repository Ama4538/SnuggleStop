// Props
import { FillableIconProps } from "../IconProps.ts";

const PetIcon: React.FC<FillableIconProps> = ({ isFilled, fill, stroke, strokeWidth, height, ...props }) => {
    return (
        <svg
            {...props}
            fill={isFilled ? fill || '#589a81' : fill || "none"}
            stroke={stroke || "#589a81"}
            strokeWidth={strokeWidth || 30}
            height={height || "250px"}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            className="aspect-square"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M442.8,361.82C434,336.72,413.49,324,393.69,311.7c-17.23-10.71-33.5-20.83-44.14-39C320.22,222.37,304.11,192,256.06,192s-64.21,30.38-93.61,80.69c-10.65,18.21-27,28.35-44.25,39.08-19.8,12.31-40.27,25-49.1,50.05A78.06,78.06,0,0,0,64,390.11C64,430.85,96.45,464,132.4,464s83.31-18.13,123.76-18.13S343.31,464,379.71,464,448,430.85,448,390.11A78.3,78.3,0,0,0,442.8,361.82Z"></path>
                <ellipse cx="72" cy="216" rx="56" ry="72"></ellipse>
                <ellipse cx="184" cy="120" rx="56" ry="72"></ellipse>
                <ellipse cx="328" cy="120" rx="56" ry="72"></ellipse>
                <ellipse cx="440" cy="216" rx="56" ry="72"></ellipse>
            </g>
        </svg>
    )
}

export default PetIcon;