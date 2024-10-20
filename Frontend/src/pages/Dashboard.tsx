import { useState } from "react";

// Components
import Navbar from "../components/navbar.tsx";
import Searchbar from "../components/Searchbar.tsx";
import Picture from "../components/Picture.tsx";
import Tabbar from "../components/Tabbar.tsx";

// Icons
import FilterIcon from "../components/icons/default/FilterIcon.tsx";

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
                    <ul className="w-9/12 flex gap-2 text-sm">
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
                    <button className="aspect-square h-6 ml-auto mr-2.5"> <FilterIcon height={'85%'} /></button>
                </div>
            </header>
            <Picture fileName="dashboard_cat.png" altText="Dashboard image of a cat" circleAmount={3} circleSizes={[50, 35, 25]} circleLocations={[[50, 50], [70, 0], [80, 95]]} />
            <section className="my-3.5 px-6 gap-3.5 flex flex-col">

                <h4 className="text-xl font-medium">Pet Distrubition</h4>
                <div className="aspect-square w-full bg-black">

                </div>
            </section>

            <Tabbar location="Dashboard" />
        </main>
    )
}

export default Dashboard;