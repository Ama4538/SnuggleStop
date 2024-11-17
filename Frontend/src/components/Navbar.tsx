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

// Interface
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
        <nav className="px-4 pt-3 pb-0 md:px-9 md:pt-6">
            <div className="flex justify-between items-center">
                <button
                    className="aspect-square h-7 md:h-12"
                    onClick={() => { setMenuActive(!menuActive) }}
                ><NavMenuIcon height='100%' /> </button>
                <h1 className="font-title text-2xl font-semibold md:text-5xl">{location}</h1>
                <button className="aspect-square h-7 md:h-12"> <NotificationsIcon height='100%' /> </button>
            </div>

            {/* Nav Menu */}
            <section className={`${menuActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} z-50 bg-black bg-opacity-15 min-h-screen min-w-full fixed top-0 left-0 transition-all duration-200`}>
                <div
                    className={`${menuActive ? 'translate-x-0' : '-translate-x-full'} w-10/12 h-screen bg-background transition-all duration-300 fixed left-0 flex flex-col`}
                >
                    <div className="grid grid-rows-2 items-center px-2.5 pr-3.5 py-5 md:px-4 border-b border-b-text border-opacity-15 bg-primary font-title text-background nav-grid">
                        <div className="bg-white bg-[url('/pictures/userProfile.png')] bg-center bg-cover h-full row-span-2 aspect-square rounded-full ml-auto mr-auto"/>
                        <h1 className=" text-2xl font-semibold col-start-2 md:text-5xl ">SnuggleStop</h1>
                        <p className=" text-lg col-start-2 capitalize flex mb-auto md:text-3xl md:mb-0">{user}</p>
                        <button
                            className="aspect-square h-7 ml-auto mr-1 row-start-1 col-start-3 md:h-12"
                            onClick={() => { setMenuActive(!menuActive) }}
                        > <CancelIcon height='100%' fill='#fffeff' /></button>
                    </div>
                    <ul className="text-lg md:text-4xl h-full font-medium font-text flex flex-col gap-1.5 md:gap-2.5 px-2 md:px-4 py-3.5 md:py-5">
                        {navElements.map((element, index) => (
                            <li
                                className={`last:border-b-0 py-1 px-1 md:px-4 whitespace-nowrap ${index === 6 ? 'mt-auto' : ''}`}
                                key={`nav_element_${element.name}`}
                            >
                                <a href="" className={`${location === element.name ? 'bg-accent' : ''} py-1 md:py-2 px-1.5 flex h-10 md:h-16 items-center gap-1.5 rounded-md`}>
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