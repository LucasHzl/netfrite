"use client"

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
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
                //console.log(data);
                setMovieDetail(data);
            })
            .catch(error => console.log(error));
    }, [apiKey, props.params.movieId]);

    const handleSearch = () => {

    };

    return (
        <>
            <Navbar />
            <div className="h-screen w-screen flex flex-col mb-12">
                {movieDetail && (
                    <div className="text-white mb-12 border">
                        <div className="text-white flex">
                            <img className="ml-8 mt-8 mb-8" src={`https://www.themoviedb.org/t/p/w500${movieDetail.poster_path}`} alt="" />
                            <div>
                                <p className="mt-8">Note : {movieDetail.vote_average}/10</p>
                                <p className="mt-8">Nombre d'avis : {movieDetail.vote_count}</p>
                            </div>
                        </div>
                        <h2 className="ml-8 mb-8 text-xl">{movieDetail.title}</h2>
                        <p className="ml-8 text-lg">{movieDetail.overview}</p>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}
