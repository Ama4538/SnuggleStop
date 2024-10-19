// Icons
import DashboardIcon from "./icons/DashboardIcon.tsx"
import PetIcon from "./icons/PetIcon.tsx"
import InventoryIcon from "./icons/InventoryIcon.tsx"
import SupplierIcon from "./icons/SupplierIcon.tsx"

interface TabbarProps {
    location: string;
}

const BASE_ICON_SIZE = 55;

const Tabbar: React.FC<TabbarProps> = ({location}) => {
    return (
        <nav className="bg-background border-t border-t-primary h-[8%] w-full fixed bottom-0 flex">
            <button className="h-full w-full flex justify-center items-center hover:scale-[1.125] transition-all duration-200 ease-in-out">
                <DashboardIcon height={`${BASE_ICON_SIZE}%`} fill={location === 'Dashboard' ? '#589a81' : 'none'}/>
            </button>
            <button className="h-full w-full flex justify-center items-center hover:scale-[1.125] transition-all duration-200 ease-in-out">
                <PetIcon height={`${BASE_ICON_SIZE}%`} fill={location === 'Pets' ? '#589a81' : 'none'}/>
            </button>
            <button className="h-full w-full flex justify-center items-center hover:scale-[1.125] transition-all duration-200 ease-in-out">
                <InventoryIcon height={`${BASE_ICON_SIZE}%`} fill={location === 'Inventory' ? '#589a81' : 'none'} strokeWidth={location === 'Inventory' ? '0' : '2.5'} />
            </button>
            <button className="h-full w-full flex justify-center items-center hover:scale-[1.125] transition-all duration-200 ease-in-out">
                <SupplierIcon height={`${BASE_ICON_SIZE + 10}%`} fill={location === 'Suppliers' ? '#589a81' : 'none'}/>
            </button>
        </nav>
    )
}

export default Tabbar

