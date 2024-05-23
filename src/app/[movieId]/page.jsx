"use client"

import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

export default function Detail(props) {

    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const [movieDetail, setMovieDetail] = useState(null);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer ' + apiKey,
            }
        };

        fetch(`https://api.themoviedb.org/3/movie/${props.params.movieId}`, options)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setMovieDetail(data);
            })
            .catch(error => console.log(error));
    }, [apiKey, props.params.movieId]);

    const handleSearch = () => {

    };

    return (
        <>
            <Navbar setSearch={setSearch} />
            <button className="h-12 w-8 text-white" onClick={handleSearch}>Rechercher</button>
            {movieDetail && (
                <div className="text-white">
                    <h1>{movieDetail.title}</h1>
                    <p>{movieDetail.overview}</p>
                </div>
            )}
            <p>{props.params.movieId}</p>
        </>
    );
}
