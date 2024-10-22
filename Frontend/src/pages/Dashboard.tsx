import { useState } from "react";

// Components
import Navbar from "../components/Navbar.tsx";
import Searchbar from "../components/Searchbar.tsx";
import Picture from "../components/Picture.tsx";
import Tabbar from "../components/Tabbar.tsx";
import DonutChart from "../components/charts/DonutChart.tsx";
import BarChart from "../components/charts/BarChart.tsx";
import SmallDataCard from "../components/SmallDataCard.tsx";
import LongDataCard from "../components/LongDataCard.tsx";

// Modules
import { AdoptionActivity } from "../components/modules/Activity.ts";

// Icons
import PetIcon from "../components/icons/fillable/PetIcon.tsx";

// FAKE DATA
const petDistrubitionData = [20, 10, 5, 15, 15];
const petDistrubitionLabel = ['Dogs', 'Cats', 'Birds', 'Fish', 'Others'];

const supplyDistrubitionData = [28, 41, 37, 15, 22, 17, 39];
const supplyDistrubitionLabel = ['Food', 'Toys', 'Health', 'Bedding', 'Cleaning', 'Grooming', 'Other']

const totalPets = 10;
const totalAdopters = 6;
const totalSupplies = 112;
const totalCaterogies = 20;

const adoptionActivity1 = new AdoptionActivity('Betty', 'Jack', 'Pending', '10/22');
const adoptionActivity2 = new AdoptionActivity('Alliesander', 'Kevin', 'Complete', '9/22');
const adoptionActivity3 = new AdoptionActivity('Kevina', 'Allie', 'Pending', '6/19');

const adoptionActivityArray = [adoptionActivity1, adoptionActivity2, adoptionActivity3]


const Dashboard = () => {
    // Manage the active tab
    const [activeTab, setActiveTab] = useState<string>('overview');

    // Represent all tabs
    const tabElement: string[] = ['overview', 'pets', 'suppliers']

    return (
        <main className="min-h-dvh bg-background text-primary relative pb-[8dvh]">
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
                <h4 className="text-xl font-medium">Statistics</h4>
                <ul className="grid grid-cols-2 gap-2 ">
                    <SmallDataCard label={'Total Pets'} data={totalPets} />
                    <SmallDataCard label={'Total Adopters'} data={totalAdopters} />
                    <SmallDataCard label={'Total Supplies'} data={totalSupplies} />
                    <SmallDataCard label={'Total Caterogies'} data={totalCaterogies} />
                </ul>
                <h4 className="text-xl font-medium">Pet Distrubition</h4>
                <article className="aspect-square w-full bg-background shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4 rounded-md">
                    <DonutChart data={petDistrubitionData} labels={petDistrubitionLabel} />
                </article>
                <h4 className="text-xl font-medium">Supply Distrubition</h4>
                <article className="aspect-square w-full bg-background shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4 rounded-md">
                    <BarChart data={supplyDistrubitionData} labels={supplyDistrubitionLabel} />
                </article>
                <div>
                    <h4 className="text-xl font-medium mb-3">Recent Adoptions Activity</h4>
                    <span className={`px-2 pl-10 flex-1 flex justify-between items-center gap-2 font-medium text-sm`}>
                        <span className="flex-1 pl-2">Pet</span>
                        <span className="text-center flex-1">Adopter</span>
                        <span className="text-center flex-[1.25]">Status</span>
                        <span className="text-end flex-1">Date</span>
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
                </div>
                <h4 className="text-xl font-medium">Supplies Low in Stock</h4>
                <div className="grid grid-cols-2 gap-2">

                </div>
            </section>

            <Tabbar location="Dashboard" />
        </main>
    )
}

export default Dashboard;