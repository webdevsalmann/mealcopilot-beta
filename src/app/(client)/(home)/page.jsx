import Waitlist from "@/components/layouts/section/waitlist";
import About from "./about";
import Data from "./data";
import Features from "./features";
import Hero from "./hero";
import Services from "./services";
import Technology from "./technology";
import Working from "./working";

export default function page() {
  return (
    <main>
      <Hero />
      <Features />
      <Technology />
      <Data />
      <About />
      <Working />
      <Services />
      <Waitlist />
    </main>
  )
}
