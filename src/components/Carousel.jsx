// components/TestimonialCarousel.jsx
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { AvatarDemo } from "./Avatar"

export function TestimonialCarousel({ testimonials }) {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    )

    // Helper function to render star rating
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating)
        const halfStar = rating % 1 !== 0
        const totalStars = 5

        return (
            <div className="text-yellow-500 text-lg mt-2">
                {Array.from({ length: fullStars }).map((_, i) => (
                    <span key={`full-${i}`}>⭐</span>
                ))}
                {halfStar && <span>⭐️</span>}
                {Array.from({ length: totalStars - fullStars - (halfStar ? 1 : 0) }).map((_, i) => (
                    <span key={`empty-${i}`} className="opacity-30">⭐</span>
                ))}
            </div>
        )
    }

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-3/4 min-h-60 flex items-center justify-center mx-auto"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {testimonials && testimonials.map((testimonial, index) => (
                    <CarouselItem key={index}>
                        <Card className="p-5">
                            <div className="flex flex-col md:flex-row items-center gap-4">
                                <div>

                                <div className="text-lg font-light px-4 leading-relaxed italic relative before:content-['“'] after:content-['”'] before:text-4xl after:text-4xl before:text-primary after:text-primary before:mr-1 after:ml-1 text-primary">
                                    {testimonial.quote}
                                </div>
                                    {renderStars(testimonial.rating)}
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <AvatarDemo className="h-24 w-24" img={testimonial.img} />
                                    <h1 className="text-xl dm-sans mt-2">{testimonial.name}</h1>
                                </div>
                            </div>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
