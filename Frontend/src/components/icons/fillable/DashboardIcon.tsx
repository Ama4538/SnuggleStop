// Props
import { FillableIconProps } from "../IconProps.ts";

const DashboardIcon: React.FC<FillableIconProps> = ({ isFilled, fill, stroke, strokeWidth, height, ...props }) => {
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
                <path d="M488.724,442.178h-23.272V210.59l10.581,6.884c3.918,2.551,8.318,3.769,12.669,3.769c7.609,0,15.07-3.728,19.53-10.583 c7.01-10.774,3.958-25.189-6.816-32.2L268.692,27.04c-7.719-5.019-17.67-5.019-25.384,0L10.583,178.46 c-10.775,7.01-13.824,21.426-6.816,32.2c7.01,10.774,21.425,13.825,32.2,6.816l10.578-6.884V442.18H23.273 c-12.851,0-23.272,10.42-23.272,23.272s10.421,23.272,23.272,23.272h46.545h139.635h93.09h139.635h46.545 c12.854,0,23.272-10.42,23.272-23.272C511.996,452.598,501.578,442.178,488.724,442.178z M325.817,442.178h-23.272h-23.272 h-46.545h-23.272h-23.272V310.301c0-12.853,10.421-23.272,23.272-23.272h93.09c12.854,0,23.272,10.42,23.272,23.272V442.178z" />
            </g>
        </svg>
    )
}

export default DashboardIcon;