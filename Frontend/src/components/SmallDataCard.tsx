interface SmallDataCardProp {
    className?: string;
    headerClass?: string;
    alt?: boolean;
    label: string;
    data: number | string;
}

const SmallDataCard: React.FC<SmallDataCardProp> = ({ className, headerClass, alt = false, label, data}) => {
    return (
        <li className={`${alt ? 'bg-accent text-primary' : 'bg-primary text-background'} bg-opacity-90  p-3 rounded-md capitalize min-w-32 ${className || ''}`}>
            <h6 className={`${headerClass || 'text-base'}`}>{label}</h6>
            <p className="text-3xl">{data}</p>
        </li>
    )
}

export default SmallDataCard