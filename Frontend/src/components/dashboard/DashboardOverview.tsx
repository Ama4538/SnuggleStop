// Components
import DonutChart from "../charts/DonutChart.tsx";
import BarChart from "../charts/BarChart.tsx";
import SmallDataCard from "../SmallDataCard.tsx";
import LongDataCard from "../LongDataCard.tsx";

// Modules
import { AdoptionActivity } from "../modules/Activity.ts";
import { Stock } from "../modules/Stock.ts";

// Icons
import PetIcon from "../icons/fillable/PetIcon.tsx";

interface DashboardOverview {
    totalPets: number;
    totalAdopters: number;
    totalSupplies: number;
    totalCategories: number;
    petDistrubitionData: number[];
    petDistrubitionLabel: string[];
    supplyDistrubitionData: number[];
    supplyDistrubitionLabel: string[];
    adoptionActivityArray: AdoptionActivity[];
    lowStockArray: Stock[];
}

const DashboardOverview: React.FC<DashboardOverview> = ({
    totalPets,
    totalAdopters,
    totalSupplies,
    totalCategories,
    petDistrubitionData,
    petDistrubitionLabel,
    supplyDistrubitionData,
    supplyDistrubitionLabel,
    adoptionActivityArray,
    lowStockArray
}) => {
    return (
        <>
            <h4 className="text-xl font-semibold">Statistics</h4>
            <ul className="grid grid-cols-2 gap-2 ">
                <SmallDataCard label={'Total Pets'} data={totalPets} />
                <SmallDataCard label={'Total Adopters'} data={totalAdopters} />
                <SmallDataCard label={'Total Supplies'} data={totalSupplies} />
                <SmallDataCard label={'Total Categories'} data={totalCategories} />
            </ul>
            <h4 className="text-xl font-semibold">Pet Distrubition</h4>
            <article className="aspect-square w-full bg-background shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4 rounded-md flex justify-center items-center">
                {petDistrubitionData.length > 0 || petDistrubitionLabel.length > 0
                    ? <DonutChart data={petDistrubitionData} labels={petDistrubitionLabel} />
                    : <h4 className="text-xl font-semibold">No Data Present</h4>
                }
            </article>
            <h4 className="text-xl font-semibold">Supply Distrubition</h4>
            <article className="aspect-square w-full bg-background shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4 rounded-md flex justify-center items-center">
                {supplyDistrubitionData.length > 0 || supplyDistrubitionLabel.length > 0
                    ? <BarChart data={supplyDistrubitionData} labels={supplyDistrubitionLabel} />
                    : <h4 className="text-xl font-semibold">No Data Present</h4>
                }
            </article>
            <h4 className="text-xl font-semibold">Recent Adoptions Activity</h4>
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
            <h4 className="text-xl font-semibold">Supplies Low in Stock</h4>
            {lowStockArray.length > 0 ? (
                <ul className="flex overflow-auto gap-3 scrollbar-hidden">
                    {lowStockArray.map((stock, index) => (
                        <SmallDataCard
                            key={`Dashboard_Overview_Low_Stock_${index}`}
                            label={stock.getName()}
                            data={stock.getAmount()} alt={true} />
                    ))}
                </ul>
            ) : (
                <span className="flex justify-center text-lg font-medium">No Low Supplies</span>
            )}
        </>
    )
}

export default DashboardOverview;