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
            <div className="min-h-screen w-full mb-12 mt-4 px-4 sm:px-8">
  {movieDetail && (
    <div className="text-white mb-12 mt-10 flex flex-col sm:flex-row">
      <img
        className="mb-8 sm:ml-8 sm:mb-0 sm:w-1/3"
        src={`https://www.themoviedb.org/t/p/w500${movieDetail.poster_path}`}
        alt=""
      />
      <div className="text-white flex flex-col justify-center items-start sm:ml-8 sm:mr-16 space-y-4 sm:space-y-8">
        <h2 className="text-xl sm:text-2xl">{movieDetail.title}</h2>
        <p className="mt-4 sm:mt-8">Date de sortie : {movieDetail.release_date}</p>
        <p className="mt-4 sm:mt-8">Note : {movieDetail.vote_average}/10</p>
        <p className="mt-4 sm:mt-8">Nombre d'avis : {movieDetail.vote_count}</p>
        <p className="mt-4 sm:mt-8 text-lg sm:text-xl">Description : {movieDetail.overview}</p>
      </div>
    </div>
  )}
</div>

            <Footer />
        </>
    );
}
