// import { Hero } from "@/components/ui/animated-hero";
import { Hero } from "@/components/hero";
import  { About }  from "@/components/About";
import { How } from "@/components/How";
import { Home, Info, Workflow } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
// import { NavMenu } from "@/components/Navbar"


const navItems = [
  { name: "Home", url: "#", icon: Home },
  { name: "About", url: "#about", icon: Info },
  { name: "How It Works", url: "#how", icon: Workflow },
];
function HomePage() {
  return (
    <div className="block">

       <div className="fixed bottom-0 lg:top-0 lg:bottom-auto left-0 z-[9999] w-full flex justify-center items-center py-6">
          <NavBar items={navItems} />
        </div>
      {/* <NavMenu /> */}
      <section id="home" className="h-screen">
        <Hero />
      </section>
      <section id="about" className="">
        <About />
      </section>
      <section id="how" className="h-screen">
        <How />
      </section>

    </div>
  );
}

export { HomePage };
