const NotificationsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            {...props}
            fill={props.fill || "#589a81"}
            height={props.height || "250px"}
            viewBox="0 0 56 56"
            xmlns="http://www.w3.org/2000/svg"
            className="aspect-square"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
            <g id="SVGRepo_iconCarrier">
                <path d="M 9.4257 43.2461 L 46.5742 43.2461 C 48.8005 43.2461 50.1133 42.0977 50.1133 40.4102 C 50.1133 38.0664 47.7460 35.9570 45.7070 33.8711 C 44.1601 32.2539 43.7382 28.9258 43.5742 26.2305 C 43.3867 17.2305 41.0195 11.0195 34.7617 8.7695 C 33.8945 5.7226 31.4570 3.2852 28.0117 3.2852 C 24.5429 3.2852 22.1289 5.7226 21.2382 8.7695 C 15.0039 11.0195 12.6132 17.2305 12.4492 26.2305 C 12.2617 28.9258 11.8632 32.2539 10.2929 33.8711 C 8.2773 35.9570 5.8867 38.0664 5.8867 40.4102 C 5.8867 42.0977 7.2226 43.2461 9.4257 43.2461 Z M 20.8632 46.4336 C 21.1445 49.8555 24.0273 52.7148 28.0117 52.7148 C 31.9726 52.7148 34.8554 49.8555 35.1601 46.4336 Z" />
            </g>
        </svg>
    )
}

export default NotificationsIcon;