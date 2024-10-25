import { useState } from "react"

// Icons
import NotificationsIcon from "./icons/default/NotificationIcon.tsx";
import NavMenuIcon from "./icons/default/NavMenuIcon.tsx";
import CancelIcon from "./icons/default/CancelIcon.tsx";
import DashboardIcon from "./icons/fillable/DashboardIcon.tsx";
import PetIcon from "./icons/fillable/PetIcon.tsx";
import InventoryIcon from "./icons/fillable/InventoryIcon.tsx";
import SupplierIcon from "./icons/fillable/SupplierIcon.tsx";
import AdopterIcon from "./icons/fillable/AdopterIcon.tsx";
import CategoryIcon from "./icons/fillable/CategoryIcon.tsx";
import SupportIcon from "./icons/fillable/SupportIcon.tsx";
import SettingsIcon from "./icons/fillable/SettingsIcon.tsx";

// Props
import { FillableIconProps } from "./icons/IconProps.ts";

interface NavbarProps {
    location: string;
}

interface NavElements {
    name: string;
    icons: React.ComponentType<FillableIconProps>;
}

// All nav elements
const navElements: NavElements[] = [
    { name: 'Dashboard', icons: DashboardIcon },
    { name: 'Pets', icons: PetIcon },
    { name: 'Adopters', icons: AdopterIcon},
    { name: 'Inventory', icons: InventoryIcon },
    { name: 'Caterogies', icons: CategoryIcon },
    { name: 'Suppliers', icons: SupplierIcon },
    { name: 'Support', icons: SupportIcon },
    { name: 'Settings', icons: SettingsIcon },
]

// Default values
const BASE_ICON_SIZE = 85;
const user = 'admin';

const Navbar: React.FC<NavbarProps> = ({ location }) => {
    // Nav bar status
    const [menuActive, setMenuActive] = useState<Boolean>(false)

    return (
        <nav className="px-4 pt-3 pb-0">
            <div className="flex justify-between items-center">
                <button
                    className="aspect-square h-7"
                    onClick={() => { setMenuActive(!menuActive) }}
                ><NavMenuIcon height='100%' /> </button>
                <h1 className="font-title text-2xl font-semibold">{location}</h1>
                <button className="aspect-square h-7"> <NotificationsIcon height='100%' /> </button>
            </div>

            {/* Nav Menu */}
            <section className={`${menuActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} z-50 bg-black bg-opacity-15 min-h-screen min-w-full fixed top-0 left-0 transition-all duration-200`}>
                <div
                    className={`${menuActive ? 'translate-x-0' : '-translate-x-full'} w-10/12 h-screen bg-background transition-all duration-300 fixed left-0 flex flex-col`}
                >
                    <div
                        className="grid grid-rows-2 items-center px-2 pr-3.5 py-5 border-b border-b-text border-opacity-15 bg-primary font-title text-background"
                        style={{ gridTemplateColumns: '0.50fr 1.10fr 0.20fr' }}
                    >
                        <div className="bg-white bg-[url('/pictures/userProfile.png')] bg-center bg-cover h-full row-span-2 aspect-square rounded-full ml-auto mr-auto"/>
                        <h1 className=" text-2xl font-semibold col-start-2 ">SnuggleStop</h1>
                        <p className=" text-lg col-start-2 capitalize flex mb-auto">{user}</p>
                        <button
                            className="aspect-square h-5/6 ml-auto mr-1 row-start-1 col-start-3"
                            onClick={() => { setMenuActive(!menuActive) }}
                        > <CancelIcon height='100%' fill='#fffeff' /></button>
                    </div>
                    <ul className="text-lg h-full font-medium font-text flex flex-col gap-1.5 px-2 py-3.5">
                        {navElements.map((element, index) => (
                            <li
                                className={`last:border-b-0 py-1 px-1 whitespace-nowrap ${index === 6 ? 'mt-auto' : ''}`}
                                key={`nav_element_${element.name}`}
                            >
                                <a href="" className={`${location === element.name ? 'bg-accent' : ''} py-1 px-1.5 flex h-10 items-center gap-1.5 rounded-md`}>
                                    <element.icons height={`${index === 5 ? BASE_ICON_SIZE + 10 : BASE_ICON_SIZE}%`} isFilled={location === element.name} />
                                    <span className="mt-auto">{element.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </nav>
    )
}

export default Navbar;