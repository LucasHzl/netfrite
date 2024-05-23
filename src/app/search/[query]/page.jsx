"use client"

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';


const SearchPage = () => {
    const { query } = useParams();
    const [searchResults, setSearchResults] = useState([]);

    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const [movie, setMovie] = useState(null);


    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer ' + apiKey,
            }
        };

        fetch(`https://api.themoviedb.org/3/search/movie?query=${query}`, options)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setSearchResults(data.results);
            })
            .catch(error => console.log(error));
    }, [apiKey, query]);

    return (
        <div>
            <h1 className='text-white'>{`résultat de la recherche pour ${query}`}</h1>
            <div>
                {searchResults.map((movie) => (
                    <div key={movie.id}>
                        <h2>{movie.title}</h2>
                        <p>{movie.overview}</p>
                        <Link href={`/movie/${movie.id}`}>
                            <Image
                                src={`https://www.themoviedb.org/t/p/original${movie.poster_path}`}
                                alt={movie.title}
                                width={200}
                                height={400}
                            />
                        </Link>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default SearchPage;