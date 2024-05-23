"use client"


import React, { useState } from 'react';
import Link from 'next/link';


const SearchBar = () => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };



    <input onChange={(event) => {
        props.setSearch(event.target.value)
      }} class="outline-none" type="search" id="search" placeholder="Rechercher" />

    return (
        <div className="flex flex-col sm:flex-row items-center justify-center mt-2 mb-2 space-y-2 sm:space-y-0 sm:space-x-2">
            <input
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500 w-full sm:w-auto"
                type="text"
                placeholder="Rechercher un film..."
                value={query}
                onChange={handleInputChange}
            />
            <Link href={`/search/${encodeURIComponent(query)}`}>
                <button className="bg-red-600 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-red-800 focus:outline-none focus:bg-blue-600 w-full sm:w-auto">
                    Rechercher
                </button>
            </Link>
        </div>
    );
};

export default SearchBar;