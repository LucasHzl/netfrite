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

  // console.log(movies);
  movies.forEach(element => {
    console.log(element.title);
  });

  Object.entries(movies).forEach(([key, value]) => {
    console.log(key);
    console.log(value.title);
  });

  return (
    <>
      <Navbar />
      <HeroBanner />

      <main>
      <div className="flex justify-center items-center mt-12 flex-col">
          <h2 className="text-white">Les mieux notés</h2>
          <Carousel
            opts={{
              align: "center",
            }}
            className="w-full max-w-lg"
          >
            <CarouselContent>
              {movies.map((movie, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl font-semibold">{movie.title}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="flex justify-center items-center mt-12 flex-col">
          <h2 className="text-white">Les mieux notés</h2>
          <Carousel
            opts={{
              align: "center",
            }}
            className="w-full max-w-lg"
          >
            <CarouselContent>
              {movies.map((movie, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl font-semibold">{movie.title}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="flex justify-center items-center mt-12 mb-16 flex-col">
          <h2 className="text-white">Prochaines sorties</h2>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-lg"
          >
            <CarouselContent>
              {Array.from({ length: 20 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl font-semibold">{index + 1}</span>
                      </CardContent>
                    </Card>
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


