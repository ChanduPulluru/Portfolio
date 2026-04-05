"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <main className="bg-black text-white scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed w-full flex justify-between px-6 md:px-16 py-4 bg-black/70 backdrop-blur z-50">
        <h1 className="font-bold text-lg">Chandu</h1>
        <div className="space-x-6 hidden md:block">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 gap-12">

        {/* LEFT */}
        <div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm <span className="text-blue-500">Chandu</span>
          </h1>

          <h2 className="text-2xl mt-4 text-blue-400">
            <Typewriter
              words={[
                "Java Developer",
                "Frontend Developer",
                "Problem Solver"
              ]}
              loop
              cursor
            />
          </h2>

          <p className="mt-6 text-gray-400 max-w-lg">
            I build modern web applications and solve real-world problems using Java and frontend technologies.
          </p>

          <div className="mt-8 flex gap-4">
            <a href="/resume.pdf" download>
              <button className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
                Download CV
              </button>
            </a>

            <a href="#projects">
              <button className="px-6 py-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition">
                View Work
              </button>
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Image
            src="/profile.png"
            alt="Profile"
            width={300}
            height={300}
            className="rounded-full border border-gray-700"
          />
        </motion.div>

      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 md:px-16 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-gray-400">
          I am a passionate Computer Science student focused on building scalable applications and solving problems efficiently.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 md:px-16 text-center">
        <h2 className="text-4xl font-bold mb-12">Services</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-gray-900 p-8 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-bold">Web Development</h3>
            <p className="text-gray-400 mt-3">
              Building responsive and modern websites.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-bold">Machine Learning</h3>
            <p className="text-gray-400 mt-3">
              Creating intelligent systems with data.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-bold">UI Design</h3>
            <p className="text-gray-400 mt-3">
              Designing clean and user-friendly interfaces.
            </p>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6 md:px-16">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
            <Image src="/project1.png" alt="Project" width={500} height={300} className="rounded mb-4"/>
            <h3 className="text-xl font-bold">Fraud Detection</h3>
            <p className="text-gray-400 mt-2">
              ML model detecting fraud with high accuracy.
            </p>
            <button className="mt-4 text-blue-500">Read More →</button>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
            <Image src="/project2.png" alt="Project" width={500} height={300} className="rounded mb-4"/>
            <h3 className="text-xl font-bold">AgriDirect</h3>
            <p className="text-gray-400 mt-2">
              E-commerce platform for farmers.
            </p>
            <button className="mt-4 text-blue-500">Read More →</button>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
        <p className="text-gray-400">example@gmail.com</p>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500">
        © 2026 Chandu Pulluru
      </footer>

    </main>
  );
}
