"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

import AuthenticateSkillsSection from "@/components/authenticate-skills-section";
import WhyChooseSection from "@/components/why-choose-section";
import TestimonialsSection from "@/components/testimonials-section";
import LoginSection from "@/components/login-section";

const NAVBAR_HEIGHT = 96; // must match navbar height

// Custom arrow components
function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
      aria-label="Next slide"
    >
      <ChevronRight className="h-6 w-6 text-[#00418d]" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
      aria-label="Previous slide"
    >
      <ChevronLeft className="h-6 w-6 text-[#00418d]" />
    </button>
  );
}

export default function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const slideHeight = `calc(100vh - ${NAVBAR_HEIGHT}px)`;

  return (
    <main className="bg-white">
      {/* HERO SLIDER */}
      <section style={{ height: slideHeight }}>
        <Slider {...settings}>
          {/* SLIDE 1 */}
          <div>
            <div className="relative w-full" style={{ height: slideHeight }}>
              <Image
                src="/images/homepage/Carousel/Drivers License.jpg"
                alt="Skill Assessment"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute left-10 top-1/3">
                <h1
                  className="text-5xl md:text-5xl font-extrabold bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #2b6cb0, #a3b82f, #ecc94b)",
                  }}
                >
                  Skill Assessment
                </h1>
              </div>
            </div>
          </div>

          {/* SLIDE 2 */}
          <div>
            <div className="relative w-full" style={{ height: slideHeight }}>
              <Image
                src="/images/homepage/Carousel/Pick - Laptop.jpg"
                alt="Quiz Excellence"
                fill
                className="object-cover"
              />
              <div className="absolute left-10 top-1/3 flex space-x-2">
                <h1
                  className="text-4xl md:text-4xl font-extrabold bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #2b6cb0, #a3b82f, #ecc94b)",
                  }}
                >
                  Quiz Excellence
                </h1>
              </div>
            </div>
          </div>

          {/* SLIDE 3 */}
          <div>
            <div className="relative w-full" style={{ height: slideHeight }}>
              <Image
                src="/images/homepage/Carousel/Secure Center.jpg"
                alt="Learning Journey"
                fill
                className="object-cover"
              />
              <div className="absolute left-10 top-1/4">
                <h1
                  className="text-4xl md:text-4xl font-extrabold bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #2b6cb0, #a3b82f, #ecc94b)",
                  }}
                >
                  Learning Journey
                </h1>
              </div>
            </div>
          </div>

          {/* SLIDE 4 */}
          <div>
            <div className="relative w-full" style={{ height: slideHeight }}>
              <Image
                src="/images/homepage/Carousel/Skill Library.jpg"
                alt="Hiring Simplified"
                fill
                className="object-cover"
              />
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h1
                  className="text-4xl md:text-4xl font-extrabold bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #2b6cb0, #a3b82f, #ecc94b)",
                  }}
                >
                  Hiring Simplified
                </h1>
              </div>
            </div>
          </div>
        </Slider>
      </section>

      {/* REST OF PAGE */}
      <AuthenticateSkillsSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <LoginSection />
    </main>
  );
}
