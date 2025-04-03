"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

const testimonials = [
  {
    name: "Adriana",
    thumbnail: "/testimonials/adriana.jpg",
  },
  {
    name: "Marcela",
    thumbnail: "/testimonials/marcela.jpg",
  },
  {
    name: "Rocío",
    thumbnail: "/testimonials/rocio.jpg",
  },
  {
    name: "Mirita",
    thumbnail: "/testimonials/mirita.jpg",
  },
]

export default function Community() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="community" className="bg-[#a1bcc9] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-clash-700 text-[#00314b] mb-4">@bodylinenqn</h2>
          <p className="text-xl font-clash-400 text-gray-700">Estar sano es posible solo hay que unir varias patas</p>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg"
            aria-label="Anterior testimonio"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="overflow-hidden">
            <div className="flex flex-nowrap transition-transform duration-500 ease-in-out gap-4">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className={`flex-shrink-0 w-full md:w-1/2 lg:w-1/4 transform transition-all duration-500 ${
                    index === currentSlide ? "scale-100 opacity-100" : "scale-95 opacity-70"
                  }`}
                >
                  <div className="relative aspect-[9/16]">
                    <img
                      src={testimonial.thumbnail || "/placeholder.svg?height=400&width=225"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="bg-white/80 rounded-full p-4">
                        <Play className="h-8 w-8 text-[#00314b]" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <h3 className="text-2xl font-clash-600 text-white">{testimonial.name}</h3>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <Button
            variant="outline"
            className="bg-white"
            onClick={() => window.open("https://instagram.com/bodylinenqn", "_blank")}
          >
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              Instagram
            </span>
          </Button>
          <Button
            variant="outline"
            className="bg-white"
            onClick={() => window.open("https://linkedin.com/company/bodyline", "_blank")}
          >
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              LinkedIn
            </span>
          </Button>
          <Button
            variant="outline"
            className="bg-white"
            onClick={() => window.open("https://youtube.com/@bodyline", "_blank")}
          >
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
              YouTube
            </span>
          </Button>
        </div>
      </div>
    </section>
  )
}

