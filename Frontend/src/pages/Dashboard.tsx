import { useEffect, useState } from "react";

// Components
import Navbar from "../components/Navbar.tsx";
import Searchbar from "../components/Searchbar.tsx";
import Picture from "../components/Picture.tsx";
import Tabbar from "../components/Tabbar.tsx";
import DashboardOverview from "../components/dashboard/DashboardOverview.tsx";
import DashbardPets from "../components/dashboard/DashboardPets.tsx";

// Modules
import { AdoptionActivity } from "../components/modules/Activity.ts";
import { Stock } from "../components/modules/Stock.ts";

// Represent all tabs
const tabElement: string[] = ['overview', 'pets', 'suppliers']

const Dashboard = () => {
    // State
    const [totalPets, setTotalPets] = useState(0);
    const [totalAdopters, setTotalAdopters] = useState(0);
    const [totalSupplies, setTotalSupplies] = useState(0);
    const [totalCategories, setTotalCategories] = useState(0);
    const [petDistributionData, setPetDistributionData] = useState<number[]>([]);
    const [petDistributionLabel, setPetDistributionLabel] = useState<string[]>([]);
    const [supplyDistributionData, setSupplyDistributionData] = useState<number[]>([]);
    const [supplyDistributionLabel, setSupplyDistributionLabel] = useState<string[]>([]);
    const [adoptionActivityArray, setAdoptionActivityArray] = useState<AdoptionActivity[]>([]);
    const [lowStockArray, setLowStockArray] = useState<Stock[]>([]);

    // Manage the active tab
    const [activeTab, setActiveTab] = useState<string>('overview');

    // Fake data
    useEffect(() => {
        // Dashboard
        setTotalPets(15);
        setTotalAdopters(10);
        setTotalSupplies(132);
        setTotalCategories(15);
        setPetDistributionData([20, 10, 5, 15, 15]);
        setPetDistributionLabel(['Dogs', 'Cats', 'Birds', 'Fish', 'Others']);
        setSupplyDistributionData([28, 41, 37, 15, 22, 17, 39])
        setSupplyDistributionLabel(['Food', 'Toys', 'Health', 'Bedding', 'Cleaning', 'Grooming', 'Other'])
        const adoptionActivity1 = new AdoptionActivity('Betty', 'Jack', 'Pending', '10/22');
        const adoptionActivity2 = new AdoptionActivity('Alliesander', 'Kevin', 'Complete', '9/22');
        const adoptionActivity3 = new AdoptionActivity('Kevina', 'Allie', 'Pending', '6/19');
        setAdoptionActivityArray([adoptionActivity1, adoptionActivity2, adoptionActivity3]);
        const stock1 = new Stock('Food', 10);
        const stock2 = new Stock('Toys', 11);
        const stock3 = new Stock('Grooming', 12);
        setLowStockArray([stock1, stock2, stock3])
    }, [])

    return (
        <main className="min-h-dvh bg-background text-primary relative pb-[8dvh] font-text">
            <Navbar location="Dashboard" />
            <header className="flex flex-col mt-3.5 mb-3.5 px-4 gap-3.5">
                <Searchbar />
                <div className="flex items-center">
                    <ul className="w-full flex gap-2 text-sm">
                        {tabElement.map(element => (
                            <li
                                className={`${activeTab === element ? 'bg-primary text-background' : 'bg-background text-primary'} rounded-full w-1/3 flex justify-center py-0.5 px-2 border border-primary transition-all duration-300`}
                                key={`dashboard_tab_element_${element}`}
                            >
                                <button
                                    className="capitalize"
                                    onClick={() => setActiveTab(element)}
                                >{element}</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </header>
            <Picture fileName="dashboard_cat.png" altText="Dashboard image of a cat" circleAmount={3} circleSizes={[50, 35, 25]} circleLocations={[[50, 50], [70, 0], [80, 95]]} />
            <section className="my-3.5 px-6 gap-3.5 flex flex-col">
                {activeTab === 'overview'
                    ? <DashboardOverview
                        totalPets={totalPets}
                        totalAdopters={totalAdopters}
                        totalSupplies={totalSupplies}
                        totalCategories={totalCategories}
                        petDistrubitionData={petDistributionData}
                        petDistrubitionLabel={petDistributionLabel}
                        supplyDistrubitionData={supplyDistributionData}
                        supplyDistrubitionLabel={supplyDistributionLabel}
                        adoptionActivityArray={adoptionActivityArray}
                        lowStockArray={lowStockArray}
                    />
                    : <></>}
                {activeTab === 'pets'
                    ? <DashbardPets />
                    : <></>
                }
            </section>

            <Tabbar location="Dashboard" />
        </main>
    )
}

export default Dashboard;