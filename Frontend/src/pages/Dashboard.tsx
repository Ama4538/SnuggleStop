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
import { Item } from "../components/modules/Item.ts";

// Represent all tabs
const tabElement: string[] = ['overview', 'pets', 'suppliers']

const Dashboard = () => {
    // States
    // Overview
    const [totalPets, setTotalPets] = useState(0);
    const [totalAdopters, setTotalAdopters] = useState(0);
    const [totalSupplies, setTotalSupplies] = useState(0);
    const [totalCategories, setTotalCategories] = useState(0);
    const [petDistributionData, setPetDistributionData] = useState<number[]>([]);
    const [petDistributionLabel, setPetDistributionLabel] = useState<string[]>([]);
    const [supplyDistributionData, setSupplyDistributionData] = useState<number[]>([]);
    const [supplyDistributionLabel, setSupplyDistributionLabel] = useState<string[]>([]);
    const [adoptionActivityArray, setAdoptionActivityArray] = useState<AdoptionActivity[]>([]);
    const [lowStockArray, setLowStockArray] = useState<Item[]>([]);

    // Pets
    const [totalSpecies, setTotalSpecies] = useState(0);
    const [totalBreed, setTotalBreed] = useState(0);
    const [adoptionStatusDistributionData, setAdoptionStatusDistributionData] = useState<number[]>([]);
    const [ageDistributionData, setAgeDistributionData] = useState<number[]>([]);
    const [ageDistributionLabel, setAgeDistributionLabel] = useState<string[]>([]);
    const [genderDistributionData, setGenderDistributionData] = useState<number[]>([]);
    const [genderDistributionLabel, setGenderDistributionLabel] = useState<string[]>([]);
    const [petAvgPriceArray, setPetAvgPriceArray] = useState<Item[]>([]);

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
        const item1 = new Item('Food', 0, 0, 10);
        const item2 = new Item('Toys', 0, 0, 11);
        const item3 = new Item('Grooming', 0, 0, 12);
        setLowStockArray([item1, item2, item3])

        // Pets
        setTotalSpecies(10)
        setTotalBreed(15)
        setAdoptionStatusDistributionData([10, 15, 20, 46])
        setAgeDistributionData([10, 15, 27, 2, 3])
        setAgeDistributionLabel(['0-1', '2-4', '5-7', '8-10', '10+'])
        setGenderDistributionData([24, 16])
        setGenderDistributionLabel(['Male', 'Female'])
        const pet1 = new Item('Dogs', 525.5)
        const pet2 = new Item('Cats', 235.79)
        const pet3 = new Item('Fish', 525.5)
        setPetAvgPriceArray([pet1, pet2, pet3])
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
                        petDistributionData={petDistributionData}
                        petDistributionLabel={petDistributionLabel}
                        supplyDistributionData={supplyDistributionData}
                        supplyDistributionLabel={supplyDistributionLabel}
                        adoptionActivityArray={adoptionActivityArray}
                        lowStockArray={lowStockArray}
                    />
                    : <></>}
                {activeTab === 'pets'
                    ? <DashbardPets
                        totalPets={totalPets}
                        totalSpecies={totalSpecies}
                        totalBreed={totalBreed}
                        adoptionStatusDistributionData={adoptionStatusDistributionData}
                        ageDistributionData={ageDistributionData}
                        ageDistributionLabel={ageDistributionLabel}
                        genderDistributionData={genderDistributionData}
                        genderDistributionLabel={genderDistributionLabel}
                        petAvgPriceArray={petAvgPriceArray}
                    />
                    : <></>
                }
            </section>

            <Tabbar location="Dashboard" />
        </main>
    )
}

export default Dashboard;