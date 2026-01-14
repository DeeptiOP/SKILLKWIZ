"use client";
import Image from "next/image";
import { useState } from "react";

export default function BlogPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showThankYou, setShowThankYou] = useState(false);

  const indicatorClasses = (index: number) =>
    `h-1.5 rounded-full transition-all duration-300 ${
      hoveredIndex === index ? "w-64 bg-[#00418d]" : "w-24 bg-[#c3dfff]"
    }`;

  const blogPosts = [
    {
      img: "/images/blogpage/1.png",
      title: "The Importance of Upskilling in Today's Job Market",
      subtitle: "Why Upskilling Matters in 2025",
    },
    {
      img: "/images/blogpage/2.png",
      title: "How Gamified Learning Enhances Skill Retention",
      subtitle: "The Psychology Behind Gamification",
    },
    {
      img: "/images/blogpage/3.png",
      title: "Soft Skills vs. Hard Skills: What Matters More?",
      subtitle: "The Difference Between Soft and Hard Skills",
    },
  ];

  return (
    <>
      <section className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">

          {/* Hero Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">
              Mastering Knowledge & Growth
            </h2>
            <p className="text-center max-w-3xl mx-auto mb-8">
              In a world of constant change, continuous learning is the key to
              success...
            </p>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mb-10">
              {blogPosts.map((_, index) => (
                <div key={index} className={indicatorClasses(index)} />
              ))}
            </div>

            {/* Featured Blog Posts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className="flex flex-col group cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative mb-4 overflow-hidden">
                    <Image
                      src={post.img}
                      alt={post.title}
                      width={380}
                      height={240}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-1">{post.title}</h3>
                  <a
                    href="/dummy-report.pdf"
                    download
                    onClick={() => setShowThankYou(true)}
                    className="text-sm text-[#00418d] font-medium underline"
                  >
                    Why Upskilling Matters in 2025
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Blog Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="flex flex-col h-full">
              <div className="relative h-60 mb-4">
                <Image
                  src="/images/blogpage/4.png"
                  alt="Tech skills"
                  width={580}
                  height={240}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Top 10 Tech Skills That Can Land You a High-Paying Job
              </h3>
              <a
                href="/dummy-report.pdf"
                download
                onClick={() => setShowThankYou(true)}
                className="text-sm text-[#00418d] underline"
              >
                Why Tech Skills Are Essential in 2025
              </a>
            </div>

            <div className="flex flex-col h-full">
              <div className="relative h-60 mb-4">
                <Image
                  src="/images/blogpage/5.png"
                  alt="Learning motivation"
                  width={580}
                  height={240}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">
                How to Stay Motivated While Learning New Skills
              </h3>
              <a
                href="/dummy-report.pdf"
                download
                onClick={() => setShowThankYou(true)}
                className="text-sm text-[#00418d] underline"
              >
                Why Motivation Is Key to Skill Development
              </a>
            </div>
          </div>

          {/* Knowledge Articles */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">
              Mastering Knowledge & Growth
            </h2>
            <p className="max-w-4xl mb-12">
              Knowledge is the foundation of growth. Embrace new ideas, sharpen
              your skills, and stay inspired with insights that empower you to
              achieve more in both your personal and professional journey.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[6, 7, 8, 1, 4, 2].map((num, idx) => (
                <div key={idx} className="flex gap-4 mb-6">
                  <div className="w-24 h-24 flex-shrink-0">
                    <Image
                      src={`/images/blogpage/${num}.png`}
                      alt="Knowledge"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      Trends to Watch in 2025
                    </p>
                    <h3 className="text-lg font-bold">
                      {num === 6 && "The Future of Online Learning"}
                      {num === 7 && "5 Essential Skills to Boost Your Career in 2025"}
                      {num === 8 && "How Gamification Enhances Learning & Engagement"}
                      {num === 1 && "5 Essential Skills to Boost Your Career in 2025"}
                      {num === 4 && "The Power of Microlearning"}
                      {num === 2 && "Revolutionizing the Way We Learn"}
                    </h3>
                    <a
                      href="/dummy-report.pdf"
                      download
                      onClick={() => setShowThankYou(true)}
                      className="text-sm text-[#00418d] underline"
                    >
                      view
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Popup */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-80 text-center">
            <h3 className="text-lg font-bold mb-2">Thank you</h3>
            <p className="text-sm text-gray-600 mb-4">
              Your file has been downloaded successfully.
            </p>
            <button
              onClick={() => setShowThankYou(false)}
              className="px-6 py-2 bg-[#00418d] text-white rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
