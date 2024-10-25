// Icons
import DashboardIcon from "./icons/fillable/DashboardIcon.tsx"
import PetIcon from "./icons/fillable/PetIcon.tsx"
import InventoryIcon from "./icons/fillable/InventoryIcon.tsx"
import SupplierIcon from "./icons/fillable/SupplierIcon.tsx"

// Interface
interface TabbarProps {
    location: string;
}

// Default icon sizes
const BASE_ICON_SIZE = 55;

const Tabbar: React.FC<TabbarProps> = ({location}) => {
    return (
        <nav className="bg-background border-t border-t-primary border-opacity-75 h-[8%] w-full fixed bottom-0 flex">
            <button className="h-full w-full flex justify-center items-center hover:scale-[1.125] transition-all duration-200 ease-in-out">
                <DashboardIcon height={`${BASE_ICON_SIZE}%`} isFilled={location === 'Dashboard'}/>
            </button>
            <button className="h-full w-full flex justify-center items-center hover:scale-[1.125] transition-all duration-200 ease-in-out">
                <PetIcon height={`${BASE_ICON_SIZE}%`} isFilled={location === 'Pets'}/>
            </button>
            <button className="h-full w-full flex justify-center items-center hover:scale-[1.125] transition-all duration-200 ease-in-out">
                <InventoryIcon height={`${BASE_ICON_SIZE}%`} isFilled={location === 'Inventory'} />
            </button>
            <button className="h-full w-full flex justify-center items-center hover:scale-[1.125] transition-all duration-200 ease-in-out">
                <SupplierIcon height={`${BASE_ICON_SIZE + 10}%`} isFilled={location === 'Suppliers'}/>
            </button>
        </nav>
    )
}

export default Tabbar

