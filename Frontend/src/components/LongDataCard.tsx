// icons
import { FillableIconProps } from "./icons/IconProps";

// Interface 
interface LongDataCard {
    type: string;
    data: string[];
    Icon: React.FC<FillableIconProps>
    alt?: boolean;
}

const LongDataCard: React.FC<LongDataCard> = ({ type, data, Icon, alt = false }) => {
    return (
        <li className={`${alt ? 'bg-accent text-primary' : 'bg-primary bg-opacity-90 text-background'} flex px-2 py-1.5 rounded-md h-9`}>
            <Icon height={'100%'} isFilled={false} fill={alt ? '' : '#fffeff'} />
            <span className={`flex-1 flex justify-between items-center gap-2 text-center`}>
                {data.map((detail, index) => {
                    return (
                        <span
                            key={`LongDataCard-${type}-${index}-${detail}`}
                            className={`overflow-hidden text-ellipsis whitespace-nowrap first:flex-[0.85] last:flex-[1.25] ${index === 1 ? 'flex-[1.25]' : 'flex-1'}`}
                        >{detail}</span>
                    )
                })}
            </span>

        </li>
    )
}

export default LongDataCard;