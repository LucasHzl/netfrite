"use client"

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
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

export default function popular() {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

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

    return(
        <>
        <Navbar />
        <div className="flex justify-center items-center mt-12 flex-col h-screen">
          <h2 className="text-white mb-4 text-2xl">Catégorie : Films les mieux notés</h2>
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
        <Footer className="flex-grow"/>
        </>
    )
}

