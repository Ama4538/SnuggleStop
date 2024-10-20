const FilterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            {...props}
            height={props.height || "250px"}
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 378.84 435.23"
            className="aspect-square"
        >
            <defs>
                <style>
                    {`
              .cls-1 {
                fill: none;
              }
              .cls-2 {
                fill: ${props.fill || "#589a81"};
              }
              .cls-3 {
                clip-path: url(#clippath);
              }
            `}
                </style>
                <clipPath id="clippath">
                    <rect className="cls-1" width="378.84" height="435.23" />
                </clipPath>
            </defs>
            <g className="cls-3">
                <path className="cls-2" d="M248.62,129.91c-4.35,0-7.89-3.63-7.89-8.04V8.02c0-4.41,3.54-8.04,7.89-8.04h51.29c4.35,0,7.89,3.63,7.89,8.04v113.85c0,4.41-3.54,8.04-7.89,8.04h-51.29Z" />
                <path className="cls-2" d="M319.65,83.03h51.32c4.32,0,7.89-3.63,7.89-8.04v-16.08c0-4.41-3.57-8.04-7.89-8.04h-51.32v32.16Z" />
                <path className="cls-2" d="M228.89,50.89H7.9C3.55,50.89.01,54.51.01,58.92v16.08c0,4.38,3.54,8.04,7.89,8.04h220.99v-32.16Z" />
                <path className="cls-2" d="M248.62,435.23c-4.35,0-7.89-3.63-7.89-8.01v-113.85c0-4.41,3.54-8.04,7.89-8.04h51.29c4.35,0,7.89,3.63,7.89,8.04v113.85c0,4.38-3.54,8.01-7.89,8.01h-51.29Z" />
                <path className="cls-2" d="M228.89,356.23H7.9c-4.35,0-7.89,3.63-7.89,8.01v16.11c0,4.38,3.54,8.04,7.89,8.04h220.99v-32.16Z" />
                <path className="cls-2" d="M319.65,388.37h51.32c4.32,0,7.89-3.63,7.89-8.04v-16.08c0-4.41-3.57-8.04-7.89-8.04h-51.32v32.16Z" />
                <path className="cls-2" d="M78.93,282.57c-4.35,0-7.89-3.63-7.89-8.04v-113.82c0-4.44,3.54-8.04,7.89-8.04h51.29c4.35,0,7.92,3.6,7.92,8.04v113.82c0,4.41-3.57,8.04-7.92,8.04h-51.29Z" />
                <path className="cls-2" d="M149.96,234.34h220.99c4.35,0,7.89-3.63,7.89-8.01v-16.11c0-4.38-3.54-8.01-7.89-8.01h-220.99v32.13Z" />
                <path className="cls-2" d="M59.2,202.22H7.88C3.56,202.22,0,205.84,0,210.23v16.11c0,4.38,3.57,8.01,7.89,8.01h51.32v-32.13Z" />
            </g>
        </svg>
    )
}

export default FilterIcon;