// Icons
import SearchIcon from "./icons/SearchIcon.tsx";

const Searchbar = () => {
    return (
        <div className="flex border border-primary rounded-full text-base overflow-hidden">
            <input
                type="text"
                className="p-1 w-full pl-3 outline-none placeholder-primary bg-background"
                placeholder="Search"
            />
            <button className="aspect-[1.25/1] h-8 bg-accent ml-auto pl-1.5"> <SearchIcon height={'75%'}/></button>
        </div>

    )
}

export default Searchbar;