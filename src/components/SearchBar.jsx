import React, { useRef, useState, useContext, useEffect } from "react";


function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const searchInputRef = useRef(null);

    useEffect(() => {
        searchInputRef.current.focus();
    }, []);

    const handleSearch = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                ref={searchInputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search games..."
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchBar;