// Components
import BarChart from "../charts/BarChart.tsx";
import SmallDataCard from "../data_representation/SmallDataCard.tsx";
import LongDataCard from "../data_representation/LongDataCard.tsx";

// Modules
import { SupplyArrivalActivity } from "../modules/Activity.ts";
import { Supplier } from "../modules/Supplier.ts";

// Icons
import InventoryIcon from "../icons/fillable/InventoryIcon.tsx";

// Interface
interface DashboardSupplies {
    totalPrice: number;
    totalSuppliers: number;
    totalSupplies: number;
    priceCategoryDistributionData: number[];
    priceCategoryDistributionLabel: string[];
    supplyArrivalArray: SupplyArrivalActivity[];
    topSupplierArray: Supplier[];
}

const DashboardSupplies: React.FC<DashboardSupplies> = ({
    totalPrice,
    totalSuppliers,
    totalSupplies,
    priceCategoryDistributionData,
    priceCategoryDistributionLabel,
    supplyArrivalArray,
    topSupplierArray,
}) => {
    return (
        <>
            <h4 className="stats-heading">Statistics</h4>
            <ul className="grid grid-cols-2 gap-2">
                <SmallDataCard className={'col-span-2 flex justify-between items-center py-6 px-3'} headerClass={'text-2xl'} label={'Total Price'} data={`$${totalPrice}`} />
                <SmallDataCard label={'Total Supplies'} data={totalSupplies} />
                <SmallDataCard label={'Total Suppliers'} data={totalSuppliers} />
            </ul>
            <h4 className="stats-heading">Category Avarage Price (USD)</h4>
            <article className="aspect-square w-full bg-background shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4 rounded-md flex justify-center items-center">
                {priceCategoryDistributionData.length > 0 || priceCategoryDistributionLabel.length > 0
                    ? <BarChart data={priceCategoryDistributionData} labels={priceCategoryDistributionLabel} />
                    : <h4 className="stats-heading">No Data Present</h4>
                }
            </article>
            <div>
                <h4 className="stats-heading mb-3">Recent Arrivals</h4>
                {supplyArrivalArray.length > 0 ? (
                    <>
                        <span className='px-2 pl-8 flex-1 flex justify-between items-center gap-2 font-semibold text-sm text-center'>
                            <span className="flex-[0.85]">Date</span>
                            <span className="flex-[1.25]">Item</span>
                            <span className="flex-1">Supplier</span>
                            <span className="flex-[1.25]">Amount</span>
                        </span>
                        <ul className="flex flex-col gap-2">
                            {supplyArrivalArray.map((activity, index) => {
                                const activityData = [activity.getDate(), activity.getName(), activity.getSupplier(), activity.getAmount().toString()]
                                return (
                                    <LongDataCard
                                        key={`adoption-activity-recent-${index}`}
                                        type={'supplyArrival'}
                                        data={activityData}
                                        Icon={InventoryIcon}
                                    />
                                )
                            })}
                        </ul>
                    </>
                ) : (
                    <span className="flex justify-center text-lg font-medium">No Recent Arrivals</span>
                )}
            </div>
            <div>
                <h4 className="stats-heading mb-3">Top Suppliers</h4>
                {topSupplierArray.length > 0 ? (
                    <>
                        <span className='px-3 flex justify-between items-center gap-2 font-semibold text-sm text-center'>
                            <span>Supplier</span>
                            <span>Total Product</span>
                        </span>
                        <ul className="flex flex-col gap-2">
                            {topSupplierArray.map((activity, index) => {
                                return (
                                    <SmallDataCard alt={true} className={'col-span-2 flex justify-between items-center py-2.5 px-3'} headerClass={'text-2xl'} subClass={'text-2xl'} label={activity.getName()} data={activity.getTotalProduct()} key={`adoption-activity-recent-${index}`} />
                                )
                            })}
                        </ul>
                    </>
                ) : (
                    <span className="flex justify-center text-lg font-medium">No Recent Arrivals</span>
                )}
            </div>
        </>
    )
}

export default DashboardSupplies;