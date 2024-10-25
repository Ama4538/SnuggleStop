// Components
import DonutChart from "../charts/DonutChart.tsx";
import BarChart from "../charts/BarChart.tsx";
import SmallDataCard from "../SmallDataCard.tsx";

// Modules
import { Item } from "../modules/Item.ts";

// Interface
interface DashbardPets {
    totalPets: number;
    totalSpecies: number;
    totalBreed: number;
    adoptionStatusDistributionData: number[];
    ageDistributionData: number[];
    ageDistributionLabel: string[];
    genderDistributionData: number[];
    genderDistributionLabel: string[];
    petAvgPriceArray: Item[];
}

// Const
const adoptionStatusDistributionLabel = ['Available', 'Pending', 'Adopted', 'Not Available']

const DashbardPets: React.FC<DashbardPets> = ({
    totalPets,
    totalSpecies,
    totalBreed,
    adoptionStatusDistributionData,
    ageDistributionData,
    ageDistributionLabel,
    genderDistributionData,
    genderDistributionLabel,
    petAvgPriceArray,
}) => {
    return (
        <>
            <h4 className="stats-heading">Statistics</h4>
            <ul className="grid grid-cols-2 gap-2 ">
                <SmallDataCard className={'col-span-2 flex justify-between items-center py-6 px-3'} headerClass={'text-2xl'} label={'Total Pets'} data={totalPets} />
                <SmallDataCard label={'Total Species'} data={totalSpecies} />
                <SmallDataCard label={'Total Breed'} data={totalBreed} />
            </ul>
            <h4 className="stats-heading">Adoption Status Distribution</h4>
            <article className="aspect-square w-full bg-background shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4 rounded-md flex justify-center items-center">
                {adoptionStatusDistributionData.length > 0 || adoptionStatusDistributionLabel.length > 0
                    ? <DonutChart data={adoptionStatusDistributionData} labels={adoptionStatusDistributionLabel} />
                    : <h4 className="stats-heading">No Data Present</h4>
                }
            </article>
            <h4 className="stats-heading">Age Distribution (Years)</h4>
            <article className="aspect-square w-full bg-background shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4 rounded-md flex justify-center items-center">
                {ageDistributionData.length > 0 || ageDistributionLabel.length > 0
                    ? <BarChart data={ageDistributionData} labels={ageDistributionLabel} />
                    : <h4 className="stats-heading">No Data Present</h4>
                }
            </article>
            <h4 className="stats-heading">Gender Distribution</h4>
            <article className="aspect-square w-full bg-background shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4 rounded-md flex justify-center items-center">
                {genderDistributionData.length > 0 || genderDistributionLabel.length > 0
                    ? <DonutChart data={genderDistributionData} labels={genderDistributionLabel} />
                    : <h4 className="stats-heading">No Data Present</h4>
                }
            </article>
            <h4 className="stats-heading">Average Species Price</h4>
            {petAvgPriceArray.length > 0 ? (
                <ul className="flex overflow-auto gap-3 scrollbar-hidden">
                    {petAvgPriceArray.map((item, index) => (
                        <SmallDataCard
                            key={`Dashboard_Pets_Species_Price_${index}`}
                            className={"min-w-40"}
                            label={item.getName()}
                            data={`$${item.getAvgPrice().toString()}`} alt={true} />
                    ))}
                </ul>
            ) : (
                <span className="flex justify-center text-lg font-medium">No Low Supplies</span>
            )}
        </>
    )
}

export default DashbardPets;