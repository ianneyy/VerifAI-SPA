// import { Hero } from "@/components/ui/animated-hero";
import { Hero } from "@/components/hero";
import { NavMenu } from "@/components/Navbar"
function Home() {
  return (
    <div className="block">
      <NavMenu />
      <section id="home">
        <Hero />
      </section>
    </div>
  );
}

export { Home };
