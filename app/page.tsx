"use client";

import { useState } from "react";
import Image from "next/image";
export default function TestDarkMode() {
  const [darkMode, setDarkMode] = useState(false); // Toggle dark mode

  return (
    <div className={`${darkMode ? "dark" : ""} h-screen`}>
      <button
        style={{ borderRadius: "0.375rem" }}
        className="fixed top-4 right-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
        onClick={() => setDarkMode(!darkMode)} // Toggle dark mode
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <div className="p-10 bg-white dark:bg-black text-black dark:text-white">
        <div className="h-screen overflow-y-auto">
          {/* Header Section */}
          <header className="flex flex-col items-center mt-4">
            <div className="text-7xl text-indigo-600">
            <h1 className="font-semibold" contentEditable={true}>M.Suhaib</h1>
            </div>
            <div
              style={{ borderRadius: "0.375rem" }}
              className="p-4 text-center m-4 rounded-md"
            >
              <p className="text-3xl" contentEditable={true}>
                Front-end Developer | Karachi, Pakistan
              </p>
            </div>
          </header>

          {/* Profile Picture Section */}
          <div className="flex justify-center items-center my-4" >
            <Image
              src="/pic.jpg"
              alt="Profile Picture"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>

          {/* About Me Section */}
          <div className="flex justify-center mb-10 mx-7">
            <section
              style={{ borderRadius: "0.375rem" }}
              className="bg-blue-400 px-10 py-5 rounded-md"
            >
              <h2 className="text-5xl text-sky-50 font-extrabold my-5">
                About Me
              </h2>
              <p className="text-center text-lg" contentEditable={true}>
              &quot;Skilled developer with expertise in JavaScript, TypeScript,
                HTML, CSS, and Node.js. Passionate about contributing to
                impactful projects and driving positive change through
                technology. Currently part of a government initiative in
                Pakistan.&quot;
              </p>
            </section>
          </div>

          {/* Contact Information Section */}
          <div className="flex justify-center mb-4 mx-7">
            <section
              style={{ borderRadius: "0.375rem" }}
              className="bg-blue-400 px-10 py-4 rounded-lg"
            >
              <h2 className="text-5xl text-sky-50 font-extrabold my-5">
                Contact Information
              </h2>
              <p className="text-center text-lg">
                Email: <a href="mailto:xyz.xzy@gmail"contentEditable={true}>xyz.xzy@gmail</a>
              </p>
              <p className="text-center text-lg"contentEditable={true}>Phone: +923390753311</p>
              <p className="text-center text-lg">
                LinkedIn:{" "}
                <a contentEditable={true}
                  href="https://www.linkedin.com/in/suhaib1/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  M.Suhaib Umair
                </a>
              </p>
            </section>
          </div>

          {/* Skills and Education Section */}
          <div className="flex justify-between m-7">
            <div className="w-full mr-9">
              <section
                style={{ borderRadius: "0.375rem" }}
                className="bg-blue-400 px-10 py-4 rounded-lg"
              >
                <h2 className="text-5xl text-sky-50 font-extrabold my-5">
                  Skills
                </h2>
                <ul className="font-semibold" contentEditable={true}>
                  <li>NEXT.JS</li>
                  <li>TYPESCRIPT</li>
                  <li>NODE.JS</li>
                  <li>JAVASCRIPT</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>CANVA DESIGNING</li>
                </ul>
              </section>
            </div>

            <div className="w-full">
              <section
                style={{ borderRadius: "0.375rem" }}
                className="bg-blue-400 px-10 py-4 rounded-lg"
              >
                <h2 className="text-5xl text-sky-50 font-extrabold my-5">
                  Education
                </h2>
                <div contentEditable={true}>
                  <h3 className="font-semibold" >FSC Pre Engineering</h3>
                  <p>S.M Science College</p>
                  <p>2021-2023</p>
                </div>
              </section>
            </div>
          </div>

          {/* Experience Section */}
          <div className="flex justify-center mb-4 mx-7">
            <section
              style={{ borderRadius: "0.375rem" }}
              className="bg-blue-400 px-10 py-4 rounded-lg"
            >
              <h2 className="text-5xl text-sky-50 font-extrabold my-5">
                Experience
              </h2>
              <div>
                <h3 className="font-semibold" contentEditable={true} >Fresh</h3>
              </div>
            </section>
          </div>

                Find me on <a href="https://www.linkedin.com/in/suhaib1/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </footer>
            </div>
          {/* Footer Section */}
          <footer className="text-center text-lg" >
            Find me on{" "}
            <a
              href="https://www.linkedin.com/in/suhaib1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}
