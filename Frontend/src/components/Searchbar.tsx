// Icons
import SearchIcon from "./icons/default/SearchIcon.tsx";

const Searchbar = () => {
    return (
        <div className="flex border border-primary rounded-full text-base md:text-xl overflow-hidden">
            <input
                type="text"
                className="p-1 md:p-2 w-full pl-3 md:pl-6 outline-none placeholder-primary bg-background"
                placeholder="Search"
            />
            <button className="aspect-[1.25/1] h-8 md:h-11 bg-accent ml-auto pl-1.5 md:pl-2"> <SearchIcon height={'75%'}/></button>
        </div>

    )
}

export default Searchbar;