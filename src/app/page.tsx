"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedFeature, setSelectedFeature] = useState(1); // 0: Experience, 1: Simple process, 2: Personal touch
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const testimonials = [
    {
      text: "The leasing team was super helpful and responsive. Everything from the viewing to the keys was simple and stress-free.",
      author: "Sofia M"
    },
    {
      text: "Modern, and ready on day were all set up—I couldn't be happier with the service and apartment quality.",
      author: "Alex K"
    },
    {
      text: "Close to transit, perfect location for what I was looking for. It's a great place to call home.",
      author: "Maria L"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="min-h-screen text-neutral-900">
      {/* Navbar */}
      <header className="absolute inset-x-0 top-0 z-20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:py-5">
          <div className="flex items-center gap-2">
              <Image
                src="/images/logo-harbor-point.png"
                alt="Harbor Point Logo"
                width={150}
                height={90}
                className="brightness-150 object-contain w-[150px] h-[90px] sm:w-[200px] sm:h-[120px]"
              />
          </div>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-20 text-white/90">
            <li className="hover:text-white">Home</li>
            <li className="hover:text-white">Service</li>
            <li className="hover:text-white">About</li>
            <li className="hover:text-white">Contact Us</li>
          </ul>
          
          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-12">
            <button className="text-white/90 hover:text-white">Sign In</button>
            <button className="liquid-btn text-sm">Get Started</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 text-white"
            aria-label="Toggle mobile menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-white/20 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className="px-4 py-6 space-y-4">
            <ul className="space-y-4 text-white/90">
              <li className="hover:text-white text-lg">Home</li>
              <li className="hover:text-white text-lg">Service</li>
              <li className="hover:text-white text-lg">About</li>
              <li className="hover:text-white text-lg">Contact Us</li>
            </ul>
            <div className="pt-4 border-t border-white/20 space-y-3">
              <button className="w-full text-left text-white/90 hover:text-white text-lg">Sign In</button>
              <button className="w-full liquid-btn text-sm">Get Started</button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate min-h-screen">
        <Image
          src="/images/hero-image.jpg"
          alt="Modern minimalist building entrance"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
        <div className="absolute inset-0 z-10">
          <div className="pt-32 sm:pt-40 mx-auto max-w-7xl px-4 flex h-full flex-col justify-center">
            <h1 className="text-[40px] sm:text-4xl md:text-[48px] lg:text-[48px] xl:text-[48px] font-bold text-white leading-tight">
              Find your perfect apartment today
            </h1>
            <p className="mt-16 max-w-4xl text-white/90 text-sm sm:text-lg md:text-[28px] font-light leading-relaxed">
              Studios, 1–2 bedroom apartments with hotel-style amenities, walkable to
              transit, dining, and parks.
            </p>

            {/* Filters */}
                <div className="mt-6 sm:mt-16 w-full max-w-3xl rounded-md bg-black/30 backdrop-blur-md border border-white/20 shadow-lg p-3 sm:p-6">
                  <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-white/20">
              {[
                { label: "State", value: "Lagos, Ajah" },
                { label: "House Type", value: "Apartment" },
                { label: "Max Price", value: "$45,000" },
                    ].map((item, index) => (
                      <div key={item.label} className={`flex-1 px-3 sm:px-6 py-3 sm:py-0 ${index === 0 ? 'pl-0' : ''} ${index === 2 ? 'pr-0' : ''}`}>
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <p className="text-xs sm:text-sm font-semibold text-white">{item.label}</p>
                            <p className="text-sm sm:text-lg text-white/90">{item.value}</p>
                  </div>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 sm:h-5 sm:w-5 text-white ml-2">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                        </div>
                      </div>
                    ))}
                  </div>
            </div>

            {/* Stats */}
                <div className="mt-8 sm:mt-32 flex flex-col sm:flex-row gap-4 sm:gap-10 text-white/90">
              <div>
                    <p className="text-2xl sm:text-[32px] font-extralight">3000+</p>
                <p className="text-sm">Available properties</p>
              </div>
              <div>
                    <p className="text-2xl sm:text-[32px] font-extralight">5000+</p>
                <p className="text-sm">Satisfied customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-32">
            <div className="mb-4 sm:mb-6 flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Featured Apartments</h2>
              <div className="hidden sm:flex items-center gap-4 sm:gap-8">
                <button aria-label="previous" className="text-neutral-400 hover:text-neutral-600 transition-colors">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                  </svg>
                </button>
                <button aria-label="next" className="text-black hover:text-neutral-700 transition-colors">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
                  </svg>
                </button>
              </div>
            </div>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { price: "$2,800", city: "Montreal, Canada", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop", bedrooms: 2, bathrooms: 1, area: "850m" },
            { price: "$4,200", city: "Toronto, Canada", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop", bedrooms: 3, bathrooms: 2, area: "1200m" },
            { price: "$3,100", city: "Vancouver, Canada", img: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&h=600&fit=crop", bedrooms: 2, bathrooms: 2, area: "950m" },
          ].map((card, index) => (
            <article key={index} className="featured-appartmentcard-style overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md">
              <div className="relative aspect-[4/3]">
                <Image src={card.img} alt={card.city} fill className="object-cover" />
              </div>
              <div className="space-y-2 p-3 sm:p-4">
                <p className="text-lg sm:text-[22px] font-semibold">{card.price}</p>
                <p className="text-sm text-neutral-600">{card.city}</p>
                    <div className="mt-4 sm:mt-8 grid grid-cols-3 gap-2 sm:gap-3">
                      <div className="flex flex-col items-start">
                        <div className="flex items-center gap-1 sm:gap-2 mb-1">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 21v-4a2 2 0 012-2h4a2 2 0 012 2v4" />
                          </svg>
                          <p className="font-bold text-black text-xs sm:text-sm">{card.bedrooms}</p>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-500">Bedrooms</p>
                      </div>
                      <div className="flex flex-col items-start">
                        <div className="flex items-center gap-1 sm:gap-2 mb-1">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M10.5 3L12 2l1.5 1H21v6H3V3h7.5z" />
                          </svg>
                          <p className="font-bold text-black text-xs sm:text-sm">{card.bathrooms}</p>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-500">Bathrooms</p>
                      </div>
                      <div className="flex flex-col items-start">
                        <div className="flex items-center gap-1 sm:gap-2 mb-1">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h18v18H3V3zm2 2v14h14V5H5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 8h8v8H8V8z" />
                          </svg>
                          <p className="font-bold text-black text-xs sm:text-sm">{card.area}</p>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-500">Living Area</p>
                      </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-4 pb-32">
        <h3 className="text-[32px] font-bold text-center mb-16" style={{ color: '#474847' }}>Why Choose Us</h3>
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/images/w-c-u.png"
              alt="Modern glass balconies"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-8">
            <div 
              className={`cursor-pointer transition-all duration-200 p-6 ${
                selectedFeature === 0 
                  ? 'text-white shadow-xl' 
                  : 'hover:bg-neutral-50'
              }`}
              style={{ backgroundColor: selectedFeature === 0 ? '#474747' : 'transparent' }}
              onClick={() => setSelectedFeature(0)}
            >
              <p className="text-[24px] font-bold mb-3">Experience that matters</p>
              <p className={`text-[18px] ${selectedFeature === 0 ? 'text-white/90' : 'text-neutral-600'}`}>
                We know the rental market inside out, so you do not have to worry about the details.
              </p>
              </div>
            <div 
              className={`cursor-pointer transition-all duration-200 p-6 ${
                selectedFeature === 1 
                  ? 'text-white shadow-xl' 
                  : 'hover:bg-neutral-50'
              }`}
              style={{ backgroundColor: selectedFeature === 1 ? '#474747' : 'transparent' }}
              onClick={() => setSelectedFeature(1)}
            >
              <p className="text-[24px] font-bold mb-3">Simple process</p>
              <p className={`text-[18px] ${selectedFeature === 1 ? 'text-white/90' : 'text-neutral-600'}`}>
                Apply, move in, and feel at home—without complications.
              </p>
              </div>
            <div 
              className={`cursor-pointer transition-all duration-200 p-6 ${
                selectedFeature === 2 
                  ? 'text-white shadow-xl' 
                  : 'hover:bg-neutral-50'
              }`}
              style={{ backgroundColor: selectedFeature === 2 ? '#474747' : 'transparent' }}
              onClick={() => setSelectedFeature(2)}
            >
              <p className="text-[24px] font-bold mb-3">Personal touch</p>
              <p className={`text-[18px] ${selectedFeature === 2 ? 'text-white/90' : 'text-neutral-600'}`}>
                Every client gets dedicated attention to match them with the right home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative">
        <div className="relative h-[580px] w-full overflow-hidden">
          <Image
            src="/images/testimonials.png"
            alt="Bedroom with soft light"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          
              {/* Navigation Controls */}
              <button
                onClick={prevTestimonial}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black p-3 text-white hover:bg-black/80 transition-colors"
                aria-label="Previous testimonial"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black p-3 text-white hover:bg-black/80 transition-colors"
                aria-label="Next testimonial"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

          {/* Testimonials Carousel */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className="relative w-full max-w-7xl px-8">
               {/* Left Faded Review */}
               <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-1/4 text-white/30 text-[24px] pr-4 transition-all duration-500 ease-in-out">
                 <p className="text-right">
                   {testimonials[(currentTestimonial - 1 + testimonials.length) % testimonials.length].text}
                 </p>
               </div>

              {/* Center Active Review */}
              <div className="mx-auto max-w-2xl text-center text-white px-8">
                <h3 className="text-[36px] font-semibold mb-[56px]">Real stories from our community</h3>
                <div className="relative overflow-hidden">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                  >
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <p className="text-[24px] font-normal leading-relaxed mb-6">
                          {testimonial.text}
                        </p>
                        <div className="w-full h-px bg-white/40 mb-4"></div>
                        <p className="font-medium">— {testimonial.author}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

               {/* Right Faded Review */}
               <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-1/4 text-white/30 text-[24px] pl-4 transition-all duration-500 ease-in-out">
                 <p className="text-left">
                   {testimonials[(currentTestimonial + 1) % testimonials.length].text}
                 </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto max-w-7xl px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-[32px] font-bold" style={{ color: '#474847' }}>Frequently Asked Questions</h3>
          </div>
          
          <div className="space-y-4">
            {[
              {
                question: "How do I apply for an apartment?",
                answer: "Simply browse our available properties, select your preferred apartment, and fill out our online application form. Our team will review your application and get back to you within 24 hours."
              },
              {
                question: "What documents do I need to provide?",
                answer: "You'll need to provide a valid ID, proof of income (pay stubs or bank statements), and references from previous landlords. We may also require a credit check."
              },
              {
                question: "Are utilities included in the rent?",
                answer: "Most of our apartments include basic utilities like water and trash. Electricity and internet are typically the tenant's responsibility, though some properties may include these."
              },
              {
                question: "What is the lease term?",
                answer: "Our standard lease terms are 12 months, but we also offer flexible options including month-to-month and 6-month leases for qualified tenants."
              },
              {
                question: "Do you allow pets?",
                answer: "Yes! We're pet-friendly and welcome cats and dogs. There's a one-time pet fee and monthly pet rent. Breed restrictions may apply for certain dog breeds."
              },
              {
                question: "What amenities are available?",
                answer: "Our properties feature modern amenities including fitness centers, swimming pools, business centers, and outdoor spaces. Specific amenities vary by property location."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className={`border border-neutral-200 overflow-hidden transition-all duration-300 ${
                  openFAQ === index ? 'border-neutral-300' : 'hover:border-neutral-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between group transition-all duration-200"
                >
                  <h4 className="text-lg font-semibold text-neutral-900 pr-6 group-hover:text-blue-600 transition-colors">
                    {faq.question}
                  </h4>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openFAQ === index 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'bg-neutral-100 text-neutral-500 group-hover:bg-blue-50 group-hover:text-blue-600'
                  }`}>
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        openFAQ === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-6 pt-2">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 mb-4 rounded-full"></div>
                    <p className="text-neutral-600 leading-relaxed text-base">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
              </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <Image
                  src="/images/logo-harbor-point.png"
                  alt="Harbor Point Logo"
                  width={200}
                  height={100}
                  className="brightness-150 object-contain w-[200px] h-[100px]"
                />
              </div>
              <p className="text-neutral-300 mb-6 max-w-md">
                Your trusted partner in finding the perfect apartment. We make the rental process simple, transparent, and stress-free.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Services</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>

              {/* Bottom Bar */}
              <div className="border-t border-neutral-800 pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <p className="text-neutral-400 text-sm mb-4 md:mb-0">
        © {new Date().getFullYear()} Harbor Point. All rights reserved.
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
        </div>
      </footer>
    </div>
  );
}
