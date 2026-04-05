"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-black/70 backdrop-blur z-50 px-6 md:px-16 py-4 flex justify-between">
        <h1 className="font-bold">Chandu</h1>
        <div className="space-x-4 text-sm">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-16">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm Chandu 👋
          </h1>
          <p className="mt-4 text-gray-400 text-lg">
            Java Developer | Frontend Enthusiast
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
          <Image
            src="/profile.png"
            alt="Profile"
            width={200}
            height={200}
            className="rounded-full border border-gray-700"
          />
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 md:px-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">About</h2>
        <p className="text-gray-400">
          I am a Computer Science student passionate about building web applications
          and solving real-world problems using Java and modern technologies.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 px-6 md:px-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {["Java","Python","JavaScript","SQL","HTML","CSS","React","Git"].map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-900 p-4 rounded-lg text-center hover:scale-105 transition"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6 md:px-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          <motion.div whileHover={{ scale: 1.03 }} className="bg-gray-900 p-6 rounded-lg">
            <Image src="/project1.png" alt="Project" width={500} height={300} className="rounded mb-4"/>
            <h3 className="text-xl font-bold">Project One</h3>
            <p className="text-gray-400 mt-2">
              Dummy project description. Replace later.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="bg-gray-900 p-6 rounded-lg">
            <Image src="/project2.png" alt="Project" width={500} height={300} className="rounded mb-4"/>
            <h3 className="text-xl font-bold">Project Two</h3>
            <p className="text-gray-400 mt-2">
              Dummy project description. Replace later.
            </p>
          </motion.div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>

        <div className="text-gray-400 space-y-2">
          <p>Email: example@gmail.com</p>
          <p>GitHub: github.com/username</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500">
        © 2026 Chandu Pulluru
      </footer>

    </main>
  );
}
