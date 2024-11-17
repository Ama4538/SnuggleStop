import { useEffect, useState } from "react";

// Components
import Navbar from "../components/Navbar.tsx";
import Searchbar from "../components/Searchbar.tsx";
import Picture from "../components/Picture.tsx";
import Tabbar from "../components/Tabbar.tsx";
import DashboardOverview from "../components/dashboard/DashboardOverview.tsx";
import DashbardPets from "../components/dashboard/DashboardPets.tsx";
import DashboardSupplies from "../components/dashboard/DashboardSupplies.tsx";

// Modules
import { AdoptionActivity, PetArrivalActivity, SupplyArrivalActivity } from "../components/modules/Activity.ts";
import { Item } from "../components/modules/Item.ts";
import { Supplier } from "../components/modules/Supplier.ts";

// Represent all tabs
const tabElement: string[] = ['overview', 'pets', 'supplies']

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
    const [petAvgPriceArray, setPetAvgPriceArray] = useState<Item[]>([]);
    const [petArrivalActivityArray, setPetArrivalActivityArray] = useState<PetArrivalActivity[]>([]);

    // Supplies
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalSuppliers, setTotalSuppliers] = useState(0);
    const [priceCategoryDistributionData, setPriceCategoryDistributionData] = useState<number[]>([]);
    const [priceCategoryDistributionLabel, setPriceCategoryDistributionLabel] = useState<string[]>([]);
    const [supplyArrivalArray, setSupplyArrivalArray] = useState<SupplyArrivalActivity[]>([]);
    const [topSupplierArray, setTopSupplierArray] = useState<Supplier[]>([]);

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
        const adoptionActivity1 = new AdoptionActivity('10/22', 'Betty', 'Jack', 'Pending');
        const adoptionActivity2 = new AdoptionActivity('9/22', 'Alliesander', 'Kevin', 'Complete');
        const adoptionActivity3 = new AdoptionActivity('6/19', 'Kevina', 'Allie', 'Pending');
        setAdoptionActivityArray([adoptionActivity1, adoptionActivity2, adoptionActivity3]);
        const item1 = new Item('Food', 0, 0, 10);
        const item2 = new Item('Toys', 0, 0, 11);
        const item3 = new Item('Grooming', 0, 0, 12);
        setLowStockArray([item1, item2, item3])

        // Pets
        setTotalSpecies(10)
        setTotalBreed(15)
        setAdoptionStatusDistributionData([10, 15, 46])
        setAgeDistributionData([10, 15, 27, 2, 3])
        setAgeDistributionLabel(['0-1', '2-4', '5-7', '8-10', '10+'])
        setGenderDistributionData([24, 16])
        const pet1 = new Item('Dogs', 525.5)
        const pet2 = new Item('Cats', 235.79)
        const pet3 = new Item('Fish', 25.5)
        setPetAvgPriceArray([pet1, pet2, pet3])
        const petArrivalActivity1 = new PetArrivalActivity('10/25', 'Betty', 'Dog', 'Golden Retriver');
        const petArrivalActivity2 = new PetArrivalActivity('10/21', 'James the destroyer', 'Dog', 'Husky');
        const petArrivalActivity3 = new PetArrivalActivity('10/20', 'Alex', 'Cat', 'Mancoon');
        setPetArrivalActivityArray([petArrivalActivity1, petArrivalActivity2, petArrivalActivity3]);

        // Supplies
        setTotalPrice(15200);
        setTotalSuppliers(20);
        setPriceCategoryDistributionData([35.50, 15.75, 25.40, 45.90, 20.30, 30.25, 10.00]);
        setPriceCategoryDistributionLabel(['Food', 'Toys', 'Health', 'Bedding', 'Cleaning', 'Grooming', 'Other']);
        const supplyArrivalActivity1 = new SupplyArrivalActivity('9/25', 'Max\'s Toys', 'Max Inc', 25);
        const supplyArrivalActivity2 = new SupplyArrivalActivity('9/22', 'Max\'s Foods', 'Max Inc', 65);
        const supplyArrivalActivity3 = new SupplyArrivalActivity('9/21', 'Little Snacks', 'Pet Inc', 125);
        setSupplyArrivalArray([supplyArrivalActivity1, supplyArrivalActivity2, supplyArrivalActivity3]);
        const topSupplier1 = new Supplier("Max Inc", 300);
        const topSupplier2 = new Supplier("Same Inc", 200);
        const topSupplier3 = new Supplier("Little Inc", 100);
        setTopSupplierArray([topSupplier1, topSupplier2, topSupplier3])

    }, [])

    return (
        <main className="min-h-dvh bg-background text-primary relative pb-[8dvh] font-text">
            <Navbar location="Dashboard" />
            <header className="flex flex-col mt-3.5 md:mt-5 mb-3.5 md:mb-5 px-4 md:px-9 gap-3.5 md:gap-5">
                <Searchbar />
                <div className="flex items-center">
                    <ul className="w-full flex gap-2 text-sm md:text-lg">
                        {tabElement.map(element => (
                            <li
                                className={`${activeTab === element ? 'bg-primary text-background' : 'bg-background text-primary'} rounded-full w-1/3 flex justify-center py-0.5 px-2 border border-primary transition-all duration-300`}
                                key={`dashboard_tab_element_${element}`}
                            >
                                <button
                                    className="capitalize w-full h-full"
                                    onClick={() => setActiveTab(element)}
                                >{element}</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </header>
            <Picture fileName="dashboard_cat.png" altText="Dashboard image of a cat" circleAmount={3} circleSizes={[50, 35, 25]} circleLocations={[[50, 50], [70, 0], [80, 95]]} />
            <section className="my-3.5 md:my-5 px-6 md:px-9 gap-3.5 md:gap-5 flex flex-col">
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
                        petAvgPriceArray={petAvgPriceArray}
                        petArrivalActivityArray={petArrivalActivityArray}
                    />
                    : <></>
                }
                {activeTab === 'supplies'
                    ? <DashboardSupplies 
                        totalPrice={totalPrice}
                        totalSuppliers={totalSuppliers}
                        totalSupplies={totalSupplies}
                        priceCategoryDistributionData={priceCategoryDistributionData}
                        priceCategoryDistributionLabel={priceCategoryDistributionLabel}
                        supplyArrivalArray={supplyArrivalArray}
                        topSupplierArray={topSupplierArray}
                    />
                    : <></>
                }
            </section>

            <Tabbar location="Dashboard" />
        </main>
    )
}

export default Dashboard;