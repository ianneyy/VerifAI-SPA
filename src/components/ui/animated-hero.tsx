import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Download, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ShinyText from "@/components/blocks/TextAnimations/ShinyText/ShinyText";
import GlareHover from "@/components/blocks/Animations/GlareHover/GlareHover";

function Hero1() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["accuracy", "credibility", "reliability", "trust", "precise"],
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
              className="gap-4 cursor-pointer rounded-full bg-transparent border-white"
            >
              Learn how VeriFAI works <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50">Verify news with</span>
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
              &nbsp;using VeriFAI.
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              VeriFAI is powered by machine learning to help you spot fake news,
              check the credibility of sources, and stay informed with
              confidence.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <GlareHover
              height="10"
              width="auto"
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={800}
              playOnce={false}
              className="bg-transparent"
            >
              <Button
                size="lg"
                className=" gap-4 cursor-pointer bg-slate-950"
                variant="outline"
              >
                <ShinyText
                  text="Download VerifAI"
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
                <Download className="w-4 h-4" />
              </Button>
            </GlareHover>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero1 };
