"use client";

import Image from "next/image";
import { useLocomotiveScroll } from "./LocomotiveScroll";

export default function Home() {
  const { scrollRef } = useLocomotiveScroll();

  return (
    <div ref={scrollRef} data-scroll-container>
      <header className="sticky top-0 z-50 bg-white shadow-md h-[100px] p-4 rounded-lg w-full">
        <nav className="flex justify-between items-center h-full">
          <div className="text-xl font-bold">Software Company</div>
          <div className="flex space-x-4">
            <div className="relative group">
              <a href="#services" className="hover:text-blue-500">Services</a>
              <div className="absolute left-0 hidden group-hover:block bg-white shadow-md w-full">
                <a href="#service1" className="block px-4 py-2 hover:bg-gray-200">Service 1</a>
                <a href="#service2" className="block px-4 py-2 hover:bg-gray-200">Service 2</a>
              </div>
            </div>
            <div className="relative group">
              <a href="#industries" className="hover:text-blue-500">Industries</a>
              <div className="absolute left-0 hidden group-hover:block bg-white shadow-md w-full">
                <a href="#industry1" className="block px-4 py-2 hover:bg-gray-200">Industry 1</a>
                <a href="#industry2" className="block px-4 py-2 hover:bg-gray-200">Industry 2</a>
              </div>
            </div>
            <a href="#blog" className="hover:text-blue-500">Blog</a>
            <a href="#contact" className="bg-blue-500 text-white px-4 py-2 rounded">Contact Us</a>
          </div>
        </nav>
      </header>

      <main className="flex flex-col gap-8 items-center justify-center">
        <section
          id="hero"
          className="w-full h-[100vh] flex items-center justify-center bg-gray-200"
          data-scroll
          data-scroll-speed="1"
        >
          <h1 className="text-5xl font-bold">Welcome to Our Software Company</h1>
        </section>

        <section
          id="services"
          className="w-full h-[100vh] flex items-center justify-center bg-gray-300"
          data-scroll
          data-scroll-speed="2"
        >
          <h2 className="text-4xl">Our Services</h2>
          <p className="mt-4">We offer a range of software solutions tailored to your needs.</p>
        </section>

        <section
          id="industries"
          className="w-full h-[100vh] flex items-center justify-center bg-gray-400"
          data-scroll
          data-scroll-speed="1"
        >
          <h2 className="text-4xl">Industries We Serve</h2>
          <p className="mt-4">From healthcare to finance, we cater to various industries.</p>
        </section>

        <section
          id="blog"
          className="w-full h-[100vh] flex items-center justify-center bg-gray-500"
          data-scroll
          data-scroll-speed="2"
        >
          <h2 className="text-4xl">Latest Blog Posts</h2>
          <p className="mt-4">Stay updated with our latest insights and articles.</p>
        </section>
      </main>

      <footer className="flex gap-6 flex-wrap items-center justify-center p-4 bg-gray-800 text-white">
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Terms of Service</a>
        <a href="#" className="hover:underline">Contact</a>
      </footer>
    </div>
  );
}
