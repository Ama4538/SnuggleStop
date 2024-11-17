interface SmallDataCardProp {
    className?: string;
    headerClass?: string;
    subClass?: string;
    alt?: boolean;
    label: string;
    data: number | string;
}

const SmallDataCard: React.FC<SmallDataCardProp> = ({ className, headerClass, subClass, alt = false, label, data}) => {
    return (
        <li className={`${alt ? 'bg-accent text-primary' : 'bg-primary text-background'} bg-opacity-90 p-3 rounded-md capitalize min-w-32 md:gap-1 ${className || 'flex flex-col'}`}>
            <h6 className={`${headerClass || 'text-base md:text-2xl'}`}>{label}</h6>
            <span className={`${subClass || 'text-3xl md:text-5xl'}`}>{data}</span>
        </li>
    )
}

export default SmallDataCard