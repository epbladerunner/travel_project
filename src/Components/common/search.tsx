import React, { useState } from "react";

export const SearchBar: React.FC = () => {
    const [query, setQuery] = useState('')

    const handleSearch = () => {
        console.log('Searching for: ${query}');

    }

    return (
        <div>
            <input 
            type='text'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Look Something Up..."
        />
        <button
            onClick={handleSearch}>Search</button>
        </div>
    );

};

