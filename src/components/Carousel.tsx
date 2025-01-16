






 import * as React from "react";

 import { Card, CardContent } from "@/components/ui/card";
 import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
 } from "@/components/ui/carousel";


  const data = [
    {
      title: "Promotional landing page for our favorite show",
      description:
        "Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.",
      year: 2023,
      role: "Front-end Developer",
      image: "/images/project.png",
    },
  ];

 export function CarouselOrientation() {
   return (
     <div className=" ">
       <Carousel
         opts={{
           align: "start",
         }}
         orientation="horizontal"
         className="w-full max-w-xl mx-auto"
       >
         <CarouselContent className="-mt-1 h-[200px]">
           {Array.from({ length: 5 }).map((_, index) => (
             <CarouselItem key={index} className="pt-1 md:basis-1/2">
               <div className="p-1">
                 <Card>
                   <CardContent className="flex items-center justify-center p-6">
                     
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
   );
 }




