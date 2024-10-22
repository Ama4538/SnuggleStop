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
            <span className={`pl-2 flex-1 flex justify-between items-center gap-2`}>
                {currentData.map((detail, index) => {
                    return (
                        <span
                            key={`LongDataCard-${dataType}-${index}-${detail}`}
                            className={`overflow-hidden text-ellipsis first:text-start last:text-end text-center ${index === 2 ? 'flex-[1.25]' : 'flex-1'}`}
                        >{detail}</span>
                    )
                })}
            </span>

        </li>
    )
}

export default LongDataCard;