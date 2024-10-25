// icons
import { FillableIconProps } from "./icons/IconProps";

// Modules
import { Activity } from "./modules/Activity.ts";

const LongDataCard: React.FC<{ item: Activity, Icon: React.FC<FillableIconProps> }> = ({ item, Icon }) => {
    const currentData = item.getDetail();
    const dataType = item.constructor.name;
    
    return (
        <li className="flex bg-primary bg-opacity-90 text-background px-2 py-1.5 rounded-md h-9">
            <Icon height={'100%'} isFilled={true} fill={'#fffeff'} />
            <span className={`flex-1 flex justify-between items-center gap-2 text-center`}>
                {currentData.map((detail, index) => {
                    return (
                        <span
                            key={`LongDataCard-${dataType}-${index}-${detail}`}
                            className={`overflow-hidden text-ellipsis first:flex-[0.85] last:flex-[1.25] ${index === 1 ? 'flex-[1.25]' : 'flex-1'}`}
                        >{detail}</span>
                    )
                })}
            </span>

        </li>
    )
}

export default LongDataCard;