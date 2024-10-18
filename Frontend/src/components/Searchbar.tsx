const Searchbar = () => {
    return (
        <div className="flex border border-primary rounded-full text-base overflow-hidden">
            <input
                type="text"
                className="p-1 w-full pl-3 outline-none placeholder-primary bg-background"
                placeholder="Search"
            />
            <button className="aspect-[1.25/1] h-8 bg-accent ml-auto bg-[url('/icons/search.svg')] bg-60% bg-center bg-no-repeat" />
        </div>

    )
}

export default Searchbar;