"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Girl from "../asset/testimonial/girl.jpg";
// Import your logo images here
import logo1 from "../asset/navbar/logos.png";

const testimonials = [
  {
    name: "Emma Thompson",
    image: Girl,
    feedback:
      "The courses here have been transformative. I've gained skills that I'm already applying in my internship. The instructors are top-notch and always available for support.",
  },
  {
    name: "Michael Chen",
    image: Girl,
    feedback:
      "I was skeptical about online learning, but this platform changed my mind. The interactive projects and peer collaborations made the experience engaging and practical.",
  },
  {
    name: "Sophia Rodriguez",
    image: Girl,
    feedback:
      "As a working professional, the flexibility of these courses was crucial. I could learn at my own pace, and the quality of content exceeded my expectations. Highly recommended!",
  },
];
const logos = [logo1, logo1, logo1, logo1];
export default function StudentTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    const intervalId = setInterval(nextTestimonial, 5000); // Change slide every 5 seconds
    return () => clearInterval(intervalId);
  }, [nextTestimonial]);

  return (
    <>
      <div className="min-h-screen bg-white p-8 flex items-center justify-center">
        <Card className="max-w-4xl w-full bg-gradient-to-br bg-white shadow-xl overflow-hidden">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              What Our Students Say
            </h2>
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="flex flex-col items-center text-center">
                        <div className="mb-4 relative">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={100}
                            height={100}
                            className="rounded-full border-4 border-white shadow-lg"
                          />
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br  opacity-30"></div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-600 italic">
                          &ldquo;{testimonial.feedback}&rdquo;
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-1/2 left-0 transform -translate-y-1/2 text-gray-800 hover:bg-white hover:bg-opacity-50"
                onClick={prevTestimonial}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-1/2 right-0 transform -translate-y-1/2 text-gray-800 hover:bg-white hover:bg-opacity-50"
                onClick={nextTestimonial}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex justify-center mt-4">
              {testimonials.map((_, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className={`mx-1 rounded-full ${
                    index === currentIndex ? "bg-yellow-300" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <span className="sr-only">{`Go to slide ${index + 1}`}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="w-full bg-green-100 py-4 px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center sm:justify-between items-center ">
          {logos.map((logo, index) => (
            <div key={index} className="w-1/2 sm:w-1/4 flex justify-center">
              <Image
                src={logo}
                alt={`Partner logo ${index + 1}`}
                width={120}
                height={100}
                objectFit="contain"
                className="max-w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
