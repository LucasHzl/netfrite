"use client"

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useEffect, useState } from "react";


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import HeroBanner from "@/components/HeroBanner";
import Footer from "@/components/Footer";




export default function Home() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzhhYTY5NGI2MDY4NGU2OWI3NGI3Y2QzYTIzNGQ1NiIsInN1YiI6IjY2NDRhM2JkMjMzNThiMWE5NDNhYmY1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p0hvR017eD41XRdyfDaQeTSmkVczKBsOHP2-_6M6V2k'
      }
    };

    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => setMovies(response.results))
      .catch(error => console.log(error))
  }, []);

  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzhhYTY5NGI2MDY4NGU2OWI3NGI3Y2QzYTIzNGQ1NiIsInN1YiI6IjY2NDRhM2JkMjMzNThiMWE5NDNhYmY1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p0hvR017eD41XRdyfDaQeTSmkVczKBsOHP2-_6M6V2k'
      }
    };

    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => setTopRatedMovies(response.results))
      .catch(error => console.log(error))
  }, []);


  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzhhYTY5NGI2MDY4NGU2OWI3NGI3Y2QzYTIzNGQ1NiIsInN1YiI6IjY2NDRhM2JkMjMzNThiMWE5NDNhYmY1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p0hvR017eD41XRdyfDaQeTSmkVczKBsOHP2-_6M6V2k'
      }
    };

    fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => setUpcomingMovies(response.results))
      .catch(error => console.log(error))
  }, []);

  return (
    <>
      <Navbar />
      <HeroBanner background = { movies[0] }/>
      <main>
      <div className="flex justify-center items-center mt-12 flex-col">
          <h2 className="text-white mb-4 text-2xl">Les plus populaires</h2>
          <Carousel
            opts={{
              align: "center",
            }}
            className="w-full max-w-lg"
          >
            <CarouselContent>
              {movies.map((movie, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="">
                    <Card>
                    <h2 className="font-semibold text-center mt-2">{index}</h2>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Affiche du film ${movie.title}`} className="w-full h-full"/>
                      </CardContent>
                      <h2 className="font-semibold text-center mb-2">Note : {movie.vote_average}/10</h2>
                    </Card>
                      <h2 className="text-white font-semibold text-center mt-2 underline">{movie.title}</h2>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="flex justify-center items-center mt-12 flex-col">
          <h2 className="text-white mb-4 text-2xl">Les mieux notés</h2>
          <Carousel
            opts={{
              align: "center",
            }}
            className="w-full max-w-lg"
          >
            <CarouselContent>
              {topRatedMovies.map((topRatedMovie, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="">
                    <Card>
                    <h2 className="font-semibold text-center mt-2">{index}</h2>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <img src={`https://image.tmdb.org/t/p/w500${topRatedMovie.poster_path}`} alt={`Affiche du film ${topRatedMovie.title}`} className="w-full h-full"/>
                      </CardContent>
                      <h2 className="font-semibold text-center mb-2">Note : {topRatedMovie.vote_average}/10</h2>
                    </Card>
                      <h2 className="text-white font-semibold text-center mt-2 underline">{topRatedMovie.title}</h2>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="flex justify-center items-center mt-12 mb-12 flex-col">
          <h2 className="text-white mb-4 text-2xl">À venir</h2>
          <Carousel
            opts={{
              align: "center",
            }}
            className="w-full max-w-lg"
          >
            <CarouselContent>
              {upcomingMovies.map((upcomingMovie, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="">
                    <Card>
                    <h2 className="font-semibold text-center mt-2">{index}</h2>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <img src={`https://image.tmdb.org/t/p/w500${upcomingMovie.poster_path}`} alt={`Affiche du film ${upcomingMovie.title}`} className="w-full h-full"/>
                      </CardContent>
                      <h2 className="font-semibold text-center mb-2">Note : {upcomingMovie.vote_average}/10</h2>
                    </Card>
                      <h2 className="text-white font-semibold text-center mt-2 underline">{upcomingMovie.title}</h2>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </main>
      <Footer />
    </>
  );
}


// document.addEventListener("DOMContentLoaded", function() {
//   let pokemonApiUrl = "https://pokeapi.co/api/v2/pokemon/?offset=&limit=1302";

//   function fetchPokemon(pokemonApiUrl) {
//       fetch(pokemonApiUrl)
//       .then(response => response.json())
//       .then(response => {
//           response.results.forEach(element => {

//               let newButton = document.createElement("button");
//               newButton.setAttribute("id", "pokemonButton")
//               newButton.textContent = element.name;

//               let pokemonList = document.getElementById("pokemonList");
//               pokemonList.appendChild(newButton);

//               newButton.addEventListener("click", showInfo(element.url));

//               function showInfo(url) {
//                   console.log(url);
//               }
//           });
//       })
//       .catch(error => alert("Erreur : " + error))
//   };

//   fetchPokemon(pokemonApiUrl);
// });



// function popularMovies() {

//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzhhYTY5NGI2MDY4NGU2OWI3NGI3Y2QzYTIzNGQ1NiIsInN1YiI6IjY2NDRhM2JkMjMzNThiMWE5NDNhYmY1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p0hvR017eD41XRdyfDaQeTSmkVczKBsOHP2-_6M6V2k'
//     }
//   };

//   fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
//     .then(response => response.json())
//     .then(response => response.results.forEach(element => {
//       console.log(element.original_title);
//     }))
//     .catch(err => console.error(err));

// }

// popularMovies();


