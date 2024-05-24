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
import Link from "next/link";


const apiKey = process.env.NEXT_PUBLIC_API_KEY;


export default function Home() {

  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + apiKey,
      }
    };

    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => setPopularMovies(response.results))
      .catch(error => console.log(error))
  }, []);

  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + apiKey,
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
        Authorization: 'Bearer ' + apiKey,
      }
    };

    fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => setUpcomingMovies(response.results))
      .catch(error => console.log(error))
  }, []);

  const [search, setSearch] = useState()

  return (
    <>
      <Navbar setSearch={setSearch} />
      <HeroBanner background={popularMovies[0]} />
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
              {popularMovies.map((popularMovie, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="">
                    <Link href={`${popularMovie.id}`} movieId={popularMovie.id} className="text-white">
                      <Card className="bg-black">
                        <h2 className="font-semibold text-center mt-2 text-white">{index}</h2>
                        <CardContent className="flex aspect-square items-center justify-center p-6 ">
                          <img src={`https://image.tmdb.org/t/p/w500${popularMovie.poster_path}`} alt={`Affiche du film ${popularMovie.title}`} className="w-full h-full" />
                        </CardContent>
                        <h2 className="font-semibold text-center mb-2 text-white">Note : {popularMovie.vote_average}/10</h2>
                      </Card>
                      <h2 className="text-white font-semibold text-center mt-2 underline">{popularMovie.title}</h2>
                    </Link>
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
                  <Link href={`${topRatedMovie.id}`} movieId={topRatedMovie.id} className="text-white">
                      <Card className="bg-black">
                        <h2 className="font-semibold text-center mt-2 text-white">{index}</h2>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <img src={`https://image.tmdb.org/t/p/w500${topRatedMovie.poster_path}`} alt={`Affiche du film ${topRatedMovie.title}`} className="w-full h-full" />
                        </CardContent>
                        <h2 className="font-semibold text-center mb-2 text-white">Note : {topRatedMovie.vote_average}/10</h2>
                      </Card>
                      <h2 className="text-white font-semibold text-center mt-2 underline">{topRatedMovie.title}</h2>
                    </Link>
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
                  <Link href={`${upcomingMovie.id}`} movieId={upcomingMovie.id} className="text-white">
                      <Card className="bg-black">
                        <h2 className="font-semibold text-center mt-2 text-white">{index}</h2>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <img src={`https://image.tmdb.org/t/p/w500${upcomingMovie.poster_path}`} alt={`Affiche du film ${upcomingMovie.title}`} className="w-full h-full" />
                        </CardContent>
                        <h2 className="font-semibold text-center mb-2 text-white">Note : {upcomingMovie.vote_average}/10</h2>
                      </Card>
                    <h2 className="text-white font-semibold text-center mt-2 underline">{upcomingMovie.title}</h2>
                    </Link>
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


