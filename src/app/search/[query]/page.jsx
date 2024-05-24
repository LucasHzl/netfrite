"use client"

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



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
        <>
            <Navbar />
            <div className='pb-12'>
                <h1 className='text-white ml-8 mb-12 mt-12 text-xl'>{`Résultats de la recherche pour ${query} :`}</h1>
                <div className='flex justify-center w-screen item-center flex-col g-2'>
                    {searchResults.map((movie) => (
                        <div className='flex justify-center border flex-col items-center g-2 rounded-lg p-4 m-16' key={movie.id}>
                                <h2 className='text-white mb-4'>{movie.title}</h2>
                                <Link href={`http://localhost:3000/${movie.id}`}>
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
            <Footer />
        </>
    );
};

export default SearchPage;