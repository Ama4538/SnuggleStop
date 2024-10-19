import { useState } from "react"
// Icons
import NotificationsIcon from "./icons/NotificationIcon.tsx";
import NavMenuIcon from "./icons/NavMenuIcon.tsx";
import CancelIcon from "./icons/CancelIcon.tsx";

interface NavbarProps {
    location: string;
}

const user = 'admin';

const Navbar: React.FC<NavbarProps> = ({ location }) => {
    // Nav bar status
    const [menuActive, setMenuActive] = useState<Boolean>(false)

    const navElements: string[] = ['Dashboard', 'Pets', 'Adopters', 'Inventory', 'Caterogies', 'Suppliers', "Support", "Settings"]

    return (
        <nav
            className="sticky top-0 px-4 pt-3 pb-0 z-50"
        >
            <div className="flex justify-between items-center">
                <button
                    className="aspect-square h-7"
                    onClick={() => { setMenuActive(!menuActive) }}
                ><NavMenuIcon height='100%' /> </button>
                <h1 className="font-title text-2xl font-semibold">{location}</h1>
                <button className="aspect-square h-7"> <NotificationsIcon height='100%' /> </button>
            </div>

            <section className={`${menuActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} bg-black bg-opacity-15 min-h-screen min-w-full fixed top-0 left-0 transition-all duration-200`}>
                <div
                    className={`${menuActive ? 'translate-x-0' : '-translate-x-full'} w-10/12 h-screen bg-background transition-all duration-300 fixed left-0 flex flex-col`}
                >
                    <div
                        className="grid grid-rows-2 items-center px-2 pr-3.5 py-3.5 border-b border-b-text border-opacity-15 bg-primary"
                        style={{ gridTemplateColumns: '0.50fr 1.10fr 0.20fr' }}
                    >
                        <img
                            className="bg-white h-full row-span-2 aspect-square rounded-full ml-auto mr-auto"
                        />
                        <h1 className="font-title text-2xl font-semibold text-background col-start-2 ">SnuggleStop</h1>
                        <p className="font-title text-lg text-background col-start-2 capitalize flex mb-auto">{user}</p>
                        <button
                            className="aspect-square h-5/6 ml-auto mr-1 row-start-1 col-start-3"
                            onClick={() => { setMenuActive(!menuActive) }}
                        > <CancelIcon height='100%' fill='#fffeff' /></button>
                    </div>
                    <ul className="text-xl h-full font-medium font-text flex flex-col gap-1 px-2 py-3.5">
                        {navElements.map((element, index) => (
                            <li
                                className={`last:border-b-0 py-1 px-1 whitespace-nowrap ${index === 6 ? 'mt-auto' : ''}`}
                                key={`nav_element_${element}`}
                            >
                                <a href="" className={`${location.toLocaleLowerCase() === element.toLocaleLowerCase() ? 'bg-black bg-opacity-10 rounded-md' : ''} py-1 px-1 flex`}>{element}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </nav>
    )
}

export default Navbar;

