import Image from "next/image";

import Projects from "./components/Projects";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Head from "next/head";

import Education from "./components/education";
import Intro from "./components/intro";
import Skills from "./components/skills";

export default function Home() {
  return (
    <>
    
    <Head>
        <title>Nithish S | React Developer Portfolio</title>
        <meta name="description" content="React.js & Next.js Developer portfolio with strong frontend skills and real-world projects." />
        <meta name="keywords" content="React, Next.js, Frontend Developer, Portfolio, Tailwind CSS, Nithish S" />
        <meta name="author" content="Nithish S" />
      </Head>
      <Intro />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      </>
  );
}
