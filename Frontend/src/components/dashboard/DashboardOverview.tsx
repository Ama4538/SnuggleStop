// Components
import DonutChart from "../charts/DonutChart.tsx";
import BarChart from "../charts/BarChart.tsx";
import SmallDataCard from "../SmallDataCard.tsx";
import LongDataCard from "../LongDataCard.tsx";

// Modules
import { AdoptionActivity } from "../modules/Activity.ts";
import { Item } from "../modules/Item.ts";

// Icons
import PetIcon from "../icons/fillable/PetIcon.tsx";

// Interface
interface DashboardOverview {
    totalPets: number;
    totalAdopters: number;
    totalSupplies: number;
    totalCategories: number;
    petDistributionData: number[];
    petDistributionLabel: string[];
    supplyDistributionData: number[];
    supplyDistributionLabel: string[];
    adoptionActivityArray: AdoptionActivity[];
    lowStockArray: Item[];
}

const DashboardOverview: React.FC<DashboardOverview> = ({
    totalPets,
    totalAdopters,
    totalSupplies,
    totalCategories,
    petDistributionData,
    petDistributionLabel,
    supplyDistributionData,
    supplyDistributionLabel,
    adoptionActivityArray,
    lowStockArray
}) => {
    return (
        <>
            <h4 className="stats-heading">Statistics</h4>
            <ul className="grid grid-cols-2 gap-2 ">
                <SmallDataCard label={'Total Pets'} data={totalPets} />
                <SmallDataCard label={'Total Adopters'} data={totalAdopters} />
                <SmallDataCard label={'Total Supplies'} data={totalSupplies} />
                <SmallDataCard label={'Total Categories'} data={totalCategories} />
            </ul>
            <h4 className="stats-heading">Pet Distribution</h4>
            <article className="aspect-square w-full bg-background shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4 rounded-md flex justify-center items-center">
                {petDistributionData.length > 0 || petDistributionLabel.length > 0
                    ? <DonutChart data={petDistributionData} labels={petDistributionLabel} />
                    : <h4 className="stats-heading">No Data Present</h4>
                }
            </article>
            <h4 className="stats-heading">Supply Distribution</h4>
            <article className="aspect-square w-full bg-background shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4 rounded-md flex justify-center items-center">
                {supplyDistributionData.length > 0 || supplyDistributionLabel.length > 0
                    ? <BarChart data={supplyDistributionData} labels={supplyDistributionLabel} />
                    : <h4 className="stats-heading">No Data Present</h4>
                }
            </article>
            <h4 className="stats-heading">Recent Adoptions Activity</h4>
            <div>
                {adoptionActivityArray.length > 0 ? (
                    <>
                        <span className='px-2 pl-8 flex-1 flex justify-between items-center gap-2 font-semibold text-sm text-center'>
                            <span className="flex-[0.85]">Date</span>
                            <span className="flex-[1.25]">Pet</span>
                            <span className="flex-1">Adopter</span>
                            <span className="flex-[1.25]">Status</span>
                        </span>
                        <ul className="flex flex-col gap-2">
                            {adoptionActivityArray.map((activity, index) => (
                                <LongDataCard
                                    key={`adoption-activity-recent-${index}`}
                                    item={activity}
                                    Icon={PetIcon}
                                />
                            ))}
                        </ul>
                    </>
                ) : (
                    <span className="flex justify-center text-lg font-medium">No Recent Adoptions</span>
                )}
            </div>
            <h4 className="stats-heading">Supplies Low in Stock</h4>
            {lowStockArray.length > 0 ? (
                <ul className="flex overflow-auto gap-3 scrollbar-hidden">
                    {lowStockArray.map((Item, index) => (
                        <SmallDataCard
                            key={`Dashboard_Overview_Low_Stock_${index}`}
                            label={Item.getName()}
                            data={Item.getAmount()} alt={true} />
                    ))}
                </ul>
            ) : (
                <span className="flex justify-center text-lg font-medium">No Low Supplies</span>
            )}
        </>
    )
}

export default DashboardOverview;