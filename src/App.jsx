import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Upload from "./components/Upload";
import Result from "./components/Result";
import { useState } from "react";

const Home = () => {
  const [result, setResult] = useState(null);

  return (
    <>
      <Navbar />
      <Hero />
      <Upload setResult={setResult} />
      <Result result={result} />
    </>
  );
};

export default Home;
