"use client"
import { NavBar } from "./components/navbar/page";
import { Footer } from "./components/footer/page";
import { Banner } from "./components/banner/page";

export default function Home() {
  return (
      <div className="App">
      <NavBar />
      <Banner />
      <Footer />

    </div>
  );
}
