import { useState } from "react"

const Navbar = () => {
    // Nav bar status
    const [menuActive, setMenuActive] = useState<Boolean>(false)

    const navElements: string[] = ['Dashboard', 'Adoptation', 'Inventory', 'Caterogies', 'Suppliers', 'Notifications', "Support", "Settings"]

    return (
        <nav
            className="sticky top-0"
            data-active={menuActive}
        >
            <div className="flex justify-between p-4">
                <button
                    className="aspect-square h-7 bg-[url('/icons/nav_menu.svg')] bg-cover bg-center"
                    onClick={() => { setMenuActive(!menuActive) }}
                ></button>
                <h1 className="font-title text-xl font-semibold">SnuggleStop</h1>
                <button className="aspect-square h-7 bg-[url('/icons/search.svg')] bg-cover bg-center"></button>
            </div>

            <section className={`${menuActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} bg-black bg-opacity-15 min-h-screen min-w-full fixed top-0 transition-all duration-200`}>
                <div className={`${menuActive ? 'w-10/12' : 'w-0'} h-screen bg-primary px-2 transition-all duration-300`}>
                    <div className="flex justify-between px-2 py-4 border-b border-b-text border-opacity-15">
                        <h1 className="font-title text-2xl font-semibold">SnuggleStop</h1>
                        <button
                            className="aspect-square h-7 bg-[url('/icons/cancel.svg')] bg-cover bg-center justify-end"
                            onClick={() => { setMenuActive(!menuActive) }}
                        ></button>
                    </div>
                    <ul className="text-xl font-medium font-text flex flex-col gap-2">
                        {navElements.map(element => (
                            <li className="first:pt-4 last:border-b-0 py-1 px-1 whitespace-nowrap">
                                <a href="" className="py-1 px-1 flex">{element}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </nav>
    )
}

export default Navbar;

