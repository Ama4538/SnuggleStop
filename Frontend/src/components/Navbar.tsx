import { useState } from "react"

interface NavbarProps {
    location: string;
}

const Navbar: React.FC<NavbarProps> = ({location}) => {
    // Nav bar status
    const [menuActive, setMenuActive] = useState<Boolean>(false)

    const navElements: string[] = ['Dashboard', 'Adoptation', 'Inventory', 'Caterogies', 'Suppliers', 'Notifications', "Support", "Settings"]

    return (
        <nav
            className="sticky top-0 px-4 pt-3 pb-0"
            data-active={menuActive}
        >
            <div className="flex justify-between items-center">
                <button
                    className="aspect-square h-7 bg-[url('/icons/nav_menu.svg')] bg-cover bg-center"
                    onClick={() => { setMenuActive(!menuActive) }}
                />
                <h1 className="font-title text-2xl font-semibold">{location}</h1>
                <button className="aspect-square h-7 bg-[url('/icons/notification.svg')] bg-cover bg-center"/>
            </div>

            <section className={`${menuActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} bg-black bg-opacity-15 min-h-screen min-w-full fixed top-0 transition-all duration-200`}>
                <div className={`${menuActive ? 'w-10/12' : 'w-0'} h-screen bg-primary px-2 transition-all duration-300 fixed left-0`}>
                    <div className="flex justify-between px-2 py-3.5 border-b border-b-text border-opacity-15">
                        <h1 className="font-title text-2xl font-semibold">SnuggleStop</h1>
                        <button
                            className="aspect-square h-7 bg-[url('/icons/cancel.svg')] bg-cover bg-center justify-end"
                            onClick={() => { setMenuActive(!menuActive) }}
                        />
                    </div>
                    <ul className="text-xl font-medium font-text flex flex-col gap-2">
                        {navElements.map(element => (
                            <li 
                            className="first:pt-4 last:border-b-0 py-1 px-1 whitespace-nowrap"
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

