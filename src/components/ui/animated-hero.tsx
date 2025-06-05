import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Download, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ShinyText from "@/components/blocks/TextAnimations/ShinyText/ShinyText";
// import GlareHover from "@/components/blocks/Animations/GlareHover/GlareHover";
import StarBorder from "@/components/blocks/Animations/StarBorder/StarBorder";

function Hero1() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => [
      "accurately",
      "intelligently ",
      "instantly",
      "effortlessly",
      "ethically",
    ],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <Button
              variant="outline"
              size="sm"
              className="gap-4 text-white cursor-pointer rounded-full bg-cyan-950 border-cyan-950 hover:bg-cyan-800 hover:border-cyan-800"
            >
              Learn how VerifAI works <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50">Verify news</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
              &nbsp;using VerifAI.
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              VeriFAI is powered by machine learning to help you spot fake news,
              check the credibility of sources, and stay informed with
              confidence.
            </p>
          </div>
          <div className="flex flex-row gap-3 overflow-auto z-50">
            <StarBorder
              as="button"
              color="white"
              speed="5s"
              className="custom-class group relative z-10 bg-slate-950 text-zinc-200 overflow-hidden text-xl duration-1000 cursor-pointer"
            >
              <div className="flex gap-4 text-center items-center">
                <ShinyText
                  text="Download VerifAI"
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
                <Download className="w-4 h-4 text-white/80" />
              </div>
            </StarBorder>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero1 };
