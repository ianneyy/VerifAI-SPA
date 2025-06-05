import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Hero1 } from "@/components/ui/animated-hero";
import { Home, User, Briefcase, FileText } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

const navItems = [
  { name: "Home", url: "#", icon: Home },
  { name: "About", url: "#", icon: User },
  { name: "Projects", url: "#", icon: Briefcase },
  { name: "Resume", url: "#", icon: FileText },
];

const Hero = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(

  
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative z-0 flex min-h-[80vh] w-full items-center justify-center overflow-hidden rounded-md bg-slate-950",
          className
        )}
        {...props}
      >
        <div className="absolute top-0 isolate z-0 flex w-screen flex-1 items-start justify-center">
          {/* Optional top blur */}
          <div className="absolute top-0 z-50 h-48 w-screen bg-transparent opacity-10 backdrop-blur-md" />

          {/* Main glow */}
          <div className="absolute inset-auto z-50 h-42 w-[28rem] -translate-y-[-30%] rounded-full bg-cyan-500/60 opacity-80 blur-[120px]" />

          {/* Lamp effect */}
          <motion.div
            initial={{ width: "16rem" }}
            whileInView={{ width: "30rem" }}
            transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
            className="absolute top-0 z-30 h-64 -translate-y-[20%] rounded-full bg-cyan-400 blur-3xl"
          />

          {/* Top line */}
          <motion.div
            initial={{ width: "15rem" }}
            whileInView={{ width: "42rem" }}
            transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
            className="absolute inset-auto z-50 h-0.5 -translate-y-[-10%] bg-cyan-400"
          />

          {/* Left gradient cone */}
          <motion.div
            initial={{ opacity: 0.5, width: "24rem" }}
            whileInView={{ opacity: 1, width: "30rem" }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            style={{
              backgroundImage: `radial-gradient(ellipse at top, rgba(34,211,238,0.4), transparent 70%)`,
            }}
            className="absolute inset-auto right-1/2 h-56 w-[60rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
          >
            <div className="absolute w-full left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
            <div className="absolute w-40 h-full left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
          </motion.div>

          {/* Right gradient cone */}
          <motion.div
            initial={{ opacity: 0.5, width: "24rem" }}
            whileInView={{ opacity: 1, width: "30rem" }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            style={{
              backgroundImage: `radial-gradient(ellipse at top, rgba(34,211,238,0.4), transparent 70%)`,
            }}
            className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 [--conic-position:from_290deg_at_center_top]"
          >
            <div className="absolute w-40 h-full right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
            <div className="absolute w-full right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          </motion.div>

          {/* 🟡 Text Inside Lamp */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            className="z-50 text-center text-white text-lg"
          >
            <div>
              <NavBar items={navItems} />
              <Hero1 />
            </div>
          </motion.div>
        </div>
      </section>
    );
  }
);
Hero.displayName = "Hero";

export { Hero };
