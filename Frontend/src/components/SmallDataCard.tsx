interface SmallDataCardProp {
    label: String;
    data: number;
}

const SmallDataCard: React.FC<SmallDataCardProp> = ({label, data}) => {
    return (
        <li className="bg-primary bg-opacity-90 text-background p-3 rounded-md capitalize">
            <h6 className="text-base">{label}</h6>
            <p className="text-3xl">{data}</p>
        </li>
    )
}

export default SmallDataCard