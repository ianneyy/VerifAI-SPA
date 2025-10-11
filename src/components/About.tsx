import { MagicCard } from "@/components/ui/magic-card";

function About() {
  return (
    <section className="">
      <div className="mx-auto ">
        <div className="flex justify-center">
          <div className="">
            <div className="dark:bg-gray-900 py-10 sm:py-16 lg:py-20 px-8  md:px-12 lg:px-26">
              <h2 className="text-2xl md:text-4xl mb-4 lg:mb-12 text-black dark:text-white">
                About VeriFAI
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify ">
                VeriFAI is an AI-powered fact-checking system designed to help
                users identify fake news on social media. By analyzing text,
                images, and sources in real time, VeriFAI provides accurate
                credibility insights to promote responsible information sharing
                online.
              </p>
            </div>
            <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-10 sm:py-16 lg:py-20 relative">
              <div
                className={
                  "flex min-h-[400px] sm:min-h-[500px] lg:min-h-[300px] w-full flex-col gap-4 lg:flex-row"
                }
              >
                <MagicCard
                  className="cursor-pointer flex-col items-center justify-center shadow-2xl text-4xl"
                  gradientColor={"#00C2E3"}
                >
                  <div className="h-50 px-4 lg:px-0 lg:max-w-lg space-y-5 flex flex-col justify-center">
                    <h3 className="text-xl lg:text-4xl">Our Mission</h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-xs lg:text-sm">
                      Our mission is to fight misinformation and empower people
                      to think critically about what they read and share online.
                      VeriFAI aims to make fact-checking accessible to everyone,
                      especially for users who may not have the time or ability
                      to verify sources manually.
                    </p>
                  </div>
                </MagicCard>
                <MagicCard
                  className="cursor-pointer flex-col items-center justify-center shadow-2xl text-4xl"
                  gradientColor={"#00C2E3"}
                >
                  <div className="h-50 px-4 lg:px-0 lg:max-w-lg space-y-5 flex flex-col justify-center">
                    <h3 className="text-xl lg:text-4xl">Why VerifAI?</h3>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-xs lg:text-sm">
                        Unlike traditional fact-checking websites that require
                        users to manually submit links, VeriFAI integrates
                        directly with social media posts and screenshots.
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-xs">
                        It also features a floating AI assistant that lets users
                        check posts without leaving the app, making
                        fact-checking faster and more convenient.
                      </p>
                    </div>
                  </div>
                </MagicCard>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
}

export { About };
