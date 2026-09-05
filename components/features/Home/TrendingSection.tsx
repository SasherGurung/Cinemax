import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

function TrendingSection() {
  return (
    <div className="m-5">
      <h1 className="text-2xl font-semibold">Trending Now</h1>
      <p></p>
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    src="/images/cinemax.png"
                    alt="Logo"
                    height={900}
                    width={900}
                    className=""
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default TrendingSection;
